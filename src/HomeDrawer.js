import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React, {Component, useEffect} from 'react';
import useUserStore from './stores/user.store';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './authScreens/HomeScreen';
import LoginScreen from './LoginScreen';

const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  const out = useUserStore(state => state.signOut);
  const user = useUserStore(state => state.user);
  useEffect(() => {
    // const [u] = user;
    // console.log(user);
  }, []);

  return (
    <Drawer.Navigator initialRouteName="Home">
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
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
