import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import API from "../utils/API";
import { FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Container } from "../components/Grid";

class Search extends Component {

    state = {
        bookData: [],
        bookInput: ""
    }

    handleFormSubmit = e => {
        e.preventDefault();
        API.searchBook(this.state.bookInput)
            .then((res) => {
                this.setState({ bookData: res.data.items });
                console.log(this.state.bookData);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <Container fluid>
                <Navbar />
                <Jumbotron>
                    <h1>React Google Books Search</h1>
                    <p>Use the search below to add new books to add to your library or reading list</p>
                </Jumbotron>
                <SearchBox
                    name="bookInput"
                    onChange={this.handleInputChange}
                />
                <FormBtn onClick={this.handleFormSubmit} />
                <List>
                    {this.state.bookData.map(book => (
                        <ListItem key={book.id}>
                            <h3>{book.volumeInfo.title}</h3>
                            <h4>{book.volumeInfo.authors}</h4>
                            <h4>{book.volumeInfo.description}</h4>
                            <h4>{book.volumeInfo.infoLink}</h4>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        </ListItem>
                    ))}
                </List>
            </Container>
        )
    };
};

export default Search;