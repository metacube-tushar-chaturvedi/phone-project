import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//const
import staticData from '../../assest/constant';

//component
import SimpleCard from '../../components/simpleCard';

export default function SearchScreen({navigation}) {
  const {callLogs, contacts} = staticData;
  const [allContact, updateList] = useState(contacts);

  const handleQuery = query => {
    console.log('query', query);
    const newContact = contacts.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

    updateList(newContact);
  };

  return (
    <View>
      <View style={styles.appbarCon}>
        <MaterialIcon style={styles.appbarIcon} name="arrow-back" size={25} onPress={()=>navigation.goBack()}/>
        <TextInput
        style={styles.searchText}
          placeholder="Search Contact"
          onChangeText={handleQuery}
        />
      </View>
      <Text style={styles.headingText}>All Contact</Text>
      <ScrollView>
        {allContact.map(item => (
          <SimpleCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appbarCon: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#f3e5e2',
    alignItems: 'center',
  },
  appbarIcon: {
    paddingHorizontal: 10,
  },
  searchText:{
    width:300,
      paddingHorizontal: 15,
      fontSize: 18,
  },
  headingText:{
    fontSize:14,
    paddingHorizontal:12,
    paddingVertical:12,

    fontWeight:'400'
  }
});
