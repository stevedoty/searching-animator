import React from 'react';
import {binarySearch} from '../searchingAlgorithms/searchingAlgorithms.js';
import './SearchingAnimator.css';

export default class SearchingAnimator extends React.Component {
  constructor(props){
    super(props);

    this.state={
      array:[1,2,3,4,5,6,7,8,9],
      inputValue: undefined,
      outputIndex: undefined,
    }
    this.handleOutputIndex = this.handleOutputIndex.bind(this);
  }



  //run inputValue through searchingAlgorithms, return outputIndex
  handleOutputIndex = (e) => {
    e.preventDefault();
    let array = this.state.array;
    let n = this.state.array.length;
    let target = parseInt(document.getElementById("input-value").value)
    // let output = binarySearch(array, n, target);
    console.log('target');
    // this.setState({outputIndex:output})
  }





  render(){
    const {array, inputValue, outputIndex} = this.state;
    return (
      <div className="SearchingAnimator-container">



        <form className="user-form" onSubmit={this.handleOutputIndex}>
          <label>
            <input id="input-value" value={inputValue}/>
            <input id="output-index" value={outputIndex}/>
          </label>
          <button>button</button>
        </form>




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
