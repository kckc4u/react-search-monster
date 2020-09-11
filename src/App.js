import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import Search from './components/search-box/search-box.component';

import './App.css';

class App extends Component 
{
  state = {
    monster: [],
    searchField: ""
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'get',
      headers: {
        'accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(users => this.setState({monster: users}))
  }

  render() {
    const {searchField, monster} = this.state;
    const filterdMonster = monster.filter(mnstr => 
      mnstr.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search placeholder="Search Monster" handleChange={e => this.setState({searchField: e.target.value})}/>
        <CardList mosters={filterdMonster}/>
      </div>
    );
  }
}

export default App;
