import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/WelcomeScreen';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
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
          <Stack.Screen name="/signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
