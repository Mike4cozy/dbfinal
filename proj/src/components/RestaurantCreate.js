import React, { Component } from 'react'
import RestaurantService from '../services/RestaurantService';

export default class RestaurantCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            address: '',
            email: '',
            phoneNumber: '',
            cuisine: ''
        }
        this.changeRestaurantNameHandler = this.changeRestaurantNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);

        this.saveRestaurant = this.saveRestaurant.bind(this);
    }

    componentDidMount() {
        RestaurantService.getRestaurantById(this.state.id).then(res => {
            if (this.state.id === '_add') {
                return
            } else {
                let restaurant = res.data;
                this.setState({restaurantName: restaurant.firstName,
                    address: restaurant.lastName,
                    email: restaurant.userName,
                    phoneNumber: restaurant.password
                });
            }
        });
    }

    changeRestaurantNameHandler = (event) => {
        this.setState({restaurantName: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    cancel() {
        this.props.history.push('/restaurants');
    }

    saveRestaurant = (event) => {
        event.preventDefault();
        let restaurant = {
            restaurantName: this.state.restaurantName,
            address: this.state.address,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        };
        console.log('restaurant => ' + JSON.stringify(restaurant));

        if (this.state.id === '_add') {
            RestaurantService.createRestaurant(restaurant).then(res => {
                this.props.history.push('/restaurants')
            });
        } else {
            RestaurantService.updateRestaurant(restaurant).then(res => {
                this.props.history.push('/restaurants');
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
                        <p>Add Restaurant</p>
                    </div>
                    <div className='content'>
                        <form className='ui large form container'>
                            <div className='field'>
                                <label>Restaurant Name</label>
                                <input type="text" name="restaurant-name" placeholder="Restaurant Name"
                                    value={this.state.restaurantName} onChange={this.changeRestaurantNameHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Address</label>
                                <input type="text" name="address" placeholder="Address"
                                    value={this.state.address} onChange={this.changeAddressHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Email"
                                    value={this.state.email} onChange={this.changeEmailHandler}></input>
                            </div>
                            <div className='field'>
                                <label>PhoneNumber</label>
                                <input type="text" name="phoneNumber" placeholder="PhoneNumber"
                                    value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}></input>
                            </div>

                        </form>
                    </div>
                    <div className='extra content'>
                        <div className='ui two buttons'>
                            <div className='ui primary button' onClick={this.saveRestaurant}>Save</div>
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
