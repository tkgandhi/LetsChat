// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDYMlvgECeBjGsi-6eBlIS9EVrE5i91b_I",
  authDomain: "kwitter-ba86a.firebaseapp.com",
  databaseURL: "https://kwitter-ba86a-default-rtdb.firebaseio.com",
  projectId: "kwitter-ba86a",
  storageBucket: "kwitter-ba86a.appspot.com",
  messagingSenderId: "154487512514",
  appId: "1:154487512514:web:ad095e348757dee732ca5b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";

}