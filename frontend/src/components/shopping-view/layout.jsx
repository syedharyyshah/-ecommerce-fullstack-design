import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './header'
import ShoppingNavbar from './navbar'

const ShoppingLayout = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        {/* common header  */}
        <ShoppingHeader/>
         {/* ShoppingNavbar */}
         <ShoppingNavbar/>
        <main className='flex flex-col w-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout
