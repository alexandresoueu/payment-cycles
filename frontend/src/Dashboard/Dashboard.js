import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Row from '../common/layout/Row'
import Content from '../common/templates/content'
import ContentHeader from '../common/templates/contentHeader'
import ValueBox from '../common/widget/ValueBox'
import getSummary from '../Dashboard/DashboardActions'

class Dashboard extends Component {
  componentWillMount () {
    this.props.getSummary()
  }

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
const mapDispatchTOProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchTOProps)(Dashboard)
