import React, { Component } from 'react'
import Characters from './Characters'
import CharacterModel from '../utils/characterModel'
import { initialStorage, get, save } from '../utils/storage'

class CharactersContainer extends Component {

  state = {
    characters: [],
    nextPage: null,
    counter: 0,
    base_url: 'https://swapi.co/api/people/'
  }

  fetchAllCharacters = (url) => {
    fetch(url)
      .then(data => data.json())
      .then(json => {
        const newCharacters = json.results.map(({name, gender, eye_color, height, mass}, index) => {
            this.setState({counter: this.state.counter + 1})
            const newCharacter = new CharacterModel(this.state.counter, name, gender, eye_color, height, mass);
            return newCharacter;
        });
        const characters = [...this.state.characters, ...newCharacters];
        this.setState({characters, nextPage:json.next});
        save('characters', characters);
        save('counter', this.state.counter);
        save('nextPage', this.state.nextPage);
      });
  }

  componentDidMount() {
    if (get('characters')) {
      const characters = get('characters');
      const nextPage = localStorage.getItem('nextPage');
      const counter = Number(localStorage.getItem('counter'));
      this.setState({characters, nextPage, counter })
    } else {
      this.fetchAllCharacters(this.state.base_url)
    }
  }

  like = event => {
    const characterId = Number(event.target.parentNode.parentNode.id);
    const characters = [...this.state.characters];
    characters[characterId - 1].saved = true;
    save('characters', characters);
    this.setState({characters});
  }

  unlike = event => {
    const characterId = Number(event.target.parentNode.parentNode.id);
    console.log(characterId);
    const characters = [...this.state.characters];
    characters[characterId - 1].saved = false;
    save('characters', characters);
    this.setState({characters});
  }

  render() {
    return (
      <div className="container">
        <Characters like={this.like} unlike={this.unlike} route={this.props.location.pathname} characters={this.state.characters} getData={this.fetchAllCharacters} nextPage={this.state.nextPage}  />
      </div>
    );
  }
}

export default CharactersContainer
