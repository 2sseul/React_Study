import React from "react";

import classes from './Button.module.css';

const Button = (props) => {
    //button의 type이 지정되지 않을 경우를 대비하여 or연산자 ||를 사용해서 'button'을 추가해준다.
    return(
        <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default Button;