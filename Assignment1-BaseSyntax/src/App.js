import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    users: [
      { name: 'Nidhi Sharma' },
      { name: 'Jiya Sharma '}
    ]
    } 

  userChangeHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value },
      { name: 'Jiya Sharma '}
      ]
    });
  };

  render() {
    
    const style = {
      textAlign: 'center',
      fontSize: '18px',
      padding: '5px'
    }

    return (
      <div className="App">
        <h3 style={style}>Input the name of your choice here and see what happens</h3>
        <UserInput 
        changed={this.userChangeHandler}
        name={this.state.users[0].name} />
        <UserOutput
        name={this.state.users[0].name}
        age="20" 
        place="Sint Maarten" 
        study="Fontys University of Applied Sciences"></UserOutput>  
        <UserOutput
        name={this.state.users[1].name}
        age="15" 
        place="Sint Maarten" 
        study="University of Amsterdam" />
      </div>
    );
  }
}


export default App;
