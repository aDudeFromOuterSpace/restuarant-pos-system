import React from "react";
import style from "./style.module.css";
function Button(props){
    return(
        <button onClick={props.test} className={'${style.btn} ${style[props.btnType2]}'}>{props.btnName}</button>
    )
}