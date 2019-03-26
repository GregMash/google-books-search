import axios from "axios";



export default {
    // Search for book
    searchBook: function(bookName) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
    }
}

