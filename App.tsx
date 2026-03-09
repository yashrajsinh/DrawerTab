import 'react-native-gesture-handler';
import React from 'react';
//Nav Container
import { NavigationContainer } from '@react-navigation/native';
//Drawer Compnent
import DrawerNavigator from './src/navigation/Drawer/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* === Custom Drawer Component ==== */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
