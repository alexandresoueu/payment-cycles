import React, { Component } from 'react'
import ContentHeader from '../common/templates/ContentHeader'
import Content from '../common/templates/Content'

class BillingCycle extends Component {
  render () {
    return (
      <div>
        <ContentHeader title='Payment Cycles' subTitle='Register' />
        <Content>
          Cycles Payment
        </Content>
      </div>
    )
  }
}

export default BillingCycle
