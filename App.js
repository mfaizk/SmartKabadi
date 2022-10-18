import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/WelcomeScreen';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import {NativeBaseProvider} from 'native-base';
import useUserStore from './src/stores/user.store';
import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {navigationRef} from './src/stores/user.store';
import HomeDrawer from './src/HomeDrawer';
const Stack = createNativeStackNavigator();

const App = () => {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);

  // useEffect(() => {
  //   console.log(user);
  // }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={user ? '/home' : '/welcome'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="/welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="/login"
            component={LoginScreen}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#5e0098'},
              headerTitleStyle: {color: '#fff'},
              headerTintColor: '#fff',
              headerTitle: 'Log In',
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="/signup"
            component={SignupScreen}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#5e0098'},
              headerTitleStyle: {color: '#fff'},
              headerTintColor: '#fff',
              headerTitle: 'Sign Up',
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen name="/home" component={HomeDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
