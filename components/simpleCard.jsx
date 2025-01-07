import React from 'react'
import {
  View ,
  Text,
  StyleSheet
} from 'react-native';
import UserAvatar from './usersAvatar';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import staticData  from '../assest/constant';

export default function SimpleCard({item}){

    return (
      item.type != null ?  
    <View style={styles.container}>
    <View style={styles.cardContent} >
        {}
   <UserAvatar name={item.name}/>

   <View style={styles.cardText}>
   <Text style={styles.cardtitle}>{item.name}</Text>

   <Text>{item.type +" "+item.time }</Text>
   </View>
    </View>
   <MaterialIcon name="phone" size={25} style={styles.cardIcon}/>
</View>
:         <View style={contactCardStyle.container}>
<UserAvatar name={item.name}/>
<Text style={contactCardStyle .cardtext}>{item.name}</Text>
</View>
    )

}

const styles = StyleSheet.create({
 container:{
    height:70,
marginHorizontal:10,
borderRadius:25,
    flexDirection:'row',
    alignItems:'center',

    // backgroundColor:'#d6ce94',
    paddingHorizontal:10,
    justifyContent:'space-between',
 },
 headerStyle:{
    marginHorizontal:10,
    marginVertical:20,
    // fontWeight:'bold'
 },
 cardImage:{
    height:50,
    width:50,
    borderRadius:25,
 },
 cardContent:{
    marginHorizontal:10,
    flexDirection:'row',
    alignItems:'center',
 },

 cardText:{
paddingHorizontal:10,
 },
 cardtitle:{
    fontSize:18,
    fontWeight:'400',
 },

 cardIcon:{},

});

const contactCardStyle = StyleSheet.create({
    container:{
       height:70,
       marginHorizontal:10,
       borderRadius:25,
           flexDirection:'row',
           alignItems:'center',
       
           // backgroundColor:'#d6ce94',
           paddingHorizontal:10,
    },
    cardtext:{
     paddingHorizontal:15,
     fontSize:16
    }

});