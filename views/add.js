import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import addStyle from './style/addStyle'
import sqLiteExtrato from '../sqlite/sqLiteExtrato';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Add() {
    useEffect(() => {
        getUser()
    })

    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonPress = (button) => {
        setSelectedButton(button);
    };
    const retornar = () => {
        navigation.navigate('Home')
    }
    // const [id,setId] = useState("")
    const [valor, setValor] = useState("");
    const [titulo, setTitulo] = useState("");
    const [desc, setDesc] = useState("");
    const [cpf, setCpf] = useState("");
    const [modalShow, setModalShow] = useState(false)

    const carregamento = () => {
        modalVisble()
        salvar()
    }
    const modalVisble = () =>{
        setModalShow(true)
        const time = setTimeout(() => {
            setModalShow(false);
            navigation.navigate("Home")
          }, 3000);
    }

    const salvar = () =>{
        sqLiteExtrato.create({
            valor: valor,
            titulo: titulo,
            desc: desc,
            tipo: selectedButton,
            cpf: cpf,
        })
        // setId("");
        setValor("");
        setTitulo("");
        setDesc("");
        setSelectedButton("");
        console.log("salvamento feito feito!!!")
    }
    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('cpf');
            if (value !== null) {
                setCpf(value)
                // console.log(cpf)
            }
        } catch (e) {
            console.error(e)
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
                    <TextInput style={addStyle.TxInput} keyboardType='numeric' onChangeText={setValor} />
                </View>
                <View>
                    <Text style={addStyle.subt}>Titulo:</Text>
                    <TextInput style={addStyle.TxInput} onChangeText={setTitulo}/>
                </View>
                <View>
                    <Text style={addStyle.subt}>Desc:</Text>
                    <TextInput style={addStyle.TxInput} onChangeText={setDesc} />
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
                                    selectedButton === 'Receita'
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
                                    selectedButton === 'Despesa'
                                ]}
                            >
                                Despesa
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View>
                    {/* <Text style={{ color: '#fff' }}>{valor}, {titulo}, {desc}, {selectedButton}</Text> */}
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