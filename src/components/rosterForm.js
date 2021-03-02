import React, { Component } from 'react'
import * as actions from "../actions/rosterActions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './rosterForm.css'

//Temp Holder, replace with random# gen or other ID. 
let badge = 10;

class rosterForm extends Component {

  state = {
    ...this.returnObjectState()
  }

  returnObjectState() {
    if (this.props.currentIndex === -1)
      return {
        idNum: 'ID# ' + badge++,
        lastName: '',
        firstName: '',
        initial: '',
        status: Boolean,
        dateOfBirth: '',
        dateOfEmployment: ''
        // workStatus: boolean - 'active/inactive'
      }
    else
      return this.props.list[this.props.currentIndex]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length) {
      this.setState({ ...this.returnObjectState() })
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.currentIndex === -1)
      this.props.insertRoster(this.state)
    else
      this.props.updateRoster(this.state)    
  }

  render() {
    return (
      <form 
        className='form'
        onSubmit={this.handleSubmit} 
        autoComplete='off'>
        <p 
          name='idNum'
          type='number'
          className="idNum"
          onChange={this.handleInputChange}
          value={this.state.idNum}
        ></p>
        <input 
          name='lastName'
          type='text'
          placeholder='Last Name' 
          className="name"
          onChange={this.handleInputChange}
          value={this.state.lastName}
        />
        <input 
          name='firstName'
          type='text'
          placeholder='First Name' 
          className="name"
          onChange={this.handleInputChange}
          value={this.state.firstName}
        />
        <input 
          name='initial'
          type='text'
          placeholder='Initial' 
          className="middleName"
          onChange={this.handleInputChange}
          value={this.state.initial}
        />
        <input 
          name='status'
          type='checkbox'
          placeholder='Active' 
          className="middleName"
          onClick='check'
          value={this.state.status}
        />
        <input 
          name='dateOfBirth'
          type='date'
          placeholder='' 
          className="birthday"
          onChange={this.handleInputChange}
          value={this.state.dateOfBirth}
        />
        <input 
          name='dateOfEmployment'
          type='date'
          placeholder='' 
          className="startDate"
          onChange={this.handleInputChange}
          value={this.state.dateOfEmployment}
        />
        <button
          type='submit'
          className='submit'>Add Employee
          </button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    currentIndex: state.currentIndex
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    insertRoster: actions.add,
    updateRoster: actions.update
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(rosterForm) 
