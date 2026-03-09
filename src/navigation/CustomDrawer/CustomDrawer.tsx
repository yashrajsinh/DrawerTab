import { View, Text, Alert } from 'react-native';
import React from 'react';
//Drawer
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Header from '../../components/Header/Header';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom Header Component*/}
      <Header />

      {/* Custom Item */}
      <DrawerItem
        label="🏠 Home"
        onPress={() => props.navigation.navigate('Home')}
      />

      <DrawerItem
        label="🔎 Search"
        onPress={() => props.navigation.navigate('Search')}
      />

      <DrawerItem
        label="👤 Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      {/* default items */}
      <DrawerItemList {...props} />
      {/* custom items */}
    </DrawerContentScrollView>
  );
}
