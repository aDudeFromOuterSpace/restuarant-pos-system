import React from 'react';
function Modal(props) {
    return (<div
    style={{transform : props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
        {props.children}
    </div>);
}

export default Modal;