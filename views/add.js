import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import addStyle from './style/addStyle'

export default function Add() {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonPress = (button) => {
        setSelectedButton(button);
    };
    const retornar = () => {
        navigation.navigate('Home')
    }
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
                    <TextInput style={addStyle.TxInput} />
                </View>
                <View>
                    <Text style={addStyle.subt}>Titulo:</Text>
                    <TextInput style={addStyle.TxInput} />
                </View>
                <View>
                    <Text style={addStyle.subt}>Desc:</Text>
                    <TextInput style={addStyle.TxInput} />
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
                    <Pressable style={addStyle.submit}>
                        <Text style={{color:'#fff', fontSize:24,textAlign:"center",}}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}