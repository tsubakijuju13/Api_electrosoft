import {Navigate, Outlet } from "react-router-dom";
import login from "./Login";
import { useLocation } from 'react-router-dom';


export const Validator = ({ isAllowed, children, redirecTo= "/" }) => {

    const {state} = useLocation();
    if (!state ){
        console.log("validación invalida");
        return redirecTo ? <Navigate to={redirecTo} /> : null;
    }
    else
    
    {
    const { acc_token, decodedToken} = state; // Read values passed on state
    return children? children : <Outlet />;
 
    }

};

export default Validator;