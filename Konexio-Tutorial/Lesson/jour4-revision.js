//  01 - Alphabet

// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"


function sortLetters(word) {
    console.log(word);
    var letters = word.split("");
    console.log(letters.sort().join(""));
}

function sortLetters2(word) {
    var letters = [];
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    console.log(letters.sort().join(""));
}

sortLetters("konnexio");

//  02 - XOXO

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

function countEach(word) {
    var countO = 0;
    var countX = 0;

    for (var i = 0; i < word.length; i++) {
        switch (word.charAt(i)) {
            case "x": {
                countX++;
                break;
            }
            case "o": {
                countO++;
                break;
            }
        }
    }

    return countO === countX;
}

console.log(countEach("xoxoxo"))

//  03 - Palindrome

// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, 
// sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

function checkPal(word) {
    var letters = word.split("");
    var reversedLetters = letters.reverse();
    var reversedWord = reversedLetters.join("");

    if (reversedWord === word) {
        console.log("Palindrome !");
    } else {
        console.log("Nope !");
    }
}

checkPal("racecar");
checkPal("laptop");

