import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB7_y_nEu7WAZ2cQcVF9CbcWGSMPhSWTqs',
  authDomain: 'react-native-auth-138a2.firebaseapp.com',
  databaseURL: 'https://react-native-auth-138a2.firebaseio.com',
  projectId: 'react-native-auth-138a2',
  storageBucket: '',
  messagingSenderId: '405181151205',
  appId: '1:405181151205:web:fdd5977f37baa072',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve({message: true});
      })
      .catch(() => {
        auth.createUserWithEmailAndPassword(email, password)
          .then(() => {
            resolve({message: true});
          })
          .catch(() => {
            resolve({message: false});
          });
      });
  });
}

export {loginUser,auth};
