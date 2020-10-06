import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/templates/ContentHeader'
import Content from '../common/templates/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import BillingCycleList from './BillingCycleList'

class BillingCycle extends Component {
  componentWillMount () {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }

  render () {
    return (
      <div>
        <ContentHeader title='Payment Cycles' subTitle='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList' />
              <TabHeader label='Add' icon='plus' target='tabCreate' />
              <TabHeader label='Change' icon='pencil' target='tabUpdate' />
              <TabHeader label='Remove' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'><h1><BillingCycleList /> </h1></TabContent>
              <TabContent id='tabCreate'><h1>Add</h1></TabContent>
              <TabContent id='tabUpdate'><h1>Change</h1></TabContent>
              <TabContent id='tabDelete'><h1>Remove</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)
