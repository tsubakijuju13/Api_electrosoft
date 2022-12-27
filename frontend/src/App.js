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
import RecoveryPassword from './components/Login/RecoveryPass';

import Manager from './components/Admin/Manager';
import Operator from './components/Admin/Operator';
import AdminHomeView from './components/Admin/AdminHomeView';
import Geomap from './components/Openstreetmap/Geomap';


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
        <Route path="/recover" element={<RecoveryPassword />} />
        <Route path="/operator" element={<HomepageLayout><Operator/></HomepageLayout>} />
        <Route path="/adminView" element={ <HomepageLayout> <AdminHomeView/> </HomepageLayout>} />
        <Route path="/reportes"  element={<HomepageLayout><Geomap lat={3.3718534} lon={-76.5495206}/></HomepageLayout>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
