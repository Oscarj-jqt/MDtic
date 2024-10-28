// Importation des modules React

import { React, useEffect, useState } from "react";

// Composant date

function Mydate() {
    // today = date.toString()
    // Stockage de la date initiale
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const today = `Aujourd'hui, nous sommes le ${day}` + ` ` + `${month}` + ` ` + `${year}`;
    // console.log(today);

    const time = date.getHours() + ':' + date.getMinutes();
    // Stockage du temps à partir de "date"
    // Gestion de l'état (useState) de la date pour la màj
    const [currenttime, setTime] = useState(time);
    const clock = `Il est ${time}`;
    console.log(clock);
   
    // Système de màj toute les minutes (useEffect)
    useEffect(() => {
      const objetInterval = setInterval(() => {
        // On relance la fonction Date()
        const upDate = new Date();
        const newTime = upDate.getHours() + ':' + upDate.getMinutes();
        setTime(newTime);
      }, 60000);
    
      return () => {
        clearInterval(objetInterval);
      };
    }, []);
    
    return (
        <div>
            <p>{today}</p>
            <p>{clock}</p>
        </div>
    )
  }

  export default Mydate;