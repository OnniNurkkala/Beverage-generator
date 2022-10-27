import React from "react";
import axios from "axios";


import { useState,useEffect } from "react"

const API_URl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

export default function Weather(){

    const [ICON_URl, setICON_URl] = useState(null)

    const [Name, setName] = useState(null)
    const [Alcoholic, setAlcoholic] = useState(null)
    const [Glass, setGlass] = useState(null)
    const [Instructions, setInstructions] = useState(null)

    const [ingredient1, setingredient1] = useState(null)
    const [ingredient2, setingredient2] = useState(null)
    const [ingredient3, setingredient3] = useState(null)
    const [ingredient4, setingredient4] = useState(null)
    const [ingredient5, setingredient5] = useState(null)
    const [ingredient6, setingredient6] = useState(null)
    const [ingredient7, setingredient7] = useState(null)
    const [ingredient8, setingredient8] = useState(null)
    const [ingredient9, setingredient9] = useState(null)

    const [Measure1, setMeasure1] = useState(null)
    const [Measure2, setMeasure2] = useState(null)
    const [Measure3, setMeasure3] = useState(null)
    const [Measure4, setMeasure4] = useState(null)
    const [Measure5, setMeasure5] = useState(null)
    const [Measure6, setMeasure6] = useState(null)
    const [Measure7, setMeasure7] = useState(null)
    const [Measure8, setMeasure8] = useState(null)
    const [Measure9, setMeasure9] = useState(null)


    useEffect(() => {
        console.log(API_URl)

        axios.get(API_URl)
            .then((response) => {
                console.log(response.data);

                setICON_URl(response.data.drinks[0].strDrinkThumb)
                setName(response.data.drinks[0].strDrink)
                setAlcoholic(response.data.drinks[0].strAlcoholic)
                setGlass(response.data.drinks[0].strGlass)
                setInstructions(response.data.drinks[0].strInstructions)

                setingredient1(response.data.drinks[0].strIngredient1)
                setingredient2(response.data.drinks[0].strIngredient2)
                setingredient3(response.data.drinks[0].strIngredient3)
                setingredient4(response.data.drinks[0].strIngredient4)
                setingredient5(response.data.drinks[0].strIngredient5)
                setingredient6(response.data.drinks[0].strIngredient6)
                setingredient7(response.data.drinks[0].strIngredient7)
                setingredient8(response.data.drinks[0].strIngredient8)
                setingredient9(response.data.drinks[0].strIngredient9)

                setMeasure1(response.data.drinks[0].strMeasure1)
                setMeasure2(response.data.drinks[0].strMeasure2)
                setMeasure3(response.data.drinks[0].strMeasure3)
                setMeasure4(response.data.drinks[0].strMeasure4)
                setMeasure5(response.data.drinks[0].strMeasure5)
                setMeasure6(response.data.drinks[0].strMeasure6)
                setMeasure7(response.data.drinks[0].strMeasure7)
                setMeasure8(response.data.drinks[0].strMeasure8)
                setMeasure9(response.data.drinks[0].strMeasure9)

            }).catch(error => {
                alert(error)
            })
    }, [])

    return (
        <div>
            <h1>{Name} - {Alcoholic} Drink</h1>
            <img alt="Drink picture" src={ICON_URl} width="auto" height="300"/>
            <h2>Requirements:</h2>
            <p>Glass: {Glass}</p>
            <p class=".ingredient">{ingredient1} {Measure1}</p>
            <p>{ingredient2} {Measure2}</p>
            <p>{ingredient3} {Measure3}</p>
            <p>{ingredient4} {Measure4}</p>
            <p>{ingredient5} {Measure5}</p>
            <p>{ingredient6} {Measure6}</p>
            <p>{ingredient7} {Measure7}</p>
            <p>{ingredient8} {Measure8}</p>
            <p>{ingredient9} {Measure9}</p>            
            <h2>Instructions:</h2> 
            <p>{Instructions}</p>
             
        </div>
    )
}