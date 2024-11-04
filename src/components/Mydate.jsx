import dateIcon from "../assets/calendar-0.svg";
import timeIcon from "../assets/clock-1.svg";

// Importation des modules React
import { React, useEffect, useState } from "react";

// Composant pour afficher la date et l'heure actuelles
function Mydate() {
  // Initialisation de la date actuelle
  const date = new Date();
  const month = date.getMonth() + 1; // Mois actuel (+1 car Janvier = 0)
  const day = date.getDate(); // Jour actuel
  const year = date.getFullYear(); // Année actuelle

  // Récupération de l'heure actuelle (heures et minutes)
  const time = date.getHours() + ":" + date.getMinutes();

  // Gestion de l'état pour stocker l'heure actuelle
  const [currenttime, setTime] = useState(time);

  // Utilisation de useEffect pour mettre à jour l'heure toutes les minutes
  useEffect(() => {
    // Création de l'intervalle pour actualiser l'heure toutes les 60 secondes
    const objetInterval = setInterval(() => {
      // Récupération de la nouvelle heure
      const upDate = new Date();
      const newTime = upDate.getHours() + ":" + upDate.getMinutes();
      setTime(newTime); // Mise à jour de l'état avec la nouvelle heure
    }, 60000); // 60000 ms = 1 minute

    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    return () => {
      clearInterval(objetInterval);
    };
  }, []); // Le tableau vide indique que cet effet s'exécute une seule fois au montage

  return (
    <div className="callendar">
      {/* Affichage de la date actuelle */}
      <div className="date">
        <img src={dateIcon} alt="" /> {/* Icône de calendrier */}
        Today is {month} / {day} / {year} {/* Affichage de la date */}
      </div>
      {/* Affichage de l'heure actuelle */}
      <div className="time">
        <img src={timeIcon} alt="" /> {/* Icône de l'horloge */}
        Time is {currenttime} {/* Affichage de l'heure */}
      </div>
    </div>
  );
}

export default Mydate;
