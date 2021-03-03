import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from "../actions/rosterActions" 
import RosterForm from './rosterForm'
import './rosterList.css'


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
              <td className='specs'>Badge#</td>
              <td className='specs'>Last Name</td>
              <td className='specs'>First Name</td>
              <td className='specs'>Middle Initial</td>
              <td className='specs'>Birthday</td>
              <td className='specs'>Hire Date</td>
              {/* <td className='specs'>STATUS</td> */}
              <td className='specs edit'>Edit Info</td>
              <td className='specs remove'>Remove Info</td>
            </tr>
          </thead>
          
          <tbody className='grid'>
            {this.props.list.map((item, index) => {
              return <tr key={index}>
                  <td className='id'>{item.idNum}</td>
                  <td className='name'>{item.lastName}</td>
                  <td className='name'>{item.firstName}</td>
                  <td className='initial'>{item.initial}</td>
                  <td className='date'>{item.dateOfBirth}</td>
                  <td className='date'>{item.dateOfEmployment}</td>
                  {/* <td className='status'>{item.status}</td> */}
                                   
                  <td className='buttons'>
                    <button 
                      className='mod'
                      onClick={() => 
                        this.handleEdit(index)}
                      >
                        Modify
                    </button>
                  </td>
              
                  <td className="buttons">
                    <button 
                    className='del'
                    onClick={() => 
                      this.handleRemove(index)}
                    >
                      Remove
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