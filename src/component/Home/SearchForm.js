import React, { Component } from 'react';
import { searchMovie, fetchMovies } from '../../actions/searchActions';
import { connect } from "react-redux";
import "../../css/SearchForm.css"

class SearchForm extends Component {
    onChange = (event) => {
        this.props.searchMovie(event.target.value);
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.fetchMovies(this.props.text);
    }
    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-4 search-text"><i class="fas fa-search"></i> Search for Movies , TV Series!</h1>
                <hr ></hr>
                <form onSubmit={this.onSubmit}>
                    <input class="form-control" type="text" placeholder="Search for Movies , TV Series" onChange={this.onChange} />
                    <hr class="my-4" />
                    <button type="submit" class="btn btn-primary btn-lg"><i class="fas fa-search"></i>  Search</button>
                </form>
            </div>
        );
    }
}
const mapStatesToProps = state => ({
    text: state.movies.text,
});

export default connect(mapStatesToProps, { searchMovie, fetchMovies })(SearchForm)