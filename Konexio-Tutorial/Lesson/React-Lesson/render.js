// [Render +](https://www.notion.so/Render-e42aa3dd874941fea30ffe3a633d4693)

// Comme vous le savez déjà, dans React, une partie du code de chaque composant 
// s'appelle le **render**. C'est cette partie qui détermine ce qui va s'afficher 
// sur la page. Le render comprend des balises HTML, d'autres composants, et parfois 
// des expressions Javascript (des variables, map, calculs...). Il est possible de 
// fractionner ce render pour le diviser en plusieurs parties : 

// - pour créer plusieurs blocs de render (comme un système de composants au seins 
//     d'un même composant : le **sub-render**)
// - pour générer un render en fonction de certaines conditions (le **render conditionnel**)

// Sub Render

// Si votre code dans le render est un peu long, mais que vous n'avez pas l'utilité de 
// créer des composants pour isoler des morceaux de code (le code ne sera pas forcément 
//     réutilisé ailleurs dans l'application par exemple), vous pouvez le fractionner : il 
//     vous suffit d'écrire plusieurs blocs renderXXX() (remplacer XXX par ce que représente 
//         ce sub-render) avant le render principal, puis de les y appeler :


// CODE CLASSIQUE : UN SEUL RENDER (celui là est plutôt court mais ça devient vite illisible !)

//********This is a example so it will show error informations********************************* */
// ...

render() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <section>
                <h1>Konexio</h1>
                <h2>Learning React</h2>
            </section>
        </div>
    );
}

// ...

// CODE AVEC UN SYSTÈME DE SUB-RENDERS : chaque subrender = 1 bloc

// ...

renderNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

renderMainContent() {
    return (
        <section>
            <h1>Konexio</h1>
            <h2>Learning React</h2>
        </section>
    );
}

render() {
    return (
        <div>
            {this.renderNavigation()}
            {this.renderContent()}
        </div>
    );
}

// ...

// *** Pour une bonne organisation, écrivez vos sub-renders dans l'ordre où ils seront appelés dans le render principal !

// # Render Conditionnel

// Parfois, on a besoin d'afficher quelque chose de différent en fonction des situations : par 
// exemple : si l'utilisateur est connecté, il accèdera à toutes les fonctionnalités disponibles, 
// sinon, il aura une version allégée et un lien pour se connecter. Autre exemple : si les données 
// sont bien arrivées du serveur, alors elles s'affichent dans la page, sinon, une barre de 
// chargement apparaît à la place en attendant...

// Vous serez amenés à travailler avec ce genre de situation très souvent en tant que pro ! 
// Une solution propre pour garder toute la logique d'un composant au même endroit et présenter 
// tous les cas possibles dans le même fichier : le render conditionnel.

// CODE AVEC UN SYSTÈME DE SUB-RENDERS + CONDITIONS

// ...

renderNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

renderContent() {
    if (this.state.userConnected) { // le code à afficher si l'utilisateur est connecté
        return (
            <section>
                <h1>Konexio</h1>
                <h2>Learning React</h2>
            </section>
        );
    } else { // le code à afficher si la condition précédente n'est pas remplie
        return (
            <section>
                <p>Vous devez vous connecter pour voir ce contenu</p>
            </section>
        );
    }
}

render() {
    return (
        <div>
            {this.renderNavigation()}
            {this.renderContent()}
        </div>
    );
}

// ...

// Vous pouvez également utiliser la syntaxe "ternary" pour vos conditions : attention cependant, elle est très difficile à lire. Elle devra être utilisée uniquement si vous n'avez que deux cas de figure (if / else) et que le code de chaque bloc est assez court. Sinon, privilégiez la syntaxe "if / else" classique qui sera plus lisible sur du code long ou complexe :

// ...

renderUsername() {
    return (
        {
	(this.state.userConnected) 
		? <h1>{this.state.user.name}</h1>
		: <h1>Anonymous</h1>
        }
    )
}

// ...