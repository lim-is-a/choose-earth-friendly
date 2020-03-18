import React, { Component } from 'react'
import axios from 'axios'

export default class Navbar extends Component {
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
                <nav>
                    <a href="/">Home</a>
                    <button onClick={() => { this.getClothes() }}>Clothes</button>
                    <button onClick={() => {this.getShoes() }}>Shoes</button>
                    <button onClick={() => { this.getRestaurants()}}>Restaurants</button>
                    {/* <a href="">Clothes</a>
                    <a href="">Shoes</a>
                    <a href="">Restaurants</a> */}
                </nav>
            </div>
        )
    }
}
