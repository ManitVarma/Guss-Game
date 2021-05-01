function login(){
    document.getElementById("input1").value = input_1;
    document.getElementById("input2").value = input_2;

    localStorage.setItem("input_1", input_1);
    localStorage.setItem("input_2", input_1);


    window.location = "word_r.html";
}
function back(){
    window.location = "option.html";
}
var input_1 = [];
var input_2 = [];