import React from 'react';
import './App.css';
//import './components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchCity from './components/SearchCity';

function App() {
  return (
    <div className="App-header">
    <BrowserRouter>
    
      <Routes>
            <Route path='/' element={<SearchCity />} />
             
          </Routes>
       
     
    </BrowserRouter>
    </div>
  );
}

export default App;
