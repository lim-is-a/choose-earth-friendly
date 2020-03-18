import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Clothes from './Clothes'
import Restaurants from './Restaurants'
import Shoes from './Shoes'

export default class HomePage extends Component {
    state = {
        clothesList: [],
        shoesList: [],
        restaurantsList: []
    }

    getClothes = () => {
        axios.get('/api/earthfriendly/clothes').then((response) => {
            this.setState({
                clothesList: response.data,
                shoesList: [],
                restaurantsList: []
            })
        })
    }
    getShoes = () => {
        axios.get('/api/earthfriendly/shoes').then((response) => {
            this.setState({
                shoesList: response.data,
                clothesList: [],
                restaurantsList: []
            })
        })
    }
    getRestaurants = () => {
        axios.get('/api/earthfriendly/restaurants').then((response) => {
            this.setState({
                clothesList: [],
                shoesList: [],
                restaurantsList: response.data
            })
        })
    }

    render() {
        return (
            <div>
               
                <Navbar
                    getClothes={this.getClothes}
                    getShoes={this.getShoes}
                    getRestaurants={this.getRestaurants} />
                 <div>
                    <h2>Welcome to:</h2>
                    <h1>Choose Earth Friendly!</h1>
                </div>
                {(this.state.clothesList.length > 0)
                    ? <Clothes/>
                    : null
                }
                {(this.state.shoesList.length > 0)
                    ? <Shoes/>
                    : null
                }
                {(this.state.restaurantsList.length > 0)
                    ? <Restaurants/>
                    : null
                }
            </div>
        )
    }
}
