import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import addStyle from './style/addStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sqLiteExtrato from '../sqlite/sqLiteExtrato';
import sqLiteUser from '../sqlite/sqLiteUser';

export default function Add() {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState(null);
    const [valor, setValor] = useState("");
    const [titulo, setTitulo] = useState("");
    const [desc, setDesc] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState('');
    const [cpf, setCpf] = useState('');
    const [saldo, setSaldo] = useState(0); // Inicialize saldo como número

    useEffect(() => {
        getDataAsync();
    }, []);

    useEffect(() => {
        if (id) {
            getDataUser();
        }
    }, [id]);

    const handleButtonPress = (button) => {
        setSelectedButton(button);
    };

    const retornar = () => {
        navigation.navigate('Home');
    };

    const carregamento = () => {
        if(valor && titulo && desc && selectedButton){
            updateSaldo();
            salvar();
        }
    };

    const modalVisble = () => {
        setModalShow(true);
        setTimeout(() => {
            setModalShow(false);
            navigation.navigate("Home");
        }, 3000);
    };

    const salvar = async () => {
        await sqLiteExtrato.create({
            valor: parseFloat(valor),
            titulo: titulo,
            desc: desc,
            tipo: selectedButton,
            idUser: id,
        })
        .then(() => {
            console.log("extrato salvo com sucesso")
        })
        .catch((e) => {
            console.error(e)
        })
        .finally(() => {
            setValor('');
            setDesc('');
            setCpf('');
            setTitulo('');
            setSelectedButton();
            setId('');
            setSaldo('')
            modalVisble();
        })
    }

    const getDataAsync = async () => {
        try {
            const idAsync = await AsyncStorage.getItem('id-user');
            const cpfAsync = await AsyncStorage.getItem('cpf-user');
            setId(idAsync || '');
            setCpf(cpfAsync || '');
        } catch (e) {
            console.error(e);
        }
    };

    const getDataUser = async () => {
        if (id) {
            const userData = await sqLiteUser.selectById(id);
            if (userData) {
                const saldoDouble = parseFloat(userData.saldo);
                setSaldo(saldoDouble);
                console.log(`Saldo: ${userData.saldo} - ID: ${id}`);
            } else {
                console.log("Usuário não encontrado.");
            }
        }
    };

    const updateSaldo = () => {
        if(selectedButton === 'Receita'){
            const valorNumerico = parseFloat(valor); // Convertendo valor para número
            const newSaldo = saldo + valorNumerico;
            sqLiteUser.updateSaldo({
                saldo: newSaldo,
                id: id
            })
                .then(() => {
                    console.log('Update de saldo feito - New Saldo ' + newSaldo);
                })
                .catch((e) => {
                    console.error(e);
                })
                .finally(() => {
                    setSaldo(0); // Reseta saldo
                });
        }else{
            const valorNumerico = parseFloat(valor); // Convertendo valor para número
            const newSaldo = saldo - valorNumerico;
            sqLiteUser.updateSaldo({
                saldo: newSaldo,
                id: id
            })
                .then(() => {
                    console.log('Update de saldo feito - New Saldo ' + newSaldo);
                })
                .catch((e) => {
                    console.error(e);
                })
                .finally(() => {
                    setSaldo(0); // Reseta saldo
                });
        } 
       
    };

    return (
        <View style={addStyle.container}>
            <View style={addStyle.top}>
                <Pressable style={addStyle.voltar} onPress={retornar}>
                    <Text style={addStyle.arrow}>←</Text>
                    <Text style={addStyle.titleScreen}>  Perfil</Text>
                </Pressable>
            </View>
            <View style={addStyle.contFunction}>
                <View>
                    <Text style={addStyle.subt}>Valor:</Text>
                    <TextInput
                        style={addStyle.TxInput}
                        keyboardType='numeric'
                        onChangeText={text => setValor(text)}
                        value={valor}
                    />
                </View>
                <View>
                    <Text style={addStyle.subt}>Titulo:</Text>
                    <TextInput
                        style={addStyle.TxInput}
                        onChangeText={setTitulo}
                        value={titulo}
                    />
                </View>
                <View>
                    <Text style={addStyle.subt}>Desc:</Text>
                    <TextInput
                        style={addStyle.TxInput}
                        onChangeText={setDesc}
                        value={desc}
                    />
                </View>
                <View>
                    <Text style={addStyle.subt}>Tipo</Text>
                    <View style={addStyle.contBtn}>
                        <Pressable
                            style={[
                                addStyle.button,
                                addStyle.buttonReceita,
                                selectedButton === 'Receita' && addStyle.buttonActiveReceita
                            ]}
                            onPress={() => handleButtonPress('Receita')}
                        >
                            <Text
                                style={[
                                    addStyle.buttonText,
                                    addStyle.buttonTextReceita,
                                    selectedButton === 'Receita' && addStyle.buttonTextActiveReceita
                                ]}
                            >
                                Receita
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[
                                addStyle.button,
                                addStyle.buttonDespesa,
                                selectedButton === 'Despesa' && addStyle.buttonActiveDespesa
                            ]}
                            onPress={() => handleButtonPress('Despesa')}
                        >
                            <Text
                                style={[
                                    addStyle.buttonText,
                                    addStyle.buttonTextDespesa,
                                    selectedButton === 'Despesa' && addStyle.buttonTextActiveDespesa
                                ]}
                            >
                                Despesa
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Pressable style={addStyle.submit} onPress={carregamento}>
                        <Text style={{ color: '#fff', fontSize: 24, textAlign: "center", }}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
            <Modal visible={modalShow} >
                <View style={addStyle.modalShow} >
                    <View style={addStyle.carregamentoModal}>
                        <ActivityIndicator size="large" color="#6D37E0" />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
