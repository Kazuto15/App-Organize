import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style/profileStyle';
import Icon from './../component/icon';

export default function ProfileScreen() {
    const navigation = useNavigation();
    const retornar = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/fundos/profile.png')} style={styles.backgroundImage} >
                <View style={styles.top}>
                    <Image source={require('../assets/fundos/profile-top.png')}style={styles.topImage} />
                    <Pressable style={styles.voltar} onPress={retornar}>
                        <Text style={styles.arrow}>←</Text>
                        <Text style={styles.titleScreen}>  Perfil</Text>
                    </Pressable>
                </View>
                <ScrollView>
                    <View style={styles.img}>
                        <View style={styles.cardImg}>
                        </View>
                    </View>
                    <View style={styles.infos}>
                        <Text>a </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};
