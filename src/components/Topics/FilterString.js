import React, { Component } from 'react';

class FilterString extends Component {
  constructor(){
      super();
      this.state = {
        unFilteredArray: ['Apples, ', 'Oranges, ', 'Bananas, ', 'Pears'],
        userInput: '',
        filteredArray: []
      }
  }


  updateInput(e){
    this.setState({
        userInput: e
    })
  }
  
  solveFilterString(userInput){
    var cloneUnFil = this.state.unFilteredArray;
    var filtered = [];

    for (var i = 0; i<cloneUnFil.length; i++){
        if (cloneUnFil[i].includes(userInput)){
            filtered.push(cloneUnFil[i]);
        }
    }

    this.setState({
        filteredArray: filtered
    })
  }

    render() {
    return (
        <div className = "puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className = "puzzleText"> Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
            <input className = "inputLine" onChange = { (e) => this.updateInput(e.target.value)}></input>
            <button className = "confirmationButton" onClick = { () => this.solveFilterString(this.state.userInput)}>Filter</button>
            <span className = "resultsBox filterStringRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
        </div>
    )
  }
}

export default FilterString;