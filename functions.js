
import axios from "axios";
import React, { Component } from 'react';

firstLetter = word => word.charAt(0)
lastLetter = word => word[word.length - 1]
Xletter = (word, x) => word.substring(x-1, x)
vowelCount = word => {
    var m = word.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
letterCount = word => word.length
}

function Game (props){
    
   console.log( firstLetter(props.search))
}

export default Game;
