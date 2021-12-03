
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Feed() {

    const [publications,setPublications]=useState([]);   
    
    useEffect(function(){
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
            const publications = await response.json();
            setPublications(publications)
        }
        getData();
    },[])

    function renderItem({ item }) {
        return <View style={styles.post}>
            <View style={styles.postHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.postheaderimg} source={{uri:item.imgPerfilUri}} />
                    <Text>{item.nomeUsuario}</Text>
                </View>
                <Icon name="dots-vertical" size={25} color="black" />
            </View>
            <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={{uri:item.imgPostUri}} />
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="heart-outline" size={30} color='black' />
                    <Icon name="comment-outline" size={30} color='black' />
                    <Icon name="send" size={30} color='black' />
                </View>
                <Icon name="equalizer" size={30} color='black' />
            </View>
            <View style={styles.footer_legend}>
               <Text><Text style={{color:'black',fontWeight:'bold'}}>{item.nomeUsuario}</Text> ngfyhddtdyyvutu vtrdytrdtyrdytcdhtr dtdtdgtrdctrdytdtcrcdthrdtdytrd</Text>
            </View>
        </View>
    }
    return (
        <View style={styles.feed}>
            <FlatList 
                data={publications}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    postheaderimg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 10,
        
        
    },
    feed: {
        flex: 1,
    },
    post: {
        borderTopColor: '#e8e8e8',
        borderTopWidth: 1,
        backgroundColor: "#ffffff"

    },
    postHeader: {
        height: 60,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },
    postimg: {
        width: '100%',
        height: undefined,
    },
    footer: {
        height: 30,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer_legend:{
        backgroundColor: "#ffffff",
        margin:10

    }
});