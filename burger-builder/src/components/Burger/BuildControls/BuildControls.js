import React from 'react'
import './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls =[
    { label:"Salad" , type: 'salad' },
    { label:"Bacon " , type: 'bacon' },
    { label:"Cheese" , type: 'cheese' },
    { label:"Meat" , type: 'meat' }
]

const buildControls = (props) =>{

    return(<div className="BuildControls">
        <p> Subtotal : <strong>${props.total}</strong></p>
        {controls.map(ctrl =>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingredientsAdded(ctrl.type)}
                deleted={()=>props.ingredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                > 
            </BuildControl>
        ))}
        <button className="OrderButton" disabled={props.purchasable} onClick={props.ordered}> ORDER NOW </button>
    </div>)
}

export default buildControls