// Examen intégrateur 1

// Instructions: répondez avec code, texte ou option choisi en bas de la question

// Qu'est-ce qu'un attribut en HTML?
//  - Ils sont des valeurs de style qu'on peut donner à certains éléments HTML. Ils s'écrivent comme ceci: class="valeur css"
//  - Ils sont des valeurs supplémentaires que tous les éléments HTML peuvent avoir. Ils s'écrivent comme ceci: attribut="valeur"
Ils sont des valeurs de style qu'on peut donner à tous les éléments HTMLIls s'écrivent comme ceci: style="valeur css" *** correct answer
//  - Ils sont des valeurs supplémentaires que tous les éléments HTML peuvent avoir. Ils s'écrivent comme ceci: attribut:"valeur" *** correct answer

// Quelle est la commande pour changer de dossiers?
//  - cdir
//  - mkdir
cd
//  - pwd

// Quelle est la commande pour afficher tous les fichiers/dossiers, même les cachés?
//  - ls
ls -a
//  - pwd
//  - ls all
//  - ls -hidden
//  - cd

// Lesquels des éléments suivants sont des types de variables de Javascript?
//  - true
//  - false
Boolean
//  - Date

Number // correct answer

Object // correct answer
//  - Undefined
String // correct answer
 42 // correct answer

// Quelle est la propriété qui nous permets de récupérer la longueur d'un String?
//  - myString.lenght
//  - myString.lenght()
//  - myString.length()
myString.length // correct answer

// Quelle est la relation entre la quantité d'elements d'un array et son dernier index?
//  - La quantité d'elements est toujours un de plus que le dernier index

// Lesquelles sont des syntaxes correctes pour créer un String?

// - "" correct answer
// - '' correct answer
//  - `` 

// Quelle est la méthode qui permet de convertir un string en array?

var str = 'string'
var strarry = str.split();

// Décrire une instruction pour trouver le 3eme caracter d'un string. Par exemple dans le string "salut" on devrait récupérer "l"
var str = 'string'
console.log(str.charAt(2)); console.log(str[2]);

// Quelle est l'equivalent à l'expression: y += x ?
y = y + x;

// Quelle est l'equivalent à l'expression: y++ ?
y = y + 1;

// à l'aide de if ou switch, écrire un programme en js qui recevra dans son execution une valeur et qui affichera le mot des chiffres de 1 à 4. 
// Si la valeur reçu n'est pas entre 1 et 4, on affichera le message "Please enter a number between 1 and 4".
// Exemple, le programme est éxécuté comme ceci: $ node numberToWord.js 3
// Il affichera: "three"

var num1 = parseInt(process.argv[2]);

console.log(typeof num1)

numberToWord(num1);

function numberToWord(num) {

    switch (num) {        

        case 1: 
            console.log(`you entered ${num1x}`);
            break;
        case 2 :
            console.log(`you entered ${num1}`);
            break;
        case 3 : 
            console.log(`you entered ${num1}`);
            break;
        case 4 : 
            console.log(`you entered ${num1}`);
            break;
        default : console.log('You must enter in between 1 and 4');
        console.log(typeof num, num);

    
    }
}

// Que retournera l'expression "1 !== 1"

false

// Quelle est la syntaxe pour acceder aux éléments d'un array?

console.log(strarry[0]);

// Quelle est la méthode pour ajouter éléments à la fin d'un array?
strarray.push('str');

// Quelle est la méthode pour effacer éléments à la fin d'un array?
strarry.pop('str');

// Quelle est la méthode pour convertir un array en string?

console.log(strarry.join());

// écrire un programme qui à l'aide d'une boucle affiche dans l'écran les nombres du 5 au 13

for(var i=5; i <=13; i++) {
    console.log(i)
}

// écrire un programme qui à l'aide d'une boucle affiche dans l'écran les nombres du 18 au 2 sans afficher les nombres impaires. Donc 18, 16, 14, etc.

afficherPair();

