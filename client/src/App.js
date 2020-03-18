import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage.jsx'
import Clothes from './components/Clothes'
import Restaurants from './components/Restaurants'
import Shoes from './components/Shoes'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/clothes" component={Clothes} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/shoes" component={Shoes} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
