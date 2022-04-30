import React from 'react'

export default function Cards() {
  return (

<div class="container bg-slate-100">
    <div class=" text-left ml-10 mt-5">
      <h1>Dashboard</h1>  
    </div>



    <div class="grid grid-rows-1 grid-flow-col gap-20 ml-20 mt-10">

        <a href='#'> 
        <div class="w-80 h-20 rounded overflow-hidden shadow-lg bg-slate-50">
        
            <div class="px-6 py-4 mt-2">
                
                <p class="text-gray-700 text-base">
                Monitor Crowdsale
                </p>
            
            </div>
        </div>
    </a>

       
            
    <a href='#'> 
        <div class="w-80 h-20 rounded overflow-hidden shadow-lg bg-slate-50">
        
            <div class="px-6 py-4 mt-2">
                
                <p class="text-gray-700 text-base">
                Admin Crowdsale
                </p>
            
            </div>
        </div>
    </a>
        
    </div>
</div>
        
    
  )
}
