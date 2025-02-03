import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import UserAvatar from './usersAvatar';
import staticData from '../assest/constant';
import SimpleCard from './simpleCard';
import { useNavigation } from '@react-navigation/native';

const AllContact = () => {
  const {contacts} = staticData;
  const navigation = useNavigation();
  const navigateCreteContact = ()=>{
  //  return navigation.navigate('createContact');
  }
  return (
    <ScrollView>

        <TouchableOpacity onPress={navigateCreteContact} style={styles.createbtnStyle}>
        <MaterialIcon name="person-add" size={25} style={styles.createBtnIcon} color='#975f4d'/>
        <Text style={styles.createBtnText}>
        Create New Contact</Text>
        </TouchableOpacity>

      {contacts.map(item => (
        <SimpleCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cardtext: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
  createbtnStyle:{
   flexDirection:'row',
   alignItems:'center',
   height:40,
  //  backgroundColor:'#666',
   paddingHorizontal:25
  },
  createBtnIcon:{
    paddingHorizontal:10
  },
  createBtnText:{
    color:'#975f4d',
    fontSize:16
  }
});
export default AllContact;
