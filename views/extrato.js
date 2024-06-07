import React, { useState, useEffect } from "react";
import { Pressable, View, Text, FlatList, StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import styles from "./style/extratoStyle";

import sqLiteExtrato from "../sqlite/sqLiteExtrato";
import { ScrollView } from "react-native";

export default function Extrato() {
  const navigation = useNavigation();
  const [extrato, setExtrato] = useState([]);

  const retornar = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    extratoAll();
  }, []);

  const extratoAll = async () => {
    const extratos = await sqLiteExtrato.all();
    if (extratos !== false) {
      setExtrato(extratos);
      console.log(extratos);
    } else {
      return false;
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
          <Text style={styles.valorTxt}>R$ {item.valor}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.dataTxt}>20/12/2006</Text>
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
            <Text style={styles.saldoMoney}>R$ 2.000,00</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={stylesExtrato.extratoContainer}>
          <FlatList
            data={extrato}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={stylesExtrato.flatListContent}
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
    paddingTop:15,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
