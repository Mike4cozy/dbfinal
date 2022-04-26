import React, { Component } from 'react'
import FoodService from '../services/FoodService'

export default class FoodList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foods: []
        }
        this.addFood = this.addFood.bind(this);
        this.editFood = this.editFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
        this.viewFood = this.viewFood.bind(this);
    }

    viewFood(id) {
        this.props.history.push(`./view-food/${id}`)
    }

    editFood(id){
        this.props.history.push(`/add-food/${id}`);
    }
    
    deleteFood(id) {
        FoodService.deleteFood(id).then(res => {
            this.setState({foods: this.state.foods.filter(food => food.id !== id)});
        });
    }

    componentDidMount() {
        FoodService.getFoods().then(res => {
            this.setState({foods: res.data})
        });
    }

    addFood(){
        this.props.history.push('/add-food/_add');
    }

    render() {
        return (
            <div>
                <div className='ui text center aligned container'>
                    <h2>Foods List</h2>
                </div>
                <br></br>
                <div className='row'>
                    <button className='ui primary button' onClick={this.addFood}>
                        <i className='icon birthday cake'></i>
                        Add Food
                    </button>
                </div>
                <br></br>
                <div className='ui container'>
                    <table className='ui single line table'>
                        <thead>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </thead>

                        <tbody>
                            {
                                this.state.foods.map(
                                    food =>
                                    <tr key={food.id}>
                                        <td>{food.foodName}</td>
                                        <td>{food.price}</td>
                                        <td>{food.description}</td>
                                        <td>
                                            <button className='ui primary button' onClick={ () => this.editFood(food.id)}>Update</button>
                                            <button className='negative ui button' onClick={() => this.deleteFood(food.id)}>Delete</button>
                                            <button className='ui primary button' onClick={() => this.viewFood(food.id)}>View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
