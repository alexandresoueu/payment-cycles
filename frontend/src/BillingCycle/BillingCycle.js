import React, { Component } from 'react'
import ContentHeader from '../common/templates/ContentHeader'
import Content from '../common/templates/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'

class BillingCycle extends Component {
  render () {
    return (
      <div>
        <ContentHeader title='Payment Cycles' subTitle='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList'/>
              <TabHeader label='Add' icon='plus' target='tabCreate'/>
              <TabHeader label='Change' icon='pencil' target='tabUpdate'/>
              <TabHeader label='Remove' icon='trash-o' target='tabDelete'/>
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'><h1>List</h1></TabContent>
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

export default BillingCycle
