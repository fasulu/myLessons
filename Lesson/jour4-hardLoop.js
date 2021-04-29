//  01 - Sum

// Créez un tableau vide `numbers`
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 
// 100 dans votre tableau
// à l'aide d'une autre boucle for, calculez la somme des éléments de 
// votre tableau

var numbers = [];
var randomNumber = 0;

for (var i = 1; i <= 50; i++) {
    randomNumber = Math.floor(Math.random() * (100 + 1) + 1);

    numbers.push(randomNumber)

    // console.log(randomNumber);
} //i++

// console.log(numbers)

var total = 0;

console.log("i:", i);

for (var i = 0; i <= numbers.length - 1; i++) {
    total = total + numbers[i];
}

console.log("Total:", total);
// 149 + 45 = 194 => 194 + 34 = 228

// 02 - Max

// Créez un tableau vide `numbers`
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 
// dans votre tableau
// à l'aide d'une autre boucle for, trouvez le maximum des éléments de votre 
// tableau (sans utiliser la fonction)


var numbers = [];
var randomNumber = 0;

for (var i = 0; i <= 50; i++) {

    randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);

    numbers.push(randomNumber);
}

// console.table(numbers);

var maxNumbers = 0;

for (var j = 0; j <= numbers.length - 1; j++) {

    if (maxNumbers < numbers[j]) {
        maxNumbers = numbers[j];
    }

}

console.log("Final result", maxNumbers);

//  corrigé avec require


var funcGetMax = require("./outils/getMax");

var numbers = [];
var randomNumber = 0;

for (var i = 0; i <= 50; i++) {

    randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);

    numbers.push(randomNumber);
}

// console.table(numbers);

console.log("Final result", funcGetMax(numbers));

//  03 - Unique

// Créez un tableau vide `numbers`
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 
// dans votre tableau
// à l'aide d'une boucle while affichez le premier élément de votre tableau 
// superieur ou égal à 75 et inferieur ou égal à 100

var numbers = [];
var randomNumber = 0;

for (var i = 0; i <= 10; i++) {

    randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);

    numbers.push(randomNumber);
}

console.table(numbers)

var myElemRemoved = numbers.shift()
console.log("numbers shift", myElemRemoved);

console.table(numbers)

// var j = 0

// //              false  ||   true            => true
// //              false  ||   false           => false
// while (numbers[j] < 75 || numbers[j] > 100) {
//     j++;
// }

// console.log("final result", numbers[j]);

// var j = 0

// while (j <= numbers.length - 1) {
//     var elem = numbers[j];

//     if (elem >= 75 && elem <= 100) {
//         console.log("The first between 75 and 100 is:", elem)
//         break;
//     }

//     j++;
// }

var intervalNumber = 0;

// !false = true
// !true = false

//                 false      &&        true        => false
//                 true       &&       true         => true
while (!(intervalNumber >= 75 && intervalNumber <= 100)) {
    intervalNumber = numbers.shift();

    //intervalNumber = 102
    //intervalNumber = 82
}

console.log("final result", intervalNumber)

//  04 - Nested Loop

// Créez un tableau `words` avec les mots suivants

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

// A l'aide d'une boucle for, utilisez la méthode split pour créer un tableau 
// contenant les lettres de chaque mot.
// A l'aide d'une deuxieme boucle for (à l'interieur de la première), comptez 
// le nombre de "o" de chaque mot.
// Retournez le nombre total de "o"

// Résultat attendu: 8

var words = ["helolo", "goodbye", "yoes", "no", "ostop", "go go go"];
var tempArray = [];
var countO = 0;

for (var i = 0; i <= words.length - 1; i++) {
    // console.log(words[i].split(""))

    tempArray = words[i].split(" ").join("").split(""); // pour effacer les 
    // espaces, pas obligatoire

    console.log(tempArray);

    for (var j = 0; j <= tempArray.length - 1; j++) {
        // console.log("2eme boucle", tempArray[j]);

        if (tempArray[j] == "o") {
            // countO++;
            countO = countO + 1;
        }
    }
}

console.log("final result", countO);
