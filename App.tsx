import React from 'react'
import {Text,
  View,
  StyleSheet,
} from 'react-native';
import AppBar from './components/appBar';



export default function App(){
  return (
    <View>
      <Text style={styles.name}>Tushar</Text>
      <AppBar/>
    </View>
  );
}
const styles = StyleSheet.create({
  name:{
    margin:8,
    fontSize:24,
    color:"#fff",
    fontWeight:'bold'
  }
});