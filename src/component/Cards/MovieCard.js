import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        console.log(movie);
        return (
            <div class="col mb-4">
                <div class="card">
                    <img src={movie.Poster} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{movie.Title} - {movie.Year}</h5>
                        <p class="card-text"></p>
                        <Link class="btn btn-dark" to={'/movie/' + movie.imdbID}>
                            Movie Details
                                <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </div>);
    }
}