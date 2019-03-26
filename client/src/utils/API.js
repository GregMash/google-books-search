import axios from "axios";

export default {
    // Search for book
    searchBook: function(bookName) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
    },
    // Save a book
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Load saved books in DB
    loadSavedBooks: function() {
        return axios.get("/api/books");
    },
    // Delete a book
    deleteBook: function (id) {
        return axios.delete(`/api/books/${id}`);
    }
}

