import React from 'react';
import {Link} from 'react-router-dom';

import style from './Button.module.css'

const Button = (props) => {

    let inputElement = null;

    switch(props.type){
        case('button'):
            inputElement = (<button className={style.Button} {...props}>{props.children}</button>)
        break;
        case('link'):
            inputElement = (
                <Link
                    className={style.Button}
                    {...props}
                    >{props.children}</Link>)
        break;
        default:
            inputElement = (<button className={style.Button} {...props}>{props.children}</button>)
    }
    
    return(
        inputElement
    )
}

export default Button;