import React, {Component} from 'react';
import Aux from '../hoc/Aux1';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1.3,
  meat: 0.7
}
class BurgerBuilder extends Component {

  state = {
    ingredients : {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler =(type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount +1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const PriceAddition = INGREDIENT_PRICES[type];
    const oldPrice =this.state.totalPrice
    const newPrice = oldPrice + PriceAddition;
    this.setState({totalPrice: newPrice,ingredients: updatedIngredients});
  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount === 0){
      return;
    }
    const updatedCount = oldCount -1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const PriceAddition = INGREDIENT_PRICES[type];
    const oldPrice =this.state.totalPrice
    const newPrice = oldPrice - PriceAddition;
    this.setState({totalPrice: newPrice,ingredients: updatedIngredients});
  }
  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <=0
    }
    return (
      <Aux>
          <Burger ingredients ={this.state.ingredients}/>
          <BuildControls  ingredientAdded = {this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredientHandler}
            diabled = {disableInfo}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
