import * as React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen
import ContactScreen from './screen/contacts';
import FavouriteScreen from './screen/favourites';
import RecentScreen from './screen/recent';
import DetailsScreen from './screen/details';

//const
const contactName = 'contact';
const favouriteName = 'favourite';
const recentName = 'recent';
const detailName = 'detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FavouriteStack = ()=>{
    return (
        <Stack.Navigator screenOptions={()=>(
            {
                headerShown:false,
            }
        )}>
            <Stack.Screen name = {contactName} component={FavouriteScreen}/>
        </Stack.Navigator>
    );
}

const RecentStack = ()=>{
    return (
        <Stack.Navigator
        screenOptions={()=>({
            headerShown:false,
        })}
        >
        <Stack.Screen name = {favouriteName} component={RecentScreen} />
        <Stack.Screen name= {detailName} component={DetailsScreen}/>
    </Stack.Navigator>
    );
}
const ContactsStack = ()=>{
   return (
    <Stack.Navigator
    screenOptions={()=>({
        headerShown:false,
    })}
    >
    <Stack.Screen name = {contactName} component={ContactScreen}/>
</Stack.Navigator>
   ); 
}

export default function MainContainer(){
    return (

        <NavigationContainer>
            <Tab.Navigator
            tab
             screenOptions={({route})=>({
                headerShown:false,
                tabBarStyle:{
                  height:70,
                },
                tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 300,
                  },
                tabBarIcon:({focused, color, size})=>{
                    let iconName;
                    let rn = route.name;
                    size = 24;

                    if(rn === contactName){
                    iconName = focused ? 'address-book' : 'address-book';
                    color = focused ? '#000':'#A0A0A0'
                    }else if(rn === favouriteName){
                        iconName = focused ? 'star' : 'star';
                         color = focused ? '#000':'#A0A0A0'
                    }
                    else if(rn === recentName){
                        iconName = focused ? 'clock' : 'clock';
                           color = focused ? '#000' : '#A0A0A0';
                    }
                    return <Icon name = {iconName} size = {25} color = {color}/>;
                },
                 tabBarLabelPosition: 'below-icon',
             })}>
                <Tab.Screen name= {favouriteName} component={FavouriteStack}/>
                <Tab.Screen name={recentName} component={RecentStack}/>
                <Tab.Screen name={contactName} component={ContactsStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

