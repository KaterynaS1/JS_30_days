/* Create an empty object called dog */
let dog = {};

/* Print the the dog object on the console */
console.log(dog);

/* Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_ */
dog.name = "Barsik";
dog.legs = 4;
dog.color = "black";
dog.age = 12;
dog.bark = function(){
  return "woof woof";
}

/* Get name, legs, color, age and bark value from the dog object*/
console.log(Object.values(dog));
console.log(dog.bark())

/* Set new properties the dog object: breed, getDogInfo */
dog.breed = 3;
dog.getDogInfo = function(name, legs, age){

}