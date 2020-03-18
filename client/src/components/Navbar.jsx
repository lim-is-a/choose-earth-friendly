import React, { Component } from 'react'
import axios from 'axios'

export default class Navbar extends Component {
    state = {
        clothesList: []    
    }

    getClothes = () => { 
        axios.get('/api/earthfriendly/clothes').then((response) => { 
            this.setState({
                clothesList: response.data
            })
        })
    }


    getShoes = () => { }
    getRestaurants = () => { }



    render() {
        return (
            <div>
                 <nav>
                    <a href="/">Home</a>
                    <button onClick={ () => {this.getClothes()}}>Clothes</button>
                    <button onClick={ () => {}}>Shoes</button>
                    <button onClick={ () => {}}>Restaurants</button>
                    {/* <a href="">Clothes</a>
                    <a href="">Shoes</a>
                    <a href="">Restaurants</a> */}
                </nav>
            </div>
        )
    }
}
