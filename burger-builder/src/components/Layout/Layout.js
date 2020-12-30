import React from 'react'
import Auxilliary from '../../hoc/Auxilliary'
import  './Layout.css'


const layout = (props) =>{
    return(
    <Auxilliary>
        <h1> Burger Builder </h1>
        <main className="Content">
            {props.children}
        </main>
    </Auxilliary>
    )
};

export default layout