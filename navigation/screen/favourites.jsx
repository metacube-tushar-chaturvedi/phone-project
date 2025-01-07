import React from "react";
import {
    Text,
    View,
    StyleSheet,

} from "react-native";
import Appbar from "../../components/appBar";

export default function FavouriteScreen({ navigation }){
     return(
      <Appbar/>
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