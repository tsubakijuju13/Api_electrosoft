import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidenav" id="sidebar-wrapper">
            <div>
                <Link to="/">
                    <div className="sidebar-header">
                        <span className="sidebar-header-title">ELECTRO</span>
                        <br></br><br></br>
                        <span className="text-right">SOFT</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-3">
                        <Link tag="a" className="" to="/">
                            <i className="fa fa-dashboard"></i> Resumen
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link tag="a" className="" to="/blank-page">
                            <i className="fa fa-file-o"></i> Consulta tu factura
                        </Link>
                    </li>

                    <li className="mb-3">
                        <Link tag="a" className="" to="/blank-page">
                            <i className="fa fa-file-o"></i> Paga tu factura
                        </Link>
                    </li>

                    <li className="mb-3">
                        <Link tag="a" className="" to="/typography">
                            <i className="fa fa-text-width" aria-hidden="true"></i> Historial de pagos
                        </Link>
                    </li>



                    {/* collapsable list item example */}
                    {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Opportunity
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Overview</a></li>
                            <li><a href="#" className="rounded">Weekly</a></li>
                            <li><a href="#" className="rounded">Monthly</a></li>
                            <li><a href="#" className="rounded">Annually</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li> */}

                </ul>
            </div>

            <div className="dropdown fixed-bottom-dropdown">
            <ul className="list-unstyled ps-0">
                <li className="mb-3">
                    <Link tag="a" className="" to="/typography">
                        <i className="fa fa-text-width" aria-hidden="true"></i> Ayuda
                    </Link>
                </li>
                <li className="mb-3">
                    <Link tag="a" className="" to="/typography">
                        <i className="fa fa-text-width" aria-hidden="true"></i> Contactanos
                    </Link>
                </li>
                </ul>
            </div>
        </div>


    )

};

export default Sidebar;