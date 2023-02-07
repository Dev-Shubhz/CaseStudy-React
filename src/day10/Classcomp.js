import React, { Component } from 'react'
import { ReactDOM } from 'react-dom';

export default class Classcomp extends Component {
    constructor() {
        super();
        this.state = {
          count: 0
        };
      }
      render() {
        return (
          <div>
            <h1>Current count: {this.state.count}</h1>
            <button
              onClick={() =>
                this.setState({ count: this.state.count + 1 }, () => {
                  console.log(this.state.count);
                })
              }
            >
              Increment
            </button>
            <button
            onClick={() =>this.state.count>0?
              this.setState({ count: this.state.count -1 }):this.setState({count:0})
            }
          >
            Decrement
          </button>
          </div>
        );
      }
    }
    
   