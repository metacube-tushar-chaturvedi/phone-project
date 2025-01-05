import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import MainContainer from './navigation/mainContent';
import { SafeAreaProvider } from 'react-native-safe-area-context';

enableScreens();

export default function App(){
  return (
    <SafeAreaProvider>
      <MainContainer/>
    </SafeAreaProvider>
  
  );
}