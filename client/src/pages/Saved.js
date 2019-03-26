import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from"../components/Jumbotron";
//import API from "../utils/API";


class Saved extends Component {



    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h1>Saved Books</h1>
                    <p>A list of your current saved books...</p>
                </Jumbotron>
            </div>
        )
    };
};

export default Saved;