import { React, useEffect, useState } from "react";


function Myrecipe() {
    const [recipe, setRecipe] = useState({
        name: null, 
        image: null, 
        instructions: null
    });

    function getRecipe() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => (res.json()))
        .then((data) => {
            // for (let i = 0; i < meals.length; i++) {
            //     const meal = data.meals[i];  
            // }
            // accès aux données du tableau meals
            const meal = data.meals[0];
            setRecipe({
                name: meal.strMeal,
                image: meal.strMealThumb,
                instructions: meal.strInstructions
            });
        })
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getRecipe();
    }, []);


    return (
        <div>
            <h1>Recipe of the day</h1>
            <h2>{recipe.name}</h2>
            <h3>{recipe.instructions}</h3>
            <img src={recipe.image} alt={recipe.meal} />
            <button onClick={getRecipe}>Another recipe</button>
        </div>
    );


}


export default Myrecipe;