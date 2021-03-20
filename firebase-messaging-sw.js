importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyBLeDb0LTF7h1mLJ0jlzHmPosnLDUXjr9Q",
  authDomain: "ats-91.firebaseapp.com",
  databaseURL: "https://ats-91.firebaseio.com",
  projectId: "ats-91",
  storageBucket: "ats-91.appspot.com",
  messagingSenderId: "749505496307",
  appId: "1:749505496307:web:63bcbd6f9a4f622a2f2386"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
