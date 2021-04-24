import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCqpW_3swRstiOE-eCS4LyFdpiqJcf1DdI",
    authDomain: "firegram-a23c5.firebaseapp.com",
    projectId: "firegram-a23c5",
    storageBucket: "firegram-a23c5.appspot.com",
    messagingSenderId: "277137376274",
    appId: "1:277137376274:web:af2c621a8d9d52ddbbc4cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };