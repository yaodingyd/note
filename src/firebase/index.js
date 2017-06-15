import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCFwGYmWj2WahSbEHtXJCx52X24z_-czUE',
  authDomain: 'fir-bec3f.firebaseapp.com',
  databaseURL: 'https://fir-bec3f.firebaseio.com',
  projectId: 'fir-bec3f',
  storageBucket: 'fir-bec3f.appspot.com',
  messagingSenderId: '583969630469'
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.database()

export const auth = firebase.auth()
