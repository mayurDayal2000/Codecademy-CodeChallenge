/*
Problem Statement:
Write a function, greetAliens(), that takes in an array 
of strings and uses a for loop to print a greeting with 
each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!” 

*/

function greetAliens(arr) {
  for (let counter = 0; counter < arr.length; counter++) {
    console.log(
      `Oh powerful ${arr[counter]}, we humans offer our unconditional surrender!`
    );
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);