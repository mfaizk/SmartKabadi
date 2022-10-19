import {View, Text, StyleSheet, Dimensions} from 'react-native';
import feaIcons from 'react-native-vector-icons/Feather';
import {Icon} from 'native-base';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import useUserStore from '../../stores/user.store';
const CustomDrawer = props => {
  const user = useUserStore(state => state.user);
  const out = useUserStore(state => state.signOut);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.drawerHeader}>
        <Icon
          as={feaIcons}
          name="user"
          borderRadius={50}
          margin={5}
          size={16}
          style={styles.displayImage}
        />
        <Text style={styles.headerNameText}>{user?.displayName}</Text>
        <Text style={styles.headerEmailText}>{user?.email}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label={'Sign out'}
        onPress={() => {
          out();
        }}
        icon={() => <Icon as={feaIcons} name="log-out" color={'blue.900'} />}
        inactiveBackgroundColor="#E6425E"
        pressColor="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    color: '#fff',
  },
  drawerHeader: {
    backgroundColor: '#5e0098',
    height: Dimensions.get('window').height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerNameText: {color: '#fff', fontSize: 15},
  headerEmailText: {color: '#b59ac5', fontSize: 12},
  displayImage: {
    backgroundColor: '#fff',
    // borderRadius: 100,
  },
});

export default CustomDrawer;
