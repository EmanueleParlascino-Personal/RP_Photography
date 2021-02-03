import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpvd2I1KBiUi6exBwTe81ILEJma42NiUE",
    authDomain: "robertap-foodphotography.firebaseapp.com",
    projectId: "robertap-foodphotography",
    storageBucket: "robertap-foodphotography.appspot.com",
    messagingSenderId: "1037752314205",
    appId: "1:1037752314205:web:0249c935e8012d7d35e0b4",
    measurementId: "G-3LN3QLSJG7"
})

var  db = firebaseApp.firestore();

export{ db }


//reference code: https://www.npmjs.com/package/sendemail
// Email : robertafoodphotography@gmail.com

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.5/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>npm install -g firebase-tools

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDpvd2I1KBiUi6exBwTe81ILEJma42NiUE",
    authDomain: "robertap-foodphotography.firebaseapp.com",
    projectId: "robertap-foodphotography",
    storageBucket: "robertap-foodphotography.appspot.com",
    messagingSenderId: "1037752314205",
    appId: "1:1037752314205:web:0249c935e8012d7d35e0b4",
    measurementId: "G-3LN3QLSJG7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/