import React, { Component } from 'react'

export default class rosterButton extends Component {
  state = {
    active: true,
  }
 
  /*
  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }
  */

  render() {
    const activate = this.state.active;
    return (
      <div className={ activate ?'tog-active' : 'tog-inactive'}>
        <button
        className={ activate ? 'active' : 'inactive'} 
        onDoubleClick={ () => this.setState({active: !activate})}><h1>{ activate ? 'ACTIVE' : 'INACTIVE'}</h1></button>    
      </div>
    )
  }
}
