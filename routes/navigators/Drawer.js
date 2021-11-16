import React, { useContext } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeScreen from '../../screens/HomeScreen';
import { UserContext } from '../../context/UserContext';
import { Alert } from 'react-native';

const Drawer = createDrawerNavigator();

export const HomeDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name='Home' component={HomeScreen} />
    {/* <Text>Settings</Text> */}
  </Drawer.Navigator>
);
const settingAlert = () => {
  Alert.alert('Sorry, still under construction', 'Click OK to continue', [
    {
      text: 'Cancel',

      style: 'cancel',
    },
    { text: 'OK' },
  ]);
};
function CustomDrawerContent(props) {
  const { logOut } = useContext(UserContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Setting' onPress={() => settingAlert()} />
      <DrawerItem label='Logout' onPress={() => logOut()} />
    </DrawerContentScrollView>
  );
}
