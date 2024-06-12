import React, { useState, useEffect } from "react";
import { Pressable, View, Text, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from "./style/extratoStyle";

import sqLiteExtrato from "../sqlite/sqLiteExtrato";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sqLiteUser from "../sqlite/sqLiteUser";

export default function Extrato() {
  const navigation = useNavigation();
  const [extrato, setExtrato] = useState([]);
  const [id, setId] = useState("");
  const [saldo, setSaldo] = useState('');

  useEffect(() => {
    getDataAsync();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (id) {
        getDataUser();
        getExtratos();
      }
    }, [id])
  );

  const retornar = () => {
    navigation.navigate("Home");
  };

  const getDataAsync = async () => {
    try {
      const idAsync = await AsyncStorage.getItem('id-user');
      setId(idAsync || '');
    } catch (e) {
      console.error(e);
    }
  };

  const getDataUser = async () => {
    const userData = await sqLiteUser.selectById(id);
    if (userData) {
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

  const getExtratos = async () => {
    try {
      const extratos = await sqLiteExtrato.selectByUserId(id);
      setExtrato(extratos);
    } catch (error) {
      console.error('Erro ao buscar extratos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.tipo}>
        <Text
          style={[
            styles.tipoTxt,
            item.tipo === "Receita"
              ? stylesExtrato.receita
              : stylesExtrato.despesa,
          ]}
        >
          {item.tipo}
        </Text>
      </View>
      <View style={styles.valorData}>
        <View style={styles.valor}>
          <Text style={styles.valorTxt}>{formatCurrency(item.valor)}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.dataTxt}>12/06/2024</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Titulo: {item.titulo} </Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descTxt}>Desc: {item.desc}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Pressable style={styles.voltar} onPress={retornar}>
          <Text style={styles.arrow}>←</Text>
          <Text style={styles.titleScreen}> Extrato</Text>
        </Pressable>
      </View>
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 3 }}
        end={{ x: 1.5, y: 0 }}
        locations={[0.2, 1]}
        colors={["#618FD3", "#9937C8"]}
      >
        <View>
          <View style={styles.infoB}>
            <Text style={styles.conta}>Conta corrente</Text>
            <Text style={styles.logo}>Pandora</Text>
          </View>
          <View style={styles.infoM}>
            <Text style={styles.saldoText}>Saldo em reais</Text>
            <Text style={styles.saldoMoney}>{formatCurrency(saldo)}</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={stylesExtrato.extratoContainer}>
        <FlatList
          data={extrato}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          // contentContainerStyle={stylesExtrato.flatListContent}
          style={styles.cards}
        />
      </View>
    </View>
  );
}

const stylesExtrato = StyleSheet.create({
  receita: {
    color: "#05F000",
  },
  despesa: {
    color: "#F00000",
  },
  extratoContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 15,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
