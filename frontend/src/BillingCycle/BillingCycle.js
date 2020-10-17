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
import { init, create, update, remove } from '../BillingCycle/BillingCyclesActions' 

import List from './BillingCycleList'
import BillingCycleForm from './BillingCycleForm'

class BillingCycle extends Component {
  componentWillMount () {
    this.props.init()
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
                <BillingCycleForm
                  onSubmit={this.props.create}
                  submitLabel='Create'
                  submitClass='primary'
                />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCycleForm
                  onSubmit={this.props.update}
                  submitLabel='Update'
                  submitClass='info'
                />
              </TabContent>
              <TabContent id='tabDelete'>
                <BillingCycleForm
                  onSubmit={this.props.remove}
                  submitLabel='Remove'
                  submitClass='danger'
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { init, create, update, remove },
  dispatch
)

export default connect(null, mapDispatchToProps)(BillingCycle)
