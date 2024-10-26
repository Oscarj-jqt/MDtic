import { React, useEffect, useState } from "react";


function Event() {
    // création du tableau events et son setteur
    const [events, setEvents] = useState([]);
    // const [filteredEvents, setFilteredEvents] = useState([]);

    function eventJour() {
        //Récupération des données de l'API
        fetch('https://history.muffinlabs.com/date')
        // l'API nous envoie une réponse que l'on convertit en json
        .then((res) => (res.json()))
        // màj de l'event
        .then((data) => {
        // On stocke les event dans une nouvelle liste
        const eventsList = data.data.Events;

        // On garde 3 évènements depuis 1888
        const myEvents = eventsList.filter(event => parseInt(event.year) < 2000).slice(0,3);
        console.log(myEvents);
        // màj des événements filtrés
        setEvents(myEvents);


        })
        // au cas où erreur
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        eventJour();
    }, []);
    
    
    return (
        <div>
            <h1>Événements historiques du jour</h1>
            {/* On affiche les événements avec le getter event */}
            {events.map((event, index) => (
                <div key={index}>
                    <h3>Année : {event.year}</h3>
                    <p>{event.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Event;