import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from "../actions/rosterActions" 
import RosterForm from './rosterForm'
import './rosterList.css'
import Toggle from './buttonToggle'
import Activate from './rosterButton'

class rosterList extends Component {

  handleEdit = (index) => {
    this.props.updateRosterIndex(index)
  }

  handleRemove = (index) => {
    this.props.removeRoster(index)
  }

  

  render() {
    return (
      <div className='main'>
        <div className="form">
          <RosterForm />
        </div>
{/* 
        <div className="sorter">
          <p>Sort</p>
        </div>
         */}
         
        <table className='table'>         
          <thead>
            <tr className='details'>
              <Toggle />
              <td className='specs'>Badge#</td>
              <td className='specs'>Last Name</td>
              <td className='specs'>First Name</td>
              <td className='specs'>Middle Initial</td>
              <td className='specs'>Birthday</td>
              <td className='specs'>Hire Date</td>
              <td className='specs'>Edit Info</td>
              <td className='specs'>Remove Info</td>
            </tr>
          </thead>
        
          <tbody className='grid'>
            {this.props.list.map((item, index) => {
              return <tr key={index}>
                  
                  <Activate />
                  
                  <td className='specs'>{item.idNum}</td>
                  <td className='specs'>{item.lastName}</td>
                  <td className='specs'>{item.firstName}</td>
                  <td className='specs'>{item.initial}</td>
                  <td className='specs'>{item.dateOfBirth}</td>
                  <td className='specs'>{item.dateOfEmployment}</td>

                  <td className='specs buttons'>
                    <button 
                      className='mod'
                      onClick={() => 
                        this.handleEdit(index)}
                      >
                        <h1>MODIFY</h1>
                    </button>
                  </td>
              
                  <td className="specs buttons">
                    <button 
                    className='del'
                    onDoubleClick={() => 
                      this.handleRemove(index)}
                    >
                      <h1>REMOVE</h1>
                    </button>
                  </td>                  
                </tr>
            })}
          </tbody>          
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateRosterIndex: actions.updateIndex,
    removeRoster: actions.remove
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(rosterList)