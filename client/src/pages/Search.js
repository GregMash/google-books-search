import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
//import API from "../utils/API";


class Search extends Component {



    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h1>React Google Books Search</h1>
                    <p>Use the search below to add new books to add to your library or reading list</p>
                </Jumbotron>
                <SearchBox />
            </div>
        )
    };
};

export default Search;