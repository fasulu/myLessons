// Jour 4

// 01

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};

console.log(cat);
console.log(cat.age);
console.log(cat["age"]);

// if (cat.isCute === true) { // is the same as below!
if (cat.isCute) {
    console.log("So cute !");
}


// 02

var cat2 = {
    name: "Félix",
    age: 5,
    isCute: false,
    // properties: {
    //     color: "black & white",
    //     jump: 15
    // }
};

var cats = [cat, cat2];

// console.log(cats)

console.log("Age of cat", cat.age)
console.log("Age of cat 2", cats[0].age)


console.log("cat2 isCute? ", cat2.isCute);
console.log("cat2 isCute? 2", cat2["isCute"])
console.log("cat2 isCute? 3", cats[1].isCute)
console.log("cat2 isCute? 4", cats[1]["isCute"])

var keyName = "isCute"
console.log("cat2 isCute? 5", cat2[keyName])
console.log("cat2 isCute? 6", cats[1][keyName])


// 03

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkIfEven(3);
checkIfEven(4);
checkIfEven(543);
checkIfEven(86734319);

// 04

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else if (num2 > num1) {
        console.log(`${num2} is bigger`);
    } else {
        console.log("Both are the same");
    }
}

compare(12, 10);
compare(1, 10);
compare(10, 10);

// 05

function addUp(num) {
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

var result = addUp(12);
console.log(result);
addUp(12);


// 06

function format(num) {
    // 124 secondes => 2m et 4s
    // je sais que 1m = 60s
    /*
    console.log(Math.floor(num / 3600)); // heures
    console.log(num % 3600) // minutes et les secondes
    console.log(Math.floor(num % 3600 / 60));
    console.log(num % 3600 % 60);
    */

    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floor(restHours / 60);
    var secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}

function formatWithoutMaths(num) {
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    for (var i = 0; i < num; i++) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        if (hours === 24) {
            days++;
            hours = 0;
        }
    }
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

function mehdiFormat(num) {
    var hours = Math.floor(num / 3600);
    var rest = num - hours * 3600;
    var minutes = Math.floor(rest / 60);
    var seconds = rest - minutes * 60;
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

format(3700);
formatWithoutMaths(3700);
mehdiFormat(3700);

// 07

function generatePassword(num) {
    var max = 122;
    var min = 48;
    var password = "";
    for (var i = 0; i < num; i++) {
        var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        while (randomIndex >= 58 && randomIndex <= 64) {
            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        }
        var letter = String.fromCharCode(randomIndex);
        password += letter;
    }

    console.log(password);
}

generatePassword(10);

//Another solution
var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function generatePassword(num) {
    var password = []
    if (num < 6 || num > 15) {
        return "erreur";

    }
    else{
        for (var i = 0; i <= num; i++) {

            var max = lettres.length - 1
            var b = Math.floor(Math.random() * (max + 1))

            password.push(lettres[b])
        }
        return password.join("")
    }
}

var final= generatePassword(6)
console.log(final)

// 08

function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    var sum = 0;

    for (var i = 0; i < numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (max - min + 1) + min);

        sum += dice;
    }

    return sum;
}

var joueur1 = launchDice(5);
var joueur2 = launchDice(5);

if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}




