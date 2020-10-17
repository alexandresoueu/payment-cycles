import React , { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './BillingCyclesActions'
import LabelAndInput from '../common/form/labelAndInput'
import CreditList from './CreditList'

class BillingCycleForm extends Component {
  
  render () {
    const { handleSubmit, readOnly } = this.props
    
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={LabelAndInput}
            label='Name'
            cols='12 4'
            placeholder='Put the name'
            readOnly={readOnly}
          />
          <Field
            name='month'
            component={LabelAndInput}
            label='Month'
            cols='12 4'
            type='number'
            placeholder='Put the Month'
            readOnly={readOnly}
          />
          <Field
            name='year'
            component={LabelAndInput}
            label='Year'
            cols='12 4'
            type='number'
            placeholder='Put the Year'
          />
          <CreditList cols='12 6'/>
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default' onClick={this.props.init}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)
