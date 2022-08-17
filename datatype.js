//var declaration*****************


var a = 10, b = 23;
var c = a + b;
document.write("<br>" + c);
var student = "Aaquib";



//let declaration**************

let d = 5, e = 10;
let f = e * d;
document.write("<br>" + f);



//const declaration****************

const pie = 3.14;
document.write("<br>" + pie * a * b)

document.write("<br>", typeof (student));


//object declaration****************
var car = new Object();
var car = {
    car_name: "BMW",
    car_model: 2020,
    car_color: "babypink"
};
document.write("<br>" + car.car_name + " " + car.car_model + " " + car.car_color);

// array Declaration****************************

var student = ["aaquib", "rishab", "ovesh"];
document.write("<br>" + student[0] + " " + student[1]);

//Function declaration*************************

var demo = function () {
    return "hello world"
};
document.write("<br>" + demo());

document.write("<br>", typeof (demo()));

//area of circle********************************


function arithmetic() {

    var length = prompt("Enter the length :");
    var breadth = prompt("Enter the breadth :");
    var area = length * breadth;
    alert("Area of ractangle is : " + area);
}
function Area_of_Rec() {


    var l = document.getElementById("sa1").value;
    var b = document.getElementById("sa2").value;
    var area = l * b;
    document.getElementById("m1").innerHTML = "--> Area of Rectangle is " + area;
}
function Area_of_cir() {

    const pie = 3.14;
    var r = document.getElementById("sa3").value;
    var area = pie * r * r;
    document.getElementById("m2").innerHTML = "--->  Area of circle is " + area;
}
function Area_of_squ() {


    var s = document.getElementById("sa5").value;
    var area = s * s;
    document.getElementById("m3").innerHTML = "--->  Area of Square is " + area;

}
function Area_of_tri() {


    var l = document.getElementById("sa7").value;
    var b = document.getElementById("sa8").value;
    var h = document.getElementById("sa9").value;

    var area = l * b * h;
    document.getElementById("m4").innerHTML = "-->  Area of Triangle is " + area;
}



