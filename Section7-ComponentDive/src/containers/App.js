import React, { Component } from 'react';
import classes from './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js], constructor');
    this.state = {
      persons: [
        { id: '1', name: 'Nidhi', age: 20 },
        { id: '2', name: 'Jiya', age: 15 },
        { id: '3', name: 'Siya', age: 15 },
      ],
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js], getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js], componentDidMount');
  }

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
    console.log('[App.js], render')
    let persons = null;

    if( this.state.showPersons ){
      persons = 
      <PersonList
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        {persons}
      </div>
    );
    }
  }

  export default App;
