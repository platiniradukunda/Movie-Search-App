import React, { Component } from 'react';

class Results extends Component {
    // constructor () {
    //     super();
       
    // }
    render() {
        return (
            <div>
                <h1>{this.props.movieResults.Title}</h1>
            </div>
        );
    }
}

export default Results;