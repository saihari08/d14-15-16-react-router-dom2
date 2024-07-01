import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom'

function Dashboard() {

  let loc=useLocation();
  console.log(loc);
  console.log(`inside dashboard component`)
  return (
    <div>
        <TopNavigation></TopNavigation>
      <h1>Dashboard</h1>
      <h2>{loc&& loc.state && loc.state.quote? loc.state.quote:""}</h2>
    </div>
  )
}

export default Dashboard
