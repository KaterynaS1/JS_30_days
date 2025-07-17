/* Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range. */
(function(...args){
  let sum = 0;
  for(const number of args){
    sum = sum+number;
  }
  console.log(sum);
}
)(1, 2, 5, 6, 7)

/* Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range. */
let b = 13;
const sumOfOdds = (b) => {
let sum = 0;
  for (a = 0; a<=b; a++) {
    if (a%2===1){
      sum = sum + a;
    } 
  }
  return sum;
}
console.log(sumOfOdds(b));

/* Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
 */
function evenAndOdds(number) {
  let even = 0;
  let odd = 0;
  for (i=0; i<=number; i++){
    if (i%2===0){
      even++;
    } else {
      odd++;
    }
  }
  return `the number of evens are ${even}, the number of odds are ${odd}`;
}
console.log(evenAndOdds(100));

/* Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```
*/
function userIdGenerator(){
  let a;
  let rand, character; 
  let arr = [];
  for (i = 0; i<7; i++) {
    a = Math.ceil(Math.random()*3);
    switch (a){
      case 1:
        rand = Math.floor(Math.random() * 9)+48;
        character = String.fromCharCode(rand);
        break;
      case 2:
        rand = Math.floor(Math.random() * 25)+65;
        character = String.fromCharCode(rand);
        break;
      case 3:
        rand = Math.floor(Math.random() * 25)+97;
        character = String.fromCharCode(rand);
        break;
    }
    arr.push(character);
  }
  return arr.join(", ");
}
console.log(userIdGenerator());