
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={{ uri: 'https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png' }} />
            <Icon name="facebook-messenger" size={30} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
   
    header: {
        flexDirection: 'row',
        padding: 20,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        


    },
   
    logo: {
        width: 110,
        height: 30
    },
    
});
