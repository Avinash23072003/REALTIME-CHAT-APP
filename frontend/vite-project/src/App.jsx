import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ChatsPage from './Pages/ChatsPage';

const App = () => {
  return (
    <div className='App'>
      
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatsPage></ChatsPage>} />
        
      </Routes>
   
    </div>
  );
};

export default App;
