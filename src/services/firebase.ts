import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBSI4B1pwhQxLMs5RP-KeJlUh0k4MI5zvE",
  authDomain: "bici-81f1b.firebaseapp.com",
  databaseURL: "https://bici-81f1b-default-rtdb.firebaseio.com/",
  storageBucket: "bici-81f1b.appspot.com"
};

const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);