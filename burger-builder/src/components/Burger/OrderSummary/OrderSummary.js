import React from 'react'
import Auxillary from '../../../hoc/Auxilliary';
import Button from "../../UI/Button/Button"

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
            <h3> Your Total: <strong style={{color: 'red'}}>${props.totalPrice}</strong> </h3>
            <p> Continue to Checkout?</p>
            <Button btnType="Danger" danger={props.cancel}>CANCEL</Button>
            <Button btnType="Success" success={props.order}> CONTINUE </Button>
        </Auxillary>
    )
}

export default orderSummary;