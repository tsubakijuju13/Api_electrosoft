import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
import './App.css';

//Components
import Login from './components/Login/Login';
import FormularioRegistroAdmin from './components/Admin/FormularioRegistroAdmin';
import Client from './components/Client/Client';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<FormularioRegistroAdmin />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
