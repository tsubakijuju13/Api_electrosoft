import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




//Styles
import './App.css';


//Components
import Login from './components/Login/Login';
import FormularioRegistroAdmin from './components/Admin/FormularioRegistroAdmin';
import Client from './components/Client/Client';
import Signup from './components/Login/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<FormularioRegistroAdmin />} />
          <Route path="/client" element={<Client />} />
          <Route path="/signup" element={<Signup></Signup>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
