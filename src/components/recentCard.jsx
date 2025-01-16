import React, { useState } from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//component
import UserAvatar from './usersAvatar';
import staticData from '../assest/constant';
import SimpleCard from './simpleCard';

export default function RecentCard({navigation}) {
  const {callLogs} = staticData;
const [isOpen,setIsOpen] = useState({id:null, show:false}); 
  return (
    <ScrollView>
      <Text style={styles.headerStyle}>Today</Text>
      {callLogs.map(item => (
        <SimpleCard key={item.id} item={item} isOpen={isOpen} setIsOpen = {setIsOpen}/>
      ))}
      <Text style={styles.headerStyle}>Yesterday</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor:'#d6ce94',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  headerStyle: {
    marginHorizontal: 10,
    marginVertical: 20,
    // fontWeight:'bold'
  },
  cardImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  cardContent: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardText: {
    paddingHorizontal: 10,
  },
  cardtitle: {
    fontSize: 18,
    fontWeight: '400',
  },

  cardIcon: {},
});
