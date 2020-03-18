import React, { Component } from 'react'
import Navbar from './Navbar'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div>
                    <h2>Welcome to:</h2>
                    <h1>Choose Earth Friendly!</h1>
                </div>

            </div>
        )
    }
}
