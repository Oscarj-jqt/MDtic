import { React, useEffect, useState } from "react";

function Mocktail() {
  // état pour le tableau contenant les mocktails
  const [mocktail, setMocktail] = useState({
    name: null,
    image: null,
  });

  function getMocktail() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      .then((res) => res.json())
      .then((data) => {
        //Index aléatoire du tableau Mocktail
        const randomIndex = Math.floor(Math.random() * data.drinks.length);
        // sélecton aléatoire d'un mocktail
        const myrandomMocktail = data.drinks[randomIndex];
        // màj de l'état avec le nom et l'image
        setMocktail({
          name: myrandomMocktail.strDrink,
          image: myrandomMocktail.strDrinkThumb,
        });
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getMocktail();
  }, []);

  return (
    <li class="cards__item">
      <div class="card">
        <img src={mocktail.image} alt={mocktail.name} />

        <div class="card__content">
          <div class="card__title">{mocktail.name}</div>
          <p class="card__text"></p>
          <button onClick={getMocktail}>Another Mocktail</button>
        </div>
      </div>
    </li>
  );
}

export default Mocktail;
