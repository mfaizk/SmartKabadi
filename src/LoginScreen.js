import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Icon, Input, Pressable} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Snackbar from 'react-native-snackbar';
function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setisVisible] = useState(false);

  const validator = () => {
    if (email.trim() == '') {
      Snackbar.show({
        text: 'Enter email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
    if (password.trim() == '') {
      Snackbar.show({
        text: 'Enter password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Welcome back,</Text>
        <Text style={styles.subheadText}>Sign in to continue</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formInputContainer}>
          <Input
            size={'l'}
            placeholder="Email"
            w="100%"
            onChangeText={t => {
              setEmail(t);
            }}
          />
          <Input
            size={'l'}
            placeholder="Password"
            w="100%"
            onChangeText={t => {
              setPassword(t);
            }}
            type={isVisible ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setisVisible(!isVisible)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={isVisible ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted-400"
                />
              </Pressable>
            }
          />
          <TouchableOpacity>
            <Text style={styles.fgPass}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => {
            validator();
          }}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <Text>or</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.altLoginIconContainer}>
          <Icon
            style={styles.altLoginIcon}
            as={<AntIcons name={'google'} />}
            size={6}
          />
          <Icon
            style={styles.altLoginIcon}
            as={<AntIcons name={'facebook-square'} />}
            size={6}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.dontText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signUptextContainer}
            onPress={() => {
              navigation.navigate('/signup');
            }}>
            <Text style={styles.signUptext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5e0098',
  },
  headContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    padding: 10,
  },
  headText: {
    color: '#fff',
    fontSize: 30,
  },
  subheadText: {
    color: '#C4B5FD',
    fontSize: 15,
    fontWeight: '300',
  },
  formContainer: {
    height: Dimensions.get('window').height * 0.75,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
  },
  formInputContainer: {
    // backgroundColor: 'blue',
    height: Dimensions.get('window').height * 0.25,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  fgPass: {
    color: '#4C1D95',
    fontWeight: 'bold',
  },
  loginButtonContainer: {
    backgroundColor: '#5e0098',
    maxWidth: 450,
    minWidth: 350,
    maxHeight: 55,
    minHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
  },
  lineContainer: {
    // backgroundColor: 'blue',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: Dimensions.get('window').width * 0.35,
    height: 1,
    backgroundColor: '#E5E7EB',
    margin: 20,
  },
  altLoginIconContainer: {
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  altLoginIcon: {
    margin: 5,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    marginTop: 'auto',
    textAlign: 'center',
  },
  signUptextContainer: {
    // backgroundColor: 'blue',
    margin: 2,
  },
  signUptext: {
    color: '#5e0098',
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    textAlign: 'center',
  },
  dontText: {
    color: '#6B7280',
  },
});

export default LoginScreen;
