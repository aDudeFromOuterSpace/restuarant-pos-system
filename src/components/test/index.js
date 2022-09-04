import React from 'react';
import style from './style.module.css'
import Modal from '../modal';

function Test(props){
    const a = [];
    props.foods.map((el, i)=>{
        a.push(<div>
            <p>{el.foodName}</p>
            <Modal />
            <Modal />
        </div>)
    })
    return (<div className={style.test}>{a}</div>);
}

export default Test;
