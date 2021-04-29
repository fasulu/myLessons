// AJAX

// AJAX (**A**synchrounous **JA**vascript **X**ml) est un modèle qui permet de récupérer les données du serveur pour les afficher sur la page sans jamais rafraîchir la page. Cependant, le rendu peut devenir lourd et affecter les performances.

// ## Asynchronicité

// L'asynchronicité permet d'aller à l'encontre du rythme classique d'exécution du code. Au lieu d'exécuter les lignes de code les unes après les autres, dans l'ordre de lecture, on peut "programmer" son code pour qu'il s'exécute différemment (après un évènement, après un délai précis, etc...). Avant d'aller plus loin, revoyons quelques bases.

// ### Code synchrone

// Sans le savoir, vous avez écrit du code synchrone 99% du temps. Votre code suit la logique de lecture. Il s’effectue dans l’ordre **chronologique** (une ligne après l'autre, telles qu'elles sont écrites).

var word = "banana"; // 1 - je déclare ma variable
var arr = str.split(""); // 2 - je crée un array à partie des lettres de ma variable

arr.pop(); // 3 - je supprime le dernier élément de l'array
arr.push("i"); // 4 - j'ajoute une lettre à la fin de l'array

console.log(arr); // => ["b", "a", "n", "a", "n", "i"] - toutes les étapes se sont exécutées dans l'ordre

// ### Code asynchrone

// Le code asynchrone est un code qui ne s'exécute pas dans l’ordre **chronologique**. Lorsque le code est lu, on y trouve des instructions pour qu'il soit exécuté **plus tard** ! Cela permet de savoir qu'une action arrive, mais qu'elle ne se déclenchera pas tout de suite.

console.log("Hello."); // 1 - Affichera "Hello"

setTimeout(function() { // 2 - Affichera "Goodbye", mais pas tout de suite : après deux secondes.
  console.log("Goodbye !");
}, 2000);

console.log("Hello again !"); // 3 - Affichera "Hello again !"

// Si vous êtes habitué avec du code synchrone, vous pourrez penser que la console affichera :

// Hello
// Goodbye !
// Hello again !


// Grave erreur, la console affichera le texte dans cet ordre :


// Hello
// Hello again !
// Goodbye !


// La méthode `setTimeout` déclenche le `console.log` **après 2 secondes** (2000 millisecondes). Le code est alors asynchrone !

// ## L’importance de l’asynchronicité

// JavaScript est l’un des seuls langages à offrir l'asynchronicité dans son coeur de langage. Prenons un exemple :

// - vous cherchez une chanson sur Spotify
// - vous tapez le nom de la chanson dans la barre de recherche, puis validez
// - le serveur reçoit la requête, cherche le résultat dans la base de données, puis le renvoie
// - la chanson arrive dans le client et s'affiche à l'écran

// ⇒ Un certain temps s'écoule entre le moment ou vous validez la recherche et le moment ou le résultat apparaît. Même si aujourd'hui, avec des machines performantes et de bonnes connexions internet, on a l'impression que c'est instantané, si vous lancez la même opération dans une ville avec une connexion très faible et un vieil ordinateur, quelques secondes peuvent s'écouler.

// ⇒ Le navigateur n'a qu'une seule file d'attente pour les tâches à effectuer. Si une tâche qui prend trop de temps prend toute la place, aucune autre action ne peut être lancée, même pas un clic ! La navigation devient alors rigide et désagréable. Pire encore : si une tâche trop longue se lance avant le chargement de la page, l'écran restera blanc jusqu'à ce qu'elle se termine...

// C’est pour cela qu’il est important de créer du code qui sera appelé uniquement quand la réponse de la requête sera reçue : on n'encombre pas la file d'attente du navigateur et l'utilisateur peut continuer sa navigation le temps que la réponse arrive.


// ## Exemple

// Aller sur [jquery.com](http://jquery.com) et ouvrez l'inspecteur. Dans la console, tapez le code suivant :


console.log('#1');

$.ajax({
    url: 'https://restcountries.eu/rest/v2/name/france',
    success: function(data, statuts, response) {
        console.log('#2');
        console.log(data[0].name);
        console.log(data[0].capital);
    }
});

console.log('#3');

// Le résultat dans la console sera :

// #1
// #3
// #2
// France
// Paris

// L’asynchronicité ne peut être provoquée qu’avec des fonctions : chaque opération asynchrone doit contenir une fonction qui recevra les données plus tard dans le temps. Et tout le code qui doit être exécuté par la suite se doit d’être dans la fonction appelée plus tard. Cette fonction est appelée **callback**. (Pensez au téléphone : on appelle pour demander quelque chose, la personne doit prendre le temps de se renseigner, on reçoit un rappel (**callback**) avec la réponse plus tard).

// ### Callback hell

// Parfois vous aurez besoin de faire plusieurs requêtes qui seront dépendantes les unes des autres. Imaginons que vous ayez besoin de récupérer la monnaie de deux pays avant de les comparer pour savoir s’ils ont la même :

$.ajax({
    url: 'https://restcountries.eu/rest/v2/name/france',
    success: function(firstCountry) {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/spain',
            success: function(secondCountry, status, response) {
                console.log('same currency between', firstCountry[0].name 
            , 'and', secondCountry[0].name, firstCountry[0].currencies[0].code === secondCountry[0].currencies[0].code);
            }
        });
    }
});


// Vous remarquez que le second appel dépend du premier et doit absolument être à l’intérieur du premier pour s'effectuer **après**. Dans ce cas l’indentation est primordiale afin de comprendre les dépendances du code asynchrone. Si trop d'opérations doivent être imbriquées, notre code sera imbriqué de nombreuses fois, on appelle ça le **callback hell**. Il existe une alternative pour éviter de se retrouver dans cette situation : les promesses, et le async / await (nous verrons ces méthodes un peu plus tard !)




