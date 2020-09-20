import React, { Component } from 'react'
import { connect } from 'react-redux'
import Row from '../common/layout/Row'
import Content from '../common/templates/content'
import ContentHeader from '../common/templates/contentHeader'
import ValueBox from '../common/widget/ValueBox'

class Dashboard extends Component {
  render () {
    const { credit, debt } = this.props.summary

    return (
      <div>
        <ContentHeader title='Titulão' subTitle='titulinho' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Amount Credit' />
            <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Amount Debit' />
            <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Cash' />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })

export default connect(mapStateToProps)(Dashboard)
