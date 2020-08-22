import React from 'react';
import {binarySearch} from '../searchingAlgorithms/searchingAlgorithms.js';
import './SearchingAnimator.css';

export default class SearchingAnimator extends React.Component {
  constructor(props){
    super(props);

    this.state={
      array:[1,2,3,4,5,6,7,8,9],
      inputValue: "",
      outputIndex: "",
    }
  }


  //run inputValue through searchingAlgorithms, return outputIndex
  handleInputValue = (e) => {
    let newValue = parseInt(e.target.value, 10);
    this.setState({inputValue:newValue});
  }


  //run inputValue through searchingAlgorithms, return outputIndex
  handleOutputIndex = (e) => {
    e.preventDefault();
    const array = this.state.array;
    const n = this.state.array.length;
    const target = this.state.inputValue;
    const output = binarySearch(array, n, target);
    this.setState({outputIndex:output});
  }


  render(){
    const {array, inputValue, outputIndex} = this.state;
    return (
      <div className="SearchingAnimator-container">

        <form className="user-form" onSubmit={this.handleOutputIndex}>
          <label>
            <input id="input-value" type="number" value={inputValue} onChange={this.handleInputValue}/>
            <input id="output-index" type="number" readOnly value={outputIndex}/>
          </label>
          <button>button</button>
        </form>

        <div className="grid-row">
          {array.map((num, i) => (
              <div key={i} className="grid-node">{num}</div>
            ))
          }
        </div>
        <br/>

        {array.map((num, i) => (
            <div key={i} className="grid-row">
              {array.map((num, j) => (
                  <div key={j} className="grid-node">{num}</div>
                ))
              }
            </div>
          ))
        }

      </div>
    );
  }
}
