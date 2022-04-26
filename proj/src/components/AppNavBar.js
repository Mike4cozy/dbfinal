import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AppNavBar extends Component {
  render() {
    return (
      <div className='wrapper'>
      <div className='ui fix inverted menu'>
          <div className='ui container'>
            {/* Project Name */}
            <Link className='header item' to="/">
              <i className='shipping fast icon'></i>Food Rush
            </Link>
            {/* Home Button */}
            <Link className='item' to="/">
              <i className='home icon'></i>
              Home
            </Link>
            <Link className='item' to="/customers">
              <i className='user icon'></i>
              Customers
            </Link>
            <Link className='item' to="/foods">
              <i className='birthday cake icon'></i>
              Foods
            </Link>
            <Link className='item' to="/restaurants">
              <i className='warehouse icon'></i>
              Restaurants
            </Link>
          </div>
      </div>
      </div>
    )
  }
}
