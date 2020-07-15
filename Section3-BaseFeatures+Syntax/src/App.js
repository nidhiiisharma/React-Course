import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Nidhi", age: 20 },
      { name: "Jiya", age: 15 },
      { name: "Siya", age: 15 },
    ]
  };

  switchNameHandler = (newName) => {
    //console.log("was clicked");
    // DON'T DO THIS: this.state.persons[0].name = "Nidhi Sharma";
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "Jiya Sharma", age: 15 },
        { name: "Siya Bharwani", age: 15 },
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 20 },
        { name: "Jiya Sharma", age: 15 },
        { name: "Siya Bharwani", age: 15 },
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>This is my first react app</h1>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Buttercup')}>Switch names</button>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          // bind statement is more efficient to use
          click={this.switchNameHandler.bind(this, "Nid")}
          changed={this.nameChangedHandler}>My hobbies are dancing and reading</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
    }
  }

  export default App;
