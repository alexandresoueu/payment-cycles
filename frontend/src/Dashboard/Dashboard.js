import React, { Component } from 'react'
import Row from '../common/layout/Row'
import Content from '../common/templates/content'
import ContentHeader from '../common/templates/contentHeader'
import ValueBox from '../common/widget/ValueBox'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <ContentHeader title='Titulão' subTitle='titulinho' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10' text='Amount Credit' />
            <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 20' text='Amount Debit' />
            <ValueBox cols='12 4' color='blue' icon='money' value='R$ 30' text='Cash' />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard
