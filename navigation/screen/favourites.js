import React from "react";
import {
    Text,
    View,
    StyleSheet,

} from "react-native";

export default function FavouriteScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text onPress={navigation.navigate('home')} 
            style={styles.content}>
               Favourite Screen
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