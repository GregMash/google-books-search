import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar bg-dark">
        <a className="navbar-brand text-info" href="/">Google Books</a>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link text-info" href="../search">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-info" href="../saved">Saved</a>
            </li>
        </ul>
        </nav>
    );
};

export default Navbar