
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllUsers from "./components/AllUsers"
import AllProducts from "./components/AllProducts"
import AddUser from "./components/AddUser"
import AddProduct from "./components/AddProduct"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      allUsers: [],
      SelectedProduct: {},
      selectedUser: {}
    };
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <HashRouter>
          <div>
            <div className="navbarParent">
              <Navbar />
            </div>

            <div className="col-xs-10">
              <Switch>
                <Route exact path="/" component={AllProducts} />

                <Route exact path="/products" component={AllProducts} />
                <Route exact path="/products/newproduct" component={AddProduct} />
                <Route exact path="/products/:productId" component={SelectedProduct} />

                <Route exact path="/users" component={AllUsers} />
                <Route exact path="/users/newuser" component={AddUser} />
                <Route exact path="/users/:userId" component={SelectedUser} />

              </Switch>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
