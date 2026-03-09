import 'react-native-gesture-handler';
import React from 'react';
//Nav Container
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

//Drawer Compnent
DrawerNavigator;

export default function App() {
  return (
    <NavigationContainer>
      {/* === Custom Drawer Component ==== */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
