import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5-vQJWMSfzPNDIcylw8qtG8UWY10TTGU",
  authDomain: "todoappauthentication.firebaseapp.com",
  projectId: "todoappauthentication",
  storageBucket: "todoappauthentication.firebasestorage.app",
  messagingSenderId: "364313711657",
  appId: "1:364313711657:web:eb5ad4bd21914558563838"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);