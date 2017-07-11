  import React from 'react';

class NavBar extends React.Component {
    render(){
      return (
        <nav className='navbar navbar-inverse navbar-static-top'>
          <div className='container'>
              <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
                <a className='navbar-brand' href='/home'>MarketPlace</a>
              </div>
              <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                  <li><a href='/admin/home'><span className='glyphicon glyphicon-home'></span> Inicio </a></li>
                  <li className='dropdown'>
                    <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'><span className='glyphicon glyphicon-briefcase'></span> Trabajadores <span className='caret'></span></a>
                    <ul className='dropdown-menu'>
                      <li><a href='/admin/worker/approve'><span className='glyphicon glyphicon-triangle-right '></span> Aprobar trabajador </a></li>
                      <li><a href='/admin/worker/view'><span className='glyphicon glyphicon-triangle-right '></span> Ver trabajadores </a></li>
                      <li><a href='/admin/worker/viewAllTurns'><span className='glyphicon glyphicon-triangle-right '></span> Ver turnos trabajadores </a></li>
                      {/*<li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Actualizar trabajador </a></li>
                      <li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Eliminar trabajador </a></li>*/}
                    </ul>
                  </li>
                   <li className='dropdown'>
                    <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'><span className='glyphicon glyphicon-check'></span> Administrar <span className='caret'></span></a>
                    <ul className='dropdown-menu'>
                      <li><a href='/admin/view/supermarket'><span className='glyphicon glyphicon-triangle-right '></span> Trabajo </a></li>
                      {/*<li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Informe semanal PDF </a></li>*/}
                      {/*<li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Ver planes </a></li>
                      <li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Pagar </a></li>*/}
                    </ul>
                  </li>
                  {/*<li className='dropdown'>
                    <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'><span className='glyphicon glyphicon-cog'></span> Configuraciones <span className='caret'></span></a>
                    <ul className='dropdown-menu'>
                      <li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Cambiar Contraseña </a></li>
                      <li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Actualizar datos </a></li>
                    <li><a href='#'><span className='glyphicon glyphicon-triangle-right '></span> Eliminar cuenta </a></li>
                    </ul>
                  </li>*/}
                  <li className='index-navbar-hiddenAdm'><a href='/exit'><span className='glyphicon glyphicon-log-out'></span> Cerrar sesión </a></li>
                </ul>
                <ul className='nav navbar-nav nav2 navAdm'>
                  <li className='index-navbar'><a href='/exit'><span className='glyphicon glyphicon-log-in'></span> Cerrar sesión </a></li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default NavBar;
