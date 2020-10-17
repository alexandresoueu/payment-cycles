import React, { Component } from 'react'
import { Field } from 'redux-form'
import Input from '../common/form/Input'

import Grid from '../common/layout/Grid'

class CreditList extends Component {

  renderRows() {
    return (
      <tr>
        <td>
          <Field
            name='credits[0].name'
            component={Input}
            placeholder='Put the name'
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name='credits[0].value'
            component={Input}
            placeholder='Put the value'
            readOnly={this.props.readOnly}
          />
        </td>
        <td></td>
      </tr>
    )
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Credits</legend>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

export default CreditList