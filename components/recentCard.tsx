import React from 'react';
import {
Text,
View,
StyleSheet,
ScrollView,
Image
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//component
import UserAvatar from '../components/usersAvatar';

export default function RecentCard(){
    const callLogs = [
        { id: '1', name: 'Ronak Chacha', time: '2025-01-05T20:14:00', type: 'outgoing' },
        { id: '2', name: 'Megha Jiji', time: '2025-01-05T19:46:00', type: 'incoming' },
        { id: '3', name: 'Shiv Shankar', time: '2025-01-05T17:15:00', type: 'outgoing' },
        { id: '4', name: 'Mohan Lal', time: '2025-01-05T13:43:00', type: 'incoming' },
        { id: '5', name: 'Pintu Dada', time: '2025-01-05T13:14:00', type: 'missed' },
        { id: '6', name: 'Ritik Chippa', time: '2025-01-04T11:14:00', type: 'outgoing' },
        { id: '7', name: 'Guddan Jiji', time: '2025-01-03T21:14:00', type: 'outgoing' },
      ];

    return (
        <ScrollView>
            <Text style={styles.headerStyle}>Today</Text>
               {callLogs.map((item)=>(
                 <View style={styles.container}>
                 <View style={styles.cardContent} >
                <UserAvatar name={item.name}/>
                 {/* <Image source={{uri:"https://www.spiffystores.com.au/blog/wp-content/uploads/2015/05/free-sign-560x410.jpg"}}
                style={styles.cardImage}/> */}
                <View style={styles.cardText}>
                <Text style={styles.cardtitle}>{item.name}</Text>
     
                <Text>{item.type +" "+item.time }</Text>
                </View>
                 </View>
                <MaterialIcon name="phone" size={25} style={styles.cardIcon}/>
             </View>
               ))

               }
               <Text style={styles.headerStyle}>Yesterday</Text>
               {callLogs.map((item)=>(
                 <View style={styles.container}>
                 <View style={styles.cardContent} >
                <UserAvatar name={item.name}/>
                 {/* <Image source={{uri:"https://www.spiffystores.com.au/blog/wp-content/uploads/2015/05/free-sign-560x410.jpg"}}
                style={styles.cardImage}/> */}
                <View style={styles.cardText}>
                <Text style={styles.cardtitle}>{item.name}</Text>
                <Text>{item.type +" "+item.time }</Text>
                </View>
                 </View>
                <MaterialIcon name="phone" size={25} style={styles.cardIcon}/>
             </View>
               ))

               }
        </ScrollView>
       
    );
} 

const styles = StyleSheet.create({
 container:{
    height:70,
marginHorizontal:10,
borderRadius:25,
    flexDirection:'row',
    alignItems:'center',
    // backgroundColor:'#d6ce94',
    paddingHorizontal:10,
    justifyContent:'space-between',
 },
 headerStyle:{
    marginHorizontal:10,
    marginVertical:20,
    // fontWeight:'bold'
 },
 cardImage:{
    height:50,
    width:50,
    borderRadius:25,
 },
 cardContent:{
    marginHorizontal:10,
    flexDirection:'row',
    alignItems:'center',
 },

 cardText:{
paddingHorizontal:10,
 },
 cardtitle:{
    fontSize:18,
    fontWeight:'400',
 },

 cardIcon:{},

});

