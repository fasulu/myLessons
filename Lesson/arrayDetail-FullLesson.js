// Creating JavaScript arrays
// JavaScript provides you with two ways to create an array. The first one is to use the Array constructor as follows:

let scores = new Array();

// Code language: JavaScript (javascript)
// The scores array is empty i.e. it holds no element.

// If you know the number of elements that the array will hold, you can create an array with an initial size as shown in the following example:

let scores = Array(10);

// Code language: JavaScript (javascript)
// To create an array with some elements, you pass the elements as a comma-separated list into the Array() constructor.

// For example, the following creates the scores array that has five elements (or numbers):

let scores = new Array(9,10,8,7,6);

// Code language: JavaScript (javascript)
// It’s important to notice that if you use the array constructor to create an array and pass into a number, you are creating an array with an initial size.

// However, when you pass a value of another type like string into the Array() constructor, you create an array with an element of that value. For example:

let athletes = new Array(3); // creates an array with initial size 3
let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'

// Code language: JavaScript (javascript)
// JavaScript allows you to omit the new operator when you use the array constructor. For example, the following statement creates the artists array.

let artists = Array();

// Code language: JavaScript (javascript)
// In practice, you’ll rarely use the Array() constructor to create an array.

// The more preferred way to create an array is to use the array literal notation:

let arrayName = [element1, element2, element3, ...];

// Code language: JavaScript (javascript)
// The array literal form uses the square brackets [] to wrap a comma-separated list of elements.

// The following example creates the colors array that hold three strings:

let colors = ['red', 'green', 'blue'];

// Code language: JavaScript (javascript)
// To create an empty array, you use square brackets without specifying any element like this:

let emptyArray = [];

// Code language: JavaScript (javascript)
// Accessing JavaScript array elements
// JavaScript arrays are zero-based indexed. In other words, the first element of an array starts at index 0, the second element starts at index 1, and so on.

// To access an element in an array, you specify an index in the square brackets []:

arrayName[index]

// Code language: CSS (css)
// The following shows how to access the elements of the mountains array:

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

// Code language: JavaScript (javascript)
// To change the value of an element, you assign that value to the element like this:

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains[2] = 'K2';

console.log(mountains);

// Code language: JavaScript (javascript)

// Output:

// [ 'Everest', 'Fuji', 'K2' ]
// Code language: JSON / JSON with Comments (json)
// Getting the array size
// Typically, the length property of an array returns the number of elements. The following example shows how to use the length property:

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains.length); // 3

// Code language: JavaScript (javascript)
// Basic operations on arrays
// The following explains some basic operations on arrays. And you’ll learn advanced operations such as map(), filter(), and reduce() in the next tutorials.

// 1) Adding an element to the end of an array
// To add an element to the end of an array, you use the push() method:

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');

console.log(seas); 

// Code language: JavaScript (javascript)

// Output:

// [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]
// Code language: JSON / JSON with Comments (json)
// 2) Adding an element to the beginning of an array
// To add an element to the beginning of an array, you use the unshift() method:

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.unshift('Red Sea');

console.log(seas);

// Code language: JavaScript (javascript)

// Output:

// [ 'Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
// Code language: JSON / JSON with Comments (json)
// 3) Removing an element from the end of an array
// To remove an element from the end of an array, you use the pop() method:

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas.pop();
console.log(lastElement); 

// Code language: JavaScript (javascript)

// Output:

// Baltic Sea
// 4) Removing an element from the beginning of an array
// To remove an element from the beginning of an array, you use the shift() method:

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas.shift();

console.log(firstElement);

// Code language: JavaScript (javascript)

// Output:

// Black Sea
// 5) Finding an index of an element in the array
// To find the index of an element, you use the indexOf() method:

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf('North Sea');

console.log(index); // 2

// Code language: JavaScript (javascript)
// 6) Check if an value is an array
// To check if a value is an array, you use Array.isArray() method:

console.log(Array.isArray(seas)); // true


// MULTI DIMENTIONAL ARRAY

