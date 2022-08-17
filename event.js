function democlick() {
    document.body.style.backgroundColor = prompt("Enter your favrate color :");
}
function dbldemoclick() {
    document.body.style.backgroundColor = prompt("Enter your favrate color :");

}
function ondemofocus() {
    document.getElementById("a3").style.background = "red";
}
function ondemoblure() {
    document.getElementById("a4").style.background = "lightgreen";

}
function ondemokeypress() {
    alert("keypree done !");
}
function ondemokeyup() {
    alert("keypree done !");
}
// while loop :*********
var a = 0;
while (a < 10) {
    document.write("<br>" + a + "<br>");
    a++;
}
// do while loop : ****************
let y = 0;
do {
    document.write("<br>"+y);
    y++;
} while (y < 5);

// for loop :***********************

for (var i = 11; i < 20; i++) {
    document.write("&nbsp"+ i +"&nbsp");
}

// for of loop :**********************
var abc=["silver", "oak","University"];
for(v of abc){
    document.write("<br>"+v);
}
let xyz={
    carname: "BMW",
    carmodle: "1990",
}
for(a in xyz){
    document.write(xyz[a]);
}''