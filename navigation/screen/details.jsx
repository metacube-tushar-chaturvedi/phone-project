import React from 'react-native';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

//component 
import UserAvatar from '../../components/usersAvatar';

export default function DetailsScreen(details){

  return(
     <ScrollView>
        <UserAvatar name={details.name} size={100} />
        <Text>{details.name} </Text>
     </ScrollView>
  );
} 