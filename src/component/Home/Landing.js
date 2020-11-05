import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from "react-redux";
import Spinner from '../../component/spinner.js';
import MoviesContainer from "../../component/Home/MoviesContainer.js"

class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer/> }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loading : state.movies.loading , 
});
export default connect()(Landing); 