import React, { Component } from 'react';
import EvenAndOdd from '/Users/skylersorensen/src/react-1/react-1-afternoon/src/components/Topics/EvenAndOdd.js';
import FilterObject from '/Users/skylersorensen/src/react-1/react-1-afternoon/src/components/Topics/FilterObject.js';
import FilterString from '/Users/skylersorensen/src/react-1/react-1-afternoon/src/components/Topics/FilterString.js';
import Palindrome from '/Users/skylersorensen/src/react-1/react-1-afternoon/src/components/Topics/Palindrome.js';
import Sum from '/Users/skylersorensen/src/react-1/react-1-afternoon/src/components/Topics/Sum.js'

class TopicBrowser extends Component {
  render() {
    return (
        <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
        </div>
    )
  }
}

export default TopicBrowser;