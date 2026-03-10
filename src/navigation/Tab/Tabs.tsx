import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import ProfileScreen from '../../screens/ProfileScreen';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Tabs({ activeScreen, setActiveScreen }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // removes the top header
        tabBarStyle: {
          position: 'absolute', // make it float a bit
          elevation: 7,
          marginLeft: 40,
          marginRight: 40,
          bottom: 10,
          backgroundColor: '#F4F2EC',
          borderRadius: 20,
          height: 60,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }}
      // This screen will show first when the app loads
      initialRouteName={activeScreen}
      // Listen for when a tab is pressed
      screenListeners={{
        tabPress: e => {
          // Get the name of the tab that was pressed
          const fullTarget = e.target;
          const screenName = fullTarget?.split('-')[0]; // "Search"
          // Update the active screen
          if (screenName) {
            setActiveScreen(screenName);
          }
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
