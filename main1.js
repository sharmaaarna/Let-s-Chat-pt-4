function add(){
    add_user = document.getElementById("textUserName").value;
    localStorage.setItem("user", add_user);
    window.location = "index2.html";
}