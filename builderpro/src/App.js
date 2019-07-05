import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./Util/API";
import { Container } from "./Components/Grid";
import Form from "./Components/Form";
import datamuse from "datamuse";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      choices:[]
    };
  }

  SpelledWords = query => {
    datamuse.request('words?rel_jja='+ query )
    .then((json) => {
      console.log(json);
    });
  }


  SetTopic(query) {
    datamuse.request('words?rel_jjb='+ query )
    .then((json) => {
      console.log(json);
    });
  }

  componentDidMount() {
    // this.searchWords("king");
    // this.SimilarWords("king");
  }

  searchWords = (query) => {
    API.Thesaurus(query).then(res => console.log(
      // res.data[0],
      // res.data[0].fl,
      // res.data[0].shortdef[0],
      // res.data[0].shortdef[1]
    ))
    API.Dictonary(query).then(res => console.log(
      // res.data,
      // res.data[0].date,
      // res.data[0].shortdef[0],
      // res.data[0].shortdef[1]
    ))
    // API.Categories(this.state.search).then(res => console.log(res.data))

  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchWords(this.state.search);
    this.SetTopic(this.state.search);
    this.SpelledWords(this.state.search)
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container>
        <Form
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        ></Form>

      </Container>
    );
  }
}
export default App;
