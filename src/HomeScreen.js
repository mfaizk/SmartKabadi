import {StyleSheet, Text, View, Button, Alert} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Button title="Press me" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
