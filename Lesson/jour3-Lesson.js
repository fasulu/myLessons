// 01 - Array
var fruits = ["mango", "lemon", "blueberry"];

console.log(fruits)
console.table(fruits)

// 02 - Access
var ingredients = ["eggs", "milk", "butter"];

console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"))

// 03 - Add and Remove
var myObjects = ["pen", "book", "lamp"]; 

myObjects.unshift("chair");  // insert at the beginning
console.log(myObjects);

myObjects.pop();  // remove the last array value
console.log(myObjects);

myObjects.push("laptop");  // to add at the end
console.log(myObjects);

myObjects.shift(); // remove the first item in the array
console.log(myObjects);

// Test remove elements array
// var array = [2, 5, 9, 15, 76, 43];

// console.log(array);

// var index = array.indexOf(5)

// console.log(index);

// array.splice(index, 3)

// console.log(array);

// 04 - Order
var myNumbers = [4, 10, 8, 12, 6];

myNumbers.reverse();
console.log(myNumbers);

myNumbers.sort((a, b) => a - b);
console.log(myNumbers);

// 05 - Boucle
var total = 0;
var limit = 10;

for (var i = 0; i <= limit; i++) {
    // total = total + i; // Pareil que la ligne en dessous
    total += i;

    console.log("total partiel:", total);
}

console.log(total);

// 06 - Reverse
var sentence = "Hello Konexio !";
var myArray = sentence.split("");

// console.table(myArray);

var result = [];

for (var i = 0; i < myArray.length; i++) {
    var item = myArray[i];
    
    // console.log("item", item);

    result.unshift(item);
}

// console.table(result);

console.log(result.join(""));

// H e l l o

// o l l e H

// var numbers = [9, 10];

// console.log(numbers)

// numbers.unshift(8);

// console.log(numbers)

// numbers.unshift(7);

// console.log(numbers)

// numbers.unshift(6);

// console.log(numbers)

// numbers.unshift(5);

// console.log(numbers)


// console.log(["e", "H"])
// console.log(["l", "e", "H"])
// console.log(["l", "l", "e", "H"])
// console.log(["o", "l", "l", "e", "H"])

// Bonus I
var limit = 100;

for (var i = 0; i <= limit; i++) {

    if (i % 7 !== 0) {
        // if (i % 15 === 0) {
        //     console.log("fizzbuzz", i);
        // }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz", i);
        }
        else if (i % 5 === 0) {
            console.log("buzz", i);
        } else if (i % 3 === 0) {
            console.log("fizz", i);
        } else {
            console.log("value of i", i);
        }

    }

    // console.log("fin d'une iteration");
}

// Bonus II
var total = 0;
var limit = 10;

var i = 0;

while (i <= limit) {
    total += i;

    i++;
}

console.log(total);

// Bonus III
var students = ["Amir", "Asma", "Sabrina", "Fasulu", "Ikram", "Karim"]; // 6

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// console.log(students[5]);

var min = 0;
var max = students.length - 1;

var random = Math.random(); // 0 inclus et 1 exclu

var indexRandom = Math.floor(random * (max + 1));

console.log(students[indexRandom])

// var students = ["Amir", "Asma", "Sabrina", "Fasulu", "Ikram", "Karim"]; // 6

// var min = 0;
// var max = students.length - 1;

// var i = 1;

// while (students[i] !== "Amir") {
//     i = Math.floor(Math.random() * (max + 1));

//     console.log(students[i]);
// }

// Bonus IV
var array = [];
var min = 0;
var max = 100;
var numRandom = 0;

for (var i = 1; i <= 20; i++) {
    numRandom = Math.floor(Math.random() * (max - min + 1));

    // console.log(numRandom);

    if (array.indexOf(numRandom) === -1) {
        array.push(numRandom);
    } else {
        i--;
    }
}

console.table(array);

var numMax = array[0]; 

for (var i = 1; i < array.length; i++) {
    var item = array[i];

    if (item > numMax) {
        numMax = item;
    }
}

console.log(numMax);