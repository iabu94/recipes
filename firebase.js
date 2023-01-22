import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk8KCLmx7O_vNG1QUOCpAhGQ4AeyULfhg",
  authDomain: "slrecipes.firebaseapp.com",
  databaseURL: "https://slrecipes-default-rtdb.firebaseio.com/",
  projectId: "slrecipes",
  storageBucket: "slrecipes.appspot.com",
  messagingSenderId: "1014278369482",
  appId: "1:1014278369482:web:d855b0c39677937102c433",
  measurementId: "G-J6EXQSQJH4",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
