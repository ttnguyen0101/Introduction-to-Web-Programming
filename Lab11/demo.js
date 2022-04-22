//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


//console.log("console log - hello world");
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
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
    alert("Difference is" + diff);
}

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    //var charlie = 120;
    //var john = 120;
   
    var charlie = prompt("Enter charlie's height");
    var john = prompt("Enter john's height");

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

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

/*
Loops:
For loop
While loop
Do while loop

Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function CountMultiplesFn()
{
    var x = prompt("Enter the first number");
    CountMultiples(x);
    var y = prompt("Enter the second number");
    CountMultiples(y);
    var z = prompt("Enter the third number");
    CountMultiples(z);
}
function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}
function DisplayTriangleWithNRows()
{
    var num = prompt("Enter the number of rows for your triangle");
    DisplayTriangle(num);
}
function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInTriangle()
{
    var num = prompt("Enter the number of rows for your triangle");
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}

//Homework - Switch and Loops
//Sum of odd numbers between 5 and 150
function SumOfOdd() {
    var sum = 0;
    for (var i = 5; i <= 150; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    console.log("Sum of odd numbers: " + sum);
}

//Letter grade
function DisplayLetterGrade() {
    var numberGrade = prompt("Enter score >> ");
    var grade = parseInt(numberGrade);
    LetterGrade(grade);
}
function LetterGrade(grade) {
    var lgrade;

    switch(true)
    {
        case (grade >= 90 && grade <= 100):
            lgrade = 'A';
            break;

        case (grade >= 80 && grade < 90):
            lgrade = 'B';
            break;

        case (grade >= 70 && grade < 80):
            lgrade = 'C';
            break;

        case (grade < 70):
            lgrade = 'F';
            break;

        default:
            return 'Invalid grade';            
    }
    alert("Letter grade: " + lgrade);
}

//Multiples and Total between 1-200
function DisplayMultiple() {
    var x = prompt("Enter a number >> ");
    Multiples(x);
}
function Multiples(num) {
    var totalMultiples = 0;

    for(var i = 1;i <= 200; i++) {
        if (i % num == 0) {
            console.log(i);
            totalMultiples++;
        }
    }
    console.log("Total number of multiples of the number: " + totalMultiples);
}

//AB Triangle
function DisplayABTriangle() {
    var num = prompt("Enter the number of rows for AB triangle >> ");
    ABTriangle(num);
}
function ABTriangle(num) {
    var strRow = "";
    for (var i = 1; i <= num; i++){        
        strRow = "" ; 
        for (var j = 1; j <= i; j++) {
            if (j % 2 == 0) {
                strRow = strRow + "B";
            }
            else {
                strRow = strRow + "A";
            }
        }        
        console.log(strRow);   
    }
}

//Total As and Bs in Triangle
function CountABInTriangle() {
    var num = prompt("Enter the number of rows for AB triangle >> ");
    var strRow = "";
    var totalA = 0;
    var totalB = 0;
    for (var i = 1; i <= num; i++){        
        strRow = "" ; 
        for (var j = 1; j <= i; j++) {
            if (j % 2 == 0) {
                strRow = strRow + "B";
                totalB++;
            }
            else {
                strRow = strRow + "A";
                totalA++;
            }
        }    
        console.log(strRow);       
    }
    console.log("Total As: " + totalA);
    console.log("Total Bs: " + totalB);
}