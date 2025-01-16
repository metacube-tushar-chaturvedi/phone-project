import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function ContactInfo({details}) {
  return (
    <View style={Styles.contactInfoCon}>
      <Text style={Styles.title}>Contact info</Text>
      <View style={Styles.contanier}>
        <View style={Styles.flexbox}>
          <MaterialIcon name="phone" size={25} />
          <View style={{paddingHorizontal: '18'}}>
            <Text>{details.number}</Text>
            <Text style={Styles.label}>Mobile</Text>
          </View>
        </View>
        <View style={Styles.iconRow}>
          <MaterialIcon name="videocam" size={25} style={{paddingHorizontal:30}} />
          <MaterialIcon name="chat" size={25} />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  contactInfoCon: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical:10,
    backgroundColor: '#fff1ee',
    borderRadius: 15,
    height: 120,
    justifyContent: 'space-evenly',
    // alignItems:'center',
  },
  flexbox: {flexDirection: 'row', alignItems: 'center'},
  contanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  phoneMobile: {paddingHorizontal: 10},
  label: {},
  iconRow: {flexDirection: 'row', alignItems: 'center'},
});
