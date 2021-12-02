import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Constants from 'expo-Constants';
import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <Stories/>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight

  },
  
});
