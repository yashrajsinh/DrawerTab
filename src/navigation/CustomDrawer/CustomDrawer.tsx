import { View, Text, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Header from '../../components/Header/Header';

export default function CustomDrawer(props) {
  const { activeScreen, setActiveScreen, navigation } = props;

  // Helper: navigate drawer AND update shared state
  const navigateTo = (screen: string) => {
    setActiveScreen(screen); // tell Tabs to switch
    navigation.closeDrawer(); // close the drawer
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <Header />

      <View>
        <DrawerItem
          focused={activeScreen === 'Home'} // highlight based on shared state
          label={() => (
            <Text
              style={
                activeScreen === 'Home' ? styles.selectedItem : styles.itemText
              }
            >
              🏠 Home
            </Text>
          )}
          onPress={() => navigateTo('Home')}
        />
        <DrawerItem
          focused={activeScreen === 'Search'}
          label={() => (
            <Text
              style={
                activeScreen === 'Search'
                  ? styles.selectedItem
                  : styles.itemText
              }
            >
              🔎 Search
            </Text>
          )}
          onPress={() => navigateTo('Search')}
        />
        <DrawerItem
          focused={activeScreen === 'Profile'}
          label={() => (
            <Text
              style={
                activeScreen === 'Profile'
                  ? styles.selectedItem
                  : styles.itemText
              }
            >
              👤 Profile
            </Text>
          )}
          onPress={() => navigateTo('Profile')}
        />
      </View>

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
  container: { flex: 1, justifyContent: 'space-between' },
  bottomContainer: { padding: 20, borderTopWidth: 1, borderTopColor: '#eee' },
  itemText: { fontSize: 20, fontWeight: 'bold' },
  selectedItem: { fontSize: 20, fontWeight: 'bold', color: '#4F46E5' },
  logoutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E11D48',
    textAlign: 'center',
  },
});
