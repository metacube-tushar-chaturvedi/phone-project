import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";

//components
import Appbar from "../../components/appBar";
import RecentCard from "../../components/recentCard";

export default function RecentScreen(){
   return(
    <View>
          <Appbar />
          <RecentCard/>
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