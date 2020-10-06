import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './BillingCyclesActions'

class BillingCycleList extends Component {

  componentWillMount () {
    this.props.getList()
  }
  
  render () {
    console.log('MAKKINHO ::: ', this.props.list)
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            BODYNHO
          </tbody>
        </table>
      </div>
    )
  }

}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
