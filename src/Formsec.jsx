import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'

export class Formsec extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }
        handleName = (event) =>{
            this.setState({
                name:event.target.value
            })
        }
        handleEmail = (event) =>{
            this.setState({
                email:event.target.value
            })
        }
        handleSubmit = (event) =>{
            
            alert(`${this.state.name} ${this.state.email}`)
            event.preventDefault();
        }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type='text'value={this.state.name} onChange={this.handleName}></input>
            <label>Email</label>
            <input type='text' value={this.state.email} onChange={this.handleEmail}></input>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Formsec



