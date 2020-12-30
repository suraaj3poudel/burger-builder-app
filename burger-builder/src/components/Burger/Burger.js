import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import './Burger.css'

const burger=(props)=>{

    let total=0;

    let transformedIngredients = Object.keys(props.ingredients).map(igkey =>{
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                total += 1;
                return <BurgerIngredient key={igkey + i} type={igkey} />;
            });
        });
    
        if(total === 0){
            transformedIngredients='Please start adding ingredients.'
         }
        return(
            <div className='Burger'>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
        )
}

export default burger;