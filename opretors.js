// Arithimaric opprators : **********************************
var a = 10, b = 20;
var sum = a + b, sub = a - b, div = a / b, mod = a % b, mul = a * b;
document.write("<br>--->sum of A and B = " + sum + "<br>---> subraction of A and B = " + sub + "<br>---> Division of A and B = " + div + "<br>---> Module of A and B = " + mod + "<br> ---> Multiplication of A and B = " + mul);

// Assignment opprators: **********************************
var a = 12, b = 50;
a += 14;
b -= 10;
document.write("<br>Assignment oprators : " + a);
document.write("<br>Assignment oprators : " + b);

// conditional opprators: **********************************
document.write("<br><br> ---->this is a conditional Oppretors : ");

var a = 12, b = "12";
if (a == b) {
    document.write("<br> * Both are same");
}
else {
    document.write("<br> * Both are Not same");
}
if (a != b) {
    document.write("<br> * The value of A and B are not Same ");
}
else {
    document.write("<br> * The value of A and B are Same");
}
if (a === b) {
    document.write("<br> * The value and the type  of A and B are Same ");
}
else {
    document.write("<br> * The value and the type  of A and B are not  Same<br>");
}

// Instanceof Oppretors : ******************************
var a = ["silver", "oak", "University"];
document.write(a instanceof Array);
document.write("<br>");
document.write(a instanceof Object);


//Class Instaceof **************************

class Triangle {
    constructor(height, base) {
        this.height = height;
        this.base = base;
    }

}
var T = new Triangle(10,10);
document.write(T instanceof Triangle);
document.write("<br>");
var area=(T.height*T.base)/2;
document.write("<br>"+area);
document.getElementById("m1").innerHTML = "--> Area of Triangle is " + area;
document.write(T.height*T.base);

// concout :**************

var s1="Aaquib";
var s2="salimbhai";
var s3="Badarpura";
 var s4=s1+" "+s2+" "+s3
document.write("<br>"+s1+" "+s2+" "+s3);
document.write(s4);



