import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import AllProducts from './components/AllProducts'

export default class App extends Component {
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
                <Route path="/" component={AllProducts} />
                <Route exact path="/products" component={AllProducts} />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </div>
    )
  }
}
