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

    this.handleInputValue = this.handleInputValue.bind(this);
  }

  //update state of inputValue
  handleInputValue = (e) => {
    let inputValue = e.target.value;
    console.log(inputValue);
  }

  //run inputValue through searchingAlgorithms, return outputIndex
  handleOutputIndex = () => {

    // let array = this.state.array;
    // let target = this.state.inputValue;
    // let n = array.length;
    // let outputIndex = binarySearch(array, n, target);
    // this.setState({this.state.outputIndex:outputIndex});
    console.log('yo');
  }





  render(){
    const {array} = this.state;
    return (
      <div className="SearchingAnimator-container">
        <form className="user-form">
          <label>
            <input type="text" value={this.state.inputValue} onChange={this.handleInputValue} />
          </label>
          <input type="submit" value="Submit" onSubmit={this.handleOutputIndex}/>
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
