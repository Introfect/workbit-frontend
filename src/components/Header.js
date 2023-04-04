import React from 'react'

const Header = () => {
  return (

    <div className='bg-spotify_green flex flex-grow justify-between  p-2 '>
        <div className='mx-2 text-lg font-semibold'>
            <h2>WorkBit</h2>
        </div>
        <div className='flex space-x-3 mx-6'>
            <h3 className='cursor-pointer text-sm font-bold'>Log In</h3>
            <h3 className='cursor-pointer text-sm font-bold'>Sign Up</h3>
        </div>
        </div>
  )
}

export default Header