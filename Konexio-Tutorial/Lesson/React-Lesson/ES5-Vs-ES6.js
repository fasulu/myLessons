// Code de la journée pour ES6

// Aclaration: Commentez au fur et à mesure

// ES5
var myString = "Hello World"

myString = "Salut"

console.log(myString);

// ES6
let myString = "Hello World"

myString = "Salut"

console.log(myString);

const myString = "Hello World"

myString = "Salut"

console.log(myString);

const myArray = [1, 2, 3]

myArray.push(4)

myArray.pop()

console.log(myArray);

const myObject = {
    age: 20
}

myObject.age = 23

console.log(myObject);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

for (var i = 0; i < array.length; i++) {

}

testVar = "Yo"



var myVar = "Hello"

function myFunc() {
    var world = "World!"
    var myVar = "Salut tout le monde"

    // console.log(myVar);
    return myVar
}

// console.log(world);

myFunc()

console.log(myVar);


let myVar = "Hello"

// if ()
// while ()
// for ()
{
    let myVar = "Salut"
}

console.log(myVar);

// var i = 0
for (var i = 0; i < 10; i++) { //i < 10;
    // mon code
} // i++

console.log(i);

for (let i = 0; i < 10; i++) {
    
}

console.log(i);


if (1 < 2) {
    var myVar = "Hello"
}

console.log(myVar);

let myVar = "Hello"   

if (1 < 2) { 
    let myVar = "Salut"  

    myVar = myVar + " tout le monde"
    
    console.log("myVar dans le if", myVar);
}

console.log("myVar en dehors du if", myVar);

const myVar = "Hello"   

if (1 < 2) { 
    const myVar = "Salut"  

    console.log("myVar dans le if", myVar);
}

console.log("myVar en dehors du if", myVar);

const myVar = "Hello"
const myVar = "Salut"

let myVar = "Hello"
let myVar = "Salut"

var myVar = "Hello"
var myVar = "Salut"

console.log(myVar + myVar);

// Nous avons vu que React utilise la syntaxe ES6 de Javascript : `let`, `const` et les fonctions fléchés.

// Deux autres concepts à retenir pour au moins pouvoir les déchiffrer : la **déstructuration** et le **spread.**


// DESTRUCTURATION : permet de ne pas se répéter pour extraire des valeurs d'un array / objet

const arr = [1, 2, 3]
const [one, two, three] = arr

console.log(one) // retournera 1
console.log(two) // retournera 2
console.log(three) // retournera 3

// Un cas d'utilisation:
const arrNums = [6, 1, 2, 15, 4]
console.log(Math.max(...arrNums));

const obj = {rose: "red", leaf: "green", sea: "blue"}
const {rose, leaf, sea} = obj

console.log(rose) // retournera "red"
console.log(leaf) // retournera "green"
console.log(sea) // retournera "blue"

// SPREAD : permet d'intégrer rapidement le contenu d'un array / objet dans un autre endroit

const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = {...obj1, ...obj2}

console.log(obj3) // affichera { a: 2, b: 2, c: 3, d: 4 }

const arr = ["blue", "yellow"]
const colors = [...arr, "green", "red"]

console.log(colors) // affichera ["blue", "yellow", "green", "red"]

// Avec React:
// this.props = {color: "red, size: 20}
		
<Title color={this.props.color} size={this.props.size} />	// version classique - it is example only - file missing so it showing error
<Title {...this.props} /> // version spread ATTENTION: utiliser juste quand vous avez besoin d'envoyer toutes les props vers l'enfant
