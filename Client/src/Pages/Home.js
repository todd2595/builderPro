// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import API from "../Util/API";
import { Container, Row, Col } from "../Components/Grid";
import Form from "../Components/Form";
import { List, ListItem } from "../Components/List"
import ActionButton from "../Components/ActionButton"
import Wrapper from "../Components/Wrapper";
import { throws } from 'assert';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      populate: null,
      search: "",
      categories: [],
      class: [],
      calls: [],
      word: {},
      moreOfWord: {},
      results: {},
      userGuess: "",
      hasGuessed: false,
      seconds: 0,
      wordsToGuess: [],
      words: [],
      score: 0
    };
  }
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  TypeOf = (word) => { return this.state.class.filter((elem, index) => index <= 5).join(' ') }
  Categories = (word) => { return this.state.categories.map(elem => elem.word).join(' ') }
  Ants = (word) => { return this.state.word.meta.ants[0] }
  Syns = (word) => {
    if (this.state.word.meta.syns) { return this.state.word.meta.syns[0].filter((elm, index) => index <= 5).join(" ") }
    else { (console.log("no syns")) }
  }
  definition = (word) => { return this.state.word.shortdef }
  partOfSpeech = (word) => { return this.state.word.fl }
  firstLetter = (word) => word.charAt(0)
  lastLetter = (word) => word[word.length - 1]
  Xletter = (word) => { let x = window.prompt("Find the  __ letter"); return word.substring(x - 1, x) }
  vowelCount = (word) => {
    let m = word.match(/[aeiou]/gi);
    if (m === null) { return "0" }
    else { return (m.length) }
  }
  letterCount = (word) => word.length


  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.loadword();
  }

  componentWillMount() {

  }

  loadword = () => {
    const usednumbs = [];
    let x = this.getRandomInt(10);
    if (usednumbs.indexOf(x) === -1) {
      API.vocabWord(x).then(res => {
        this.setState({
          search: res.data[0].title
        })
        return this.searchWords(res.data[0].title)
      }).catch(err => console.log(err))
      usednumbs.push(x);
    }
    else{
      console.log("repeat")
    }

  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  searchWords = (query) => {
    API.Thesaurus(query).then((res) => {
      this.setState({ word: res.data[0] })
      return this.GetHelp(this.state.word.fl, query)
    }).catch((err) => { console.log(err) })
    API.FindClass(query).then((res) => this.setState({ class: res.data.typeOf }))
    API.Dictonary(query).then((res) => this.setState({ moreOfWord: res.data[0] }))

  }

  GetHelp = (speech, query) => {
    this.setState({
      populate: true
    })
    switch (speech) {
      case "noun":
        console.log(speech, query)
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
        console.log("??")
        console.log(speech, query)
        break;
    }
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

  HandleGuess = (event) => {
    event.preventDefault();
    console.log(this.state.search)
    this.setState({
      value: event.target.value
    });
    let str = this.state.userGuess.toLowerCase().trim()
    console.log(str);
    if (str && str === this.state.search) {
      //  alert("you WIN!")
      console.log("You win!")
      console.log(this.state.seconds)
      alert("You got it!, your time was " + this.state.seconds)
      this.setState({
        word: "",
        userGuess: "",
        score: this.state.score + 1,
        calls: []
      })
      this.loadword();
    }
    else {
      console.log("wrong!", this.state.score)
      alert('the word was ' + this.state.search)
    }
  }

  HandleActionButton = (cb, value, array) => {
    if (array.indexOf(value) === -1) {
      let results = cb(this.state.search)
      this.setState({
        calls: [...this.state.calls, value, results]
      })
    }
    else {
      console.log("Try a different button")
    }
  }

  render() {
    if (this.state.word === null) {
      return (
        <Container>
          <h2>Hello</h2>
        </Container>
      )
    }
    else {
      return (
        <Container>
          <Container>
            <h2>Score: {this.state.score} </h2>
          </Container>
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
            <Col size="md-4">
              <Form
                value={this.state.userGuess}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.HandleGuess}
                name={"userGuess"}

              ></Form>
            </Col>
          </Row>

          <Wrapper>
            {this.state.calls.length && this.state.word ? (

              <List>
                {this.state.calls.map((call) =>
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

}
export default Home;
