import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

export default class CustomerUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
            phoneNumber: '',
            dateOfBirth: '',
            address:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount() {
        CustomerService.getCustomerById(this.state.id).then(res => {
            let customer = res.data;
            this.setState({firstName: customer.firstName,
               lastName: customer.lastName,
               userName: customer.userName,
               password: customer.password,
               email: customer.email,
               phoneNumber: customer.phoneNumber,
               dateOfBirth: customer.dateOfBirth,
               address: customer.address 
            });
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeUserNameHandler = (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changeDobHandler = (event) => {
        this.setState({dateOfBirth: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    cancel() {
        this.props.history.push('/customers');
    }

    updateCustomer = (event) => {
        event.preventDefault();
        let customer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            dateOfBirth: this.state.dateOfBirth,
            address: this.state.address
        };
        console.log('customer => ' + JSON.stringify(customer));

        CustomerService.updateCustomer(customer, this.state.id).then(res => {
            this.props.history.push('/customers');
        });
    }

  render() {
    return (
      <div>
          <div className='ui container'>
              <div className='row'>
                  <div className='ui card'>
                    <div className='content'>
                        <p>Add Customer</p>
                    </div>
                    <div className='content'>
                        <form className='ui form'>
                            <div className='field'>
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="Last Name"
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                            </div>
                            <div className='field'>
                                <label>User Name</label>
                                <input type="text" name="user-name" placeholder="User Name"
                                    value={this.state.userName} onChange={this.changeUserNameHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password"
                                    value={this.state.password} onChange={this.changePasswordHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Email</label>
                                <input type="email" name="email" placeholder="abc@neu.edu"
                                    value={this.state.email} onChange={this.changeEmailHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Phone Number</label>
                                <input type="text" name="phone-number" placeholder="xxxxxxxxx"
                                    value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Date of Birth</label>
                                <input type="text" name="date-of-birth" placeholder="xxxx-xx-xx"
                                    value={this.state.dateOfBirth} onChange={this.changeDobHandler}></input>
                            </div>
                            <div className='field'>
                                <label>Address</label>
                                <input type="text" name="address" placeholder="Address"
                                    value={this.state.address} onChange={this.changeAddressHandler}></input>
                            </div>
                        </form>
                    </div>
                    <div className='extra content'>
                        <div className='ui two buttons'>
                            <div className='ui primary button' onClick={this.updateCustomer}>Save</div>
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
