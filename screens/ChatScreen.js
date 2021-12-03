import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
const Stack = createStackNavigator();
export default function ChatScreen({route}){
    const {id} = route.params;

    const[chat, setChat]= useState([])

    useEffect(function(){
        async function getData(){
            const response =  await fetch("https://mobile.ect.ufrn.br:3000/chatlist/"+id)
            const chat = await response.json()
            setChat(chat)
        }
        getData()
    },[])
    function renderItem({item}){
        return <View style={item.autor?styles.mensagemAutor:styles.mensagem}>
            <Text style={item.autor?{color:'white'}:{color:'black'}}>{item.texto}</Text>
        </View>
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style ={styles.chatContainer}>
                <FlatList
                    data={chat.mensagens}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                    showsVerticalScrollIndicator={false}
                />

            </View>
            <View style ={styles.inputContainer}>
                <TextInput style={styles.input}></TextInput>
                <TouchableOpacity style={styles.sendButton}><Text style={{fontWeight:'bold',color:"#D717F5"}}>Enviar</Text></TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    chatContainer:{
        flex:1,
        margin:5,
        backgroundColor:'#fff'
    },
    inputContainer:{
        flexDirection:'row',
        height:50,
        alignItems:'center',
        padding:5,
        backgroundColor:'#D3D3D3',
        borderRadius:25,
        margin:5
    },
    mensagem:{
        height:30,
        backgroundColor:'#D3D3D3',
        borderRadius:5,
        justifyContent:'center',
        padding:5,
        alignSelf:'flex-start'
    },
    mensagemAutor:{
        height:30,
        backgroundColor:'#D97EE6',
        color:'white',
        borderRadius:8,
        justifyContent:'center',
        padding:5,
        alignSelf:'flex-end'
    },
    input:{
        flex:1,
        height:40,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:5,
        margin:5,
    },
    sendButton:{
        width:60,
        justifyContent:'center',
        alignItems:'center',

    }
})