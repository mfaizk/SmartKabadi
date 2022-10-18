import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useUserStore from '../stores/user.store';

const HomeScreen = () => {
  const user = useUserStore(state => state.user);
  const out = useUserStore(state => state.signOut);
  return (
    <View>
      <Text>Welcome {user?.email}</Text>
      <Text
        onPress={() => {
          out();
        }}>
        Logout
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
