import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'
import faker from 'faker'

export default class CustomerView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount() {
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
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
                            <i className='user icon'></i>First Name:
                        </div>
                        <div className='ui basic label'>{this.state.customer.firstName}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='user icon'></i>Last Name:
                        </div>
                        <div className='ui basic label'>{this.state.customer.lastName}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='user plus icon'></i>User Name:
                        </div>
                        <div className='ui basic label'>{this.state.customer.userName}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='envelope icon'></i>Email:
                        </div>
                        <div className='ui basic label'>{this.state.customer.email}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='phone icon'></i>Phone Number:
                        </div>
                        <div className='ui basic label'>{this.state.customer.phoneNumber}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='birthday cake icon'></i>DOB:
                        </div>
                        <div className='ui basic label'>{this.state.customer.dateOfBirth}</div>
                    </p>
                    <p>
                        <div className='ui label'>
                            <i className='home cake icon'></i>Address:
                        </div>
                        <div className='ui basic label'>{this.state.customer.address}</div>
                    </p>
                </div>
          </div>
      </div>
    )
  }
}
