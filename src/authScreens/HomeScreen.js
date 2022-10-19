import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useUserStore from '../stores/user.store';

const HomeScreen = () => {
  const user = useUserStore(state => state.user);
  const out = useUserStore(state => state.signOut);
  return (
    <View>
      <Text style={{color: '#111'}}>Welcome {user?.email}</Text>
      <Text style={{color: '#111'}}>Open Drawer to see logout option</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
