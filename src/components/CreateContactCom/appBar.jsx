import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import MaterialApp from 'react-native-vector-icons/MaterialIcons';

export default function AppBar() {
  const saveContact = () => {
    console.log('Save contact');
  };
  return (
    <View style={styles.mainCon}>
      <View style={styles.appbarCon}>
        <View style={styles.leftPart}>
          <MaterialApp name="close" size={25} />
          <Text style={{fontSize: 16, paddingHorizontal: 8}}>
            Create contact
          </Text>
        </View>
        <View style={styles.rightPart}>
          <View style={styles.savebtnCon}>
            <TouchableOpacity style={styles.savebtnCon} onPress={saveContact}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
          <MaterialApp name="more-vert" size={25} />
        </View>
      </View>
      <View style={styles.profileCon}>
        <View style={styles.profilePic}>
          <MaterialApp name="add-photo-alternate" size={45} />
        </View>
        <Text>Add Picture</Text>
      </View>
      <TextInput style={styles.intputTextStyle} placeholder="First Name" />
      <TextInput style={styles.intputTextStyle} placeholder="Surname" />
      <TextInput style={styles.intputTextStyle} placeholder="Company" />
      <TextInput style={styles.intputTextStyle} placeholder="7742438595" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    //   justifyContent:'center',
    //   alignItems:'center',
  },
  appbarCon: {
    marginVertical: 5,
    // backgroundColor: '#666',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appbarTitle: {
    fontSize: 20,
  },
  savebtnCon: {
    width: 80,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#975f4d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#fff',
  },
  profileCon: {
    alignItems: 'center',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3e5e2',
    marginVertical: 12,
  },
  profilePicIcon: {},
  profilePicTitle: {},

  intputTextStyle: {
    height: 60,
    marginHorizontal: 30,
    marginVertical: 5,
    paddingVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});
