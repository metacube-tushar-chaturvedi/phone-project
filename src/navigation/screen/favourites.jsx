import React from 'react';
import {Text, View, StyleSheet,FlatList} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

//component
import Appbar from '../../components/appBar';
import UserAvatar from '../../components/usersAvatar';
import FavouriteCard from '../../components/favouriteCard';
import staticData from '../../assest/constant';

export default function FavouriteScreen({navigation}) {

const {callLogs, contacts} = staticData;
const favList = ()=>{
};



  return (
    <View>
      <Appbar />
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:"5%"}}>
        <Text>Favourite</Text>
        <Text>Add</Text>
      </View>
       <View style={styles.favCardCon}>
          <FavouriteCard details={contacts[1]}/>
          <FavouriteCard details={contacts[7]}/>
          <FavouriteCard details={contacts[6]}/>
      
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
  favCardCon:{
     flexDirection:'row'
  }
});
