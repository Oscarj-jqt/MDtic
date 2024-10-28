import { React, useEffect, useState } from "react";


function Recette() {

    const [recipe, setRecipe] = useState({
        meal: null, 
        image: null, 
        instructions: null
    });

    function getRecipe() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => (res.json()))
        .then((data) => {
            setRecipe({
                meal: data.meals.strMeal,
                image: data.meals.strMealThumb,
                instructions: data.meals.strInstructions
            });
        })
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getRecipe();
    }, []);


    return (
        <div>
            <h1>Recette du jour</h1>
            <h2>{recipe.meal}</h2>
            <h3>{recipe.instructions}</h3>
            <img src={recipe.image} alt={recipe.meal} />
            <button onClick={getRecipe}>Autre recette</button>
        </div>
    );


}


export default Recette;