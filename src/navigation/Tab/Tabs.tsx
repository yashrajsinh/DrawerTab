import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Tabs({
  activeScreen,
  setActiveScreen,
}: {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}) {
  return (
    <Tab.Navigator
      // 👇 Jump to whatever screen the drawer selected
      initialRouteName={activeScreen}
      screenListeners={{
        // 👇 When user taps a tab, tell the drawer about it
        tabPress: e => {
          const screenName = e.target?.split('-')[0]; // extracts "Search" from "Search-abc123"
          if (screenName) setActiveScreen(screenName);
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
