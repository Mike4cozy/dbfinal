import React, { Component } from 'react'
import RestaurantService from '../services/RestaurantService'

export default class RestaurantList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: []
        }
        this.addRestaurant = this.addRestaurant.bind(this);
        this.editRestaurant = this.editRestaurant.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);

    }

    editRestaurant(id){
        this.props.history.push(`/add-restaurant/${id}`);
    }

    deleteRestaurant(id) {
        RestaurantService.deleteRestaurant(id).then(res => {
            this.setState({restaurants: this.state.restaurants.filter(restaurant => restaurant.id !== id)});
        });
    }

    componentDidMount() {
        RestaurantService.getRestaurants().then(res => {
            this.setState({restaurants: res.data})
        });
    }

    addRestaurant(){
        this.props.history.push('/add-restaurant/_add');
    }

    render() {
        return (
            <div>
                <div className='ui text center aligned container'>
                    <h2>Restaurants List</h2>
                </div>
                <br></br>
                <div className='row'>
                    <button className='ui primary button' onClick={this.addRestaurant}>
                        <i className='warehouse icon'></i>
                        Add Restaurant
                    </button>
                </div>
                <br></br>
                <div className='ui container'>
                    <table className='ui single line table'>
                        <thead>
                            <th>Restaurant Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>Action</th>
                            <th>Cuisine</th>
                        </thead>

                        <tbody>
                            {
                                this.state.restaurants.map(
                                    restaurant =>
                                    <tr key={restaurant.id}>
                                        <td>{restaurant.name}</td>
                                        <td>{restaurant.address}</td>
                                        <td>{restaurant.email}</td>
                                        <td>{restaurant.phoneNumber}</td>
                                        <td>{restaurant.cuisine}</td>
                                        <td>
                                            <button className='ui primary button' onClick={ () => this.editRestaurant(restaurant.id)}>Update</button>
                                            <button className='negative ui button' onClick={ () => this.deleteRestaurant(restaurant.id)}>Delete</button>
                                            <button className='ui primary button'>View</button>
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
