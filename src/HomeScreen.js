import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import useUserStore from './stores/user.store';

const HomeScreen = () => {
  const out = useUserStore(state => state.signOut);

  {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            out();
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default HomeScreen;
