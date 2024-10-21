import { React, useEffect, useState } from "react";


function Event() {
    // Initialisation du titre et du lien à rien

    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);

    function eventJour() {
        //Récupération des données de l'API
        fetch('https://history.muffinlabs.com/date')
        // l'API nous envoie une réponse que l'on convertit en json
        .then((res) => (res.json()))
        // màj de l'event
        .then((data) => {
        // Liste des évènements
        const eventsList = data.data.Events;

        // On garde les évènements entre 1888 et 1895
        const myEvents = eventsList.filter(event => parseInt(event.year) > 1888);
        // Sélectionner les deux premiers événements filtrés
        const selectedEvents = filteredEvents.slice(0, 2);
        // const myEvents = eventsList.filter(event =>(event.year) >= 1888 && (event.year) <= 1895);
        console.log(selectedEvents);
        // Met à jour l'état avec les événements filtrés
        setEvents(selectedEvents);

        })
        // au cas où erreur
        .catch((err) => console.error(err));
        

        useEffect(() => {
            eventJour();
      }, []);
    }

    
    
    return (
        <div>
            <h1>Evènements historiques du jour</h1>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <div key={index}>
                        <p>{event.text} ({event.year})</p>
                    </div>
                ))
            ) : (
                <p>Chargement des événements...</p>
            )}
        </div>
    )
}

export default Event;