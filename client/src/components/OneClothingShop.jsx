import React, { Component } from 'react'

export default class OneClothingShop extends Component {
    render() {
        return (
            <div>
                Name: {this.props.name}
                Description:{this.props.description}
                Url:{this.props.url}
                
            </div>
        )
    }
}
