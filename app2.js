const firebaseConfig = {
    apiKey: "AIzaSyCAg64ph15rEOfrEcG97Ae2gh-q89MbuUg",
    authDomain: "quizapp-8dc74.firebaseapp.com",
    databaseURL: "https://quizapp-8dc74-default-rtdb.firebaseio.com",
    projectId: "quizapp-8dc74",
    storageBucket: "quizapp-8dc74.appspot.com",
    messagingSenderId: "933295889341",
    appId: "1:933295889341:web:2b4a7ca891719dc3f190d4",
    measurementId: "G-634FDNP3K4"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


firebase.database().ref("Submit").on('child_added', function(data){
    console.log(data.val())
})

function myFunction(){
    var click = document.getElementById("name")
    var database = firebase.database().ref('Submit')
    var key = database.push().key
    var submit = {
        value: click.value,
        key: key
    }
    database.child(key).set(submit)
}
