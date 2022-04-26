import React, { Component } from 'react'
import FoodService from '../services/FoodService';

export default class FoodCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            foodName: '',
            price: '',
            description: '',
        }
        this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);

        this.saveFood = this.saveFood.bind(this);
    }

    componentDidMount() {
        FoodService.getFoodById(this.state.id).then(res => {
            if (this.state.id === '_add') {
                return
            } else {
                let food = res.data;
                this.setState({foodName: food.foodName,
                   price: food.price,
                   description: food.description
                });
            }
        });
    }

    changeFoodNameHandler = (event) => {
        this.setState({foodName: event.target.value});
    }


    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    cancel() {
        this.props.history.push('/foods');
    }

    saveFood = (event) => {
        event.preventDefault();
        let food = {
            foodName: this.state.foodName,
            price: this.state.price,
            description: this.state.description
            
        };
        console.log('food => ' + JSON.stringify(food));

        if (this.state.id === '_add') {
            FoodService.createFood(food).then(res => {
                this.props.history.push('/foods');
            });
        } else {
            FoodService.updateFood(food, this.state.id).then(res => {
                this.props.history.push('/foods');
            });
        }
    }

  render() {
    return (
      <div>
          <div className='ui container'>
              <div className='row'>
                  <div className='ui card'>
                    <div className='content'>
                        <p>Add Food</p>
                    </div>
                    <div className='content'>
                        <form className='ui large form container'>
                            <div className='field'>
                                <label>Food Name</label>
                                <input type="text" name="food-name" placeholder="Food Name"
                                    value={this.state.foodName} onChange={this.changeFoodNameHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Price</label>
                                <input type="text" name="price" placeholder="Price"
                                    value={this.state.price} onChange={this.changePriceHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Description</label>
                                <input type="text" name="description" placeholder="Description"
                                    value={this.state.description} onChange={this.changeDescriptionHandler}></input>
                            </div>

                            

                        </form>
                    </div>
                    <div className='extra content'>
                        <div className='ui two buttons'>
                            <div className='ui primary button' onClick={this.saveFood}>Save</div>
                            <div className='ui button' onClick={this.cancel.bind(this)}>Discard</div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
