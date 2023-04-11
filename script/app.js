// SMIT ASSIGNMENT 1

// DAY-THURSDAY-06-APRIL-2023

// question 1
// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console


let num01 = prompt("Enter the first number:");
let num02 = prompt("Enter the second number:");
if (num01 > num02) {
    console.log(num01 + " is larger.");
} else if (num02 > num01) {
    console.log(num02 + " is larger.");
} else {
    console.log("The numbers are equal.");
}

// question 2 
// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


let num = prompt("Enter a number:");

if (num > 3) {
    alert("The sign is +");
} else if (num < -5) {
    alert("The sign is -");}
 else {
     alert("The number is zero.");
 }

// question 3
// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");


num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);
num4 = parseFloat(num4);
num5 = parseFloat(num5);


let largest = num1;
if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}
if (num4 > largest) {
    largest = num4;
}
if (num5 > largest) {
    largest = num5;
}


console.log("The largest number is: " + largest);

// questin 4
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
// question 5
// . Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A


const marks = [80, 65, 77, 92, 53];

const sum = marks.reduce((acc, val) => acc + val, 0);

const average = sum / marks.length;

let grade;

switch (true) {
    case (average < 60):
        grade = "F";
        break;
    case (average < 70):
        grade = "D";
        break;
    case (average < 80):
        grade = "C";
        break;
    case (average < 90):
        grade = "B";
        break;
    default:
        grade = "A";
}

console.log(`The average marks is ${average.toFixed(2)}.`);
console.log(`The corresponding grade is ${grade}.`);

// question 6
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// question 7
// . Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *


for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}