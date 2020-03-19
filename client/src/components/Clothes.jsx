import React, { Component } from 'react'
import OneClothingShop from "./OneClothingShop"
import axios from 'axios'

export default class Clothes extends Component {
    state = {
        addClothesClicked: false,
        newStore: {
            name: "",
            description: "",
            url: ""
        }
    }

    addClothesStore = () => {
        this.setState({
            addClothesClicked: true
        })
    }

    changeInput = (event) => {
        const newStoreCopy = {...this.state.newStore}
        newStoreCopy[event.target.name] = event.target.value;
        this.setState({
            newStore: newStoreCopy
        })
    }

    submitCreateForm = () => {
        axios.post('/api/earthfriendly/clothes', this.state.newStore)
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
                <button onClick={() => {this.addClothesStore()}}>Add Earth Friendly Clothes Shop</button>
                {this.state.addClothesClicked
                    ? <form onSubmit={this.submitCreateForm}>
                    <div>
                        Name: <input name="name" type="text" onChange={this.changeInput}></input>
                    </div>
                    <div>
                        Description: <input name="description" type="text" onChange={this.changeInput}></input>
                    </div>
                    <div>
                        Url: <input name="url" type="text" onChange={this.changeInput}></input>
                    </div>
                        <input type="submit" value="Submit"/>
                </form>
                    : null
                }
            </div>
        )
    }
}
