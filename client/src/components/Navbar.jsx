import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {

        return (
            <div>
                <nav>
                    <a href="/">Home</a>
                    <button onClick={() => { this.props.getClothes() } }>Clothes</button>
                    <button onClick={() => {this.props.getShoes() }}>Shoes</button>
                    <button onClick={() => { this.props.getRestaurants()}}>Restaurants</button>
                </nav>
            </div>
        )
    }
}
