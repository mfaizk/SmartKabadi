import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React, {Component, useEffect} from 'react';
import useUserStore from './stores/user.store';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './authScreens/HomeScreen';
import LoginScreen from './LoginScreen';
import DrawerHeader from './authScreens/component/CustomDrawer';
import CustomDrawer from './authScreens/component/CustomDrawer';
import feaIcons from 'react-native-vector-icons/Feather';
import {Icon} from 'native-base';

const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  const out = useUserStore(state => state.signOut);
  const user = useUserStore(state => state.user);
  useEffect(() => {
    // const [u] = user;
    // console.log(user);
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home">
      {/* <DrawerHeader name={user.displayName} email={user.email} /> */}

      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: `Welcome ${
            user?.displayName ? user?.displayName : 'Loading..'
          }`,
          headerStyle: {backgroundColor: '#5e0098'},
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#fff',
          drawerActiveTintColor: '#5e0098',
          drawerIcon: () => (
            <Icon as={feaIcons} name="home" color={'blue.900'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
