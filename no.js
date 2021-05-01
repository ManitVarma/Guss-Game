function login(){
    player_1 = document.getElementById("player_1").value
    player_2 = document.getElementById("player_2").value

    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location = "no_r.html";
}
function back(){
    window.location = "option.html";
}
var player_1 = [];
var player_2 = [];