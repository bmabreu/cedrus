import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class AllProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: []
    }
  }

  componentDidMount() {
    axios
      .get('api/products')
      .then(products => products.data)
      .then(data => {
        this.setState({
          allProducts: data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.Products.length > 0 ? (
            this.state.allProducts.map(products => {
              return (
                <div className="card" key={products.id}>
                  <div className="card-body">
                    <Link to={`/product/${products.id}`}>
                      <img src={products.image} className="card-img-top" />
                      <h5 className="card-title">{products.name}</h5>
                      <p className="card-text">{products.description}</p>
                      <div className="btn btn-primary">View Product</div>
                    </Link>
                  </div>
                </div>
              )
            })
          ) : (
            <h3>There are no products registered in the database.</h3>
          )}
        </div>
      </div>
    )
  }
}
