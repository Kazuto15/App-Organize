import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RadioButton } from 'react-native-paper';
import styles from './style/accessStyle';
import sqLiteUser from '../sqlite/sqLiteUser';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Access() {
    const navigation = useNavigation();

    const [modalSingIn, setModalSingIn] = useState(false);
    const [modalSingIn2, setModalSingIn2] = useState(false);
    const [modalSingUp, setModalSingUp] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tell, setTell] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [saldo, setSaldo] = useState(1);
    const [lembrarCpf, setLembrarCpf] = useState(false);

    useEffect(() => {
        getDataAsync();
    }, []);

    const singIn = () => {
        setModalSingIn(true);
    };

    const singUp = () => {
        setModalSingUp(true);
    };

    const logar = () => {
        setModalShow(true); // Mostrando indicador de carregamento
        checkCredentials();
    };

    const checkCredentials = () => {
        sqLiteUser.verifyCredentials(cpf, senha)
          .then((user) => {
            if (user) {
              if (lembrarCpf) {
                storeID(user.id);
                storeCpf(user.cpf);
              } else {
                storeID(user.cpf);
                storeCpf(user.cpf);

              }
              console.log(user);
              getDataAsync();
              setCpf("");
              setSenha("");
              navigation.navigate('Home');
            } else {
              throw new Error('Usuário não encontrado ou credenciais inválidas');
            }
          })
          .catch((error) => {
            console.log('Login Failed', error);
            setSenha("");
            // Mostrar mensagem de erro ao usuário
          })
          .finally(() => {
            setModalShow(false);
          });
      };
      

    const storeID = async (id) => {
        try {
            const userID = id.toString(); // Convertendo para string
            await AsyncStorage.setItem('id-user', userID);
        } catch (e) {
            console.error(e + " id ");
        }
    };

    const storeCpf = async (cpf) => {
        try {
            await AsyncStorage.setItem('cpf-user', cpf.toString());
        } catch (e) {
            console.error(e + " id ");
        }
    };

    const getDataAsync = async () => {
        try {
            const idAsync = await AsyncStorage.getItem('id-user');
            const cpfAsync = await AsyncStorage.getItem('cpf-user');
            if (cpfAsync !== null && idAsync !== null) {
                console.log(idAsync + " end " + cpfAsync);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const cad = () => {
        sqLiteUser.create({
            nome: nome,
            cpf: cpf,
            email: email,
            numero: tell,
            senha: senha,
            saldo: saldo,
        })
            .then(() => {
                console.log("cadastro feito com sucesso");
                setModalSingUp(false);
            })
            .catch((e) => {
                console.error(e + " cad");
            })
            .finally(() => {
                setCpf('');
                setNome('');
                setSenha('');
                setTell('');
                setEmail('');
            });
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                start={{ x: 0, y: 3 }}
                end={{ x: 2.5, y: 0 }}
                locations={[0.5, 1]}
                colors={['#618FD3', '#9937C8']}
            />
            <View style={styles.viewTop}></View>
            <View style={styles.ViewButton}>
                <Pressable style={styles.singIn} onPress={singIn}>
                    <Text style={styles.singButtonColor}>Sign-in</Text>
                </Pressable>
                <Pressable style={styles.singUp} onPress={singUp}>
                    <Text style={styles.singButtonColor}>Sign-up</Text>
                </Pressable>
            </View>

            {/* Modal Sing In - Parte 1 */}
            <Modal visible={modalSingIn} transparent={true} animationType="slide">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.modalContainer}
                >
                    <View style={styles.areaCpf}>
                        <View style={styles.areaLabelModal}>
                            <View>
                                {/* <FontAwesomeIcon icon="fa-solid fa-id-card" style={{ color: "#B197FC" }} /> */}
                                <Text style={styles.label}>Digite seu CPF</Text>
                            </View>
                            <Pressable onPress={() => setModalSingIn(false)}>
                                <Text style={styles.singButtonColor}> X </Text>
                            </Pressable>
                        </View>
                        <View style={styles.areaInputModal}>
                            <TextInputMask
                                type={'cpf'}
                                style={styles.modalInput}
                                placeholderTextColor={"#fff"}
                                keyboardType='numeric'
                                placeholder='000.000.000-00'
                                onChangeText={setCpf}
                                value={cpf}
                            />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#fff' }}>Lembrar CPF </Text>
                                <RadioButton
                                    status={lembrarCpf ? 'checked' : 'unchecked'}
                                    onPress={() => setLembrarCpf(!lembrarCpf)}
                                />
                            </View>
                        </View>
                        <View style={styles.avancarModal}>
                            <Pressable style={styles.avancarModalBtn} onPress={() => { setModalSingIn2(true); setModalSingIn(false); }}>
                                <Text style={styles.singButtonColor}>Avançar</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>

            {/* Modal Sing In - Parte 2 */}
            <Modal visible={modalSingIn2} transparent={true} animationType="slide">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.modalContainer}
                >
                    <View style={styles.areaCpf}>
                        <View style={styles.areaLabelModal}>
                            <View>
                                {/* <FontAwesomeIcon icon="fa-solid fa-id-card" style={{ color: "#B197FC" }} /> */}
                                <Text style={styles.label}>Digite sua Senha</Text>
                            </View>
                            <Pressable onPress={() => setModalSingIn2(false)}>
                                <Text style={styles.singButtonColor}> X </Text>
                            </Pressable>
                        </View>
                        <View style={styles.areaInputModal}>
                            <TextInput
                                style={styles.modalInput}
                                placeholderTextColor={"#fff"}
                                placeholder='*****'
                                secureTextEntry={true}
                                keyboardType='numeric'
                                onChangeText={setSenha}
                                value={senha}
                            />
                        </View>
                        <View style={styles.avancarModal}>
                            <Pressable style={styles.avancarModalBtn} onPress={logar}>
                                <Text style={styles.singButtonColor}>Avançar</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>

            {/* Modal Sing Up */}
            <Modal visible={modalSingUp} transparent={true} animationType="slide">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.modalContainer}
                >
                    <View style={styles.cadastroArea}>
                        <View style={styles.areaLabelModal}>
                            <View>
                                {/* <FontAwesomeIcon icon="fa-solid fa-id-card" style={{ color: "#B197FC" }} /> */}
                                <Text style={styles.label}>Realize seu Cadastro</Text>
                            </View>
                            <Pressable onPress={() => setModalSingUp(false)}>
                                <Text style={styles.singButtonColor}> X </Text>
                            </Pressable>
                        </View>
                        <View style={styles.cadInputs}>
                            <Text style={styles.labelInputCad}>Digite seu Nome</Text>
                            <TextInput
                                onChangeText={setNome}
                                placeholderTextColor={"#fff"}
                                placeholder='John Wick'
                                style={styles.inputCadastro}
                                value={nome}
                            />
                        </View>
                        <View style={styles.cadInputs}>
                            <Text style={styles.labelInputCad}>Digite seu CPF</Text>
                            <TextInputMask
                                type={'cpf'}
                                onChangeText={setCpf}
                                placeholderTextColor={"#fff"}
                                placeholder='000.000.000-00'
                                keyboardType='numeric'
                                style={styles.inputCadastro}
                                value={cpf}
                            />
                        </View>
                        <View style={styles.cadInputs}>
                            <Text style={styles.labelInputCad}>Digite seu E-mail</Text>
                            <TextInput
                                onChangeText={setEmail}
                                placeholderTextColor={"#fff"}
                                placeholder='wickjonathan@gmail.com'
                                style={styles.inputCadastro}
                                value={email}
                            />
                        </View>
                        <View style={styles.cadInputs}>
                            <Text style={styles.labelInputCad}>Digite seu Numero</Text>
                            <TextInputMask
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                value={tell}
                                onChangeText={setTell}
                                style={styles.inputCadastro}
                                placeholder='(11) 94002-8922'
                                placeholderTextColor={"#fff"}
                                keyboardType='numeric'
                            />
                        </View>
                        <View style={styles.cadInputs}>
                            <Text style={styles.labelInputCad}>Digite uma Senha</Text>
                            <TextInput
                                onChangeText={setSenha}
                                placeholderTextColor={"#fff"}
                                placeholder='*****'
                                secureTextEntry={true}
                                keyboardType='numeric'
                                style={styles.inputCadastro}
                                value={senha}
                            />
                        </View>
                        <View style={styles.avancarModal}>
                            <Pressable style={styles.avancarModalBtn} onPress={cad}>
                                <Text style={styles.singButtonColor}>Cadastrar</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>

            {/* Modal de Carregamento */}
            <Modal visible={modalShow}>
                <View style={styles.modalShow}>
                    <View style={styles.carregamentoModal}>
                        <ActivityIndicator size="large" color="#6D37E0" />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
