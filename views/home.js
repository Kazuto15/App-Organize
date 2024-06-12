import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from './../component/icon';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styleHome from './style/homeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sqLiteUser from '../sqlite/sqLiteUser';

export default function HomeScreen() {
    const [id, setId] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        getDataAsync();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            if (id && cpf) {
                getDataUser();
            }
        }, [id, cpf])
    );

    const ExtratoScreen = () => {
        navigation.navigate('Extrato');
    };

    const TransferirScreen = () => {
        navigation.navigate('Transferencia');
    };

    const profileScreen = () => {
        navigation.navigate('Profile');
    };

    const addScreen = () => {
        navigation.navigate('Add');
    };

    const getDataAsync = async () => {
        try {
            const idAsync = await AsyncStorage.getItem('id-user');
            const cpfAsync = await AsyncStorage.getItem('cpf-user');
            setId(idAsync || ''); // assegura que não será undefined
            setCpf(cpfAsync || ''); // assegura que não será undefined
        } catch (e) {
            console.error(e);
        }
    };

    const getDataUser = async () => {
        const userData = await sqLiteUser.selectById(id);
        if (userData) {
            setNome(userData.nome);
            setSaldo(userData.saldo);
        } else {
            console.log("Usuário não encontrado.");
        }
    };
    const formatCurrency = (value) => {
        if (value !== null && !isNaN(value)) {
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
        return 'R$ 0,00';
    };
    
    return (
        <View style={styleHome.container}>
            <View style={styleHome.user}>
                <Text style={styleHome.textWelcome}>Olá, {nome}</Text>
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
                        <Text style={styleHome.saldoMoney}>{formatCurrency(saldo)}</Text>

                    </View>
                </View>
            </LinearGradient>

            <View style={styleHome.oper}>
                <Pressable style={styleHome.iconOpe} onPress={ExtratoScreen}>
                    <Icon style={{}} name="faEnvelope" size={30} color="#fff" />
                </Pressable>
                <Pressable style={styleHome.iconOpe} onPress={TransferirScreen}>
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
