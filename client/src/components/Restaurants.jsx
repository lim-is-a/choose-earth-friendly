import React, { Component } from 'react'
import OneRestaurant from "./OneRestaurant"
import axios from 'axios'

export default class Restaurants extends Component {
    state = {
        addRestaurantClicked: false,
        newRestaurant: {
            name: "",
            description: "",
            url: ""
        }
    }

    addRestaurant = () => {
        this.setState({
            addRestaurantClicked: true
        })
    }

    changeInput = (event) => {
        const newRestaurantCopy = {...this.state.newRestaurant}
        newRestaurantCopy[event.target.name] = event.target.value;
        this.setState({
            newRestaurant: newRestaurantCopy
        })
    }

    submitCreateForm = () => {
        axios.post('/api/earthfriendly/restaurants', this.state.newRestaurant)
    }

    render() {
        return (
            <div>
                <h1>Restaurants</h1>
                {
                    this.props.restaurantsList.map((oneResult, i) => {
                        return <div>
                            <OneRestaurant id={oneResult._id} name={oneResult.name}
                                description={oneResult.description} url={oneResult.url} delete={this.props.delete} key={i} />
                        </div>
                    })
                }
                <button onClick={() => {this.addRestaurant()}}>Add Earth Friendly Restaurants Shop</button>
                {this.state.addRestaurantClicked
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
