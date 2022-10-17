import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/WelcomeScreen';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Login"
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
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
