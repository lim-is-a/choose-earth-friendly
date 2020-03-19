import React, { Component } from 'react'
import OneShoeShop from "./OneShoeShop"
import axios from 'axios'

export default class Shoes extends Component {
    state = {
        addShoeShopClicked: false,
        newStore: {
            name: "",
            description: "",
            url: ""
        }
    }

    addShoeStore = () => {
        this.setState({
            addShoeShopClicked: true
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
        axios.post('/api/earthfriendly/shoes', this.state.newStore)
    }

    render() {
        return (
            <div>
                <h1>Shoes</h1>
                {
                    this.props.shoesList.map((oneResult, i) => {
                        return <div>
                            <OneShoeShop id={oneResult._id} name={oneResult.name}
                                description={oneResult.description} url={oneResult.url} delete={this.props.delete} key={i} />
                        </div>
                    })
                }
                <button onClick={() => {this.addShoeStore()}}>Add Earth Friendly Shoes Shop</button>
                {this.state.addShoeShopClicked
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
