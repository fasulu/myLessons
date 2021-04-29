//Manipulation

// Get / Set

// JQuery permet aussi de manipuler les données du DOM, en lecture et en écriture :

// - `text()` : remplace le contenu texte d'un élément
// - `html()` : remplace le contenu html d'un élément
// - `val()` : remplace le contenu d'un input
// - `r()` : remplace le contenu de l'attribut d'un élément

$("#btn1").click(function () {
    $("#test").text("Ceci est un nouveau contenu !");
});

$("#btn2").click(function () {
    $("#test").html("Ceci est un <b>nouveau</b> contenu !");
});

$("#btn3").click(function () {
    $("input[name='email']").val("xavier.desoindre@konexio.eu");
});

$("#btn4").click(function () {
    $("input[name='email']").attr("placeholder", "Entrez votre adresse e-mail");
});

// Consultez  http://www.w3schools.com/jquery/jquery_dom_set.asp

// ## Insertion de contenu / éléments

// JQuery permet d’insérer du contenu ou de nouveaux éléments dans le DOM

/* Insérer du contenu dans un élément, à la suite du contenu existant */
$("#append").click(function () {
    $("#test").append("Ceci est un ajout à la fin !");
});

/* Insérer du contenu dans un élément, au début du contenu existant */
$("#append").click(function () {
    $("#test").prepend("Ceci est un ajout au début !");
});

/* Insérer du contenu à la suite d'un élément */
$("#after").click(function () {
    $("#test").after("Ceci est un nouveau paragraphe, à la suite !");
});

/* Insérer du contenu avant un élément */
$("#before").click(function () {
    $("#test").before("Ceci est un nouveau paragraphe, en amont !");
});

//   ************

// Suppression / Purge d’élément

// JQuery permet de supprimer ou de purger le contenu d’éléments dans le DOM.

/* Supprimer */
$("#remove").click(function () {
    $("#test").remove();
});

/* Supprimer avec un ou plusieurs filtres */
$("#remove").click(function () {
    $("#test").remove(".hint, .alert");
});

/* Purger le contenu */
$("#remove").click(function () {
    $("#test").empty();
});

/* Purger les champs d'un formulaire */
$("input[type='button']").click(function () {
    $("#formulaire")[0].reset();
});

// *********************
//   ## Manipulation des classes CSS

// JQuery permet d’ajouter ou de supprimer des classes.

    /* Ajouter une classe */
    $("#addClass").click(function () {
        $("#test").addClass('important');
    });

/* Supprimer une classe */
$("#removeClass").click(function () {
    $("#test").removeClass('important');
});

/* Alterner la classe */
$("#toggleClass").click(function () {
    $("#test").toggleClass('important');
});

/* Détecter la classe */
$("#hasClass").click(function () {
    $("#test").hasClass("alert"); // donnera true ou false
});

// ********************
//   Il est aussi possible de manipuler directement le CSS :

/* Mise à jour d'une seule propriété */
$("#updateCss").click(function () {
    $("#test").css("background-color", "yellow");
});

/* Mise à jour de plusieurs propriétés */
$("#updateCss").click(function () {
    $("#test").css({ "background-color": "yellow", "color": "pink" });
});

// ************************

// Dimensions

// Il est possible de récupérer la dimension (width / height) des éléments du DOM (y compris celle de la fenêtre en cours) :

$(window).resize(function() {
    var window = $(this);
    console.log("width:", window.width());
    console.log("height:", window.height());
  });

//   *************

// Scroll
// Il est possible de récupérer la position de la ScrollBar en utilisant la propriété `scrollTop()` :

$(window).scroll(function() {
    console.log("Scroll position:", $(this).scrollTop());
  });

//   *****************

// ## Animations simples

// JQuery possède des méthodes qui permettent d’animer facilement des élements. Certaines méthodes peuvent intégrer des paramètres et un callback (fonctions appelées à certaines conditions, comme des évènements) optionnels :

// - Hide et Show

    
    $("#hide").click(function(){
      $("p").hide(); // cette fonction est appelée par le clic
    });

    $("#show").click(function(){
      $("p").show(3000, function() {
        console.log("Animation terminée !"); // callback optionnelle appelée après 3 secondes
      });
    });

// ******************

// Toggle 
// Il est possible de switcher entre les méthodes `hide` et `show`, grâce à la méthode `toggle`. Si l'élément était caché, il apparaîtra, et s'il était visible il sera masqué. Cette méthode agit comme un interrupteur :


$("button").click(function(){
  $("p").toggle(3000, function() {
    console.log("Animation terminée !");
  });
});

// *************Il est possible de switcher entre les méthodes `hide` et `show`, grâce à la méthode `toggle`. Si l'élément était caché, il apparaîtra, et s'il était visible il sera masqué. Cette méthode agit comme un interrupteur :


$("#fadeOut").click(function(){
    $("p").fadeOut();
  });
  
  $("#fadeIn").click(function(){
    $("p").fadeIn("slow", function() {
      console.log("Animation terminée !");
    });
  });

//   **********************

// Fade toggle

// Il est possible de switcher entre les méthodes fadeIn et fadeOut, grâce à la méthode fadeToggle :

$("#fadeToggle").click(function(){
    $("p").FadeToggle("fast", function() {
      console.log("Animation terminée !");
    });
  });

//   ********************

// Fade To

// Il est possible d’effectuer un `fade` en spécifiant une opacité particulière :

$("#fadeTo").click(function(){
  $("p").FadeTo(500, 0.4, function() {
    console.log("Animation terminée !");
  });
});

// Consultez http://www.w3schools.com/jquery/jquery_slide.asp

// *************************

// Animation avancées
// JQuery permet également de créer des animation plus complexes grâce à la méthode animate et aux propriétés CSS : toutes les propriétés CSS peuvent être invoquées, sauf celles concernant les couleurs. Les propriétés CSS doivent être écrites en camelCase car nous sommes dans un fichier Javascript (pas de tirets) :

$("button").click(function(){
    $("#animate").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});

// Pour stopper une animation (simple ou avancée) prématurément, on peut utiliser la méthode stop :

$("button#stop").click(function(){
    $("#animate").stop();
});

// Il est possible d'enchainer les méthodes, les unes après les autres.





 