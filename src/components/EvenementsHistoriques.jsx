import React, { useEffect, useState } from "react";

function EvenementsHistoriques() {
  // État pour stocker les événements historiques
  const [evenements, setEvenements] = useState([]);
  // État pour gérer une éventuelle erreur
  const [error, setError] = useState(null);

  function obtenirEvenements() {
    // Obtenir le mois et le jour actuels
    const today = new Date();
    const month = today.getMonth() + 1; // Les mois commencent à 0
    const day = today.getDate();

    // Appeler l'API pour récupérer les événements historiques de la date actuelle
    fetch(`http://history.muffinlabs.com/date/${month}/${day}`)
      .then((res) => res.json())
      .then((data) => {
        // Limiter le nombre d'événements pour ne pas surcharger l'affichage
        setEvenements(data.data.Events.slice(0, 5));
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des événements :", err);
        setError("Impossible de charger les événements historiques pour le moment.");
      });
  }

  // Appeler la fonction au chargement du composant
  useEffect(() => {
    obtenirEvenements();
  }, []);

  return (
    <div>
      <h2>Événements historiques du jour</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {evenements.map((event, index) => (
            <li key={index}>
              <strong>{event.year}:</strong> {event.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EvenementsHistoriques;
