import React from 'react'
import SidebarHeader from './Sidebar/SidebarHeader'
import Sidebarfooter from './Sidebar/Sidebarfooter'
import Sidebar from './Sidebar/Sidebar'



function DeshboardLayouts({ children }) {
  return (
    <div className=' grid grid-cols-12 max-w-[1596px] mx-auto bg-[#191919] h-[100vh]'>
      <div className=' col-span-3 h-full  border-r grid  grid-rows-12'>
        <div className='row-span-2'>
        <SidebarHeader></SidebarHeader>
       
        </div>
        <div className='row-span-8 overflow-y-auto'>
        <Sidebar></Sidebar>
        </div>
      
      </div>
      <div className=' col-span-9 h-[750px] overflow-y-auto'>
        <main>
          {children}
        </main>
      </div>
     
      
    </div>
  )
}

export default DeshboardLayouts


