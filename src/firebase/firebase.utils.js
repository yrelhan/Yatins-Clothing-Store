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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
