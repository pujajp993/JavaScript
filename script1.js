function clearScreen() {
    document.getElementById("output").value = "";
}

function one(value){
     document.getElementById("output").value+=1;
}
function two(value){
    document.getElementById("output").value+=2;
}
function three(value){
    document.getElementById("output").value+=3;
}
function four(value){
    document.getElementById("output").value+=4;
}
function five(value){
    document.getElementById("output").value+=5;
}
function six(value){
    document.getElementById("output").value+=6;
}
function seven(value){
    document.getElementById("output").value+=7;
}
function eight(value){
    document.getElementById("output").value+=8;
}
function nine(value){
    document.getElementById("output").value+=9;
}
function addition(value){
    document.getElementById("output").value += "+";
}
function subtraction(value){
    document.getElementById("output").value += "-";
}
function division(value){
    document.getElementById("output").value += "/";
}
function multiplication(value){
    document.getElementById("output").value += "*";
}
function calculate() {
    var a = document.getElementById("output").value;
    var b = eval(a);
    document.getElementById("output").value = b;
}