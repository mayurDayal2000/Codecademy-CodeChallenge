/*
Problem Statement:
Write a function isTheDinnerVegan() that takes in an array of 
food objects in the format: {name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every 
item in the array has entirely plant-based origins.

*/

function isTheDinnerVegan(meals) {
  const meal = meals.every((meal) => {
    return meal.source === "plant";
  });
  return meal;
}

const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];

console.log(isTheDinnerVegan(meal));
