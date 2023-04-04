import React from 'react'
import LeftNav from '../dashboard/LeftNav'
import DashboardNav from '../dashboard/DashboardNav'
import CreateBoard from '../dashboard/CreateBoard'

const Dashboard = () => {
    return (
      <div>
        <DashboardNav/>
        <div className='flex'>    
        <LeftNav/>
        <CreateBoard/>
        </div>
        </div>
    )
}

export default Dashboard