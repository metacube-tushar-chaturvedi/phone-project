import React from "react";
import {
    Text,
    View,
    StyleSheet,

} from "react-native";

export default function ContactScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.content}>
               Contact Screen
            </Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontSize:24,
        fontWeight:'bold',

    }
});