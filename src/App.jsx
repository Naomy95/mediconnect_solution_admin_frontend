// App.js
import React from 'react';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import Dashboard from './components/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import DotorPage from './pages/DotorPage';
import NursingPage from './pages/NursingPage';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
      <div className="app">
      <Sidebar />
      <div className="main-content">
    
      <Routes>
        <Route path='/' element={<Header /> } />
        <Route path='/dashboard' element={<Dashboard /> } />
        <Route path='/doctors' element={<DotorPage /> } />
        <Route path='/nurses' element={<NursingPage /> } />
         </Routes> 
        
      </div>
    </div>
    </BrowserRouter>
      </ QueryClientProvider>
   
  );
}

export default App;
