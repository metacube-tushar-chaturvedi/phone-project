import * as React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screen
import ContactScreen from './screen/contacts';
import FavouriteScreen from './screen/favourites';
import RecentScreen from './screen/recent';

//const
const contactName = 'contact';
const favouriteName = 'favourite';
const recentName = 'recent';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      tab
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 300,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          size = 24;

          if (rn === contactName) {
            iconName = focused ? 'address-book' : 'address-book';
            color = focused ? '#000' : '#A0A0A0';
          } else if (rn === favouriteName) {
            iconName = focused ? 'star' : 'star';
            color = focused ? '#000' : '#A0A0A0';
          } else if (rn === recentName) {
            iconName = focused ? 'history' : 'history';
            color = focused ? '#000' : '#A0A0A0';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen name={favouriteName} component={FavouriteScreen} />
      <Tab.Screen name={recentName} component={RecentScreen} />
      <Tab.Screen name={contactName} component={ContactScreen} />
    </Tab.Navigator>
  );
}
