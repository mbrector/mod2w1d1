function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function compute(a, b, op) {
    return op(a, b);
  }
  
  let result1 = compute(10, 5, add);
  let result2 = compute(10, 5, subtract);

  console.log(result1)
  console.log(result2)

  const flowers = ['rose', 'orchid', 'daisy'];

flowers.forEach(function(flower, idx) {
  console.log(`${idx + 1}) ${flower}`);
});

const colors = ['red', 'green', 'blue'];

console.log('BEFORE the forEach...');

colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});

console.log('AFTER the forEach...');

console.log('Code before the asynchronous function call');

setTimeout(function() {
  console.log('setTimeout code')
});

console.log('Code after the asynchronous function call');

// Synchronous function
function getFriends() {
  return ['Fred', 'Barney', 'Tim'];
}

// Get the friends
let friends = getFriends();

// The friends array is ready to work with because getFriends
// is synchronous and returned the array of friends we wanted
friends.forEach(function(friend) {
  console.log(friend);
});

// // asynchronous function
// function getFriendsAsync() {
//   // Using setTimeout to make getFriendsAsync
//   // behave like a long-running database operation
//   setTimeout(function() {
//     return ['Fred', 'Barney'];
//   }, 0);
// }

// // Will friends have an array after this line of code runs?
// let friends1 = getFriendsAsync();

// // The following will cause an error because
// // friends is not an array yet
// friends1.forEach(function(friend) {
//   console.log(friend);
// })


// Refactor to accept a callback function
// to be called when the data is ready
function getFriendsAsync(cb) {
  setTimeout(function() {
    // pass the results to the provided callback
    cb(['Fred', 'Barney']);
  }, 0);
}

// Execute and provide it with an anonymous callback function
// to be called by the getFriendsAsync function
getFriendsAsync(function(friends1) {
  friends1.forEach(function(friend) {
    console.log(friend);
  });
});

// regular function
let square = [1, 2, 3].map(function (x) { return x * x });
// arrow function
let squares = [1, 2, 3].map(x => x * x);

// x => { ... }  // one parameter
// () => { ... }  // no parameters
// (x, y) => { ... }  // two or more parameters

const getGrade = score => {
  if (score === 100) return 'A+';
  score = Math.floor(score / 10);
  return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
}; 
console.log(getGrade(65))

const logThis = () => { console.log('this') };
const logThis1 = () => console.log('this');

logThis()
logThis1()

// const add = (x, y) => { return x + y };

// // Ideal single-statement arrow function
// const add = (x, y) => x + y;

// // Returns undefined (blocks are like reg functions)
// const add = (x, y) => { x + y };

// // Syntax error, must be an expression
// const add = (x, y) => return x + y;

// let todos = ['Buy milk', 'Mow lawn'];

// // Below line of code won't work - looks like a statement block
// // let todoObjects = todos.map(todo => {todo: todo, done: false});

// // Wrap the implicit returned object in parens
// let todoObjects = todos.map(todo => ({todo: todo, done: false}));

// // Nope, syntax error (no declarations for arrow functions)
// add(x, y) => x + y;

// // This is what you want - a function expression
// const add = (x, y) => x + y;
