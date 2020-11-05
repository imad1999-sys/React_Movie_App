import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../actions/searchActions.js";

class MovieDetail extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }
    render() {
        return (
            <div className="card mb-3" style={{maxWidth : '1500px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item" aria-disabled="true"><strong>Genre:</strong></li>
                            <li className="list-group-item"><strong>Released:</strong></li>
                            <li className="list-group-item"><strong>Rated:</strong></li>
                            <li className="list-group-item"><strong>IMDB Rating:</strong></li>
                            <li className="list-group-item"><strong>Director:</strong></li>
                            <li className="list-group-item"><strong>Writer:</strong></li>
                            <li className="list-group-item"><strong>Actors:</strong></li>
                        </ul>
                    </div>
                    <div className="jumbotron">
                        <h1 className="display-4">Information About The Movie</h1>
                        <p className="lead">to see more info about movie</p>
                        <hr className="my-4" />
                        <a className="btn btn-primary btn-lg" href="#" role="button">Click Me</a>
                    </div>
                </div>
            </div>);
    }
}
const mapStateToProps = (state) => ({
    loading: state.movies.loading,
    movie: state.movies.movie,

});

export default connect(mapStateToProps, { fetchMovie })(MovieDetail);