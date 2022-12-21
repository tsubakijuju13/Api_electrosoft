import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
import './assets/styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import Login from './components/Login/Login';
import FormularioRegistroAdmin from './components/Admin/FormularioRegistroAdmin';
import Client from './components/Client/Client';
import Signup from './components/Login/Signup';
import Manager from './components/Admin/Manager';
import Operator from './components/Admin/Operator';

//Layout
import HomepageLayout from './hocs/HomepageLayout';

//<Route element={<HomepageLayout />}>
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/manager" element={<HomepageLayout><Manager/></HomepageLayout>} />
        <Route path="/admin" element={<HomepageLayout><FormularioRegistroAdmin /></HomepageLayout>} />
        <Route path="/client" element={<HomepageLayout><Client /></HomepageLayout>} />
        <Route path="/operator" element={<HomepageLayout><Operator/></HomepageLayout>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
