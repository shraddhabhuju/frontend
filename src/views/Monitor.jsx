import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Purchases from '../components/PurchaseCard/Purchases'
import Topbar from '../components/Topbar/Topbar'

export default function Monitor() {
  return (
    <div class="flex">
        <div><Dashboard/></div>
        <div class="w-full">
        <div class="h-30"><Topbar/></div>
        <div class="m-5"><Purchases/></div>
        </div>

    </div>
  )
}
