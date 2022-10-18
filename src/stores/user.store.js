import create from 'zustand';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
import {StackActions, NavigationActions} from '@react-navigation/native';

const UserStore = set => ({
  user: auth().currentUser,
  setUser: user => {
    set(state => ({
      user: [user, state.user],
    }));
  },
  loginWithEmailAndPassword: (email, passsword) => {
    auth()
      .signInWithEmailAndPassword(email, passsword)
      .then(user => {
        // console.log(user);
        set(state => ({
          user: [user, state.user],
        }));
        try {
          if (navigationRef.isReady()) {
            //   navigationRef.navigate('/home');
            navigationRef.dispatch(StackActions.popToTop());
            navigationRef.dispatch(StackActions.replace('/home'));

            // navigationRef.navigate('/home');
          }
        } catch (error) {
          console.log(error.message);
        }
      })
      .catch(e => {
        Snackbar.show({
          text: e.message,
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      });
  },
  signOut: () => {
    auth()
      .signOut()
      .then(() => {
        set(state => ({
          user: [{}, state.user],
        }));
        if (navigationRef.isReady()) {
          //   navigationRef.navigate('/welcome');
          //   navigationRef.dispatch(StackActions.replace('/welcome'));
          navigationRef.dispatch(StackActions.popToTop());
          navigationRef.dispatch(StackActions.replace('/welcome'));
        }
      });
  },
});

const useUserStore = create(UserStore, {name: 'user'});

export default useUserStore;
