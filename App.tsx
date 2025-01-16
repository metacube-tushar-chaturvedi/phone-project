import * as React from 'react';
// import { enableScreens } from 'react-native-screens';
import MainContainer from './src/navigation/mainContent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { SafeAreaView } from 'react-native';

// enableScreens();

export default function App(){
  return (
    <SafeAreaProvider>
      <MainContainer/>
    </SafeAreaProvider>
  
  );
}