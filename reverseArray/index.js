/* 
Problem Statement:
Write a function, reverseArray(), that takes in an array as an 
argument and returns a new array with the elements in the reverse 
order.

There’s a built-in method that does a lot of this work for you, 
but here you’re not allowed to use it.

*/

function reverseArray(arr) {
  let reversed = [];
  for (let counter = arr.length - 1; counter >= 0; counter--) {
    reversed.push(arr[counter]);
  }
  return reversed;
}

const sentence = ["sense.", "make", "all", "will", "This"];
console.log(reverseArray(sentence));
