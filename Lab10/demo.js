//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("Console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("Alert - Hello World!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is " + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x = "+ globalX + ". y = "+y); 

}

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }
}

function mutiply() {
    var x = 25;
    var y = 42;
    var product = x * y; 
    alert("The product is " + product);
}
function division() {
    var x = 48;
    var y = 12;
    var division = x / y;
    alert("Each child gets " + division + " pencils.");
}
function mean() {
    var a = 25;
    var b = 47;
    var c = 98;
    var d = 46;
    var e = 52;
    var mean = (a+b+c+d+e)/5;
    alert("The mean is " + mean);
}
function comparison1() {
    var a = 100;
    var b = 1000;
    if(a > b) {
        alert("Yes. " + a + " is greater than " + b);
    }
    else if(a == b) {
        alert("No. " + a + " is equal to " + b);
    }
    else {
        alert("No. " + a + " is less than " + b);
    }
}
function comparison2() {
    var a = 5 * 4;
    var b = 20;
    if(a > b) {
        alert("Yes. " + a + " is greater than " + b);
    }
    else if(a == b) {
        alert("No. " + a + " is equal to " + b);
    }
    else {
        alert("No. " + a + " is less than " + b);
    }
}