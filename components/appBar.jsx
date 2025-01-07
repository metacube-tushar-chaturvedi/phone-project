import React from 'react'
import {Text,
    View,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export default function Appbar(){
    return (
        <View style={styles.container}>
         <View style={styles.startPart}>
             <MaterialIcon style={styles.iconStyle}  name="search" size={24}/>
             <Text style={styles.hintText} >Search contacts</Text>
         </View>
         <View style={styles.endPart}>
         <MaterialIcon style={styles.iconStyle} name="mic" size={24}/>
         <MaterialIcon style={styles.iconStyle}  name="more-vert" size={24}/>
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
     container: {
    height:50,
       marginVertical:10,
        backgroundColor:'#f3e5e2',
        marginHorizontal:18,
        borderRadius:25,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:18,
        alignItems:'center',
     },
     startPart:{
         flexDirection:'row',
     },
     hintText:{
        paddingHorizontal:15,
        fontSize:18,
     },
     endPart:{
        flexDirection:'row',
    },
    iconStyle:{
        paddingHorizontal:5
    }
});