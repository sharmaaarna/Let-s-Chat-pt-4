var firebaseConfig = {
    apiKey: "AIzaSyCpVKB0QjyepZ86P0hAqx1F_Q_ffVfxww0",
    authDomain: "let-s-chat-2ea2d.firebaseapp.com",
    databaseURL: "https://let-s-chat-2ea2d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-2ea2d",
    storageBucket: "let-s-chat-2ea2d.appspot.com",
    messagingSenderId: "1057711292154",
    appId: "1:1057711292154:web:62e22a3a5090c05778d343"
  };
  firebase.initializeApp(firebaseConfig);

    
  function AddRoom() {
      RoomName = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(RoomName).update({
          purpose: "addingRoomName"
      });
      localStorage.setItem("RoomName", RoomName);
      
      window.location = "index3.html";
  }
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("room").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("room").innerHTML += row;
        });
    });
}
  
  getData();  
  
  function redirectToRoomName(name){
      localStorage.setItem("RoomName",name);
      window.location="index3.html";
  }
  
  function logOut(){
      localStorage.removeItem("RoomName");
      localStorage.removeItem("user");
      window.location="index.html";
  }