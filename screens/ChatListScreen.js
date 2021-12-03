import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Stack = createStackNavigator();
export default function ChatListScreen({ navigation }) {
  const [chatlist, setChatlist] = useState([]);

  useEffect(function () {
    async function getData() {
      const response = await fetch("https://mobile.ect.ufrn.br:3000/chatlist");
      const chatlist = await response.json();
      setChatlist(chatlist);
    }
    getData();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.chat}
        onPress={() => navigation.navigate("ChatScreen",{id:item.id})}
      >
        <Image style={styles.image} source={{ uri: item.imgPerfilUri }} />
        <View style={styles.textBox}>
          <Text style={styles.nome}>{item.nomeUsuario}</Text>
          <Text>{item.ultimaMensagem}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={chatlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  chat: {
    height: 60,
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
  },
  textBox: {
    justifyContent: "center",
  },
  nome: {
    fontWeight: "bold",
  },
});
