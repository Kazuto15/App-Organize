import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './style/accessStyle';

export default function Access() {
    const navigation = useNavigation();
    
    const [modalSingIn, setModalSingIn] = useState(false);
    const [modalSingIn2, setModalSingIn2] = useState(false);
    const [modalSingUp, setModalSingUp] = useState(false);
    const [modalShow, setModalShow] = useState(false)
    

    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const [email, setEmail] = useState("");
    const [dataNasc, setDataNasc] = useState("");

    const [lembrarCpf, setLembrarCpf] = useState(false);

    const singIn = () => {
        setModalSingIn(true);
    };
    const singUp = () => {
        setModalSingUp(true);
    };

    const logar = () => {
        setModalShow(true)
        const time = setTimeout(() => {
            setModalShow(false);
            navigation.navigate("Home")
          }, 3000);
    }
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
            <Modal visible={modalSingIn} transparent={true} animationType="slide">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.modalContainer}
                >
                    <View style={styles.areaCpf}>
                        <View style={styles.areaLabelModal}>
                            <View>
                                <FontAwesomeIcon icon="fa-solid fa-id-card" style={{ color: "#B197FC" }} />
                                <Text style={styles.label}>Digite seu CPF</Text>
                            </View>
                            <Pressable onPress={() => setModalSingIn(false)}><Text style={styles.singButtonColor}> X </Text></Pressable>
                        </View>
                        <View style={styles.areaInputModal}>
                            <TextInput
                                style={styles.modalInput}
                                placeholderTextColor={"#fff"}
                                keyboardType='numeric'
                                placeholder='000.000.000-00'
                                onChangeText={setCpf}
                            />
                            <View>
                                <Text>Guardar CPF</Text>
                                <Pressable></Pressable>
                            </View>
                        </View>
                        <View style={styles.avancarModal}>
                            <Pressable style={styles.avancarModalBtn} onPress={() => setModalSingIn2(true) & setModalSingIn(false)}>
                                <Text style={styles.singButtonColor}>Avançar</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
            <Modal visible={modalSingIn2} transparent={true} animationType="slide">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.modalContainer}
                >
                    <View style={styles.areaCpf}>
                        <View style={styles.areaLabelModal}>
                            <View>
                                <FontAwesomeIcon icon="fa-solid fa-id-card" style={{ color: "#B197FC" }} />
                                <Text style={styles.label}>Digite sua Senha</Text>
                            </View>
                            <Pressable onPress={() => setModalSingIn2(false)}><Text style={styles.singButtonColor}> X </Text></Pressable>
                        </View>
                        <View style={styles.areaInputModal}>
                            <TextInput
                                style={styles.modalInput}
                                placeholderTextColor={"#fff"}
                                keyboardType='numeric'
                                placeholder='*****'
                                secureTextEntry={true}
                                onChangeText={setSenha}
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
            <Modal visible={modalSingUp} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text>Sign-up Modal Content</Text>
                    <Pressable onPress={() => setModalSingUp(false)}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </Modal>


            {/* modal de carregamento */}
            <Modal visible={modalShow} >
                <View style={styles.modalShow} >
                    <View style={styles.carregamentoModal}>
                    <ActivityIndicator size="large" color="#6D37E0" />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
