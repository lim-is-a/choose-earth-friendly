import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


export default class HomePage extends Component {
    state = {
        clothesList: [],
        shoesList: [],
        restaurantsList: []
    }

    getClothes = () => {
        axios.get('/api/earthfriendly/clothes').then((response) => {
            this.setState({
                clothesList: response.data
            })
        })
    }
    getShoes = () => {
        axios.get('/api/earthfriendly/shoes').then((response) => {
            this.setState({
                shoesList: response.data
            })
        })
    }
    getRestaurants = () => {
        axios.get('/api/earthfriendly/restaurants').then((response) => {
            this.setState({
                restaurantsList: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Welcome to:</h2>
                    <h1>Choose Earth Friendly!</h1>
                </div>
                <Navbar
                    getClothes={this.getClothes}
                    getShoes={this.getShoes}
                    getRestaurants={this.getRestaurants} />
            
            </div>
        )
    }
}
