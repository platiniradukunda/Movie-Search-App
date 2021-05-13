import React, { Component } from 'react';

class Home extends Component {
    constructor () {
        super();
        this.state = {
            data: null,
        }
    }

    findMovie = async (event) => {
        event.preventDefault();
        const url = ` http://www.omdbapi.com/?i=tt3896198&apikey=c4e443fd`
    }
    render() {
        return (
            <div>
                <h1>Movie Search App</h1>
                <form action="" onSubmit={this.findMovie}>
                    <label htmlFor="query">Movie Name</label>
                    <input type="text" name="query" />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Home;