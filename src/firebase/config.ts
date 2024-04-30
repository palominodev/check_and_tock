import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APIKEY,
	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
	projectId: "check-and-tock",
	storageBucket: "check-and-tock.appspot.com",
	messagingSenderId: "201331991956",
	appId: "1:201331991956:web:8aa2436ab617f7bac79b81"
};

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)