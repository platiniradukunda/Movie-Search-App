import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Results extends Component {
    constructor(props){
        super(props);
        this.state={
            movieInfo: this.props.movieResults,
        }
    }

    render() {
        return (
            <div>
                <Link to={`/movieDetails/${this.props.movieResults.Plot}`}>
                <h1>{this.props.movieResults.Title}</h1>
                </Link>
            </div>
        );
    }
}

export default Results;