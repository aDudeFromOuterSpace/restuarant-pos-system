import React from 'react';
import style from './style.module.css'

function Order(props) {
    
    return ( 
        <div className={style.orderSection}>
            <span> <img className={style.ImgUrl} src="ImgUrl" alt="GenericPlaceholder"/></span>
            <span> <p className={style.text}>{props.ner}</p></span>
            <button onClick={()=>props.RemoveFood(props.id, props.price)} className={style.Minus}>-</button>
            <p>{props.order}</p>
            <button onClick={()=>props.AddFood(props.id, props.price)} className={style.Plus}>+</button>
            <p>{props.price}</p>
        </div>
        
    );
}

export default Order;
