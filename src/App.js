import React from 'react';
import './App.css'
import EmployeeList from './components/ListEmployeeComponent';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

export default function App() {
  return (
    <div>
      <HeaderComponent />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<EmployeeList />}></Route>
              <Route path ="/employee/:empno" element={<ViewEmployeeComponent />}></Route>
              <Route path ="/addemployee/:add" element={<CreateEmployeeComponent />}></Route>
          </Routes>
        </BrowserRouter>
      <FooterComponent />
    </div>
  )
}

