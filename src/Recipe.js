import React from "react";
import style from "./recipe.module.css"

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h2 id="underline">Ingredients</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>calories = {calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}
export default Recipe