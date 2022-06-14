import { initializeApp } from "firebase/app";

import { 
  getAuth, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import { getFirestore, 
  doc,
  setDoc,
  orderBy, 
  collection, 
  writeBatch, 
  query, 
  getDocs 
} from 'firebase/firestore'

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
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore()

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

// adds doc to to Firestore DB collection
export const addRecipe = async (collectionKey, recipeTitle, recipeToAdd) => {
  const collectionRef = collection(db, collectionKey)
  await setDoc(doc(collectionRef, recipeTitle), recipeToAdd)
  console.log('Saved to DB');
}

// adding data from RECIPES_DATA.js to Firestore DB with running useEffect in recipes.context.js
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title)
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done');
}

// getting data from Firestore
// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, 'recipes')
//   const q = query(collectionRef, orderBy("title"))

//   const querySnapshot = await getDocs(q)
//   // this will give us the categories as an array
//   const recipeMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//     const { title, items } = docSnapshot.data()
//     acc[title] = items
//     return acc
//   }, {})

//   return recipeMap
// }
export const newGetCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'recipes')
  const q = query(collectionRef, orderBy("order", 'asc'))

  const querySnapshot = await getDocs(q)
  // this will give us the categories as an array
  const recipeMap = querySnapshot.docs.map(doc => (
    { ...doc.data() }
  ))

  return recipeMap
}

