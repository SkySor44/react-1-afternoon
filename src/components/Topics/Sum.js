import React, { Component } from 'react';

class Sum extends Component {
  constructor(){
      super();
      this.state = {
          number1: 0,
          number2: 0,
          sum: null
      }
  }
  
  updateNum1(e){
    var num1 = e * 1;
    this.setState({
        number1: num1
    })
  }

  updateNum2(e){
   var num2 = e * 1; 
    this.setState({
        number2: num2
    })
  }
  
sumAnswer(number1, number2){
var sum = number1 + number2;
this.setState({
    sum: sum
})
}

    render() {
    return (
        <div className = "puzzleBox sumPB">
            <h4>Sum</h4>
            <input className = "inputLine" onChange = { (e) => this.updateNum1(e.target.value)}></input>
            <input className = "inputLine" onChange = { (e) => this.updateNum2(e.target.value)}></input>
            <button className = "confirmationButton" onClick = { () => this.sumAnswer(this.state.number1, this.state.number2)}>Add</button>
            <span className = "resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>
        </div>
    )
  }
}

export default Sum;