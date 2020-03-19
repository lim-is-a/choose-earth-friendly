import React, { Component } from 'react'
import OneClothingShop from "./OneClothingShop"

export default class Clothes extends Component {
    render() {
        return (
            <div>
                <h1>Clothes</h1>
                {
                    this.props.clothesList.map((oneResult,i)=>{
                        return <OneClothingShop id={oneResult._id} name = {oneResult.name} 
                           description={oneResult.description} url={oneResult.url} delete={this.props.delete} key={i}/>
                    })
                }
            <button>Add Earth Friendly Clothes Shop</button>
            </div>
        )
    }
}
