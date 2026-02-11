// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7f2r5KbTkk-14bc5cXNHEVlV5J1WfMf8",
  authDomain: "antrian-bank-prima-nadi.firebaseapp.com",
  databaseURL: "https://antrian-bank-prima-nadi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "antrian-bank-prima-nadi",
  storageBucket: "antrian-bank-prima-nadi.firebasestorage.app",
  messagingSenderId: "807742809953",
  appId: "1:807742809953:web:afeb350b36f4731d36c720"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


