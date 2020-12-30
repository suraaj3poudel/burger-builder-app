import React from 'react'
import Auxillary from '../../../hoc/Auxilliary';

const orderSummary=(props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map(igkey =>{
        return <li key={igkey}> <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
    })
    return (
        <Auxillary>
            <h3> Your order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to Checkout?</p>
        </Auxillary>
    )
}

export default orderSummary;