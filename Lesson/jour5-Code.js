// 01  Test process addition (avec parseInt)

// Test process addition

// console.log(typeof process.argv[2])

var firstInput = parseInt(process.argv[2]);
var secondInput = parseInt(process.argv[3]);

// console.log(secondInput);

console.log(firstInput + secondInput)

// console.log(process.argv[2] + process.argv[3])

// console.log(process.argv[2])
// console.log(process.argv[3])
// console.log(process.argv[4])

// console.log(process.argv.slice(2))


// 02 Test process concat

console.log("My concat: ", process.argv[2] + process.argv[3])


// 03 Process argv avec functions

console.log(process.argv);

console.log("your third argument is:", process.argv[4])

function myFunction(one, two, three) {

    console.log("one:", one)
    console.log("two:", two)
    console.log("three:", three)
}

// myFunction("salut", 15, true)

// myFunction(process.argv[2], process.argv[3], process.argv[4])

var firstParamUser = process.argv[2];
var secondParamUser = process.argv[3];
var thirdParamUser = process.argv[4];

// myFunction(firstParamUser, secondParamUser, thirdParamUser)
myFunction(
    firstParamUser,
    secondParamUser,
    thirdParamUser)

// si myOperatorString == "+" => je fais une addition normal de javascript comme 
// on avait vu dans le jour 2 du module
console.log(6 + 14)

function calculate(num1, num2, operator) {

    // cette fonction reçoit num1 = 15
                        //   num2 = 5
                        //   operator = +
}

// 04 Require js file avec functions

//  main.js


// var checkIfNumberIsEven = require("./outils/normalFunctions.js");
var normalFunctions = require("./outils/normalFunctions");

// console.log(normalFunctions);

var checkIfNumberIsEven = normalFunctions.checkIfEven;
var launchSimpleDice = normalFunctions.launchDice;
var launchComplexDice = normalFunctions.launchComplexDice;

console.log("I will tell you if your number is even or odd");
// console.log(1);

var numInput = parseInt(process.argv[2]);
// console.log("numInput", numInput);

var myReturnEvenOrOdd = checkIfNumberIsEven(numInput);

console.log("Your number is ", myReturnEvenOrOdd);

// console.log(4);

// console.log("Thank you for helping to practice my code", launchSimpleDice())
console.log("Thank you for helping to practice my code");
console.log(launchComplexDice(2, 10));


// 05 outils/normalFunctions

function checkIfEven(num) {
    // console.log(2);

    if (num % 2 === 0) {
        // console.log("Even");
        return "Even";
    } else {
        // console.log("Odd");
        return "Odd";
    }
    // console.log(3);
}

function launchDice() {
    var min = 1;
    var max = 6;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function launchComplexDice(min, max) {
    console.log("min", min);
    console.log("max", max);

    return max * min

    // return Math.floor(Math.random() * (max - min + 1) + min);
}

// module.exports = checkIfEven;

module.exports = {
    checkIfEven,
    launchDice,
    launchComplexDice
}
