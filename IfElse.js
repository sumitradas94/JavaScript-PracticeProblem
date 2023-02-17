
/* Q1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum 
    and the maximum value. */
    let a=Math.floor(Math.random()*1000);
    console.log(a);
    b=Math.floor(Math.random()*1000);
    console.log(b);
    c=Math.floor(Math.random()*1000);
    console.log(c);
    d=Math.floor(Math.random()*1000);
    console.log(d);
    e=Math.floor(Math.random()*1000);
    console.log(e);
    
    if (a>b && a>c && a>d && a>e)
    {
        console.log( "Greater random number is :- " +a);
    }
    else if (b>c && b>d && b>e)
    {
        console.log( "Greater random number is :- " +b);
    }
    else if (c>d && c>e)
    {
        console.log( "Greater random number is :- " +c);
    }
    else if (d>e)
    {
        console.log( "Greater random number is :- " +d);
    }
    else
    {
        console.log( "Greater random number is :- " +e);
    }


    /* Q2. Write a program that takes day and month from the command line and prints true if
    day of month is between March 20 and June 20, false otherwise.*/
   const prompt = require('prompt-sync')();

    let date = prompt("Enter day Of the Month : ");
    let month = prompt("Enter month Of the Year : ");
    date = parseInt(date);
    month = parseInt(month);

    if (date <= 20 && month <= 6 && month > 3 )
 {
    console.log("True");
 }

 else if (date < 31 && date >= 20 && month >= 3 && month < 6 )
 { 
    console.log("True");
 }

 else if (date == 31 && month == 3 || month == 5 )
 {
    console.log("True");
 }

 else
 {
    console.log("False");
 }

 /*Q3:Write a program that takes a year as input and outputs the Year is a Leap Year or not
 a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
 divisible by 400.*/
 const prompt1 = require('prompt-sync')();
 let year = prompt("Enter Year : ");
 let yearToCheck = parseInt(year);
 let isLeapYear = false;

 if ((yearToCheck % 4 == 0 && yearToCheck % 100 == 0) || yearToCheck % 4 == 0) {
	isLeapYear = true;
 } else {
	isLeapYear = false;
 }

 console.log(yearToCheck + " is a leap year ? " + isLeapYear);

 /*Q4:Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.*/
 console.log("Coin Flip Simulation");

if(Math.random() > 0.5){
    console.log("Heads!");
}
else{
    console.log("Tails!");
}

