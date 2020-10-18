import React, { Component } from 'react'

import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'
import ValueBox from '../common/widget/ValueBox'

const Summary = ({credit, debt}) => {
  return (
    <Grid cols='12'>
      <fieldset>
        <legend>Summary</legend>
      </fieldset>
      <Row>
        <ValueBox
          cols='12 4'
          color='green'
          icon='bank'
          value={`R$ ${credit}`}
          text='Credit Amount'
        />
        <ValueBox
          cols='12 4'
          color='red'
          icon='credit-card'
          value={`R$ ${debt}`}
          text='Debit Amount'
        />
        <ValueBox
          cols='12 4'
          color='blue'
          icon='money'
          value={`R$ ${credit - debt}`}
          text='Money Amount'
        />
      </Row>
    </Grid>
  )
}

export default Summary
