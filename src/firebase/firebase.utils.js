import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyABXShyh8rWV4VEdFuQ8amGso-Y9PopXys",
  authDomain: "hymnmusicstore-db.firebaseapp.com",
  databaseURL: "https://hymnmusicstore-db.firebaseio.com",
  projectId: "hymnmusicstore-db",
  storageBucket: "hymnmusicstore-db.appspot.com",
  messagingSenderId: "844250940188",
  appId: "1:844250940188:web:0f09918619e6718137f0d9",
  measurementId: "G-PH2V2Q7L34"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
