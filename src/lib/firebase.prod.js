import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: 'AIzaSyD0oyI-pPWLL2W9xpVrwOb8pu_GRCPjiZw',
  authDomain: 'netflix-clone-781ae.firebaseapp.com',
  databaseURL: 'https://netflix-clone-781ae.firebaseio.com',
  projectId: 'netflix-clone-781ae',
  storageBucket: 'netflix-clone-781ae.appspot.com',
  messagingSenderId: '246069506669',
  appId: '1:246069506669:web:850262c347e8c6789d4564',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
