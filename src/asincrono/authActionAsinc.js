import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebaseConfig';
import { login, logout } from '../action/authAction';

export const startWithGoogleAccount = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        }).catch(err => console.log(err));
    }

}

export const startWithFacebookAccount = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider).then((user) => {
            console.log(user);
        }).catch(err => {
            console.log(err);
        })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}