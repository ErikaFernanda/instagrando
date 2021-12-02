
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
export default function Stories() {
    // const [stories,setStories]=useState([]);    

    const stories = [
        {
            id: 1,
            nome: "Mônica",
            src: { uri: 'https://gartic.com.br/imgs/mural/pe/pedroh_18/monica.png' }

        },
        {
            id: 2,
            nome: "Cebolinha",
            src: { uri: 'https://gartic.com.br/imgs/mural/gh/ghour_gartic/cebolinha.png' }

        },
        {
            id: 3,
            nome: "Cebolinha",
            src: { uri: 'https://gartic.com.br/imgs/mural/fu/fuuuuuu/magali-para-a-kazinha-u.png' }

        },
        {
            id: 4,
            nome: "Cebolinha",
            src: { uri: 'https://gartic.com.br/imgs/mural/va/vanessa8/cascao.png' }

        },
        {
            id: 5,
            nome: "Cebolinha",
            src: { uri: 'https://gartic.com.br/imgs/mural/ma/maaaaaycastro/chaves.png' }

        },
        {
            id: 6,
            nome: "Cebolinha",
            src: { uri: 'https://gartic.com.br/imgs/mural/le/le_bracho/chiquinha-do-chaves.png' }

        }
        
    ]

    function renderItem({ item }) {
        return <View style={styles.story}>
            <Image style={styles.imgstory} source={item.src} />
            <Text>{item.nome}</Text>
        </View>


    }

    return (
        <View style={styles.stories}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
           

        </View>
    );
}

const styles = StyleSheet.create({

    imgstory: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    story: {
        width: 90,
        height: '100%',
        alignItems: 'center'
    },
    stories: {
        height: 90,
        flexDirection: 'row',

    },

});
