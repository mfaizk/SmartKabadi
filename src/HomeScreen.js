import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import useUserStore from './stores/user.store';

const HomeScreen = () => {
  const out = useUserStore(state => state.signOut);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            out();
          }}>
          <Text style={{color: 'black'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
