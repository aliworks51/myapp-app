// firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAudK02R8jqxVXjJtPALeiQoXxE_iTEgTs",
  authDomain: "restaurantorders-a39ac.firebaseapp.com",
  databaseURL: "https://restaurantorders-a39ac-default-rtdb.firebaseio.com",
  projectId: "restaurantorders-a39ac",
  storageBucket: "restaurantorders-a39ac.appspot.com",
  messagingSenderId: "483352571527",
  appId: "1:483352571527:web:3d62d8d0d4dd5210549222",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Realtime Database instance
export const db = getDatabase(app);
