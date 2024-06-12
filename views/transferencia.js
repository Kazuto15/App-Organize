import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sqLiteUser from '../sqlite/sqLiteUser';
import styles from './style/transferenciaStyle';
import { Modal, TextInput } from 'react-native-paper';
import { Pressable } from 'react-native';
import sqLiteExtrato from '../sqlite/sqLiteExtrato';

export default function TransferirScreen() {
    const navigation = useNavigation();

    const [id, setId] = useState('');
    const [chavePix, setChavePix] = useState('');

    // user 
    const [saldo, setSaldo] = useState('');
    const [senhaSql, setSenhaSql] = useState('');
    const [senha, setSenha] = useState('');


    // user destinatario
    const [idDest, setIdDest] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [saldoDest, setSaldoDest] = useState('');

    // const de valor variavel - apresentação
    const [valor, setValor] = useState('');

    // modais
    const [modalSelect, setModalSelect] = useState(true)
    const [modalValor, setModalValor] = useState(false);
    const [modalSenha, setModalSenha] = useState(false);
    const [modalComprovante, setModalComprovante] = useState(false);
    const [modalConcluido, setModalConcluido] = useState(false);



    useEffect(() => {
        getDataAsync();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            if (id) {
                getDataUser();
            }
        }, [id])
    );

    const retornar = () => {
        navigation.navigate('Home');
    };

    const getDataAsync = async () => {
        try {
            const idAsync = await AsyncStorage.getItem('id-user');
            setId(idAsync || ''); // ensures it won't be undefined
        } catch (e) {
            console.error(e);
        }
    };

    const getDataUser = async () => {
        try {
            const userData = await sqLiteUser.selectById(id);
            if (userData) {
                const saldoDouble = parseFloat(userData.saldo);
                setSaldo(saldoDouble);
                setSenhaSql(userData.senha);
            } else {
                console.log('Usuário não encontrado.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const buscar = async () => {
        try {
            const userKey = await sqLiteUser.selectByKey(chavePix);
            console.log(userKey);
            setIdDest(userKey.id);
            setNome(userKey.nome);
            setEmail(userKey.email);
            setCpf(userKey.cpf);
            setTelefone(userKey.telefone);
            const saldoDoubleDest = parseFloat(userKey.saldo);
            setSaldoDest(saldoDoubleDest);
        } catch (error) {
            console.error(error);
        }
    };

    const verifyCredentials = () => {
        if (senha == senhaSql && valor) {
            enviar();
        }
    }

    const enviar = async () => {
        updateSaldoUser();
        updateSaldoDest();
        extratoUser();
        extratoDest();
    }

    const updateSaldoUser = () => {
        const valorNumerico = parseFloat(valor); // Convertendo valor para número
        const newSaldo = saldo - valorNumerico;
        sqLiteUser.updateSaldo({
            saldo: newSaldo,
            id: id
        })
            .then(() => {
                console.log('Update de saldo feito - New Saldo User ' + newSaldo);
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setSaldo(0); // Reseta saldo
            });
    }

    const updateSaldoDest = () => {
        const valorNumerico = parseFloat(valor); // Convertendo valor para número
        const newSaldo = saldoDest + valorNumerico;
        sqLiteUser.updateSaldo({
            saldo: newSaldo,
            id: idDest
        })
            .then(() => {
                console.log('Update de saldo feito - New Saldo Dest ' + newSaldo);
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setSaldo(0); // Reseta saldo
            });
    }

    const extratoUser = async () => {
        await sqLiteExtrato.create({
            valor: parseFloat(valor),
            titulo: 'Transferencia',
            desc: 'transferencia para ' + nome,
            tipo: 'Despesa',
            idUser: id,
        })
            .then(() => {
                console.log("extrato salvo com sucesso")
            })
            .catch((e) => {
                console.error(e)
            })
    }

    const extratoDest = async () => {
        try {
            console.log("Creating extratoDest... ID Dest: ", idDest);
            await sqLiteExtrato.create({
                valor: parseFloat(valor),
                titulo: 'Transferencia',
                desc: 'Recebimento de um pix',
                tipo: 'Receita',
                idUser: idDest.toString(), // Garantindo que idDest é uma string
            });
            console.log("Extrato do destinatário salvo com sucesso");
        } catch (e) {
            console.error(e);
        }
    };




    return (
        // <View style={styles.container}>
        //     <TextInput
        //         placeholder='Chave Pix'
        //         onChangeText={text => setChavePix(text)}
        //     />
        //     <Pressable onPress={buscar}>
        //         <Text>Buscar</Text>
        //     </Pressable>
        //     <TextInput
        //         placeholder='Valor'
        //         onChangeText={text => setValor(text)}
        //         keyboardType='numeric'
        //     />
        //     <TextInput
        //         placeholder='senha'
        //         onChangeText={text => setSenha(text)}
        //         keyboardType='numeric'
        //     />
        //     <Pressable onPress={verifyCredentials}>
        //         <Text>Enviar</Text>
        //     </Pressable>
        // </View>
        <View style={styles.container}>
            <Modal visible={modalSelect}
                transparent={true}
                animationType='none'
                style={styles.modal}>
                <View style={styles.top}>
                    <Pressable style={styles.voltar} onPress={retornar}>
                        <Text style={styles.arrow}>←</Text>
                        <Text style={styles.titleScreen}> Transfir</Text>
                    </Pressable>
                </View>
                <View style={styles.containerModal}>
                    <View style={styles.titlesModal}>
                        <View style={styles.titleNone}>
                            <Text style={styles.titleTxt}>Contatos</Text>
                        </View>
                        <View style={styles.titleActive}>
                            <Text style={styles.titleTxt}>Nova Transferencia</Text>
                        </View>
                        <View style={styles.titleNone}>
                            <Text style={styles.titleTxt}>Limite</Text>
                        </View>
                        <View style={styles.titleNone}>
                            <Text style={styles.titleTxt}>Transferencia Agendada</Text>
                        </View>
                    </View>
                    <View style={styles.areaPix}>
                        <View style={styles.cardPix}>
                            <View style={styles.areaInputBusca}>
                                <TextInput
                                    placeholder='Digite a Chave Pix'
                                    onChangeText={text => setChavePix(text)}
                                    style={styles.inputBusca}
                                    placeholderTextColor={"#fff"}

                                />
                                <Text style={styles.labelModal}>Digite uma chave cpf, Email, Telefone ou chave aleatoria para realizar o pix</Text>
                            </View>
                            <View style={styles.areaButton}>
                                <Pressable onPress={buscar} style={styles.btnConfirmar}>
                                    <Text style={styles.btnTxt}>Confirmar</Text>
                                </Pressable>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
            <Modal visible={modalValor}
                transparent={false}
                animationType='none'
                style={styles.modal}>
                <View style={styles.top}>
                    <Pressable style={styles.voltar} onPress={retornar}>
                        <Text style={styles.arrow}>←</Text>
                        <Text style={styles.titleScreen}> Transfir</Text>
                    </Pressable>
                </View>
                <View style={styles.containerModal}>

                </View>
            </Modal>
        </View>
    );
}
