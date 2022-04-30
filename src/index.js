import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from "./components/Dashboard/Dashboard"
import AdminPages from './views/AdminPages';
import Monitor from './views/Monitor';


import { BrowserRouter, Routes , Route} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="overview" element={<Dashboard />} />
      <Route path="admin" element={<AdminPages />} />
      <Route path="monitor" element={<Monitor />} />
        </Routes>
        
        
        
        
        
        </BrowserRouter>
     
   
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
