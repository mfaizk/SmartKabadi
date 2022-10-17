import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Welcome back,</Text>
        <Text style={styles.subheadText}>Sign in to continue</Text>
      </View>
      <View style={styles.formContainer}>
        <Text>Hello</Text>
        <TextInput />
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
});

export default LoginScreen;
