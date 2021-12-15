// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMZEXnHFQLY-kYqKkcv7LJQrb3OwNlDkc",
    authDomain: "qt-reminder-app.firebaseapp.com",
    projectId: "qt-reminder-app",
    storageBucket: "qt-reminder-app.appspot.com",
    messagingSenderId: "356755957426",
    appId: "1:356755957426:web:fb0ec88d656d35b986cbab"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }