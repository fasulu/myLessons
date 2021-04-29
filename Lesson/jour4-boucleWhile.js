// ### 01 - Comptons

// A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200


var i = 50;
while (i <= 200) {
    console.log(i);
    i = i + 2;
}

var i = 50;
while (i <= 200) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// 02 - Try again

// Créez une variable `dice` valant null et une variable `count` valant 0
// Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé 
// aléatoire à dice et ajoutez 1 à `count`
// Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6


var dice = null;
var count = 0;
var min = 1;
var max = 6;
while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min); // 1 2 3 4 5 ou 6
    count++;
}

console.log(count);


// 03 - Course

// Créez deux variables `ussainBolt` et `tysonGay` valant 0
// Tant que l'une des deux variables n'a pas dépassé 100 
// Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre à la 
// premiere variable et le deuxieme à la deuxieme
// Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier)c


var ussainBolt = 0;
var tysonGay = 0;
var min = 1;
var max = 10;

while (ussainBolt < 100 || tysonGay < 100) {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += number1;
    tysonGay += number2;

    console.log("Ussain Bolt", ussainBolt);
    console.log("Tyson Gay", tysonGay);
}

/*do {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += number1;
    tysonGay += number2;
} while (ussainBolt < 100 || tysonGay < 100);*/

if (ussainBolt > tysonGay) {
    console.log("Le vainqueur est Ussain Bolt");
} else if (tysonGay > ussainBolt) {
    console.log("Le vainqueur est Tyson Gay");
} else {
    console.log("Egalité !");
}

