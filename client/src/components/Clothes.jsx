import React, { Component } from 'react'
import OneClothingShop from "./OneClothingShop"

export default class Clothes extends Component {
    render() {
        return (
            <div>
                <h1>Clothes</h1>
                {
                    this.props.clothesList.map((oneResult,i)=>{
                        return <OneClothingShop name = {oneResult.name} 
                           description={oneResult.description} url={oneResult.url} key={i}/>
                    })
                }
            </div>
        )
    }
}
