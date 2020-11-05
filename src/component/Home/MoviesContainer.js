import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "../Cards/MovieCard.js";

class MoviesContainer extends Component {
    render(){
        const {movies} = this.props;
        let Content = '';
        Content = movies.length > 0 ? 
        movies.map( (movie , index) => <MovieCard  key={index} movie={movie}/>) : null;
        return (<div className="row row-cols-1 row-cols-md-2">
            {Content}
        </div>);
    }
}
const mapStateToProps = state => ({
    movies : state.movies.movies ,
});
export default connect(mapStateToProps)(MoviesContainer);