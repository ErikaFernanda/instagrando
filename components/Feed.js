
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Feed() {

    const feed = [
        {
            id: 1,
            nome: "Cebolinha",
            src_perfil: { uri: 'https://gartic.com.br/imgs/mural/gh/ghour_gartic/cebolinha.png' },
            src_post: { uri: 'https://pbs.twimg.com/media/Dyqs-sDX0AA-KEi.jpg' },
            aspect_Ratio:1.777
        },
        {
            id: 2,
            nome: "Mônica",
            src_perfil: { uri: 'https://gartic.com.br/imgs/mural/pe/pedroh_18/monica.png' },
            src_post: { uri: 'https://img.elo7.com.br/product/main/2C7DBC7/monica-em-amigurumi-decoracao.jpg' },
            aspect_Ratio:0.800
            
        },
        {
            id: 3,
            nome: "Magazine Luiza2",
            src_perfil: { uri: 'https://99prod.s3.amazonaws.com/uploads/image/file/2155389/ace267b83e2cf74538b23a2d47d5d7e9.png' },
            src_post: { uri: 'https://s4.static.brasilescola.uol.com.br/monografias/2020/10/figura9.jpg' },
            aspect_Ratio:1.000
        }
    ]

    function renderItem({ item }) {
        return <View style={styles.post}>
            <View style={styles.postHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.postheaderimg} source={item.src_perfil} />
                    <Text>{item.nome}</Text>
                </View>
                <Icon name="dots-vertical" size={25} color="black" />
            </View>
            <Image style={styles.postimg} aspectRatio={item.aspect_Ratio} source={item.src_post} />
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="heart-outline" size={30} color='black' />
                    <Icon name="comment-outline" size={30} color='black' />
                    <Icon name="send" size={30} color='black' />
                </View>
                <Icon name="equalizer" size={30} color='black' />
            </View>
            <View style={styles.footer_legend}>
               <Text><Text style={{color:'black',fontWeight:'bold'}}>{item.nome}</Text> ngfyhddtdyyvutu vtrdytrdtyrdytcdhtr dtdtdgtrdctrdytdtcrcdthrdtdytrd</Text>
            </View>
        </View>
    }
    return (
        <View style={styles.feed}>
            <FlatList 
                data={feed}
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
        margin: 10
    },
    feed: {
        flex: 1,

        // backgroundColor: "red"
    },
    post: {

        // backgroundColor: 'blue',
        borderTopColor: '#e8e8e8',
        borderTopWidth: 1,

    },
    postHeader: {
        height: 60,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    postimg: {
        width: '100%',
        height: undefined,
    },
    footer: {
        height: 30,

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer_legend:{
        
        margin:10

    }
});