import React from 'react';
import Login from './login/Login';

class NavBarIndex extends React.Component {
  render(){
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/index">MarketPlace</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="/about"><span className="glyphicon glyphicon-info-sign"></span> Sobre Nosotros</a></li>
              <li><a href="/contact"><span className="glyphicon glyphicon-earphone"></span> Contactanos </a></li>
              <li className="index-navbar-hidden"><a href="/register"><span className="glyphicon glyphicon-check"></span> Registrarse </a></li>
              <li className="dropdown index-navbar-hidden">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user"></span> Iniciar Sesión <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#" role="button" data-toggle="modal" data-target="#login-modal"><span className="glyphicon glyphicon-triangle-right "></span> Empaque </a></li>
                  <li><a href="#" role="button" data-toggle="modal" data-target="#login-modal-admin"><span className="glyphicon glyphicon-triangle-right "></span> Administrador </a></li>
                </ul>
              </li>
              
            </ul>
            <ul className="nav navbar-nav nav2">
              <li className="index-navbar"><a href="/register"><span className="glyphicon glyphicon-check"></span> Registrarse </a></li>
              <li className="dropdown index-navbar">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user"></span> Iniciar Sesión <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#" role="button" data-toggle="modal" data-target="#login-modal"><span className="glyphicon glyphicon-triangle-right "></span> Empaque </a></li>
                  <li><a href="#" role="button" data-toggle="modal" data-target="#login-modal-admin"><span className="glyphicon glyphicon-triangle-right "></span> Administrador </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Login />
      </div>
    )
  }
}

export default NavBarIndex;