import { View, Text, StyleSheet, Alert } from 'react-native';
import React from 'react';
// Drawer
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Header from '../../components/Header/Header';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* Header */}
      <Header />

      {/* Middle Items */}
      <View>
        <DrawerItem
          focused={props.state.index === 0}
          labelStyle={
            props.state.index === 0 ? styles.selectedItem : styles.itemText
          }
          label={() => <Text style={styles.itemText}>🏠 Home</Text>}
          onPress={() => props.navigation.navigate('Home')}
        />

        <DrawerItem
          focused={props.state.index === 1}
          labelStyle={
            props.state.index === 1 ? styles.selectedItem : styles.itemText
          }
          label={() => <Text style={styles.itemText}>🔎 Search</Text>}
          onPress={() => props.navigation.navigate('Search')}
        />

        <DrawerItem
          focused={props.state.index === 2}
          labelStyle={
            props.state.index === 2 ? styles.selectedItem : styles.itemText
          }
          label={() => <Text style={styles.itemText}>👤 Profile</Text>}
          onPress={() => props.navigation.navigate('Profile')}
        />

        {/* Default Drawer Items */}
        <DrawerItemList {...props} />
      </View>

      {/* Logout at the bottom */}
      <View style={styles.bottomContainer}>
        <DrawerItem
          label={() => <Text style={styles.logoutText}>🚪 Logout</Text>}
          onPress={() => Alert.alert('Logout', 'You pressed logout!')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // push bottomContainer to bottom
  },
  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  itemText: {
    fontSize: 20, // bigger font for Home, Search, Profile
    fontWeight: 'bold',
  },

  selectedItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F46E5', // highlighted color
  },
  logoutText: {
    fontSize: 20, // bigger font
    fontWeight: 'bold',
    color: '#E11D48', // red-ish color for emphasis
    textAlign: 'center',
  },
});
