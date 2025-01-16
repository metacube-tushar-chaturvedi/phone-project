import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function DetailAppBar({item}) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.appBarCon}>
      <View style={styles.firstPart}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <MaterialIcon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.appBartitle}>{item.name}</Text>
      </View>
      <View style={styles.iconRow}>
        <MaterialIcon name="edit" size={25} />
        <MaterialIcon name="star" size={25} />
        <MaterialIcon name="settings" size={25}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarCon: {
    height: 50,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#fff8f6'
  },
  appBartitle:{
    marginHorizontal:10,
    fontSize:20,
  },
  firstPart: {
    flexDirection: 'row',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:120,
  },
});
