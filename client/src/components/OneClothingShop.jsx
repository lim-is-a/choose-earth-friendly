import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class OneClothingShop extends Component {
    state = {
        updatedStore: {},
        editClicked: false
    }

    editStore = ()=>{
        axios.put(`/api/earthfriendly/clothes/${this.props.id}`)
    }

    deleteClothesStore = (id) => {
        axios.delete(`/api/earthfriendly/clothes/${id}`).then(() => {
            this.setState({
                redirect: true
            })
        })
    }
    
    
    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }
        return (
            <div>
                face: {this.props.id}
                Name: {this.props.name}
                Description:{this.props.description}
                Url:{this.props.url}
                <button>Edit</button>
                <button onClick={ () => {this.deleteClothesStore(this.props.id)}}>Delete</button>
            </div>
        )
    }
}
