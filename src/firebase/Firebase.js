import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBURI3lv7xIeL-N-VVuAYhQkH7_f4mQzzY",
  authDomain: "dogehub2021.firebaseapp.com",
  projectId: "dogehub2021",
  storageBucket: "dogehub2021.appspot.com",
  messagingSenderId: "149273332492",
  appId: "1:149273332492:web:c3413d55996074fd461729",
  measurementId: "G-Z2JRF0WX29",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
