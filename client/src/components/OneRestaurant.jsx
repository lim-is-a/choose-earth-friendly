import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class OneRestaurant extends Component {
    state = {
        updatedRestaurant: {
            name: "",
            description: "",
            url: ""
        },
        editClicked: false
    }

    editRestaurant = () => {
        this.setState({
            editClicked: !this.state.editClicked
        })
    }

    deleteRestaurant = (id) => {
        axios.delete(`/api/earthfriendly/restaurants/${id}`).then(() => {
            this.setState({
                redirect: true
            })
        })
    }
    updateRestaurant = (event)=>{
        const updatedRestaurantCopy = {...this.state.updatedRestaurant}
        updatedRestaurantCopy[event.target.name] = event.target.value
        this.setState({
            updatedRestaurant: updatedRestaurantCopy
        })
    }

    submitEditForm = (event) => {
        // event.preventDefault();
        axios.put(`/api/earthfriendly/restaurants/${this.props.id}`, this.state.updatedRestaurant).then(() => {
            this.setState({
                redirect: true
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                {this.state.editClicked 
                    ? <form onSubmit={this.submitEditForm}>
                        <div>
                            Name: <input name="name" type="text" onChange={this.updateRestaurant}></input>
                        </div>
                        <div>
                            Description: <input name="description" type="text" onChange={this.updateRestaurant}></input>
                        </div>
                        <div>
                            Url: <input name="url" type="text" onChange={this.updateRestaurant}></input>
                        </div>
                            <input type="submit" value="Submit"/>
                    </form>
                    :<div>
                        <div>Name: {this.props.name}</div>
                        <div>Description:{this.props.description}</div>
                        <div>Url:{this.props.url}</div>
                    </div>
                }                


                <button onClick={() => {this.editRestaurant()}}>Edit</button>
                <button onClick={() => {this.deleteRestaurant(this.props.id)}}>Delete</button>
            </div>
        )
    }
}
