import React, { Component } from 'react';
import axios from 'axios';

// hard code the jsx
// move the values into variables (state, props)
// pull in the values dynamically

class Discover extends Component {

    state = {
        image: "",
        showAlert: false,
        count: 0,
    }

    componentDidMount() {
        this.getNewDog();
    }

    getNewDog = () => {
        // console.log("new dog");
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            this.setState({
                image: response.data.message,
            });
        });
    };

    handleDislikeButton = () => {
        this.setState({ showAlert: false });
        this.getNewDog();
    }

    handleLikeButton = () => { 
        this.setState({ showAlert: false });
        const myNumber = Math.floor(Math.random() * 5 + 1);
        if(myNumber === 1){
            this.setState({ showAlert:true, count: this.state.count + 1 });
        }
        this.getNewDog();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img 
                            src={this.state.image}
                            alt="pupper"
                            // style={{ height:400 }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3 d-flex justify-content-start">
                        <button 
                            className="btn btn-danger"
                            onClick={this.handleDislikeButton}
                        >
                        Dislike
                        </button>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-end">
                        <button 
                            className="btn btn-success"
                            onClick={this.handleLikeButton}
                        >
                        Like
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">
                            {this.state.count} dogs have liked you back!
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div 
                            className="alert alert-success"
                            role="alert"
                        >
                            Awesome! That dog liked you too!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Discover;
