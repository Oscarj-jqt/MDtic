import { React, useEffect, useState } from "react";

function Quote() {
    //teste de màj de la citation -> useState
    const [slip, setSlip] = useState({
        advice: null
    });

    function dailyQuote() {
        //Récupération des données de l'API
        fetch('https://api.adviceslip.com/advice')
		// l'API nous envoie une réponse que l'on convertit en json
		.then((res) => (res.json()))
		// On doit ensuite viser la citation avec : (sans l'id)
		.then((data) => setSlip(data.slip))
		// au cas où erreur
		.catch((err) => console.error(err));
    }

        // Affichage d'une citation au chargement du composant
        useEffect(() => {
            //Changement de la citation toute les 24 heures
            const interval = 24 * 60 * 60 * 1000;
            const objetInterval = setInterval(dailyQuote, interval)
            dailyQuote();
            // Annule la répétition faite par le setInterval
            // Le callback est appelé quand le composant est démonté
            return () => { clearInterval(objetInterval); }
      }, []);

    return (
        <div>
            <button onClick={dailyQuote}>New quote</button>
            <p>{slip.advice}</p>
        </div>
    );

}

export default Quote;