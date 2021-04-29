## Le DOM

Le DOM (pour **D**ocument **O**bject **M**odel) est une interface de programmation d'application (API) : il fournit une représentation structurée du document (site web) sous forme d'arborescence. Il définit la façon dont cette structure peut être modifiée, en terme de style et de contenu, par Javascript. Pour expliquer ce concept plus simplement : le DOM connecte les pages web à des scripts qui les modifient.

// Introduction

// Nouveau module, nouveau dossier ! N'oubliez pas d'ajouter / aller dans le dossier "jquery" dans votre dossier "Konexio".

// Imaginez que vous voulez coder un blog pour un client. Le client vous envoie un fichier qui contient 200 articles, sous la forme d'un array d'objets, qui ressemble à un peu à ça :


var articles = [
	{
		title: "title for the article #1",
		content: "hey this is the first article for my amazing blog."
	},
	{
		title: "title for the article #2",
		content: "hey this is the second article for my amazing blog."
	},
	// etc... for the other 188 !
]


// Vous devriez alors créer les 200 articles dans le code HTML ? Quelle horreur... Alors qu'en Javascript, vous auriez sûrement une astuce pour parcourire l'array des articles et extraire le titre et le contenu de chaque élément... C'est là que le DOM intervient : il va vous permettre, à travers un programme Javascript, de prélever le contenu de cet array et d'interagir avec le fichier html pour injecter le contenu !

// Vous pourrez également changer le CSS de manière dynamique, gérer des actions (comme des évènement qui se déclencheront à partir d'un clic...) tout devient possible ! C'est ce qui va rendre votre page dynamique. En Javascript, il est possible de manipuler le DOM grâce à certaines fonctions. Pendant longtemps, leurs syntaxes ont été complexes pour un débutant, c'est pourquoi est apparu une librairie qui est venu tout simplifier : JQuery.

// ## JQuery

// JQuery est une librairie Javascript. Elle permet d'utiliser des raccourcis pour manipuler le DOM, le CSS, créer des animations et exécuter des requêtes Ajax (qui permettent de mettre à jour une partie du contenu d'un site web sans devoir recharger la page). Elle ne fait que simplifier des syntaxes de Javascript (vous pouvez très bien manipuler le DOM avec du Javascript "pur" : aussi appelé **vanilla Javascript**).

// La manipulation du DOM implique de sélectionner des éléments du document (tout comme en CSS) grâce à des sélecteurs, et à exécuter du code qui affectera ces éléments sélectionnée. La première chose à faire pour utiliser JQuery dans une page, c'est de l'importer :

// - depuis un emplacement local (il faudra avoir téléchargé les fichiers nécessaires à l'avance)
// - depuis un CDN (**C**ontent **D**elivery **N**etwork) : une url qui indique à la page où trouver le code de JQuery à distance

// <!-- Dans votre document HTML, à la fin de la balise head -->

// <!-- Import depuis une source en local -->
{/* <body>
  {/* ... */}
//   <script src="jquery-3.5.1.min.js"></script> <!-- à adapter avec le bon emplacement et le bon fichier -->
// </body>

// <!-- Import depuis un CDN -->
{/* <body> */}
  {/* ... */}
  {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> */}
{/* </body> */} */}

// ## Document Ready

// On créera (en plus des fichiers index.html et styles.css) un fichier appelé scripts.js, qui contiendra tout notre code Javascript (avec les syntaxes JQuery) qui interagira avec le fichier html. Il faudra bien sûr l'importer, juste après l'import de JQuery !

// Il faut d'abord annoncer dans notre code que les scripts ne doivent se lancer qu'après que le document ait été chargé complètement :


$(document).ready(function(){
	// tout le reste du code viendra ici
});

// ou plus simplement :

$(function(){
	// tout le reste du code viendra ici
});


// ## Syntaxe & Sélecteurs

// On utilisera la syntaxe `$(a).b()` pour sélectionner un élément **a** et appliquer la méthode **b** sur cet élément :

// - `$(this).hide()` : masque l'élément en cours
// - `$("div").hide()` : masque tous les éléments `div`
// - `$(".red").hide()` : masque tous les éléments possédant la classe `red`
// - `$("#hero").hide()` : masque l'élément possédant l'id `hero` (attention : un id n'est attribué qu'à un seul élément !)
// - `$("input[name="email"]").hide()` : masque l'élément `input` possédant l'attribut `name="email"`

// Suivez [ce lien](http://www.w3schools.com/jquery/jquery_selectors.asp) pour allez plus loin.

// Exemple de code dans le fichier `scripts.js` : 


$(function(){
    $("button").click(function(){
        $("#notice").hide();
        $("input[name="password"]").focus();
    });
});

// Un **eventListener** est une sorte de surveillant : il va "écouter" l'élément sur lequel on l'a appelé et déclenchera une action spécifique lorsqu'un certain évènement se produira. Ici, au chargement du document, nous plaçons un **eventListener** sur l'élément `button`. Lorsque l'utilisateur cliquera sur ce bouton, une fonction sera déclenchée. Cette fonction masquera l'élément possédant l'id `notice` et mettra le focus sur l'élément `input` possédant l'attribut `name="password"`.



// ## Évènements

// On utilise les évènements pour détecter les actions de l'utilisateur. En voici quelques-uns :

- Actions produites à la souris :
    - `click` : l'utilisateur clique sur un élément
    - `dblclick` : l'utilisateur double-clique sur un élément
    - `mouseenter` : le curseur entre dans un élément
    - `moueseleave` : le curseur sort d'un élément
- Actions produites au clavier :
    - `keypress` : l'utilisateur appuie sur une touche
    - `keydown` : la touche est enfoncée par l'utilisateur
    - `keyup` : l'utilisateur relâche la touche
- Actions produites sur un formulaire :
    - `submit` : l'utilisateur soumet un formulaire
    - `change` : l'utilisateur change d'input
    - `focus` : l'utilisateur entre dans un input
    - `blur` : l'utilisateur sort d'un input
- Actions produites sur le document / la fenêtre :
    - `load` : le document / la fenêtre a chargé le contenu
    - `resize` : la fenêtre est redimensionnée
    - `scroll` : l'utilisateur défile la page
    - `unload` : le document / la fenêtre est quitté (fenêtre fermée, changement de page...)

// L’événement `hover` de CSS est une combinaison de `mouseenter` et `mouseleave` en jQuery :


$("#test").hover(function(){
    console.log("Entrée dans la zone");
},
function(){
    console.log("Sortie de la zone");
});


// Il est possible de capturer plusieurs évènements pour un seul élément, grâce à un objet et au mot-clé `on` :


$("#test").on({
  mouseenter: function() {
    console.log("Entrée dans la zone");
  },
  mouseleave: function() {
    console.log("Sortie de la zone");
  },
  click: function() {
    console.log("Click sur la zone");
  }
});
