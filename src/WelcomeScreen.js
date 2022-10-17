import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {/* <Button title="Press me" onPress={() => navigation.navigate('Login')} /> */}
      <Image
        style={styles.mainContainerLogo}
        source={require('../assets/welcomeLogo.png')}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('/login');
          // console.log('Login');
        }}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => {
          navigation.navigate('/signup');
        }}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e0098',
  },
  loginButton: {
    maxWidth: 450,
    minWidth: 350,
    maxHeight: 55,
    minHeight: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  signupButton: {
    maxWidth: 450,
    minWidth: 350,
    maxHeight: 55,
    minHeight: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e0098',
    borderColor: '#fff',
    borderWidth: 1,
    margin: 10,
  },
  loginText: {
    color: '#5e0098',
  },
  signupText: {
    color: '#fff',
  },
});

export default WelcomeScreen;
