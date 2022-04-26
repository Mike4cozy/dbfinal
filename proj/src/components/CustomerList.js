import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'


export default class CustomerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
    }

    viewCustomer(id) {
        this.props.history.push(`/view-customer/${id}`)
    }

    deleteCustomer(id) {
        CustomerService.deleteCustomer(id).then(res => {
            this.setState({customers: this.state.customers.filter(customer => customer.id !== id)})
        });
    }

    editCustomer(id){
        this.props.history.push(`/add-customer/${id}`);
    }

    componentDidMount() {
        CustomerService.getCustomers().then(res => {
            this.setState({customers: res.data})
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer/_add');
    }

    render() {
        return (
            <div>
                <div className='ui text center aligned container'>
                    <h2>Customers List</h2>
                </div>
                <br></br>
                <div className='row'>
                    <button className='ui primary button' onClick={this.addCustomer}>
                        <i className='icon user'></i>
                        Add Customer
                    </button>
                </div>
                <br></br>
                <div className='ui container'>
                    <table className='ui single line table'>
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>DOB</th>
                            <th>Address</th>
                            <th>Action</th>
                        </thead>

                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                    <tr key={customer.id}>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.userName}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phoneNumber}</td>
                                        <td>{customer.dateOfBirth}</td>
                                        <td>{customer.address}</td>
                                        <td>
                                            <button className='ui primary button' onClick={ () => this.editCustomer(customer.id)}>Update</button>
                                            <button className='negative ui button' onClick={ () => this.deleteCustomer(customer.id)}>Delete</button>
                                            <button className='ui primary button' onClick={() => this.viewCustomer(customer.id)}>View</button>
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
