
// [State](https://www.notion.so/State-76de35d8a71a484e88e561f04be7fb2a)

// À la création de notre composant classe, il faut déclarer un state (dans lequel on pourra stocker les données avec lequel doit travailler ce composant pour s'afficher). Pour cela, on utilise aussi le constructeur :

import React from "react";
import Welcome from "../components/Welcome";

class Home extends React.Component {
    constructor() {
        super();

        this.state = {  // Ne pas oublier "this" !
            name: "Mike",
            page: "Home"
        };
    }

    render() {
        return (
            <div>
                <Welcome name={this.state.name} page={this.state.page} />
                {/* ici, envoie les données du state en props */}
            </div>
        )
    }
}


// L'avantage d'utiliser le state plutôt que d'écrire les données à la main ou de les stocker dans des variables classiques, c'est qu'on peut réutiliser ces données partout où on en a besoin, et si la donnée change dans le state, elle sera changée partout et les composants qui l'utilisent seront mis à jour ! C'est une zone où l'on stocke des informations auxquelles le code fait référence en permanence.

// ## Set State

// Pour modifier le state d'un composant, on ne peut pas procéder comme d'habitude. Il faut utiliser une fonction spéciale :


// ...

constructor() {
    super();
    this.state = {
        name: "Mike",
        page: "Home"
    };
}

// ...

// DON'T
this.state.name = "Jolene"; // ne fonctionne pas ! 

// DO
this.setState({ name: "Jolene" }) // la clé name du state a bien été updatée. N'oubliez pas les { } !

// ...


// ## ⚠️ Attention

// Il y a de bonnes et de mauvaises façons de faire un setState :


// ...

constructor() {
    super();

    this.state = {
        list: ["coffee", "tea"]
    };
}

// DON'T :
doTheWrongWay = () => {
    this.state.list.push("milk"); // ne fonctionnera pas
    this.setState({ list: this.state.list }); // c'est comme mettre deux miroirs face à face
}

// DO :
doTheRightWay = () => {
    const updatedList = this.state.list; // crée une copie dans une variable safe
    updatedList.push("milk"); // update la copie avec un ajout

    this.setState({ list: updatedList }); // update le state avec la copie à jour !
}

// ...
