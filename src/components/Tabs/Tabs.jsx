import React,{useState} from 'react'
import AdminCards_2 from '../Cards/AdminCards_2'
import AdminCards_4 from '../Cards/AdminCards_1'

export default function Tabs() {
let [index, setIndex] = useState(0)
  return (
    <div class= "Tabs ml-5 mt-5  divide-y">
        
            <div class= "tabslist flex justify-center ">
                <div class ={index!==0? "text-slate-500 p-3 px-10":"text-black border-b-2 border-black p-3 px-10"} onClick={()=>setIndex(0)}>Crowdsale Owner</div>
                <div class ={index!==1? "text-slate-500 p-3 px-10":"text-black border-b-2 border-black p-3 px-10"} onClick={()=>setIndex(1)}>Crowdsale Minter</div>
                <div class = {index!==2? "text-slate-500 p-3 px-10":"text-black border-b-2 border-black p-3 px-10"} onClick={()=>setIndex(2)}>Crowdsale Pauser</div>
            </div>

        <div class="tabscontentlist">
            <div class="tabscontent" hidden={index!=0}>
                <div class=" flex justify-center gap-20 p-10">
                    <div class="w-96 h-80">
                        <AdminCards_2 cardtype='Owner' numberofInput="2" firstInput="Admin Address" secondInput="Owner Address" buttonType="Add" />
                    </div>
                    <div class="w-96 h-80">
                        <AdminCards_2 cardtype="Owner" numberofInput="2" firstInput="Admin Address" secondInput="Owner Address" buttonType="Remove" />
                    </div>
                </div>
            </div>
            <div class="tabscontent" hidden={index!=1}>
            <div class=" flex justify-center gap-20 p-10">
                    <div class="w-96 h-80">
                        <AdminCards_2 cardtype='Minter' numberofInput="2" firstInput="Admin Address" secondInput="Owner Address" buttonType="Add" />
                    </div>
                    <div class="w-96 h-80">
                        <AdminCards_2 cardtype="Minter" numberofInput="2" firstInput="Admin Address" secondInput="Owner Address" buttonType="Remove" />
                    </div>
                </div>
                <div class=" flex justify-center gap-20 p-10">
                    <div class="w-96 h-80">
                        <AdminCards_4 cardtype='Minter' numberofInput="2" firstInput="Admin Address"  buttonType="Pause" />
                    </div>
                    <div class="w-96 h-80">
                        <AdminCards_4 cardtype="Minter" numberofInput="2" firstInput="Admin Address"  buttonType="Unpause" />
                    </div>
                </div>
            </div>
            <div class="tabscontent" hidden={index!=2}> <div class=" flex justify-center gap-20 p-10">
                    <div class="w-96 h-80">
                        <AdminCards_2 cardtype='Pauser' numberofInput="2" firstInput="Admin Address" secondInput="Owner Address" buttonType="Add" />
                    </div>
                    <div class="w-96 h-80">
                        <AdminCards_2 cardtype="Pauser" numberofInput="2" firstInput="Admin Address" secondInput="Owner Address" buttonType="Remove" />
                    </div>
                </div>
                <div class=" flex justify-center gap-20 p-10">
                    <div class="w-96 h-80">
                        <AdminCards_4 cardtype='Pauser' numberofInput="2" firstInput="Admin Address"  buttonType="Pause" />
                    </div>
                    <div class="w-96 h-80">
                        <AdminCards_4 cardtype="Pauser" numberofInput="2" firstInput="Admin Address"  buttonType="Unpause" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}


