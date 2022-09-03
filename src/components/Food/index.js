import React from "react";
import './style.css'

function Food(props) {
    return (
        <div className="food" onClick={() => props.FoodNemeh(props.id, props.price)}>
            <h2>{props.ner}</h2>
            <p>{props.price}</p>
            <img src={props.url} width="50%"></img>
        </div>
    );
}

export default Food;
