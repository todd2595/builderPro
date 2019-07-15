import React, { Component } from 'react';
import API from "../Util/API";
import { Container, Row, Col } from "../Components/Grid";
import Form from "../Components/Form";
import { List, ListItem } from "../Components/List"
import ActionButton from "../Components/ActionButton"
import NavBar from "../Components/NavBar";
import Wrapper from "../Components/Wrapper";
import Game from "../Components/Game";
import timer from "../Pages/Timer"
import Timer from '../Pages/Timer';
import { callbackify } from 'util';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      categories: [],
      class: [],
      calls: [],
      word: {},
      moreOfWord: {},
      results:{}
    };
  }
  TypeOf = (word) => { return this.state.class }
  Categories = (word) => { return this.state.categories }
  Ants = (word) => { return this.state.word.meta.ants[0] }
  Syns = (word) => { return this.state.word.meta.syns[0] }
  definition = (word) => { return this.state.word.shortdef }
  partOfSpeech = (word) => { return this.state.word.fl }
  firstLetter = (word) => word.charAt(0)
  lastLetter = (word) => word[word.length - 1]
  Xletter = (word) => {
    let x = window.prompt("Find the  __ letter");
    return word.substring(x - 1, x)
  }
  vowelCount = (word) => {
    let m = word.match(/[aeiou]/gi);
    if (m === null) { return "0" }
    else { return (m.length) }
  }
  letterCount = (word) => word.length

  testing = () => {
    if (this.state.speech) {
      console.log("here")
      this.GetHelp(this.state.speech, this.state.search);
    }
    else {
      console.log("nooo")
    }
  }

  componentDidMount() {

  }

  searchWords = (query) => {
    API.FindClass(query).then((res) => this.setState({ class: res.data.typeOf }));
    API.Thesaurus(query).then((res) => this.setState({ word: res.data[0] }))
    API.Dictonary(query).then((res) => this.setState({ moreOfWord: res.data[0] }))
      .then(this.GetHelp(this.state.word.fl, this.state.search))
  }

  GetHelp = (speech, query) => {
    switch (speech) {
      case "noun":
        console.log("noun")
        API.InsNoun(query).then((response) => {
          let categories = (response.data.slice(0, 6))
          this.setState({
            categories: categories
          })
        });;
        break;
      case "adjective":
        console.log("Adj")
        API.InsAdj(query).then((response) => {
          let categories = (response.data.slice(0, 6))
          this.setState({
            categories: categories
          })
        });;
        break;
      default:
        console.log("nothing")
        break;
    }
  }

  handleFormSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();
    this.searchWords(this.state.search);
    this.setState({
      calls: []
    })
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  getData = (childData) => {
    console.log(childData)
  }


  HandleActionButton = (cb, value, array) => {
    if (array.indexOf(value) === -1) {
      let results = cb(this.state.search)
      this.setState({
        calls: [...this.state.calls, value, results],
        results: { ...this.state.results, [value]: { results } }
      })
    }
    else {
      console.log("Try a different button")
    }
  }

  render() {
    return (
      <Container>
        <Timer></Timer>
        <Form
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        ></Form>

        <Row>
          <Col size="md-4">
            <ActionButton
              type="success"
              value={"Letter Count"}
              onClick={() => this.HandleActionButton(this.letterCount, "Letter Count", this.state.calls)}>
            </ActionButton>
            <ActionButton
              type="success"
              value={"Part of Speech"}
              onClick={() => this.HandleActionButton(this.partOfSpeech, "Part of Speech", this.state.calls)}>
            </ActionButton>
            <ActionButton
              type="success"
              value={"First Letter"}
              onClick={() => this.HandleActionButton(this.firstLetter, "First Letter", this.state.calls)}>
            </ActionButton>
            <ActionButton
              type="success"
              value={"Last Letter"}
              onClick={() => this.HandleActionButton(this.lastLetter, "Last Letter", this.state.calls)}>
            </ActionButton>
          </Col>
          <Col size="md-4">
            <ActionButton
              type="success"
              value={"X Letter"}
              onClick={() => this.HandleActionButton(this.Xletter, "X letter", this.state.calls)}>
            </ActionButton>
            <ActionButton
              type="success"
              value={"Vowel Count"}
              onClick={() => this.HandleActionButton(this.vowelCount, "Vowel Count", this.state.calls)}>
            </ActionButton>
          </Col>
          <Col size="md-4">
            <ActionButton
              value={"Type of"}
              onClick={() => this.HandleActionButton(this.TypeOf, "Type Of", this.state.calls)}>
            </ActionButton>
            <ActionButton
              value={"Categories"}
              onClick={() => this.HandleActionButton(this.Categories, "Categories", this.state.calls)}>
            </ActionButton>
          </Col>
        </Row>

        <Row>
          <Col size="md-6">
            <ActionButton
              type={"danger"}
              value={"Definition"}
              onClick={() => this.HandleActionButton(this.definition, "Definition", this.state.calls)}>
            </ActionButton>
            <ActionButton
              type={"danger"}
              value={"Syns"}
              onClick={() => this.HandleActionButton(this.Syns, "Syns", this.state.calls)}>
            </ActionButton>
            <ActionButton
              type={"danger"}
              value={"Ants"}
              onClick={() => this.HandleActionButton(this.Ants, "Ants", this.state.calls)}>
            </ActionButton>
          </Col>
        </Row>

        <Wrapper>
          {this.state.calls.length && this.state.search ? (

            <List>
              {this.state.calls.map(call =>
                (
                  <ListItem key={call}>{call}
                  </ListItem>
                ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
          <List>

          </List>
        </Wrapper>
      </Container>
    );
  }
}
export default Home;
