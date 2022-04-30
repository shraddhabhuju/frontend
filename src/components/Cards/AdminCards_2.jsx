import React from 'react'
import { CROWDSOURCE } from '../../artifacts/contract';
import { ethers } from 'ethers';
const CROWDSOURCE_ABI = require("../../artifacts/crowsource.json")

export default function AdminCards_2(props) {
    var inputs= parseInt(props.numberofInput)

    async function requestAccount() {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
  
    function handlebuttonClick(){
  
      if(props.cardtype=="Minter"){
        if(props.buttonType=="Pause"){
          pauseMinter();
        }
        else{
          unpauseMinter();
        }
        
      }
      else if(props.cardtype == "Pauser"){
        if(props.buttonType=="Pause"){
          pauseCrowdSale();
        }
        else{
          unpauseCrowdsale();
        }
        
      
  
      }
     
  
    }
  
    
    
    async function pauseMinter(){
      if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log({provider});
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CROWDSOURCE, CROWDSOURCE_ABI, signer);
        const address = signer.getAddress();
        console.log("address: ", address);
        
        console.log("checking:");
      
      
      
        
      } 
    }
    async function unpauseMinter(){
      if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log({provider});
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CROWDSOURCE, CROWDSOURCE_ABI, signer);
        const address = signer.getAddress();
        console.log("address: ", address);
        
        console.log("checking:");
      
      
      
        
      } 
    }
  
      ////////Pauser //////////////
  
    async function pauseCrowdSale(){
      if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log({provider});
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CROWDSOURCE, CROWDSOURCE_ABI, signer);
        const address = signer.getAddress();
        console.log("address: ", address);
        
        console.log("checking:");
      
      
      
        
      } 
    }
    async function unpauseCrowdsale(){
      if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log({provider});
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CROWDSOURCE, CROWDSOURCE_ABI, signer);
        const address = signer.getAddress();
        console.log("address: ", address);
        
        console.log("checking:");
      
      
      
        
      } 
    }
  
    
   
  
  
    
    
   
  
  return (
    <div class="container w-full h-80 rounded overflow-hidden shadow-lg ">
        <div class="heading text-left m-5 text-2xl">{props.buttonType} {props.cardtype}</div>

        
            
        

        <div class="text-left ml-5 mt-5 ">
            {props.firstInput}

        </div>

        <div class="p-5 pt-2 pb-2">
        <input class="bg-slate-100 w-full h-8 rounded-lg border border-solid border-gray-300 " type="text" placeholder={" " + props.firstInput}/>
        </div>
        

        <div class="admin address text-left ml-5 mt-5 ">
            {props.secondInput}

        </div>

        <div class="p-5 pt-2 pb-2">
        <input class="bg-slate-100 w-full h-8 rounded-lg border border-solid border-gray-300 " type="text" placeholder={" " + props.secondInput}/>
        </div>
        

        <div class=" p-5 pt-2">
        <button class={props.buttonType=="Add"? "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded":"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" }>{props.buttonType} {props.cardtype}</button>
        </div>
        

    </div>
  )
}
