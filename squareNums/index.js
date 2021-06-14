/*
Problem Statement:
Write a function, squareNums(), that takes in an array 
of numbers and, using .map(), returns an array with the 
square of each of the elements of that array.

You can test your function when you’re ready by passing 
in the numbers array or by making your own array!

*/

function squareNums(nums) {
  let square = nums.map((num) => (num *= num));
  return square;
}

console.log(squareNums([1, 2, 3]));
