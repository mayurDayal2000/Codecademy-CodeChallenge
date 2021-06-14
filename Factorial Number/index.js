// Factorial of a number

function factorial(nums) {
  let temp = 1;
  for (let counter = nums; counter >= 1; counter--) {
    temp = temp * counter;
  }
  return temp;
}

factorial(6);