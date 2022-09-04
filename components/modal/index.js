import React from 'react';
import style from './style.module.css'

function Modal(props) {
    return (<div className={style.modal}
    style={{transform : props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
        {props.children}
    </div>);
}

export default Modal;
