import axios from "axios";
const BASEURL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"
const thesKEY = "?key=28b56967-484b-45f5-9b85-17a8fabea4ae";
const dictKEY = "?key=9a6569a8-75ff-478f-83c3-f71060038a88";



export default {
    thesaurus: function(query) {
      return axios.get(BASEURL + query + thesKEY);
    },
    getBooks: function() {
      return axios.get("/api/saved");
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/saved/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/saved/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };
  