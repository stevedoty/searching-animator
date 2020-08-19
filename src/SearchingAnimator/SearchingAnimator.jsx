import React from 'react';
import {binarySearch} from '../searchingAlgorithms/searchingAlgorithms.js';
import './SearchingAnimator.css';

export default class SearchingAnimator extends React.Component {
  constructor(props){
    super(props);

    this.state={
      array:[1,2,3,4,5,6,7,8,9],
      inputValue: 0,
      outputValue: "hi",
    }
  }

  handleClick = (e) => {
    let currentValue = e.target.parentNode.firstChild.value
    Promise
      .resolve(this.setState({inputValue:currentValue}))
      .then(()=>{console.log(this.state.inputValue)})
  }
  handleBinarySearch = (e) => {
    let array = this.state.array;
    let target = e.target.parentNode.firstChild.inputValue;
    let n = array.length

    // Promise
    //   .resolve(this.setState({inputValue:currentValue}))
    //   .then(()=>{console.log(this.state.inputValue)})
    console.log(binarySearch(array, n, target));


  }

  render(){
    return (
      <div className="SearchingAnimator-container">
        <div className="user-form">
          input:<input className="input-field" placeholder="Int"></input>
          output:<div className="output-field">{this.state.outputValue}</div>
          <button onClick={this.handleClick}>FIND</button>
          <button onClick={this.handleBinarySearch}>Binary Search</button>
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <p></p>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <div className="grid-row">
          {this.state.array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
      </div>
    );
  }
}
