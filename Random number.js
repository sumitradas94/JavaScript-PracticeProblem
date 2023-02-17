
// SEQUENCE SELECTION PROBLEM 

//Q1: Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.

let rnd1=Math.floor(Math.random()*10);
console.log("Single digit random number: "+rnd1);
console.log();

//Q2: Use REPL – Use Random to get Dice Number between 1 to 6.

let rnd2=Math.floor(Math.random()*10)%(1,6);
console.log("Random number between 1 to 6 : "+rnd2);
console.log();


//Q3: Use REPL – Add two Random Dice Number and Print the Result.
let rnd3=Math.floor(Math.random()*10)%(1,6);

let rnd4=Math.floor(Math.random()*10)%(1,6);
console.log("Addition of random number: "+(rnd3+rnd4));
console.log();


//Q4: Use Script & Debug – Write a program that reads 5 Random 2 Digit values , then find their sum and the average.
let rnd5=Math.floor(Math.random()*100);
let rnd6=Math.floor(Math.random()*100);
let rnd7=Math.floor(Math.random()*100);
let rnd8=Math.floor(Math.random()*100);
let rnd9=Math.floor(Math.random()*100);

let add=(rnd5+rnd6+rnd7+rnd8+rnd9);
console.log("Addition of five random number: "+add);
let avg=add/5;
console.log("Average of five random number: "+avg);
console.log();


/*Q5: Use Script & Debug – Unit Conversion
a. 1ft = 12 in then 42 in = ? ft
b. Rectangular Plot of 60 feet x 40 feet in meters
c. Calculate area of 25 such plots in acres */

let InchToFt=42/12;
console.log("42 inch = "+InchToFt);

let lengthInMeter=60*0.3048;
let WidthInMeter=40*0.3048;
let area=lengthInMeter*WidthInMeter;
console.log("Area in square meter = "+area);

let areaOf1Plot=area/4046.86;
let areaOf25Plot=areaOf1Plot*25;
console.log("Area of 25 plots in acres = "+areaOf25Plot);

