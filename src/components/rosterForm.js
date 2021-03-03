import React, { Component } from 'react'
import * as actions from "../actions/rosterActions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


//Temp Holder, replace with random# gen or other ID. 
let badge = 1050

/* 
// Status Update
let working = false;
function toggle() {
  working = !working
} 
*/

class rosterForm extends Component {

  state = {
    ...this.returnObjectState()
  }

  returnObjectState() {
    if (this.props.currentIndex === -1)
     return {
        idNum: '#' + badge++,
        lastName: '',
        firstName: '',
        initial: '',
        // status: false, : Different approach
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
  /*
  handleStatus = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  */
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

        <h2>Employee Info:</h2>
      
        <h3 
          name='idNum'
          type='number'
          className="idNum"
          onChange={this.handleInputChange}
          value={this.state.idNum}         
        >ID</h3>
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
          placeholder='Initial (Optional)' 
          className="initial"
          maxLength='1'
          onChange={this.handleInputChange}
          value={this.state.initial}
        />
        
        <input 
          name='dateOfBirth'
          type='date'
          placeholder='' 
          className="date"
          onChange={this.handleInputChange}
          value={this.state.dateOfBirth}
        />
        <input 
          name='dateOfEmployment'
          type='date'
          placeholder='' 
          className="date"
          
          value={this.state.dateOfEmployment}
        />
        {/* <button 
          name='status'
          type='boolean'
          placeholder='Active' 
          className="status"
          onClick={toggle}
          onChange={this.handleInputChange}
          value={this.state.status}
          >
            {this.state.value}
        </button> */ }
        <button
          type='submit'
          className='submit'
          >
            Add Employee
        </button>
        {/* <button
          type='reset'
          className='reset'
          >
            Clear
        </button> */}
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
