import axios from "axios";
const BASEURL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"
const BASEURL2 = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"
const thesKEY = "?key=28b56967-484b-45f5-9b85-17a8fabea4ae";
const dictKEY = "?key=9a6569a8-75ff-478f-83c3-f71060038a88";
const datam = "https://api.datamuse.com/words?rel_jjb="
const datam2 = "https://api.datamuse.com/words?rel_jja="
const wordsapi = "https://wordsapiv1.p.mashape.com/words/"


export default {
    Thesaurus: function (query) {
        return axios.get(BASEURL + query + thesKEY);
    },
    Dictonary: function (query) {
        return axios.get(BASEURL2 + query + dictKEY)
    },
    Categories: function (query) {
        return axios.get(datam + query)
    },
    InsAdj: function (query) {
        return axios.get(datam2 + query)
    },
    InsNoun: function (query) {
        return axios.get(datam + query)
    },
    getWords: function () {
        return axios.get("/api/saved");
    },
    saveWord: function (wordData) {
        return axios.post("/api/words", wordData);
    },
    FindClass: function (query) {
        return axios({
            url: "https://wordsapiv1.p.rapidapi.com/words/"+ query + "/typeOf",
            method: 'get',
            headers: {
                'X-RapidAPI-Key': 'f717eb135dmsh5cf690d2dcedf8fp1e873bjsnf904dfe7245b',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        })
        // .then(res => console.log(res.data))
    }

    };

