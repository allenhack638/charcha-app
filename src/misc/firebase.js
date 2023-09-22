import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: 'AIzaSyC0nC6TjbRJiSgmRmfTBH1z9ny3hbasM04',
  authDomain: 'charcha-97891.firebaseapp.com',
  projectId: 'charcha-97891',
  storageBucket: 'charcha-97891.appspot.com',
  messagingSenderId: '330371571113',
  appId: '1:330371571113:web:ff6c853da99f21cc95b8b8',
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
