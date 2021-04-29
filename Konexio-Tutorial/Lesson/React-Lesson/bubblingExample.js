// Comme on l'a vu jusque là : React utilise un flux **uni-directionnel**. En clair, 
// les données vont toujours dans le même sens : du parent vers l'enfant. Pourtant ce serait bien 
// pratique de pouvoir faire remonter la donnée dans l'autre sens sans devoir la faire manipuler 
// par un composant "dumb" et ainsi garder nos types "smart" / "dumb" ! Eh bien c'est possible.

// HOME.JSX :

import React from 'react';
import Button from './components/MagicButton.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // ici : le state contient la donnée "color"
            color: "red"
        };
    }

    changeColor = () => { // cette fonction change la valeur de "color" dans le state
        console.log("time to change the color !");
        this.setState({
            color: "blue"
        });
    }

    render() {
        return (
            <div>
								<h1 style={{color: this.state.color}}>Hello guys !</h1>
                <MagicButton onClick={() => this.changeColor()} />
            </div>
        );
    }
}

export default Home;

//********************** */

// MAGICBUTTON.JSX :

import React from 'react';

class MagicButton extends React.Component {
		// aucune logique dans ce composant, il reste bien "dumb" !

    render() {
        return (
            <button onClick={this.props.onClick}> {/* la fonction sera exécutée depuis ici */}
              Click me !!
            </button>
        );
    }
}

export default MagicButton;

// Ici, on voit bien que la couleur peut être changée grâce à une action de l'enfant, mais toute la logique reste dans le parent.

// On peut également renvoyer de la donnée en la mettant en paramètre de la fonction, 
// pour que le parent la récupère et puisse la placer où il veut (dans une autre fonction, dans le state, etc...) 
// par exemple dans le cas d'un formulaire :

// - le parent possède plusieurs enfants `input` et leur passe une fonction "getValue"
// - chaque input est "dumb", mais à chaque modification de l'input, ils renvoie la valeur au parent avec "getValue" !
// - le parent reçoit alors toutes les valeurs des `input` et peut travailler avec !

// Ce procédé est appelé la "remontée de données" ou en anglais : le **bubbling** (comme des bulles qui remontent à la surface)