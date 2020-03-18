import React, { Component } from 'react'
import axios from 'axios'


export default class HomePage extends Component {
    state = {
        clothingPlace: {
            name: "",
            description: "",
            url: ""
        },
        restaurant: {
            name: "",
            description: "",
            url: ""
        },
        shoePlace: {
            name: "",
            description: "",
            url: ""
        },
        clothes: [],
        restaurants: [],
        shoes: []
    }

    render() {
        return (
            <div>
                <h1>Welcome to Choose Earth Friendly!</h1>
                <nav>
                    <a href="/clothes">Clothes</a>
                    <a href="/shoes">Shoes</a>
                    <a href="/restaurants">Restaurants</a>
                </nav>
            </div>
        )
    }
}
