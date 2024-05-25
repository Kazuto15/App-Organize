import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from './../component/icon';
import styleHome from './style/homeStyle';

export default function HomeScreen() {
    return (
        <View style={styleHome.container}>
            <View style={styleHome.user}>
                <Text style={styleHome.text}>Olá, Usuário</Text>
                <Icon style={{}} name="faUser" size={30} color="#fff" />
            </View>

            <LinearGradient
                style={styleHome.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                locations={[0.02, 1]}
                colors={['#618FD3', '#9937C8']}>
                <View>
                    <View style={styleHome.infoB}>
                        <Text style={styleHome.text}>Conta corrente</Text>
                        <Text style={styleHome.text}>Pandora</Text>
                    </View>
                    <View style={styleHome.infoM}>
                        <Text style={styleHome.text}>Saldo em reais</Text>
                        <Text style={{ fontSize: 23, color: "#fff" }}>R$ 2.000,00</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styleHome.oper}>
                <Pressable style={styleHome.iconOpe}>
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

            </View>
            <View style={styleHome.extract}>

            </View>
            <View style={styleHome.tabBar}>
            <View style={styleHome.tabBar2}>
                <View style={styleHome.emptySpace}/>
            </View>
            </View>
            <Pressable style={styleHome.roundButton}>
                <Text style={styleHome.roundButtonText}>+</Text>
            </Pressable>
        </View>
    );
}
