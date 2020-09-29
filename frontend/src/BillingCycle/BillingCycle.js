import React, { Component } from 'react'
import ContentHeader from '../common/templates/ContentHeader'
import Content from '../common/templates/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'

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
            <TabsHeader>
              <TabHeader />
            </TabsHeader>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle
