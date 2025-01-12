import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

//component
import Appbar from '../../components/appBar';
import UserAvatar from '../../components/usersAvatar';


export default function FavouriteScreen({navigation}) {
  return (
    <View>
      <Appbar />
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:"5%"}}>
        <Text>Favourite</Text>
        <Text>Add</Text>
      </View>
      <View style={{position:'relative' , height:120 , width:120}}>
        <UserAvatar name="Ritik" background={4} size={120} fontSize={60}/>
        <View style={{position:'absolute', bottom:0, right:0, backgroundColor:'#fff' , borderRadius:25, padding:5}}> <MaterialIcon name="phone" size={25}/></View>   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
