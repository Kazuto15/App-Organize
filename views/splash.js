import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import splashStyle from './style/splashStyle'
export default function Splash() {
    const navigation = useNavigation();
    useEffect(() => {
        checarLogin();
    }, []);
    const checarLogin = () => {
        try {
            setTimeout(() => navigation.replace('Access'), 3650)
            console.log("Funcionou");
        } catch (error) {
            console.error("Não é possivel logar");
        }
    }
    return (
        <View style={splashStyle.container}>
            <Image style={splashStyle.logo} source={require("../assets/logo/logo-anima.gif")}/>
        </View>
    )
}