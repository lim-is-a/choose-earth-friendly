import React, { Component } from 'react'
import OneClothingShop from "./OneClothingShop"
import axios from 'axios'

export default class Clothes extends Component {
    state = {
        addClothesShopForm : false
    }
    addClothesShop = ()=>{
    }
    render() {
        return (
            <div>
                <h1>Clothes</h1>
                {
                    this.props.clothesList.map((oneResult, i) => {
                        return <div>
                                    <OneClothingShop id={oneResult._id} name={oneResult.name}
                                    description={oneResult.description} url={oneResult.url} delete={this.props.delete} key={i} />
                                </div>
                    })
                }
                <button>Add Earth Friendly Clothes Shop</button>
                {this.state.addClothesShopForm
                    ? <form >
                        <input type="text"/>
                    </form>
                    :null
                }
            </div>
        )
    }
}
