import axios from "axios";
const BASEURL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"
const BASEURL2 = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"
const thesKEY = "?key=28b56967-484b-45f5-9b85-17a8fabea4ae";
const dictKEY = "?key=9a6569a8-75ff-478f-83c3-f71060038a88";
const datam = "https://api.datamuse.com/words?rel_jjb="


export default {
    Thesaurus: function(query) {
      return axios.get(BASEURL + query + thesKEY);
    },
    Dictonary: function(query){
        return axios.get(BASEURL2 + query + dictKEY)
    },
    Categories: function(query){
        return axios.get(datam + query )
    } 
  };
  