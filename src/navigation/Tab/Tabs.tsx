import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Tabs({ activeScreen, setActiveScreen }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // removes the top header
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
