import create from 'zustand';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
import {StackActions, NavigationActions} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const UserStore = set => ({
  user: auth().currentUser,
  setUser: user => {
    set(state => ({
      user: user.user,
    }));
  },
  signUpWithEmailAndPassword: (email, passsword, name) => {
    auth()
      .createUserWithEmailAndPassword(email, passsword)
      .then(user => {
        set(state => ({
          user: user.user,
        }));
        auth()
          .currentUser.updateProfile({
            displayName: name,
          })
          .then(() => {
            set(state => ({
              user: auth().currentUser,
            }));
          });

        try {
          if (navigationRef.isReady()) {
            navigationRef.dispatch(StackActions.popToTop());
            navigationRef.dispatch(StackActions.replace('/home'));
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
  loginWithEmailAndPassword: async (email, passsword) => {
    await auth()
      .signInWithEmailAndPassword(email, passsword)
      .then(user => {
        console.log(user);

        set(state => ({
          user: user.user,
        }));
        try {
          if (navigationRef.isReady()) {
            navigationRef.dispatch(StackActions.popToTop());
            navigationRef.dispatch(StackActions.replace('/home'));
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
  signinWithGoogle: async () => {
    GoogleSignin.configure({
      webClientId:
        '998722541265-qgi2h03k4ss1rbnhjpjdm7in0o8pqs8v.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    try {
      auth()
        .signInWithCredential(googleCredential)
        .then(u => {
          set(state => ({
            user: u.user,
          }));
          try {
            if (navigationRef.isReady()) {
              navigationRef.dispatch(StackActions.popToTop());
              navigationRef.dispatch(StackActions.replace('/home'));
            }
          } catch (error) {
            console.log(error.message);
          }
        });
    } catch (e) {
      Snackbar.show({
        text: e.message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
  },
  signOut: () => {
    auth()
      .signOut()
      .then(() => {
        set(state => ({
          user: null,
        }));
        if (navigationRef.isReady()) {
          navigationRef.dispatch(StackActions.popToTop());
          navigationRef.dispatch(StackActions.replace('/welcome'));
        }
      });
  },
});

const useUserStore = create(UserStore, {name: 'user'});

export default useUserStore;
