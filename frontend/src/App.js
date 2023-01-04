import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
import './assets/styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import Login from './components/Login/Login';
import FormularioRegistroAdmin from './components/Admin/FormularioRegistroAdmin';
// Clientes
import Client from './components/Client/Client';
import ConsultaFactura from './components/Client/ConsultaFactura';
import PagaFactura from './components/Client/PagaFactura';
import HistorialPagos from './components/Client/HistorialPagos';

//Empresa
import QuienesSomos from './components/Empresa/QuienesSomos';
import Ayuda from './components/Empresa/Ayuda';
import Contacto from './components/Empresa/Contactanos';

//Admin
import FacturasAdmin from './components/Admin/facturasAdmin';



import Signup from './components/Login/Signup';
import RecoveryPassword from './components/Login/RecoveryPass';
import Manager from './components/Admin/Manager';
import Operator from './components/Admin/Operator';
import AdminHomeView from './components/Admin/AdminHomeView';
import Geomap from './components/Openstreetmap/Geomap';


//Layout
import HomepageLayout from './hocs/HomepageLayout';
import HomepageLayoutAdmin from './hocs/adminBar';

//<Route element={<HomepageLayout />}>
function App() {
  return (
    <BrowserRouter>

      <Routes>

               
        {/*rutas inicio */}
        <Route path="/" element={<Login />} />

        {/*rutas registro */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<RecoveryPassword />} />

        {/*rutas cliente */}
        <Route path="/client" element={<HomepageLayout><Client /></HomepageLayout>} />
        <Route path="/client/consulta-tu-factura" element={<HomepageLayout><ConsultaFactura /></HomepageLayout>} />
        <Route path="/client/pagar-factura" element={<HomepageLayout><PagaFactura /></HomepageLayout>} />
        <Route path="/client/historial-de-pagos" element={<HomepageLayout><HistorialPagos /></HomepageLayout>} />
        

        {/*rutas empresa */}
        <Route path="/client/quienes-somos" element={<HomepageLayout><QuienesSomos /></HomepageLayout>} />
        <Route path="/client/contactanos" element={<HomepageLayout><Contacto /></HomepageLayout>} />
        <Route path="/client/ayuda" element={<HomepageLayout><Ayuda /></HomepageLayout>} />
        

        {/*rutas operador */}
        <Route path="/operator" element={<HomepageLayout><Operator/></HomepageLayout>} />

        {/*rutas administrador */}
        <Route path="/admin/" element={ <HomepageLayoutAdmin>  <AdminHomeView/> </HomepageLayoutAdmin>  } />
        <Route path="/adminref" element={<HomepageLayout><FormularioRegistroAdmin /></HomepageLayout>} />
        <Route path="/admin/facturas" element={<HomepageLayoutAdmin><FacturasAdmin /></HomepageLayoutAdmin>} />

        {/*rutas manager */}
        <Route path="/manager" element={<HomepageLayout><Manager/></HomepageLayout>} />
        
        <Route path="/reportes"  element={<HomepageLayout><Geomap lat={3.3718534} lon={-76.5495206}/></HomepageLayout>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
