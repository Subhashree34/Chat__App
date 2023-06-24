//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBzMzGtoEj-wK44DKSWHOzrT-d3EtZrH1g",
    authDomain: "kwitter1-3d456.firebaseapp.com",
    databaseURL: "https://kwitter1-3d456-default-rtdb.firebaseio.com",
    projectId: "kwitter1-3d456",
    storageBucket: "kwitter1-3d456.appspot.com",
    messagingSenderId: "1002601267165",
    appId: "1:1002601267165:web:5945832e9030ed67ea4034"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push ({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
  }
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
