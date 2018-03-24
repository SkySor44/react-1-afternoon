import React, { Component } from 'react';

class Palindrome extends Component {
  constructor(){
      super();
      this.state = {
          userInput: '',
          palindrome: ''
      }
  }
  
  updateInput(e){
    this.setState({
        userInput: e
    })
  }

  solvePalindrome(userInput){
var input = userInput.slice(0);
var palindrome = input.split('').reverse().join('');
if (input === palindrome){
    this.setState({
        palindrome: true
    })
} else if (input !== palindrome){
    this.setState({
        palindrome: false
    })
}
  }
  
    render() {
    return (
        <div className = "puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className = "inputLine" onChange = { (e) => this.updateInput(e.target.value)}></input>
            <button className = "confirmationButton" onClick = { () => this.solvePalindrome(this.state.userInput)}>Check</button>
            <span className = "resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
        </div>
    )
  }
}

export default Palindrome;