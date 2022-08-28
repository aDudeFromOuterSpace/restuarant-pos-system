import React from "react";
import Food from "../Food";
import "./style.css";
function Foods(props) {
        const test = [];
    props.foods.map((el, i) => {
        test.push(<Food key={i} id={el.id} price={el.price} ner={el.foodName} url={el.ImgUrl} FoodNemeh={props.FoodNemeh}/>);
    });
    return (<div className="Foods">{test}</div>);
}

export default Foods;
