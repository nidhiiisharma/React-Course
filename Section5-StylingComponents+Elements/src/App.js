import React, { Component } from 'react';
/* import Radium, { StyleRoot } from 'radium'; // 3rd party package for psuedo selectors & media queries */
/* import styled from 'styled-components'; // 3rd party package for styling  */
import classes from './App.css';
import Person from './Person/Person';

/* const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'blue' : 'green'};
  color: white; 
  font: inherit;
  border: ${props => props.alt ? '1px solid blue' : '1px solid green'};
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: ${props => props.alt ? 'skyblue' : 'lightgreen'};
    border: ${props => props.alt ? '1px solid skyblue' : '1px solid lightgreen'}; 
    color: black;
  }
`; */

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
    /* const style = {
      backgroundColor: 'green',
      color: 'white', 
      font: 'inherit',
      border: '1px solid green',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none',
      ':hover': {
        backgroundColor: 'lightgreen',
        border: '1px solid lightgreen',
        color: 'black'
      }
    } */

    let persons = null;
    let btnClass = '';

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

      btnClass = classes.blue;

  /*  style.backgroundColor = 'blue';
      style.border = '1px solid blue';

      style[':hover'] = {
        backgroundColor: 'skyblue',
        border: '1px solid skyblue',
        color: 'black'
      } */
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold) // classes = ['red','bold']
    }

    return (
      // use styleroot so media queries can work
      // <StyleRoot >
        <div className={classes.App}>
        <h1>This is my first react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
    }
  }

  // export default Radium(App);
  export default App;
