import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import Tabs from '../Tab/Tabs';

const Drawer = createDrawerNavigator();

//  Accept the shared state as props
export default function DrawerNavigator({ activeScreen, setActiveScreen }) {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawer
          {...props}
          activeScreen={activeScreen} //  Passes active screen in drawer
          setActiveScreen={setActiveScreen} //  pass down
        />
      )}
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
      {/* Only ONE screen needed now — Tabs handles everything */}
      <Drawer.Screen name={activeScreen}>
        {() => (
          <Tabs
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen} //  Tab tells us when it changes
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
