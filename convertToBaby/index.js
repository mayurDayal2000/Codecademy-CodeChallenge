/*
Problem Statement:
Write a function, convertToBaby(), that takes in an 
array as an argument and, using a loop, returns a 
new array with each string in the array prepended 
with 'baby '. 

*/

function convertToBaby(animals) {
  for (let counter = 0; counter < animals.length; counter++) {
    console.log(`baby ${animals[counter]}`);
  }
}

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
convertToBaby(animals);