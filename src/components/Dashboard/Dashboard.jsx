import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'

export default function Dashboard() {
  return (
   
    <div class="w-60 min-h-screen   h-full shadow-md bg-gray-800 px-1">
    <div class="overflow-y-auto py-4 px-3 bg-gray-800  dark:bg-gray-800">
       <ul class="space-y-2">

          <li>
             <Link to="/" class="flex items-center p-2 text-base font-normal text-gray-300 -lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                
                <span class="ml-3">Dashboard</span>
             </Link>
          </li>
          <li>
             <Link to="/Overview" class="flex items-center p-2 text-base font-normal text-gray-300 -lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
               
                <span class="flex-1 ml-3 whitespace-nowrap">Overview</span>
               
             </Link>
          </li>
          <li>
             <Link to="/monitor" class="flex items-center p-2 text-base font-normal text-gray-300 -lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
               
                <span class="flex-1 ml-3 whitespace-nowrap">Monitor</span>

             </Link>
          </li>
          <li>
             <a href="/admin" class="flex items-center p-2 text-base font-normal text-gray-300 -lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700">
              
                <span class="flex-1 ml-3 whitespace-nowrap">Admin</span>
             </a>
          </li>
          
          
       </ul>
    </div>
    
 </div>



  )
}
