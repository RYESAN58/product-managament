import './App.css';
import Form from './components/form';
import {BrowserRouter, Routes, Route, link} from 'react-router-dom'
import { useState } from 'react'; 
import AllProducts from './components/display';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Form/>}/>
          <Route path='/allProducts' element={<AllProducts/>}/>
          <Route path='/product/:id' element = {<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;
