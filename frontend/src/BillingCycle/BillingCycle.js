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
import { create, update } from '../BillingCycle/BillingCyclesActions' 

import List from './BillingCycleList'
import BillingCycleForm from './BillingCycleForm'

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
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCycleForm onSubmit={this.props.create} />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCycleForm onSubmit={this.props.update} />
              </TabContent>
              <TabContent id='tabDelete'><h1>Remove</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { selectTab, showTabs, create, update },
  dispatch
)

export default connect(null, mapDispatchToProps)(BillingCycle)
