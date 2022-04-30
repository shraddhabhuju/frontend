import React, { useEffect, useState } from "react";



export default function Purchases() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(20);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [filter,setfilter] =useState("");
  const [filterParameter, setfilterParameter] =useState("");

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  const renderData = (data) => {
    return (
      <>
        {data.filter((datas)=>{
          if(filter=="")
          return datas
          else if(filter == "sender" && datas.sender.toLowerCase().includes(filterParameter.toLowerCase())){
            return datas}

            else if(filter == "beneficiary" && datas.sender.toLowerCase().includes(filterParameter.toLowerCase())){
              return datas
            }

          
  
        }).map((datas, index) => {
          return(
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td scope="row" class="px-3 py-4 font-medium text-gray-900 dark:text-white ">
          { datas.sender}
              </td>
              <td class="px-3 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {datas.beneficiary}
              </td>
              <td class="px-3 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {datas.weiAmount}
              </td>
              <td class="px-5 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              {datas.tokenAmount}
              </td>
          
      </tr>)
        })}
      </>
    );
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => { return (
    <li
      key={number}
      id={number}
      onClick={handleClick}
      className={currentPage == number ? "active" : null} class="ml-2 border-2	"
    >
      {number}
    </li>
  );

    
    
    
  });

  useEffect(() => {
    fetch("http://localhost:8000/monitor/")
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handlerNumberofRowChange = (e) => {
      console.log(e.target.value )
    setitemsPerPage(parseInt(e.target.value));
  };

  const handleFilterSelect = (e) => {
    console.log(e.target.value )
  setfilter(e.target.value);
};
const handleFilterParameterSelect = (e) => {
  console.log(e.target.value )
  setfilterParameter(e.target.value);
};




  return (
    <div class="container bg-slate-100  shadow-xl sm:rounded-sm p-2 bg-white">
        <div class = "p-5 ">
                <h1 class="text-left text-3xl">Purchases</h1>
                
        </div>
        <div class = "mr-5 mt-5 mb-5 gap-4 flex flex-row-reverse">
            <div>
                <input onChange={handleFilterParameterSelect} class="bg-slate-100 rounded-lg border border-solid border-gray-300 mr-3 w-full px-3 py-1 leading-tight focus:outline-none" type="text" placeholder="Search"/>
            </div>
            <div>
                <select name="filter"  class ='border border-solid border-gray-300 rounded-lg px-3 py-1' onChange={handleFilterSelect}>
                    <option selected disabled> Filter</option>
                    <option value="sender">Sender</option>
                    <option value="beneficiary">Beneficiary</option>
        
                </select>
            
            </div>
     
         
          </div>
          
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10  divide-y ">
            <thead class="text-xs text-gray-500  bg-gray-10 dark">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Sender
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Beneficiary
                    </th>
                    <th scope="col" class="px-6 py-3">
                        weiAmount
                    </th>
                    <th scope="col" class="px-6 py-3">
                        tokenAmount
                    </th>
                </tr>
                </thead>
                
            <tbody>
            {renderData(currentItems)}
            </tbody>
            </table>
            
      <div class=""> 
      <ul className="pageNumbers" class="flex justify-center">
        <div class="mr-2">
          <select id="numberOfRows" onChange={handlerNumberofRowChange}>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          </select>
        </div>
       <div class="border-2	" >
         <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false} class="mr-2"
          >
            Prev
          </button>
        </li>
      </div> 
      <div>
        {pageDecrementBtn}
      </div>
      <div class="flex">
        {renderPageNumbers}
      </div>
      <div> 
        {pageIncrementBtn}
      </div>
      
      <div class="border-2"><li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false} class="ml-2"
          >
            Next
          </button>
        </li></div>
        
      </ul></div>
     
      
    </div>
  );
}
/* <div class="container bg-slate-100 overflow-x-auto shadow-md sm:rounded-sm ml-5 mt-5 bg-white">
        
    
        <div class = " ml-5 mt-5 mb-5 ">
            <h1 class="text-left">Purchases</h1>
              
        </div>
        <div class = "mr-5 mt-5 mb-5 gap-4 flex flex-row-reverse">
            <div>
                <input class="bg-slate-100 rounded-lg border border-solid border-gray-300 mr-3 w-full px-3 py-1 leading-tight focus:outline-none" type="text" placeholder="Search"/>
            </div>
            <div>
                <select name="filter"  class ='border border-solid border-gray-300 rounded-lg px-3 py-1'>
                    <option selected disabled> Filter</option>
                    <option value="sender">Sender</option>
                    <option value="beneficiary">Beneficiary</option>
        
                </select>
            
            </div>
                       
        </div>

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10  divide-y ">
            <thead class="text-xs text-gray-500  bg-gray-10 dark">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Sender
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Beneficiary
                    </th>
                    <th scope="col" class="px-6 py-3">
                        weiAmount
                    </th>
                    <th scope="col" class="px-6 py-3">
                        tokenAmount
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    0xb198cbcaf0b71999ccd201a925afb9e9f5e07b0d
                    </th>
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    0xb198cbcaf0b71999ccd201a925afb9e9f5e07b0d
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        1000
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        1000
                    </td>
                    
                </tr>
            
                
            </tbody>
        </table>
        
    <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
        </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
        <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium"> 1 </span>
            to
            <span class="font-medium"> 10 </span>
            of
            <span class="font-medium"> 97 </span>
            results
        </p>
        </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
         

          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
       
        <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
        
      
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          
         
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>
</div>  */


        
        
    
     

 