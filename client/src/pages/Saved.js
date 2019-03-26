import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { FormBtn } from "../components/Form";

class Saved extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        API.loadSavedBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    handleDelete = (id) => {
        console.log(id);
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar />
                    <Jumbotron>
                        <h1>Saved Books</h1>
                        <p>A list of your current saved books...</p>
                    </Jumbotron>
                    <List>
                    {this.state.books.map(book => (
                        <ListItem key={book._id}>
                            <h3>{book.title}</h3>
                            <h4>{book.authors}</h4>
                            <p>{book.description}</p>
                            <a href={book.link}>Info Link</a>
                            <img src={book.image} alt={book.title} />
                            <FormBtn onClick={() => this.handleDelete(book._id)}>Delete Book</FormBtn>
                        </ListItem>
                    ))}
                    </List>
                </Container>
            </div>
        )
    };
};

export default Saved;