var items = [       // create multi dimentional array
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  console.log(items[0][0]); // 1  // access specific location in an array
  console.log(items[0][1]); // 2
  console.log(items[1][0]); // 3
  console.log(items[1][1]); // 4
  console.log(items);

  items.push([7,8]); // add item at end of an array

  console.log(items[0][0]); // 1   // access specific location in an array
  console.log(items[0][1]); // 2
  console.log(items[1][0]); // 3
  console.log(items[1][1]); // 4
  console.log(items[3][0]); // 7
  console.log(items[3][1]); // 8
  console.log(items);

  items[3][1] = 100; // change value in a location

  items[1][0] = 'fas'; // change string value in a location


  console.log(items)

//********************************************************************* */

let activities = [];
// Code language: JavaScript (javascript)
// The following example defines a two-dimensional array named activities:

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// Code language: JavaScript (javascript)
// In the activities array, the first dimension represents the activity and the second one shows the number of hours spent per day for each.

// To show the activities array in the console, you use the console.table() method as follows:

console.table(activities);

// Code language: JavaScript (javascript)
// The following illustrates the output:

// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 9 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// └─────────┴─────────────┴───┘
// Code language: plaintext (plaintext)
// Note that the (index) column is for the illustration that indicates the indices of the inner array.

// To access an element of the multidimensional array, you first use square brackets to access an element of the outer array that returns an inner array; and then use another square bracket to access the element of the inner array.

// The following example returns the second element of the first inner array in the activities array above:


console.log(activities[0][1]); // 9

// Code language: JavaScript (javascript)
// Adding elements to the JavaScript multidimensional array
// You can use the Array methods such as push() and splice() to manipulate elements of a multidimensional array.

// For example, to add a new element at the end of the multidimensional array, you use the push() method as follows:

activities.push(['Study',2]);

console.table(activities);

// Code language: CSS (css)
// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 9 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// │    5    │   'Study'   │ 2 │
// └─────────┴─────────────┴───┘
// Code language: plaintext (plaintext)
// To insert an element in the middle of the array, you use the splice() method. The following inserts an element in the second position of the activities array:

activities.splice(1, 0, ['Programming', 2]);

console.table(activities);

// Code language: CSS (css)
// Here is the output:

// ┌─────────┬───────────────┬───┐
// │ (index) │       0       │ 1 │
// ├─────────┼───────────────┼───┤
// │    0    │    'Work'     │ 9 │
// │    1    │ 'Programming' │ 2 │
// │    2    │     'Eat'     │ 1 │
// │    3    │   'Commute'   │ 2 │
// │    4    │  'Play Game'  │ 1 │
// │    5    │    'Sleep'    │ 7 │
// │    6    │    'Study'    │ 2 │
// └─────────┴───────────────┴───┘
// Code language: plaintext (plaintext)
// This example calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.

activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);

// Code language: JavaScript (javascript)
// The following shows the output in the console:

// ┌─────────┬───────────────┬───┬───────┐
// │ (index) │       0       │ 1 │   2   │
// ├─────────┼───────────────┼───┼───────┤
// │    0    │    'Work'     │ 9 │ '38%' │
// │    1    │ 'Programming' │ 2 │ '8%'  │
// │    2    │     'Eat'     │ 1 │ '4%'  │
// │    3    │   'Commute'   │ 2 │ '8%'  │
// │    4    │  'Play Game'  │ 1 │ '4%'  │
// │    5    │    'Sleep'    │ 7 │ '29%' │
// │    6    │    'Study'    │ 2 │ '8%'  │
// └─────────┴───────────────┴───┴───────┘
// Code language: plaintext (plaintext)
// Removing elements from the JavaScript multidimensional array
// To remove an element from an array, you use the pop() or splice() method.

// For example, the following statement removes the last element of the activities array.

activities.pop();

console.table(activities);

// Code language: CSS (css)
// Output:

// ┌─────────┬───────────────┬───┬───────┐
// │ (index) │       0       │ 1 │   2   │
// ├─────────┼───────────────┼───┼───────┤
// │    0    │    'Work'     │ 9 │ '38%' │
// │    1    │ 'Programming' │ 2 │ '8%'  │
// │    2    │     'Eat'     │ 1 │ '4%'  │
// │    3    │   'Commute'   │ 2 │ '8%'  │
// │    4    │  'Play Game'  │ 1 │ '4%'  │
// │    5    │    'Sleep'    │ 7 │ '29%' │
// └─────────┴───────────────┴───┴───────┘
// Code language: plaintext (plaintext)
// Similarly, you can remove the elements from the inner array of the multidimensional array by using the pop() method. The following example removes the percentage element from the inner arrays of the activities array.

activities.forEach((activity) => {
    activity.pop(2);
});

console.table(activities);

// Code language: JavaScript (javascript)
// Output:

// ┌─────────┬───────────────┬───┐
// │ (index) │       0       │ 1 │
// ├─────────┼───────────────┼───┤
// │    0    │    'Work'     │ 9 │
// │    1    │ 'Programming' │ 2 │
// │    2    │     'Eat'     │ 1 │
// │    3    │   'Commute'   │ 2 │
// │    4    │  'Play Game'  │ 1 │
// │    5    │    'Sleep'    │ 7 │
// └─────────┴───────────────┴───┘
// Code language: plaintext (plaintext)
// Iterating over elements of the JavaScript multidimensional array
// To iterate a multidimensional array, you use a nested for loop as in the following example.

// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

// Code language: JavaScript (javascript)
// The first loop iterates over the elements of the outer array and the nested loop iterates over elements of the inner array.

// The following shows the output of the script in the console:

// [0,0] = Work
// [0,1] = 9
// [1,0] = Eat
// [1,1] = 1
// [2,0] = Commute
// [2,1] = 2
// [3,0] = Play Game
// [3,1] = 1
// [4,0] = Sleep
// [4,1] = 7
// [5,0] = Study
// [5,1] = 2
// Or you can use the forEach() method twice:

activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});

// Code language: JavaScript (javascript)
// Output:

// Work
// 9
// Eat
// 1
// Commute
// 2
// Play Game
// 1
// Sleep
// 7
// Study
// 2
// Code language: plaintext (plaintext)
