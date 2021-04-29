
Date()

var test = new Date(); 
console.log(test); // donnera la date de la cr�ation de test 

var demo = Date.now(); 
console.log(demo); // donnera la date actuelle (r�actualis�e � chaque fois) en millisecondes 

var birthday = new Date("1990-06-23"); 
console.log(birthday); // donera la date du 23 juin 1990 � minuit (heure GMT, donc le 22 juin 1990, 23h00 � Paris) 


Pour la m�thode new Date() :
getFullYear()�: retourne l�ann�e (avec 4 chiffres) 
getYear() : retourne l'ann�e (avec 2 ou 3 chiffres) 
getMonth()�: retourne le num�ro du mois (?de 0 � 11) ? donc + 1 pour 		afficher le "vrai" mois 
getDate()�: retourne le jour du mois (de 1 � 31) 
getDay()�: retourne le nombre du jour de la semaine (?de 0 � 6) ? 0 		est dimanche, 1 est lundi 
getHours()�: retourne le nombre d�heures (de 0 � 23) 
getMinutes()�: retourne le nombre de minutes (de 0 � 59) 
getSeconds()�: retourne le nombre de secondes (de 0 � 59) 
getMilliseconds()�: retourne le nombre de millisecondes (de 0 � 			999) 
toLocaleString() : convertit les millisecondes en date / heure 
toDateString() : convertit les millisecondes en date simple 
***new Date()�est un constructeur. Au m�me titre que�new Array()�et�new Object()�qui sont moins utilis�s. Si le constructeur�Date()�est utilis� sans arguments, il retournera la date et heure actuelle. 


moment()

var moment = require("moment")

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('Do MMMM YYYY, h:mm:ss a'))

moment.locale("fr");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('Do MMMM YYYY, h:mm:ss a'))

console.log("Combien de temps depuis aujourd'hui:", moment().startOf('day').fromNow());



Regex

console.log("Combien de temps depuis 2015 10 31:", moment("20151031", "YYYYMMDD").fromNow());

Un�pattern�a la structure suivante : 

var pattern = /(a|b|c)/gi 

Remplacer tous les �a� dans la string 

var str = "An apple was eaten"; str.replace(/a/gi, "4"); // donnera "4n 4pple w4s e4ten" 

Remplace tous les nombres par �x� 

var str = "My phone number is 551-555-5555";
str.replace(/[0-9]/gi, "x"); // donnera "My phone number is xxx-xxx-xxxx"

R�cup�rer tous les mots qui commencent par une lettre 

var str = "Hey 4get these words 3_please";
var wor = str.match(/\\b[a-z]+/gi); // donnera ["Hey", "these", "words"]
***La m�thode�match()�retournera un array des r�sultats ou�null 

Trouver la position dans la string o� le caract�re �A� est plac� � 2 caract�res de �B� 

var str = "ABxxAxxB" var pos = str.search(/A..B/gi); // 4 

***En JavaScript, les expressions r�guli�res sont souvent utilis�s avec les m�thodes�replace(),�search()�et�match(). 
Elles sont aussi tr�s utiles pour v�rifier la structure / le contenu d'une string (vous pensez aux mots de passe ? moi aussi !)

