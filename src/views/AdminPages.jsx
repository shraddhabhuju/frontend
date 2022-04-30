import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'

import Tabs from '../components/Tabs/Tabs'
import Topbar from '../components/Topbar/Topbar'

export default function AdminPages() {
  return (
    <div class="flex w-60 h-full ">
    <div><Dashboard/></div>
    <div>
    
    <div class="h-30"><Topbar/></div>
    <div><Tabs/></div>
    </div>
    
    </div>
  )
}
