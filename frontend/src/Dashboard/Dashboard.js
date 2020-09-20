import React, { Component } from 'react'
import Content from '../common/templates/content'
import ContentHeader from '../common/templates/contentHeader'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <ContentHeader title='Titulão' subTitle='titulinho' />
        <Content>
          Dashboard
        </Content>
      </div>
    )
  }
}

export default Dashboard
