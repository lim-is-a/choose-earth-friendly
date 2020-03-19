import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class OneClothingShop extends Component {
    state = {
        updatedStore: {
            name: "",
            description: "",
            url: ""
        },
        editClicked: false
    }

    editStore = () => {
        this.setState({
            editClicked: !this.state.editClicked
        })
    }

    deleteClothesStore = (id) => {
        axios.delete(`/api/earthfriendly/clothes/${id}`).then(() => {
            this.setState({
                redirect: true
            })
        })
    }
    updateStore = (event)=>{
        const updatedStoreCopy = {...this.state.updatedStore}
        updatedStoreCopy[event.target.name] = event.target.value
        this.setState({
            updatedStore: updatedStoreCopy
        })
    }

    submitEditForm = (event) => {
        // event.preventDefault();
        axios.put(`/api/earthfriendly/clothes/${this.props.id}`, this.state.updatedStore).then(() => {
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
                            Name: <input name="name" type="text" onChange={this.updateStore}></input>
                        </div>
                        <div>
                            Description: <input name="description" type="text" onChange={this.updateStore}></input>
                        </div>
                        <div>
                            Url: <input name="url" type="text" onChange={this.updateStore}></input>
                        </div>
                            <input type="submit" value="Submit"/>
                    </form>
                    :<div>
                        <div>Name: {this.props.name}</div>
                        <div>Description:{this.props.description}</div>
                        <div>Url:{this.props.url}</div>
                    </div>
                }                


                <button onClick={() => { this.editStore()}}>Edit</button>
                <button onClick={() => { this.deleteClothesStore(this.props.id) }}>Delete</button>
            </div>
        )
    }
}
