const firebaseConfig = {
      apiKey: "AIzaSyA7zPav30JVinvTiYbe6Skn9TRnX1_MRNU",
      authDomain: "pingugod-kwitter.firebaseapp.com",
      databaseURL: "https://pingugod-kwitter-default-rtdb.firebaseio.com",
      projectId: "pingugod-kwitter",
      storageBucket: "pingugod-kwitter.appspot.com",
      messagingSenderId: "375998279092",
      appId: "1:375998279092:web:a2feb88bd243e10a7956e1",
      measurementId: "G-8SXXV3302M"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
username=localStorage.getItem("username")
document.getElementById("username").innerHTML="Welcome "+username




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
