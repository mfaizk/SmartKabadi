import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Icon, Input, Pressable, Checkbox} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Snackbar from 'react-native-snackbar';
import useUserStore from './stores/user.store';
import {StackActions} from '@react-navigation/native';

function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cnfpassword, setcnfPassword] = useState('');
  const [isVisible, setisVisible] = useState(false);
  const [isButtonEnable, setIsButtonEnable] = useState(false);
  const login = useUserStore(state => state.signUpWithEmailAndPassword);
  const user = useUserStore(state => state.user);
  const gSignin = useUserStore(state => state.signinWithGoogle);
  const emailRef = React.createRef();
  const passRef = React.createRef();
  const cnfpassRef = React.createRef();
  const nameRef = React.createRef();

  const validator = () => {
    if (email.trim() == '' && password.trim() == '' && name.trim() == '') {
      Snackbar.show({
        text: 'Enter information',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    } else {
      if (password.trim() == '') {
        Snackbar.show({
          text: 'Enter password',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      }
      if (email.trim() == '') {
        Snackbar.show({
          text: 'Enter email',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      }
      if (name.trim() == '') {
        Snackbar.show({
          text: 'Enter name',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      }
    }
    if (password.trim() != cnfpassword.trim()) {
      Snackbar.show({
        text: 'Password not matching',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      cnfpassRef.current.clear();
    }

    if (
      email.trim() != '' &&
      password.trim() != '' &&
      password.trim() == cnfpassword.trim() &&
      name.trim() != ''
    ) {
      logger();
    }
  };

  const logger = () => {
    login(email.trim(), password.trim(), name.trim());

    if (user) {
      emailRef.current.clear();
      passRef.current.clear();
      cnfpassRef.current.clear();
      nameRef.current.clear();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Welcome</Text>
        <Text style={styles.subheadText}>Sign up to continue</Text>
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
            ref={emailRef}
          />
          <Input
            size={'l'}
            placeholder="Name"
            w="100%"
            onChangeText={t => {
              setName(t);
            }}
            ref={nameRef}
          />
          <Input
            size={'l'}
            placeholder="Password"
            w="100%"
            onChangeText={t => {
              setPassword(t);
            }}
            ref={passRef}
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
          <Input
            size={'l'}
            placeholder="Password"
            w="100%"
            onChangeText={t => {
              setcnfPassword(t);
            }}
            ref={cnfpassRef}
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
          <View style={styles.checkBoxContainer}>
            <Checkbox
              _checked={isButtonEnable}
              onPress={() => {
                setIsButtonEnable(!isButtonEnable);
                // console.log('checked');
              }}>
              <Text style={styles.tAndCTextOne}>
                I accept the
                <Text
                  onPress={() => {
                    // console.log('pressed');
                  }}
                  style={styles.tAndCText}>
                  {' '}
                  Terms of Use{' '}
                </Text>{' '}
                &{' '}
                <Text onPress={() => {}} style={styles.tAndCText}>
                  Privacy Policy.
                </Text>
              </Text>
            </Checkbox>
          </View>
        </View>
        <TouchableOpacity
          style={
            isButtonEnable
              ? styles.loginButtonContainer
              : [styles.loginButtonContainer, {opacity: 0.5}]
          }
          onPress={() => {
            validator();
          }}
          disabled={!isButtonEnable}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
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
            onPress={() => {
              gSignin();
            }}
          />
          <Icon
            style={styles.altLoginIcon}
            as={<AntIcons name={'facebook-square'} />}
            size={6}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.dontText}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.signUptextContainer}
            onPress={() => {
              navigation.dispatch(StackActions.replace('/login'));
            }}>
            <Text style={styles.signUptext}>Log In</Text>
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
    height: Dimensions.get('window').height * 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    overflow: 'scroll',
  },
  checkBoxContainer: {
    marginRight: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    width: Dimensions.get('window').width,
  },
  tAndCText: {
    color: '#5e0098',
    fontWeight: 'bold',
  },
  tAndCTextOne: {
    color: '#758283',
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

export default SignupScreen;
