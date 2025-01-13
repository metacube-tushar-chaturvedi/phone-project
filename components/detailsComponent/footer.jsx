import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//component
import UserAvatar from '../usersAvatar';

export default function Footer() {
  return (
    <View>
      <View style={styles.con}>
        <Text>Contact info from </Text>
        <View style={styles.avatarRow}>
          <View style={styles.avatarStyle}>
            <UserAvatar name="Tushar" background={1} size={25} fontSize={14} />
          </View>
          <View style={[styles.avatarStyle, {marginLeft: -5}]}>
            <UserAvatar name="Ritik" background={7} size={25} fontSize={14} />
          </View>
          <View style={[styles.avatarStyle, {marginLeft: -5}]}>
            <UserAvatar name="Yogesh" background={10} size={25} fontSize={14} />
          </View>
        </View>
        <Text style={{color: '#895847', fontWeight: '700'}}>  3 linked contected
        </Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center', height:40, margin:20}}>   <Text style={{color:'#514745',fontWeight:'600'}}>Help & feedback</Text></View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  avatarRow: {
    flexDirection: 'row',
  },
  avatarStyle: {
    borderColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
  },
});
