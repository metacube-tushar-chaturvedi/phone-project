import React from 'react';
import {View,
    Text,
   ScrollView,
   StyleSheet,
} from 'react-native';

import UserAvatar from './usersAvatar';
import staticData from '../src/assest/constant';
import SimpleCard from './simpleCard';

const AllContact = ()=>{
    const {contacts} = staticData;
    return (
        <ScrollView>
    { contacts.map((item)=>(
        <SimpleCard key={item.id} item={item}/>
    ))}
        </ScrollView>
    );
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
     },
     cardtext:{
      paddingHorizontal:15,
      fontSize:16
     }

});
export default AllContact;