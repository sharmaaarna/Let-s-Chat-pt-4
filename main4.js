var firebaseConfig = {
    apiKey: "AIzaSyDUkwKdvuRxSQpj3z4nhM0e9qxqNEP8oPU",
    authDomain: "kwitter-4106e.firebaseapp.com",
    databaseURL: "https://chater-3ccbc-default-rtdb.firebaseio.com",
    projectId: "chater-3ccbc",
    storageBucket: "kwitter-4106e.appspot.com",
    messagingSenderId: "830577768237",
    appId: "1:830577768237:web:20bd75ed51a93301f5c5a4"
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
    alert();
    firebase.database().ref("/").on('value', function (snapshot) {
        alert();
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