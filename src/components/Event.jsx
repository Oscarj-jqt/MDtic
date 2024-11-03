import { React, useEffect, useState } from "react";

function Event() {
  // création du tableau events et son setteur
  const [events, setEvents] = useState([]);
  // const [filteredEvents, setFilteredEvents] = useState([]);

  function dailyEvent() {
    fetch("https://history.muffinlabs.com/date")
      .then((res) => res.json())
      // màj de l'event
      .then((data) => {
        // On stocke les event dans une nouvelle liste
        const eventsList = data.data.Events;
        // On garde 3 évènements depuis 1888
        const myEvents = eventsList
          .filter((event) => parseInt(event.year) < 2000)
          .slice(0, 3);
        console.log(myEvents);
        // màj des événements filtrés
        setEvents(myEvents);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    dailyEvent();
  }, []);

  return (
    <>
      {events.map((event, index) => (
        <li key={index} class="cards__item">
          <div class="card">
            <img src="" alt="" />

            <div class="card__content">
              <div class="card__title">Year : {event.year}</div>
              <p class="card__text">{event.text}</p>
              <button onClick="">Another Mocktail</button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default Event;
