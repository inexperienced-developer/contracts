import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApivdGqdv1i7fAWmy1ns_CxBLDtLkW8-Q",
  authDomain: "contracts-df1b0.firebaseapp.com",
  projectId: "contracts-df1b0",
  storageBucket: "contracts-df1b0.appspot.com",
  messagingSenderId: "286865610906",
  appId: "1:286865610906:web:cd8cc5b160994eace5a723"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);