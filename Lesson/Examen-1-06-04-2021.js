// Examen intégrateur 1

// Instructions: répondez avec code, texte ou option choisi en bas de la question
// Temps: 1h

// Qu'est-ce qu'un attribut en HTML?
//  - Ils sont des valeurs supplémentaires que tous les éléments HTML peuvent avoir. Ils s'écrivent comme ceci: attribut="valeur"

// Quelle est la commande pour changer de dossiers?
//  - cd

// Quelle est la commande pour afficher tous les fichiers/dossiers, même les cachés?
//  - ls -a

// Lesquels des éléments suivants sont des types de variables de Javascript?
//  - Boolean
//  - Number
//  - Object
//  - Undefined
//  - String

// Quelle est la propriété qui nous permets de récupérer la longueur d'un String?
//  - myString.length

// Quelle est la relation entre la quantité d'elements d'un array et son dernier index?
//  - La quantité d'elements est toujours un de plus que le dernier index

// Lesquelles sont des syntaxes correctes pour créer un String?
//  - ""
//  - ''
//  - `` 

// Quelle est la méthode qui permet de convertir un string en array?
split

// Décrire une instruction pour trouver le 3eme caracter d'un string. Par exemple dans le string "salut" on devrait récupérer "l"
"salut".charAt(2)
"salut"[2]

// Quelle est l'equivalent à l'expression: y += x ?
y = y + x

// Quelle est l'equivalent à l'expression: y++ ?
y = y + 1

// à l'aide de if ou switch, écrire un programme en js qui recevra dans son execution une valeur et qui affichera le mot des chiffres de 1 à 4. 
// Si la valeur reçu n'est pas entre 1 et 4, on affichera le message "Please enter a number between 1 and 4".
// Exemple, le programme est éxécuté comme ceci: $ node numberToWord.js 3
// Il affichera: "three"

var inputNumber = parseInt(process.argv[2])

switch (inputNumber) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    default:
        console.log("Please enter a number between 1 and 4");
        break;
}

// Que retournera l'expression: 1 !== 1
false

// Quelle est la syntaxe pour acceder aux éléments d'un array?
myArray[index]

// Quelle est la méthode pour ajouter éléments à la fin d'un array?
myArray.push()

// Quelle est la méthode pour effacer éléments à la fin d'un array?
myArray.pop()

// Quelle est la méthode pour convertir un array en string?
myArray.join("")

// écrire un programme qui à l'aide d'une boucle affiche dans l'écran les nombres du 5 au 13
for (var i = 5; i <= 13; i++) {
    console.log(i);
}

// écrire un programme qui à l'aide d'une boucle affiche dans l'écran les nombres du 18 au 2 sans afficher les nombres impaires. Donc 18, 16, 14, etc.
// Bonus: La boucle doit pas répeter le code pour chaque nombre entre 18 et 2, c'est plutôt le i de la boucle doit avoir toujours le nombre à afficher
for (var i = 18; i >= 2; i = i - 2) {
    console.log(i);
}

// écrire le retour de la méthode Object.keys(country) selon la variable:
// var country = {
//     name: "France",
//     capital: "Paris",
//     currency: "Euro"
// }
["name", "capital", "currency"]

// Selon la variable de la question précédente, écrire au moins deux méthodes pour obtenir la valeur Paris de l'objet.
country["capital"]

country.capital

var capitalKey = "capital"
country[capitelKey]

// écrire une fonction addNumber qui recevra un parametre num et qui retournera l'addition de ce nombre avec lui même. Appeler la fonction avec l'argument 15. 
function addNumber(num) {
    return num + num;
}

addNumber(15)

// écrire une fonction addOneHundred qui recevra un parametre num et qui affichera l'addition de ce nombre plus 100. Appeler la fonction avec l'argument 43.
function addOneHundred(num) {
    console.log(num + 100);
}

addOneHundred(43)

// NPM est:
//     - un programme qui permet d'installer des packages existants

// En js, quelle est le mot clé qui permet d'importer un module dans un fichier?
require

// Définir la méthode "map" dans vos propres mots. Préciser ce qui est absolument nécessaire pour son utilisation.
// map est une méthode d'array qui retourne un nouvel array avec la même cantité d'éléments de l'array sur lequel on l'utilise.
// On peut modifier chaque éléments de ce nouvel array avant de le rajouter. L'array de base reste inchangé.
// la méthode map a besoin d'un array de base et d'une fonction callback a qu'on passe comme argument à map.
// Cette fonction definit un parametre qui correspond à chaque élément de l'array de base. La fonction doit absolument retourner quelque chose.

// écrire un programme que selon un array des nombres initial et à l'aide de la méthode filter, créera un nouvel array avec les valeurs entre 3 et 21.
// Ensuite sur ce nouvel array, on appliquera la méthode map pour obtenir un autre nouvel array qui aura chaque un d'éléments multiplié par 2.
// Exemple, selon un array: 
// var myArray = [20, 1, 16, 34]
// On devrait avoir à la fin un array égal à [40, 32]

var newArray = myArray.filter(function (elem) {
    return elem >= 3 && elem <= 21
}).map(function (elem) {
    return elem * 2
})

// Définir l'asynchronicité dans vos propres mots. Vous pouvez utiliser, en plus des mots, un exemple simple en js pour le faire.
// En js on dit qu'un code est asynchrone lorsque il a une partie de lui qui s'executera pas dans l'ordre de lecture sinon dans le futur.

// Créer un selecteur jQuery qui selectionera l'éléments de id "title"
$("#title")

// Quand à l'aide de la méthode ajax de jQuery, on fait une rêquete get à une URL d'une API valide (par exemple à https://restcountries.eu/rest/v2/name/france), combien de temps il lui prends pour avoir une réponse?
//     - On peut pas le savoir 

// Créer une route express get sur "/students" qui retournera une réponse json avec une liste de 3 noms d'élèves de la classe au choix.
app.get("/students", function(req, res) {
    var listStudents = ["Leandro", "Ines", "Gaelle"]

    res.json(listStudents)
})

/* Bonus: */

// Quelle est la différence entre méthode et fonction
// Une méthode est une fonction qui appartient à quelque chose (object, string, array, etc).

// Réécrire la fonction addOneHundred avec la sytaxe ES6
//ES5
function addOneHundred(num) {
    console.log(num + 100);
}

//ES6
var addOneHundred = (num) => {
    console.log(num + 100);
}

// Réécrire la fonction addNumber avec la sytaxe ES6. Il y a deux façons de le faire, si vous pouvez écrivez les deux
//ES5
function addNumber(num) {
    return num + num;
}

//ES6
var addNumber = (num) => num + num
// !== de la ligne en dessous, mais même comportement
var addNumber = (num) => console.log(num + num)

var addNumber = (num) => {
    return num + num;
}
// !== de la ligne en dessous, mais même comportement
var addNumber = (num) => {
    return console.log(num + num);
}