var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "choclate chips", "bananas"];
var counter = 0;

// Write a while loop that prints out the contents of ingredients:
while ( counter < ingredients.length) {
  console.log(ingredients[counter])
  counter++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = (ingredients.length-1); i >= 0; i--) {
  console.log(ingredients[i])
}