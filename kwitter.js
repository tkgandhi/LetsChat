function addUser() {
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}

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