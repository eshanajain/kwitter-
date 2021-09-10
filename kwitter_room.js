 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyB542zppSzz-BOZe5aBehCor1kaEJ-TDmQ",
      authDomain: "kwitter-test-7a1b2.firebaseapp.com",
      databaseURL: "https://kwitter-test-7a1b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-7a1b2",
      storageBucket: "kwitter-test-7a1b2.appspot.com",
      messagingSenderId: "557447735110",
      appId: "1:557447735110:web:9fd7ca236fad2ef6f7e747"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome" + user_name;

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";

  
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" +Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

