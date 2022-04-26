import React, { Component } from 'react'
import FoodService from '../services/FoodService'
import faker from 'faker'

export default class FoodView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            food: {}
        }
    }

    componentDidMount() {
        FoodService.getFoodById(this.state.id).then( res => {
            this.setState({food: res.data});
        })
    }

  render() {
    return (
      <div>
          <div className='ui card'>
              <div className='image'>
                <img alt="avatar" src={faker.image.image()} />
              </div>
                <div className='content'>
                    <p>
                        <div className='ui label'>
                            <i className='user icon'></i>Food Name:
                        </div>
                        <div className='ui basic label'>{this.state.food.foodName}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='user icon'></i>Price:
                        </div>
                        <div className='ui basic label'>{this.state.food.price}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='user icon'></i>Description:
                        </div>
                        <div className='ui basic label'>{this.state.food.description}</div>
                    </p>
                </div>
          </div>
      </div>
    )
  }
}
