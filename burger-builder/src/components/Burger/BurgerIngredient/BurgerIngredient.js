import React, { Component } from 'react'
import './BurgerIngredient.css'

class BurgerIngredient extends Component{
    render(){
        this.ingredient =null;
    switch (this.props.type){
        case('bread-bottom'):
        this.ingredient = <div className= "BreadBottom"></div>;
        break;

        case('bread-top'):
            this.ingredient=(
                <div className="BreadTop">
                    <div className="Seeds1"> </div>
                    <div className="Seeds2"> </div>

                </div>
            );
            break;
        case('meat'):
                this.ingredient=<div className="Meat"></div>;
                break;
        
        case('cheese'):
                this.ingredient=<div className="Cheese"> </div>;
                break;

        case('salad'):
                this.ingredient=<div className="Salad"></div>;
                break;
        
        case('bacon'):
                this.ingredient=<div className="Bacon"></div>;
                break;
        default:
            this.ingredient=null;
    }

    return this.ingredient;
}
}

//BurgerIngredient.string.PropTypes={
   // type: PropTypes.string.isRequired
//}



export default BurgerIngredient;