import 'react-native-gesture-handler';

//Nav Container
import { NavigationContainer } from '@react-navigation/native';
//Drawer Compnent
import DrawerNavigator from './src/navigation/Drawer/DrawerNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Hook useState
import React, { useState } from 'react';

export default function App() {
  //For the active screen
  const [activeScreen, setActiveScreen] = useState('Home');
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* ✅Props go on DrawerNavigator*/}
        <DrawerNavigator
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
