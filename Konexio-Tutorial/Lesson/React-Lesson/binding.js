// Binding

// Dans React, vous le savez bien, il y a ce mot clé qui revient partout : `this`. 
// Il est extrêmement important car il permet l'accès au state (`this.state`) et aux props 
// (`this.props`) et même aux méthodes (`this.xxx`) d'une classe Javascript.

// Grâce à la syntaxe ES6 et aux fonctions fléchées, le scope reste le même (le `this` dans 
// la fonction sera bien le même que le `this` dans la classe globale) et ça nous évite pas mal 
// d'erreurs. Il existe une autre méthode pour conserver `this` dans les fonctions et ainsi 
// empêcher des erreurs de se glisser : le binding.

// D'abord, commençons par voir comment on utilise le binding :

// HOME.JSX :
import React from 'react';
import Button from './components/Button';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        color: "red"
    };

		this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
        color: "blue"
    });
  }

  render() {
    return (
	      <div>
					<h1 style={{color: this.state.color}}>Hello guys !</h1>
	        <MagicButton onClick={this.changeColor} />
	      </div>
    );
  }
}

export default Home;

// - Dans le constructeur : on a ajouté une ligne pour "bind" (lier) le `this` de la 
//     méthode `changeColor` au `this` global.
// - Dans la méthode : on n'a pas utilisé la syntaxe fléchée, mais la syntaxe classique
// - Dans le render : on envoie la fonction sans l'envelopper dans une fonction anonyme, 
//     comme une variable

// Alors, pourquoi parler d'un nouveau système puisqu'on a déjà ES6 qui vient nous sauver la 
// mise avec les fonctions fléchés ? C'est là que ça devient un tout petit peu plus complexe... 
// Lorsque vous utilisez le binding, votre méthode est associée à la classe lors de sa création et 
// restera toujours en place même lorsque le composant `Home` sera mis à jour (et donc affiché une 
//     nouvelle fois). En revanche, avec la syntaxe fléchés, la fonction sera re-créée de zéro à 
//     chaque fois que le composant sera affiché ! Pour une petite fonction comme celle-là ce n'est 
//     pas très grave, mais à l'échelle d'une grosse application avec des centaines de fonctions complexes, 
//     ça peut vite devenir très lourd en terme de performance ! Que-choisir ? 

// Si vous voulez tester les fonctions fléchées et vous y habituer, gardez la syntaxe ES6. 
// Si vous voulez une assurance de ne pas faire d'erreur et de ne pas rendre votre application 
// trop lourde, utilisez le binding. Les deux fonctionnent !