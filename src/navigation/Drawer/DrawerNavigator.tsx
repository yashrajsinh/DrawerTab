import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SearchScreen from '../../screens/SearchScreen';
import CustomDrawer from '../CustomDrawer/CustomDrawer';

//Drawer reference
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        drawerType: 'slide',
        headerLeft: () => (
          <Text
            style={{ fontSize: 24, marginLeft: 15 }}
            onPress={() => navigation.toggleDrawer()}
          >
            🟰
          </Text>
        ),
      })}
    >
      {/*Adding screens and hidding it drawer so we can ad custom buttons */}
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>
  );
}
