import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React, {Component, useEffect} from 'react';
import useUserStore from './stores/user.store';

const HomeScreen = () => {
  const out = useUserStore(state => state.signOut);
  const user = useUserStore(state => state.user);
  useEffect(() => {
    // const [u] = user;
    // console.log(user);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text style={{color: '#111'}}>Welcome {user?.email}</Text>
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
