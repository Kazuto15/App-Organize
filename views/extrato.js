import React from "react";
import { Pressable, View, Text, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from "./style/extratoStyle";

export default function Extrato() {
    const navigation = useNavigation();
    const retornar = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Pressable style={styles.voltar} onPress={retornar}>
                    <Text style={styles.arrow}>←</Text>
                    <Text style={styles.titleScreen}>  Extrato</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.scrollView}>
                <LinearGradient
                    style={styles.gradient}
                    start={{ x: 0, y: 3 }}
                    end={{ x: 1.5, y: 0 }}
                    locations={[0.2, 1]}
                    colors={['#618FD3', '#9937C8']}
                >
                    <View>
                        <View style={styles.infoB}>
                            <Text style={styles.conta}>Conta corrente</Text>
                            <Text style={styles.logo}>Pandora</Text>
                        </View>
                        <View style={styles.infoM}>
                            <Text style={styles.saldoText}>Saldo em reais</Text>
                            <Text style={styles.saldoMoney}>R$ 2.000,00</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={styles.cards}>
                    <View style={styles.card}>
                        <View style={styles.tipo}>
                            <Text style={[styles.tipoTxt, stylesExtrato.colorVermelha]}>Despesa</Text>
                        </View>
                        <View style={styles.valorData}>
                            <View style={styles.valor}>
                                <Text style={styles.valorTxt}>R$ 2000,00</Text>
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.dataTxt}>20/12/2006</Text>
                            </View>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleTxt}>Titulo: Agiotagem </Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descTxt}>Decs: Juraci pegou emprestado.</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.tipo}>
                            <Text style={[styles.tipoTxt, stylesExtrato.colorVerde]}>
                                Saldo</Text>
                        </View>
                        <View style={styles.valorData}>
                            <View style={styles.valor}>
                                <Text style={styles.valorTxt}>R$ 8000,00</Text>
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.dataTxt}>25/12/2006</Text>
                            </View>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleTxt}>Titulo: Devolução </Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descTxt}>Decs: Juraci acabou de devolver.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const stylesExtrato = StyleSheet.create({
    colorVerde: {
        color:"#05F000"
    },
    colorVermelha: {
        color:"#F00000"
    }
  });
