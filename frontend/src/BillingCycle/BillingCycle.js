import React, { Component } from 'react'
import ContentHeader from '../common/templates/ContentHeader'
import Content from '../common/templates/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'

class BillingCycle extends Component {
  render () {
    return (
      <div>
        <ContentHeader title='Payment Cycles' subTitle='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
            </TabsHeader>
            <TabsHeader>
            </TabsHeader>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle
