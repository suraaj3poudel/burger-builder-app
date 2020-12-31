import React from "react";

import imageLogo from '../../assests/images/burger-logo.png';
import './Logo.css'

const logo=(props)=>(
    <div className="Logo" style={{height:props.height}}>
        <img src={imageLogo} alt="My Burger"/>
    </div>
)

export default logo