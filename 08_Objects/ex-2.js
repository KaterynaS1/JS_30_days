/* Find the person who has many skills in the users object. */
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let winner = 0;
let a;
let mostSkilledUser;

function manySkills(){

  for (const user in users){
    a = users[user].skills.length;
    if(a > winner){
      winner = a;
      mostSkilledUser = user;
    }
  }
  return mostSkilledUser;
}
console.log(manySkills());

/* Count logged in users, count users having greater than equal to 50 points from the following object.
*/

function loggedIn(){
  let i = 0;
  for (const user in users){
    if (users[user].isLoggedIn == true){
      i++;
    }
  }
  return i;
}
console.log(loggedIn());

function greaterThanEqualPoints(){
  let i=0;
  for (const user in users) {
    if (users[user].points>50){
      i++;
    }
  }
  return i;
}
console.log(greaterThanEqualPoints());

/* Find people who are MERN stack developer from the users object */
let mernUsers = [];
let countUsers = 0;
function MernDeveloper(){
  for (const user in users){
    let count =0;
    for (let i = 0; i<users[user].skills.length; i++){
      switch (users[user].skills[i]) {
        case "MongoDB":
          count++;
          break;
        case "Express":
          count++;
          break;
        case "React":
          count++;
          break;
        case "Node":
          count++;
      }
      if (count == 4){
        mernUsers[countUsers] = user;
        countUsers++;
      }
    }
  }
  return mernUsers;
}
console.log(MernDeveloper());

/* Get all keys or properties of users object */
console.log(Object.keys(users)); //just keys
console.log(Object.values(users)); //just values
console.log(Object.keys(users.Alex)); //keys of the first object of the users

/* Get all the values of users object */
console.log(Object.entries(users));
