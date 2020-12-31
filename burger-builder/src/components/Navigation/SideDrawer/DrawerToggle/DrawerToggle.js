import React from 'react'
import './DrawerToggle.css'
const drawerToggle = (props) =>{
    return(
        <div className="DrawerToggle" onClick={props.clicked}>
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div> 
        </div>
    )
}

export default drawerToggle