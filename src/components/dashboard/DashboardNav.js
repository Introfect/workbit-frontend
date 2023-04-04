import React from 'react'
import { currentUser } from '../../auth'

const DashboardNav = () => {
    const user = currentUser()
  return (
    <div className='flex justify-around p-6'>
        <div className='text-3xl font-bold'>
          <h2>welcome {user}</h2>
       </div>
       <div className='flex space-x-3'>
              <h3 className='cursor-pointer text-m font-bold'>Log Out</h3>
        </div>
</div>
  )
}

export default DashboardNav