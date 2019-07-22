import React, { Component } from 'react'
import './Home.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div class='backgroundDiv'>
                <div>
                <p className="Title">Welcome to the wildest circus ever !</p>
                </div>
                <div class='buttonContainer'>
                
                <Link to="/Homepage">
                <button 
                class='enterButton'> ENTER WEBSITE !</button></Link>
                </div>
            </div>
        )
    }
}


