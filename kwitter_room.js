

var firebaseConfig = {
  apiKey: "AIzaSyCuMUhIj7dotbMOOXR5s2qsC6vOg_Lv2Y8",
    authDomain: "ghgghyhg-c3b78.firebaseapp.com",
    databaseURL: "https://ghgghyhg-c3b78-default-rtdb.firebaseio.com",
    projectId: "ghgghyhg-c3b78",
    storageBucket: "ghgghyhg-c3b78.appspot.com",
    messagingSenderId: "565182218280",
    appId: "1:565182218280:web:293cbcfce37f6769f8351d"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
