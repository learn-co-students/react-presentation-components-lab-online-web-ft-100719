// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component{

  state = {
    mood: "happy"
  }

  handleClick = (event) =>{
    if (this.state.mood === "happy"){
      this.setState({
        mood: "sad"
      })
    } else if (this.state.mood === "sad"){
      this.setState({
        mood: "happy"
      })
    }

  }

  render(){
    return(
      <div onClick ={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}

export default SimpleComponent
