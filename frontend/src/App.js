import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
import './assets/styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import Login from './components/Login/Login';
import FormularioRegistroAdmin from './components/Admin/FormularioRegistroAdmin';
import Validator from './components/Login/validator';

// Clientes
import Client from './components/Client/Client';
import ConsultaFactura from './components/Client/ConsultaFactura';
import PagaFactura from './components/Client/PagaFactura';
import HistorialPagos from './components/Client/HistorialPagos';

//Empresa
import QuienesSomos from './components/Empresa/QuienesSomos';
import Ayuda from './components/Empresa/Ayuda';
import Contacto from './components/Empresa/Contactanos';

//Operador
import Operator from './components/Operador/Operator';
import Pagos_bancarios from './components/Operador/Pagos_bancarios';
import FormularioRegistroPagosOperador from './components/Operador/FormularioRegistroPagosOperador';
import FormularioCrearFacturaOperador from './components/Operador/FormularioCrearFacturaOperador';
import FormularioCrearContratoOperador from './components/Operador/FormularioCrearContratoOperador';

//Admin
import FacturasAdmin from './components/Admin/facturasAdmin';

//Manager
import Manager from './components/Manager/Manager';
import Reporte_consumo from './components/Manager/reporte_consumo';
import Reporte_usuarios from './components/Manager/info_usuarios';

import Signup from './components/Login/Signup';
import RecoveryPassword from './components/Login/RecoveryPass';


import AdminHomeView from './components/Admin/AdminHomeView';
import Geomap from './components/Openstreetmap/Geomap';


//Layout
import HomepageLayout from './hocs/HomepageLayout';
import HomepageLayoutAdmin from './hocs/adminBar';
import HomepageLayoutOperator from './hocs/operatorBar';
import HomepageLayoutManager from './hocs/managerBar';



//<Route element={<HomepageLayout />}>
function App() {
  return (
    <BrowserRouter>

      <Routes>

               
        {/*rutas inicio */}
        <Route path="/" element={<Login />} />
        
        <Route path="/reportes"  element={<HomepageLayout><Geomap lat={3.3718534} lon={-76.5495206}/></HomepageLayout>} />

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
        <Route path="/operator" element={<HomepageLayoutOperator><Operator/></HomepageLayoutOperator>} />
        <Route path="/operator/pagos_bancarios" element={<HomepageLayoutOperator><Pagos_bancarios/></HomepageLayoutOperator>} />
        <Route path="/crearpagos" element={<HomepageLayoutOperator><FormularioRegistroPagosOperador/></HomepageLayoutOperator>} />
        <Route path="/crearfacturas" element={<HomepageLayoutOperator><FormularioCrearFacturaOperador/></HomepageLayoutOperator>} />
        <Route path="/crearcontratos" element={<HomepageLayoutOperator><FormularioCrearContratoOperador/></HomepageLayoutOperator>} />



        {/*rutas administrador */}

         <Route 
          path="admin" 
          element= { <Validator><HomepageLayoutAdmin><AdminHomeView/></HomepageLayoutAdmin></Validator> } /> 
        
         <Route path="/adminref" element={<HomepageLayout><FormularioRegistroAdmin /></HomepageLayout>} />
        <Route path="/admin/facturas" element={<HomepageLayoutAdmin><FacturasAdmin /></HomepageLayoutAdmin>} />
        
            
          
        

        {/*rutas manager */}
        <Route path="/manager" element={<HomepageLayoutManager><Manager/></HomepageLayoutManager>} />
        <Route path="manager/geografia_cliente"  element={<HomepageLayoutManager><Geomap lat={3.3718534} lon={-76.5495206}/></HomepageLayoutManager>} />
        <Route path="/manager/reporte_consumo" element={<HomepageLayoutManager><Reporte_consumo/></HomepageLayoutManager>} />
        <Route path="/manager/reporte_usuarios" element={<HomepageLayoutManager><Reporte_usuarios/></HomepageLayoutManager>} />

        
        
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
