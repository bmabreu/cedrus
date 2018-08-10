import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div id="navbar" className="navbarParent">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/products" className="navbar-brand">
            Welcome to ShareShed
            <span className="sr-only">(current)</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-link">
                <Link to="/products">Products</Link>
              </li>

              <li className="nav-item nav-link">
                <Link to="/users">Users</Link>
              </li>

              <li className="nav-item nav-link">
                <Link to="/products/newproduct">Add Product</Link>
              </li>

              <li className="nav-item nav-link">
                <Link to="/users/newuser">Add User</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
