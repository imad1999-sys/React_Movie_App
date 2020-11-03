import React, { Component } from "react";
import "../css/Navbar.css"

export default class Navbar extends Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand">Movies App</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link"><i className="fab fa-imdb imdb"></i></a>
                        <a className="nav-link"tabindex="-1" aria-disabled="true"><i className="fab fa-react react"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    }
}