import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Nidhi', age: 20 },
      { id: '2', name: 'Jiya', age: 15 },
      { id: '3', name: 'Siya', age: 15 },
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //same as the slice method 
    persons.splice(personIndex, 1); //using the index remove one element from the persons array
    this.setState({persons: persons}) //update the old persons state to the new spliced one 
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pInput => {
      return pInput.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white', 
      font: 'inherit',
      border: '1px solid green',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
      style.backgroundColor = 'blue';
      style.border = '1px solid blue';
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1){
      classes.push('bold') // classes = ['red','bold']
    }

    return (
      <div className="App">
        <h1>This is my first react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
    }
  }

  export default App;
