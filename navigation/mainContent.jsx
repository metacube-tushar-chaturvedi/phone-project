import * as React from 'react';
import {
    View,
    Text,


} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen 
import ContactScreen from './screen/contacts';
import FavouriteScreen from './screen/favourites';
import RecentScreen from './screen/recent';

//const 
const Stack = createNativeStackNavigator();

export default function MainContainer(){
    return (
        // <View>
        //     <Text>Hello</Text>
        // </View>
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='contact' component= {ContactScreen}/>
                <Stack.Screen name='recent' component= {RecentScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

