import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyB2wken6gnnuDG0MpkiaE2qFeF1_1LpTAA",
    authDomain: "challenge-c48aa.firebaseapp.com",
    projectId: "challenge-c48aa",
    storageBucket: "challenge-c48aa.appspot.com",
    messagingSenderId: "559560116629",
    appId: "1:559560116629:web:51ef93607e798a7fffce9c",
    measurementId: "G-QM165H36EQ"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const db = firebaseapp.firestore()
  const auth = firebase.auth()

  export { db, auth }
  