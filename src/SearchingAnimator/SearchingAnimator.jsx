import React from 'react';
import './SearchingAnimator.css'

export default class SearchingAnimator extends React.Component {
  constructor(props){
    super(props);

    this.state={
      array:[1,2,3,4,5,6,7,8,9]
    }
  }


  render(){
    return (
      <div className="SearchingAnimator-container">
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
