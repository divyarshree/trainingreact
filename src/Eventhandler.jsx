import React, { Component } from 'react'

export class Eventhandler extends Component {
    changeEvent(){
        alert('Event is handling...');
    }

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>click on me</button>
      </div>
    )
  }
}

export default Eventhandler
