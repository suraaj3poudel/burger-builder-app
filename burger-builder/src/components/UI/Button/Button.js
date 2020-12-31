import React from 'react'
import './Button.css'

const button =(props) =>{
    let action =''
    let buttonType = 'Button '+props.btnType
    if(props.btnType==="Danger"){
        action = props.danger
    }

    else {
        action = props.success
    }
    return(
    <button 
    className= {buttonType} onClick={action}>{props.children}</button>);
}

export default button