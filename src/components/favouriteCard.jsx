import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
//component
import UserAvatar from './usersAvatar';

export default function FavouriteCard({details}) {
  return (
    <View>
    <View style={styles.mainCon}>
      <UserAvatar name={details.name} background={4} size={120} fontSize={60} />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: '#fff',
          borderRadius: 25,
          padding: 5,
        }}>
        <MaterialIcon name="phone" size={25} />
      </View>
      <View style={styles.textCon}>
      <Text>{details.name}</Text>
      <Text>Mobile</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
mainCon:{
  position: 'relative', height: 120, width: 120, border:2, borderColor:'#000',
  margin:5 ,
},
  textCon:{
  // flexDirection:'row',
  marginVertical:10,
  alignItems:'center',
 justifyContent:'center',
  }
})
