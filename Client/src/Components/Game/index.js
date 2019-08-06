
import axios from "axios";
import React, { Component } from 'react';
import Home from "../../Pages/Home"

export default 
{
    firstLetter: function(word) {
        return word.charAt(0)
    },
    lastLetter: function(word) {
        console.log(word[word.length - 1])
    },
    Xletter: function(word) {
        let x = window.prompt("Find the  __ letter");
        console.log(word.substring(x - 1, x))
    },
    vowelCount: function(word) {

        let m = word.match(/[aeiou]/gi);
        if (m === null) { console.log(0) }
        else { console.log(m.length) }

    },
    letterCount: function(word) {
        console.log();
    }
}

