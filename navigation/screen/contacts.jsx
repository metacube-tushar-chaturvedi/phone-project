import React from "react";
import {
    Text,
    View,
    StyleSheet,

} from "react-native";
import Appbar from "../../components/appBar";
import AllContact  from "../../components/allContactCard";

export default function ContactScreen(){
    return(
        <View>
               <Appbar/>
               <AllContact/>
        </View>
    );
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        fontSize:24,
        fontWeight:'bold',
    }
});