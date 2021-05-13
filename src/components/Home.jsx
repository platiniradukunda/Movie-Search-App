import React, { Component } from 'react';

class Home extends Component {
    constructor () {
        super();
        this.state = {
            data: null,
            userInput: '',
        }
    }
    // function to keep track of the user input and push it to state
    changeUserInput=(input)=>{
        this.setState({
            userInput: input,
        })
    }
    // function to grab data from the movie api
    findMovie = async (event) => {
        event.preventDefault();
        // variable for what I typed in search box
        const query = this.state.userInput;
        // variable for the url that will make our api call
        const url = ` http://www.omdbapi.com/?i=tt3896198&apikey=c4e443fd&t=${query}`
        try{
            // fetching the data from the api url
            const response = await fetch(url);
            // converting the data to json
            const data = await response.json();
            console.log(data);
            //  changing the data in state to update it with the fetched data
            this.setState({
                data: data,
            })
        }
        catch(err) {
            console.log(err);
        }
    }
    render() {
        return (
            <div>
                <h1>Movie Search App</h1>
                {/* the form has a function to call on the movie api which will happen on submit that's linked to the button in the form */}
                <form action="" onSubmit={this.findMovie}>
                    <label htmlFor="query">Movie Name</label>
                    <input type="text" name="query" onChange={(event)=>{this.changeUserInput(event.target.value)}} />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Home;