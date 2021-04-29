// Events

// Dans Javascript, il existe quelques mots clés qui font référence à ce que 
// l'on appelle des évènements (**events**) :

// - `onFocus` : se déclenche quand l'utilisateur entre dans le champ
// - `onInput` / `onChange` : se déclenche quand l'utilisateur modifie le champ
// - `onBlur` : se déclenche quand l'utilisateur quitte le champ
// - `onSubmit` : se déclenche quand l'utilisateur soumet un formulaire
// - `onKeyPress` : se déclenche quand l'utilisateur appuie sur la touche
// - `onKeyDown` : se déclenche quand la touche est enfoncée
// - `onKeyUp` : se déclenche quand l'utilisateur relâche la touche
// - `onClick` : se déclenche quand l'utilisateur clique

// Ces évènements sont les résultats d'une interaction de l'utilisateur avec une page 
// web (à l'aide du clavier ou de la souris). Ces évènements déclenchent des actions 
// (enveloppées dans des méthodes appelées **event handlers**).

// Voici un exemple d'un event et d'une méthode associée :

// ...

state = {
	content: "Click me !"
}

// ...

changeContent() {
	this.setState({ content: "Haha you clicked !" })
}

// ...

<button onClick={this.changeContent}> {/* l'évènement onClick lancera la méthode changeContent */}
	{this.state.content}
</button>

// ...

// Ici, on remarque plusieurs choses :

// - les évènements s'écrivent en camelCase
// - les méthodes associées portent des noms précis qui permettent de comprendre en lisant 
// l'évènement, ce qu'il va arriver
// - les méthodes sont des fonctions, leur nom doit être une action (doThis, addThat)

// Il sera très courant de lire des méthodes liées à des évènements qui s'appellent `handleXXX`.
// Cela signifie "gérer XXX", on peut gérer un clic, une soumission de formulaire, une sélection...


// ## Valeurs

// Il est parfois très important pour nous de récupérer une donnée de l'évènement : quand 
// un utilisateur remplit un formulaire, on veut récupérer sa saisie pour la stocker quelque 
// part (et éventuellement l'envoyer au serveur plus tard...). Pour cela, on peut accéder à 
// l'évènement (oui c'est étrange...) qui est un objet, et qui contient plusieurs données. 

// - `e` : l'évènement
// - `e.target` : la cible de l'évènement (un input texte par exemple)
// - `e.target.value` : la valeur de la cible (le texte saisi par exemple)

// Pendant tout le cours, nous appellerons l'évènement `e` dans notre code. Vous êtes libre 
// de l'appeler comme vous voulez : `evt`, `event`, `croquette`... Mais par convention, nous 
// vous recommandons de choisir une appellation que vous garderez dans tout le code. Personnellement, 
// je suis flemmarde et j'aime faire court, alors je l'appelle `e`.

// ...

state = {
	username: ""
}

// ...

handleUsername(e) {
	this.setState({ username: e.target.value })
}

// ...

<input type="text" onChange={handleUsername} />
{/* l'évènement onChange lancera la méthode handleUsername */}

<p>My name is : {this.state.username}</p> {/* ici le texte se remplit avec la saisie ! */}

// ...

// Ici, on remarque plusieurs choses :

// - on accède à la valeur de la saisie avec `e.target.value` (ou `croquette.target.value` si vous êtes fou)
// - la méthode `handleUsername` reçoit l'évènement en paramètre et stocke la valeur dans le state
// - le state envoie cette valeur dans le texte du paragraphe

// ## Prevent Default

// Les évènements ont parfois des comportements par défaut dictés par le navigateur. Par exemple, 
// lorsque l'on soumet un formulaire, le navigateur aura pour réflexe de recharger la page. Mais nous 
// voulons justement ne jamais rafraîchir la page ! Alors il faut indiquer au navigateur qu'il ne doit 
// pas effectuer son action par défaut.

// La méthode `e.preventDefault()` (ou `croquette.preventDefault()` si vous êtes fou) est là pour nous aider :


// ...

handleSubmit(e) {
	e.preventDefault();
	// ... // code de ce que vous VOULEZ faire à la place
}

// ...

<form onSubmit={this.handleSubmit}>
	<input type="text" placeholer="Enter your username" />
	
	<button>
		Submit form
	</button>
</form>

// ...

// Attention ! Si vous n'utilisez pas le binding dans vos classes React, vous devez envoyer 
// l'évènement à votre méthode avec une fonction anonyme, sinon elle ne comprendra pas de quoi vous parlez :

- onChange={(e) => handleUsername(e)}
- onSubmit={(e) => this.handleSubmit(e)}