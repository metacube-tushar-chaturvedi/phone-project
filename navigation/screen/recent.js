import React from "react";
import {
    Text,
    View,
    StyleSheet,

} from "react-native";

export default function RecentScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.content}>
               Recent Screen
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