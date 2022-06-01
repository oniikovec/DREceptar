import { initializeApp } from "firebase/app";

import { 
  getAuth, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCeObpo2u8x3OsaxoOCGDFfUJ2f-87dzU4",
  authDomain: "dreceptar.firebaseapp.com",
  projectId: "dreceptar",
  storageBucket: "dreceptar.appspot.com",
  messagingSenderId: "238091798114",
  appId: "1:238091798114:web:c5e9d6637d0dcb26b3733b"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
// export const db = getFirestore()


// SIGN IN
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
}

// SIGN OUT
export const signOutUser = async () => await signOut(auth);

// gets triggered both times when user signs in or signs out; at the moment that auth changes, it il run a callback
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};