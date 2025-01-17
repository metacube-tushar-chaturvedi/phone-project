import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Linking} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

//component
import UserAvatar from './usersAvatar';
import Divider from './detailsComponent/divider';
import IconCard from './detailsComponent/iconCard';

export default function SimpleCard({item, isOpen, setIsOpen}) {
  const openCard = () => {
    {
      if (isOpen.id === item.id) {
        setIsOpen({id: item.id, show: !isOpen.show});
      } else {
        setIsOpen({id: item.id, show: true});
      }
    }
  };
  const navigation = useNavigation();
  const navDetailScreen = () => {
    navigation.navigate('detail', {item: item});
  };

function convertReadableTimeout(timestamp) {
    const date = new Date(timestamp);

    const options = {
        day: '2-digit',
        month: 'short', 
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, 
        timeZone: 'Asia/Kolkata' 
    };


    const formattedDate = date.toLocaleString('en-IN', options);

    return formattedDate.replace(',', ' ').replace(' ', ', ');
}

const makeCall = (item)=>{
   console.log("openContatc", item.number);
   let number = `tel:${item.number}`;
   Linking.openURL(number);
}

  return item.type != null ? (
    item.id === isOpen.id && isOpen.show ? (
      <View style={styles.conExp}>
        <View style={styles.containerCom}>
          <View style={styles.cardContent}>
            <UserAvatar
              name={item.name}
              onPress={navDetailScreen}
              background={item.background}
            />
            <TouchableOpacity onPress={openCard}>
              <View style={styles.cardText}>
                <Text style={styles.cardtitle}>{item.name}</Text>

                <Text>{item.type + ' ' + item.time}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <MaterialIcon name="phone" size={25} style={styles.cardIcon} onPress={()=>makeCall(item)}/>
        </View>
        <Divider />
        <View style={styles.iconCon}>
          <IconCard icon="videocam" name="Video Call" height={35} size={30} />
          <IconCard icon="chat" name="message" height={35} size={30} />
          <IconCard icon="history" name="History" height={35} size={30} />
        </View>
      </View>
    ) : (
      // show compressed card
      <View style={styles.containerCom}>
        <View style={styles.cardContent}>
          <UserAvatar
            name={item.name}
            onPress={navDetailScreen}
            background={item.background}
          />
          <TouchableOpacity onPress={openCard}>
            <View style={styles.cardText}>
              <Text style={styles.cardtitle}>{item.name}</Text>
              {/* <Text style={[ styles.cardtitle, item.id==isOpen.id ? {color:'#000'}:{color:'#666'}]}>Ritik ki jay</Text> */}
              {isOpen.id === item.id && isOpen.show === true && (
                <Text>visible</Text>
              )}
              <Text>{item.type + ' ' + convertReadableTimeout(item.timestamp)}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <MaterialIcon name="phone" size={25} style={styles.cardIcon} onPress={()=>makeCall(item)}/>
      </View>
    )
  ) : (
    // Show contact card
    <View style={contactCardStyle.container}>
      <UserAvatar
        name={item.name}
        background={item.background}
        onPress={navDetailScreen}
      />
      <Text style={contactCardStyle.cardtext}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCom: {
    height: 70,
    marginHorizontal: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  conExp: {
    backgroundColor: '#f9efed',
    elevation: 1,
    height: 160,
    borderRadius: 40,
    marginHorizontal: 10,
    padding: 5,
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
    color: '#594b48',
  },

  iconCon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const contactCardStyle = StyleSheet.create({
  container: {
    height: 70,
    marginHorizontal: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor:'#d6ce94',
    paddingHorizontal: 10,
  },
  cardtext: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
