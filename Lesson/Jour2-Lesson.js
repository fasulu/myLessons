// Exo
var myString = "Hola";
var strKonexio = " Konexio";
var addSecondString = "ça va?";


// La valeur de myString va changer
myString += strKonexio;

console.log("myString 1er fois:", myString);

myString += " " + addSecondString;

console.log("myString 2eme fois:", myString);


// Numbers
var num1 = 512
console.log("num1 : ", num1);
console.log("num1.length :", num1.length)

num1 = num1.toString()
console.log("num1 : ", num1);
console.log("num1.length :", num1.length)

console.log(typeof num1.toString())

// Float

var myFloat = 5.67
var mySecondFloat = 1.4

console.log("Math.ceil: ", Math.ceil(mySecond))
console.log("Math.floor: ", Math.floor(myFloat))

// Math max et min
var num1 = 12;
var num2 = 3;
var num3 = -15;

console.log(Math.max(num1, num2, num3));
console.log(Math.min(num1, num2, num3));

// Math round
var testRound = 7.4

console.log(Math.round(testRound))

// Random entre deux nombres
var testRandom = Math.random();

console.log("Math.random : ", testRandom)

var min = 1;
var max = 100;

var result = Math.floor(Math.random() * max + min); 
// Si mon random est 0, il me manque 1 pour arriver a mon min
// Si mon random est 0,99 , il me manque 1 pour arriver a mon max

console.log(result);

// Explication detaille pour min 72 et max 130: 

//Math.random() => entre 0 et 0,99

// Donc dans le cas ou le random est min possible alors 0 => 0 * 130 (max) = 0
        // alors il faut que rajoute le min pour qu'il soit pas plus petit que ça

// Dans le cas ou le randome est le max possible alors 0,99 => 0,99 * 130 = 128,7
        // si je rajoute le min pour l'autre cas (qui est en haut), je vais depasser pour ce cas-ci

// Pour pouvoir rajouter le min (72) à la formule, je change la multipl avec la 
// difference entre le max et le min

// mon random * (max - min) + min
    // si random 0 => 0 * 58 = 0 => et je rajoute le min après donc => toujours 72
    // si random est le max donc 0,99 => 0,99 * 58 = 57,42 => et je rajoute le min après donc 129,42

// je reajuste la formule comme ceci => mon random * (max - min + 1) + min
// et il me reste le arrondir

var min = 72;
var max = 130;
var myRandom = Math.random()

console.log("myRandom:", myRandom)

var formula = myRandom * (max - min + 1) + min

console.log("formula:", formula)

var result = Math.floor(formula)

console.log("result:", result)

// if / else
var num1 = 5

if (num1 >= 5) {

    console.log("It's equal or bigger than 5");

} else if (num1 <= 3 ) {

    console.log("It's equal or smaller than 3")

} else {

    console.log("It's 4 then!")

}

console.log("It's finished");


// switch

var season = "Autumn"

switch (season) {
    case "Winter":
        console.log("It's Winter! buuuuu");
        break;

    case "Autumn":
        console.log("It's Autummn, donc pas trop mal");
        break;

    case "Summer":
        console.log("It's Summer!!! :D");
        console.log("Let's go to the pool then!");
        break;

    case "Spring":
        console.log("It's Spring yeaaaah!");
        break;

    default:
        console.log("That's not a season!");
        break;
}


// parseInt
var myString = "555"

console.log(parseInt(myString))
console.log(typeof parseInt(myString))


// !== different

if (4 !== "4") {
    console.log("Yes, they are different")
} else {
    console.log("No, they are the same")
}

// && (ET)
var age = 9;

if (age > 6 && age < 11) {
    console.log("You can play!")
} else {
    console.log("You can't play this game. It's for kids between 6 and 11")    
}

// || (OU)
var phoneBrand = "samsung"
var computerBrand = "samsung"

// Raccourci: Alt Gr + 6 => |
if (phoneBrand === "apple" || computerBrand === "apple") {
	console.log("you have at least one apple product !");
} else {
    console.log("You don't have an apple product")
}

// Combinaisons
var isSunny = false;
var motivation = 90;
var workToDo = "none";

if (isSunny === true || (motivation === 100 && workToDo === "none") ) {

	console.log("Let's go to the park !")

} else {

    console.log("I can't go to the park")

}

// 01 - Number
var integer = 102;
var float = 13.9;

console.log(integer);
console.log(float)

// 02 - Convert
var basic = 34;
var stringfied = basic.toString()

console.log(stringfied);

// 03 - Round
var num = 1.5;

var rounded = Math.round(num)

console.log(rounded)

// 04 - Arithmétique
var test = 12;
var bis = 5;

console.log("Addition:", test + bis);

console.log("Soustraction:", test - bis);

console.log("Multiplication:", test * bis);

console.log("Division:", test / bis);

console.log("Puissance:", test ** bis);

console.log("Reste:", test % bis);

// 05 - Comparaison
var test = 143;
var bis = 219;

console.log("> :", test > bis);

console.log("< :", test < bis);

console.log(">= :", test >= bis);

console.log("<= :", test <= bis);

console.log("== :", test == bis);

console.log("=== :", test === bis);

console.log("!= :", test != bis);

console.log("!== :", test !== bis);

// 06 - Condition
var limit = 50;
var score = 64;

if (score >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh noooo...")
}

// 07 - Condition II
var password = "azerty";

if (password.length > 5) {
    console.log("The password is secure");
}

// 08 - Condition III
var limit = 50;
var score = 49;
var password = "azert";

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

// Bonus 3
var roundedNumber = 3.6;
// var roundedNumber = 3.3;
// var roundedNumber = 3.8;
// var roundedNumber = 12.4;

// console.log("Math.floor:", Math.floor(roundedNumber))
// console.log("Math.ceil:", Math.ceil(roundedNumber))

var decimal = roundedNumber - Math.floor(roundedNumber);

console.log("My decimal part:", decimal);

var result = 0;

if (decimal >= 0.5) {
    result = Math.ceil(roundedNumber);
} else {
    result = Math.floor(roundedNumber);
}

console.log("My result:", result);

// Bonus 3 - string
var roundedNumber = 3.6;
// var roundedNumber = 3.3;
// var roundedNumber = 3.8;
// var roundedNumber = 12.4;

var strNum = roundedNumber.toString();

console.log("strNum.indexOf", strNum.indexOf("."))

var position = strNum.indexOf(".");

console.log("strNum substring", strNum.substring(position));

var strDecimal = "0" + strNum.substring(position);

// console.log("strDecimal", strDecimal);

// var intDecimal = parseInt(strDecimal); // Not necessary

var result = 0;

if (strDecimal >= 0.5) {
    result = Math.ceil(roundedNumber);
} else {
    result = Math.floor(roundedNumber);
}

console.log(result);