function afficherPair() {

    for (var i = 18; i !== 0; i--) {
        var temp = i % 2;
        if (temp == 0) {

            console.log(i)
        }
    }
}

// Bonus: La boucle doit pas répeter le code pour chaque nombre entre 18 et 2, c'est plutôt le i de la boucle doit avoir toujours le nombre à afficher

// écrire le retour de la méthode Object.keys(country) selon la variable:

var country = {
    name: "France",
    capital: "Paris",
    currency: "Euro"
}
// console.log(country);   //{ name: 'France', capital: 'Paris', currency: 'Euro' }
console.log(Object.keys(country))   //[ 'name', 'capital', 'currency' ]

// Selon la variable de la question précédente, écrire au moins deux méthodes pour obtenir la valeur Paris de l'objet.

var country = {
    name: "France",
    capital: "Paris",
    currency: "Euro"
}

console.log(country.capital);
console.log(country['capital']);

// écrire une fonction addNumber qui recevra un parametre num et qui retournera l'addition de ce nombre avec lui même. Appeler la fonction avec l'argument 15. 

var num = 15;

add(num);

function add(num) {

    var num = num + num;
    return num;

}

// écrire une fonction addOneHundred qui recevra un parametre num et qui affichera l'addition de ce nombre plus 100. Appeler la fonction avec l'argument 43.

var num = 43;

addOneHundred(num);

function addOneHundred(num) {

    console.log(num + 100);
}

// NPM est:
//    - un programme qui permet d'executer mon code javascript
//    - un programme qui permet d'installer des packages existants ******* correct answer


// En js, quelle est le mot clé qui permet d'importer un module dans un fichier?

pour example, importer le 'prompt()' module;
var prompt = require("prompt");


// Définir la méthode "map" dans vos propres mots. Préciser ce qui est absolument nécessaire pour son utilisation.

'map' syntex remplacer le 'for' boucle et tres important dans le array

// écrire un programme que selon un array des nombres initial, que à l'aide de la méthode filter, créera un nouvel array avec les valeurs entre 3 et 21.
// Ensuite sur ce nouvel array, on appliquera la méthode map pour obtenir un autre nouvel array qui aura chaque un d'éléments multiplié par 2.
// Exemple, selon un array: 
// var myArray = [20, 1, 16, 34]
// On devrait avoir à la fin un array égal à [40, 32]

var myArray = [20, 1, 16, 34]
var myArrayResult = myArray.filter(function (element) {
    return element >= 3 && element <= 21
}).map(function (element) {

    return element * 2;
});
console.log(myArrayResult);

// Définir l'asynchronicité dans vos propres mots. Vous pouvez utiliser, en plus des mots, un exemple simple en js pour le faire.
setTimeout( function(){

},5000);
// Créer un selecteur jQuery qui selectionera l'éléments de id "title"

$("id or class or html").text("Konexio");

// Quand à l'aide de la méthode ajax de jQuery, on fait une rêquete get à une URL d'une API valide (par exemple à https://restcountries.eu/rest/v2/name/france), combien de temps il lui prends pour avoir une réponse?
//     - Entre 1 et 3 secondes
//     - Immediatement
//     - On peut le savoir *** correct answer

// Créer une route express get sur "/students" qui retournera une réponse json avec une liste de 3 noms d'élèves de la classe au choix.

var listStudents = ['Lean', 'Gaelle', 'Ines'];
app.get('/studnets', function(req, res) {
    res.json(listStudents);
});
/* Bonus: */

// Quelle est la différence entre méthode et fonction

// Réécrire la fonction addOneHundred avec la sytaxe ES6

// ES5

function addOneHundred(num) {
    return num + 100;
}

// ES6

var addOneHundred = (num) => {
    console.log(num + 100);
};
// Réécrire la fonction addNumber avec la sytaxe ES6. Il y a deux façons de le faire, si vous pouvez écrivez les deux

// ES5
addNumber(15);
function addNumber(num) {

    var num = num + num;
    return num;

}
// ES6
var num = 15;
var addNumber = (num) => {return (num + num)};