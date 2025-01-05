import * as React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen
import ContactScreen from './screen/contacts';
import FavouriteScreen from './screen/favourites';
import RecentScreen from './screen/recent';

//const
const contactName = 'contact';
const favouriteName = 'favourite';
const recentName = 'recent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return (

        <NavigationContainer>
            <Tab.Navigator initialRouteName={contactName}
             screenOptions={({route})=>({
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
                        iconName = focused ? 'clock-rotate-left' : 'clock-rotate-left';
                           color = focused ? '#000' : '#A0A0A0';
                    }
                    return <Icon name = {iconName} size = {25} color = {color}/>;
                },
             })}
             tabBarOptions={{
                activeTineColor:'#000',
                inactiveTineColor:'grey',
                labelStyles:{paddingBottom:10,fontSize:10},
                style:{
                    padding:10,height:10,
                }
             }}
             >
                <Tab.Screen name={favouriteName} component={FavouriteScreen}/>
                <Tab.Screen name={recentName} component={RecentScreen}/>
                <Tab.Screen name={contactName} component={ContactScreen}/>
            </Tab.Navigator>

        </NavigationContainer>
    );
}

