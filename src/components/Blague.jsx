import { React, useEffect, useState } from "react";

function Blague() {
    //teste de màj de la citation -> useState
    const [joke, setJoke] = useState({
        setup:null, punchline:null
    });
    //Etat pour afficher la réponse de la blague
    const [display, setDisplay] = useState({ punchline:null });

    function blagueJour() {
        fetch('https://official-joke-api.appspot.com/random_joke')
		.then((res) => (res.json()))
		.then((data) =>  { setJoke({ setup: data.setup, punchline: data.punchline })

        // Affichage de la réponse 10 secondes après
        setTimeout(() => {
            setDisplay( {punchline: data.punchline });
        }, 10000);
    })
		.catch((err) => console.error(err));
    }

        // Affichage d'une blague au chargement du composant
        useEffect(() => {
            blagueJour();
      }, []);

    return (
        <div>
            <p>{joke.setup}</p>
            <p>{display.punchline}</p>
        </div>
    );
}

export default Blague;