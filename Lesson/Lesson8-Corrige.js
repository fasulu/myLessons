// Jour 8 [Jour 8](https://www.notion.so/Jour-8-ad84f54b06914de88ce14cb8c1fe0f3b)


// 01 - Countries

// À l'aide de l'url suivante : "[https://restcountries.eu/rest/v2/all](https://restcountries.eu/rest/v2/all)" :

// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret

function getCountries() {
    request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
        var countries = JSON.parse(body);
				
				/*
				var countriesNames = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            countriesNames.push(country.name);
        }
        console.log(countriesNames.join("-"));
        */

       var countriesNames = countries.map(function(element) {
           return element.name;
       })

       console.log(countriesNames.join("-"));
    });

}

// 02 - Chuck Norris

// À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

// - Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console

function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
        var fact = JSON.parse(body);
        console.log(fact.value);
    });
}

// 03 - Pokemon

// À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :

// - Créez une fonction asynchrone `catchPokemon` qui recevra un nombre en paramètre (il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet id. Elle affichera ensuite dans la console :

// id: xxx // remplacer xxx par l'id du pokemon
// name: "xxx" // remplacer xxx par le nom du pokémon

function catchPokemon(id) {
    var url = "https://pokeapi.co/api/v2/pokemon/" + id;

    request.get(url, function (err, res, body) {
        var pokemon = JSON.parse(body)
    
        console.log("id:", id);
        console.log("name:", pokemon.name);
    });
}

catchPokemon(25) //Pikachu
