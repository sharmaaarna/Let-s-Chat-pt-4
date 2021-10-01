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
  
  user = localStorage.getItem("user");
  RoomName = localStorage.getItem("RoomName");
  
  function send() {
    sendMsg = document.getElementById("mes").value;
    firebase.database().ref(RoomName).push({
      Name: user,
      Message: sendMsg,
      Like: 0
    });
  }
  
  function getData() {
    firebase.database().ref("/" + RoomName).on('value',
      function (snapshot) {
        document.getElementById("room").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if (childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['Name'];
            message = message_data['Message'];
            like = message_data['Like'];
            name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
            span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
  
            row = name_with_tag + message_with_tag + like_button + span_with_tag;
            document.getElementById("room").innerHTML += row;
          }
        });
      });
  }
  getData();
  
  function logOut() {
    localStorage.removeItem("RoomName");
    localStorage.removeItem("user");
    window.location = "index.html";
  }
  
  function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(RoomName).child(message_id).update({
      Like: updated_likes
    });
  }