import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from './../component/icon';
import { useNavigation } from '@react-navigation/native';
import styleHome from './style/homeStyle';

export default function HomeScreen(){
    const navigation = useNavigation(); 
    const ExtratoScreen = () =>{
        navigation.navigate('Extrato')
    }
    const profileScreen = () =>{
        navigation.navigate('Profile')
    }
    const addScreen = () =>{
        navigation.navigate('Add')
    }
    return (
        <View style={styleHome.container}>
            <View style={styleHome.user}>
                <Text style={styleHome.textWelcome}>Olá, Usuário</Text>
                <Pressable onPress={profileScreen}>
                    <Icon style={{}} name="faUser" size={30} color="#fff" />
                </Pressable>
            </View>

            <LinearGradient
                style={styleHome.gradient}
                start={{ x: 0, y: 3 }}
                end={{ x: 1.5, y: 0 }}
                locations={[0.2, 1]}
                colors={['#618FD3', '#9937C8']}>
                <View>
                    <View style={styleHome.infoB}>
                        <Text style={styleHome.conta}>Conta corrente</Text>
                        <Text style={styleHome.logo}>Pandora</Text>
                    </View>
                    <View style={styleHome.infoM}>
                        <Text style={styleHome.saldoText}>Saldo em reais</Text>
                        <Text style={styleHome.saldoMoney}>R$ 2.000,00</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styleHome.oper}>
                <Pressable style={styleHome.iconOpe} onPress={ExtratoScreen}>
                    <Icon style={{}} name="faEnvelope" size={30} color="#fff" />
                </Pressable>
                <Pressable style={styleHome.iconOpe}>
                    <Icon style={{}} name="faEnvelope" size={30} color="#fff" />
                </Pressable>
                <Pressable style={styleHome.iconOpe}>
                    <Icon style={{}} name="faEnvelope" size={30} color="#fff" />
                </Pressable>
                <Pressable style={styleHome.iconOpe}>
                    <Icon style={{}} name="faEnvelope" size={30} color="#fff" />
                </Pressable>
            </View>

            <View style={styleHome.extract}>
                <View style={styleHome.cards}>

                </View>
            </View>
            <View style={styleHome.extract}>
                <View style={styleHome.cards}>

                </View>
            </View>
            <View style={styleHome.tabBar}>
            <View style={styleHome.tabBar2}>
                <View style={styleHome.emptySpace}/>
            </View>
            </View>
            <Pressable onPress={addScreen} style={styleHome.roundButton}>
                <Text style={styleHome.roundButtonText}>+</Text>
            </Pressable>
        </View>
    );
}
