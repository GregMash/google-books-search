import React from "react";
import "./style.css";

function SearchBox() {
    return (
        <div className="input-group input-group-lg book-search">
            <h3>Search Books</h3>
            <hr></hr>
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Book Name</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
        </div>
    );
};

export default SearchBox;