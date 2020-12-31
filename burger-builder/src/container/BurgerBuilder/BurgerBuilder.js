import React from 'react'
import {Component} from 'react'
import Auxillary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES= {
    salad:0.5,
    cheese:0.4,
    bacon:0.7,
    meat:1.3

}

class BurgerBuilder extends Component{


state={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice: 1.99,
    purchasable:false,
    purchasing: false
}


updatePurchaseState(ingredients){
    const sum = Object.keys(ingredients).map( igKey =>{
        return ingredients[igKey]
    }).reduce((sum, el) => {
        return sum+el;
    },0)
    
    this.setState({purchasable: sum>0})

}

addIngredientHandler=(type) =>{
    let oldCount = this.state.ingredients[type];
    let updatedIngredients ={
        ...this.state.ingredients
    }
    updatedIngredients[type] = oldCount+1;
    const priceAddition = INGREDIENT_PRICES[type] ;
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition+oldPrice;

    
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    this.updatePurchaseState(updatedIngredients);
}

removeIngredientHandler=(type) =>{
    let oldCount = this.state.ingredients[type];
    if(oldCount <=0)
        return;
    let updatedIngredients ={
        ...this.state.ingredients
    }

    const oldPrice = this.state.totalPrice;
    updatedIngredients[type] = oldCount-1;
    const priceSubstraction = INGREDIENT_PRICES[type] ;
    
    const newPrice = oldPrice-priceSubstraction;

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    this.updatePurchaseState(updatedIngredients);
}

purchaseHandler=()=>{
    this.setState({
        purchasing:true
    })
}

purchaseCancelHandler=()=>{
    this.setState({
        purchasing:false
    })
}

purchaseContinueHandler=()=>{
    alert('You Continue!')
}

 render(){
    let disabledInfo={
        ...this.state.ingredients
    }

    for(let type in disabledInfo){
        disabledInfo[type] = disabledInfo[type] <=0;
    }
    return(
        <Auxillary>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary totalPrice = {this.state.totalPrice.toFixed(2)} ingredients={this.state.ingredients} cancel={this.purchaseCancelHandler} order={this.purchaseContinueHandler}/>
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
                ingredientsAdded={this.addIngredientHandler}
                ingredientsRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={!this.state.purchasable}
                total={this.state.totalPrice.toFixed(2)}
                ordered={this.purchaseHandler}/>
        </Auxillary>
    )
 }
}

export default BurgerBuilder