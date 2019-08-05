import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: 'AIzaSyDbZvzWRSBuv3obz6IJ_WqkTP97wH4EZno',
  authDomain: 'geometric-watch-246204.firebaseapp.com',
  // databaseURL: 'https://geometric-watch-246204.firebaseio.com',
  projectId: 'geometric-watch-246204',
  //   storageBucket: 'geometric-watch-246204.appspot.com',
  //   messagingSenderId: '502482847019'
};

if (!firebase.apps.length) {
  // initializing with the config object
  firebase.initializeApp(config);
}

// separting database API and authentication
const db = firebase.firestore();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
