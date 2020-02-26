// Code SimpleComponent Here
import React, { Component } from 'react';


export default class SimpleComponent extends Component{
  constructor(){
    super();
    this.state = {
      mood: 'happy' 
    }
  }

  handleOnClick = () =>{
    this.setState({
      mood: "sad"
    })
  }

  render(){
    return(
    <div onClick={this.handleOnClick}>
      {this.state.mood}
    </div>
    )
  }
}
