import React, { Component } from 'react'
import axios from 'axios';

class Search extends Component {

    state = {
        searchTerm: "",
    };

    componentDidMount() {
        this.displayBreeds();
    }

    displayBreeds = () => {
        const dogBreedListURL = `https://dog.ceo/api/breeds/list`;
        axios.get(dogBreedListURL).then((response) => {
            const dog = response.data.message;
        });
    }

    searchBreed = () => {
        const searchBreedURL = `https://dog.ceo/api/breed/${this.state.searchTerm}/images`;
        axios.get(searchBreedURL).then((response) => {
            const dog = response.data.message;
        });
    }

    handleInputChange = event => {
        console.log("handle input change")
    }

    handleFormSubmit = event => {
        console.log("handle form submit")
    }

    render() {
        return (
            <div>
                <h1>Dog Breed Search page</h1>
                <form onClick={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="search">Search:</label>
                        <input 
                            onChange={this.handleInputChange}
                            value={this.state.searchTerm}
                            name="search"
                            type="text"
                            className="form-control"
                            id="search"
                        />
                        <br />
                        <button className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
