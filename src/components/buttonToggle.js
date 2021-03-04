import React, { Component } from 'react'

export default class buttonToggle extends Component {
  state = {
    show: true,
  }


  render() {
    const toggler = this.state.active;
    return (
      <div>
        <button   
          className={ toggler ? 'show' : 'hide'} 
        onDoubleClick={ () => this.setState({active: !toggler})}><h4>{ toggler ? 'HIDE  INACTIVE' : 'SHOW INACTIVE'}</h4></button>      
      </div>
    )
  }
}
