//GLOBLE METHOD TO COVERTING STRING INTO NUMBER : ********************************

var heading = "   ------->  Converting string into a Number :   ";
document.write("<br><br>" + heading);


document.write("<br><br>", +Number("123"));
document.write("<br>", +Number("aaquib"));
document.write("<br>", +Number("12.67843"));
document.write("<br>", +Number("12_34"));
document.write("<br>", +Number("12 94"));
document.write("<br>", +Number(" "));
document.write("<br>", +Number(""));
document.write("<br>", +Number("_"));
document.write("<br>", +Number("100 + 32 "));
document.write("<br><br>", +Number("100" + "32"));







// //GLOBLE METHOD TO COVERTING NUMBER INTO STRING : ********************************
var heading = "  ------->  Converting Number into a string :   ";
document.write("<br><br>" + heading);

document.write("<br><br>" + String(123));
document.write("<br>" + String(123.000931));
document.write("<br>" + String(12.67843));
document.write("<br>" + String(100 + 32));
document.write("<br>" + String("100 + 32") + String("100 + 32"));
document.write("<br>" + String("100 + 32"));

var heading = "  ------->  Converting Number into a string :   ";
document.write("<br><br>" + heading);
var num = 10;
var stri = "123 + 10";
document.write("<br><br>" + num.toString());

var title = "  ------->  Converting Number into a ToExponential :   ";
document.write("<br><br>" + title);
var numexp = 3.14321;

document.write("<br><br>" + numexp.toExponential(3));
document.write("<br><br>" + numexp.toExponential(6));
document.write("<br><br>" + numexp.toExponential(6));
document.write("<br><br>" + numexp.toExponential(0));


var title = "  ------->  Converting Number into a Tofixed :   ";
document.write("<br><br>" + title);
var numfix = 3.14321;
document.write("<br><br>" + numfix.toFixed(2));
document.write("<br><br>" + numfix.toFixed(8));
document.write("<br><br>" + numfix.toFixed(0));

var title = "  ------->  Converting Number into a Toprecision :   ";
document.write("<br><br>" + title);
var numpre = 3.14321;
document.write("<br><br>" + numpre.toPrecision());
document.write("<br><br>" + numpre.toPrecision(3));
document.write("<br><br>" + numpre.toPrecision(6));
document.write("<br><br>" + numpre.toPrecision(8));

var title = "  ------->  Converting to ParseInt:   ";
document.write("<br><br>" + title);

var parseint = 12.098;

document.write("<br><br>" + parseInt("-10"));
document.write("<br><br>" + parseInt("-10.3400"));
document.write("<br><br>" + parseInt("-20"));
document.write("<br><br>" + parseInt("45.878754"));
document.write("<br><br>" + parseInt("34 Aaquib"));
document.write("<br><br>" + parseInt("45_ tree"));


var title = "  ------->  Converting to parseFloat:   ";
document.write("<br><br>" + title);

document.write("<br><br>" + parseFloat("-10"));
document.write("<br><br>" + parseFloat("-10.8765"));
document.write("<br><br>" + parseFloat("10"));
document.write("<br><br>" + parseFloat("10.0987"));
document.write("<br><br>" + parseFloat("23 56 776 75"));
document.write("<br><br>" + parseFloat("78 aaquib"));

var title = "  ------->  Converting to Date :   ";
document.write("<br><br>" + title);

document.write("<br><br>" + new Date(12));
document.write("<br><br>" + new Date("12-03-12"));
document.write("<br><br>" + new Date(2022,6,26,9,30,50));

var title = "  ------->  Converting to Current Date :   ";
document.write("<br><br>" + title);

var D= new Date();
document.write("<br><br>" +D.toString());
document.write("<br><br>" +D.toUTCString());
document.write("<br><br>" +D.toISOString());

var title = "  ------->  Converting to Current time :   ";
document.write("<br><br>" + title);

document.write("<br><br>" +D.getTime());
document.write("<br><br>" +D.getDate());
document.write("<br><br>" +D.getDay());
document.write("<br><br>" +D.getFullYear());
document.write("<br><br>" +D.getHours());
document.write("<br><br>" +D.getMonth());
document.write("<br><br>" +D.getDay()+"/" +D.getMonth()+ "/" +D.getFullYear());


















//2018 11 24 10 33 30 0























