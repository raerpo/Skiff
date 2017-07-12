import React from 'react';

class Login extends React.Component {
    render(){
        return (
        <div>
            <div className="modal fade" id="login-modal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className="img-circle" id="img_logo" src="./static/images/icono_ct_white.png" />
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </button>
                        </div>

                        <div id="div-forms">

                            <form id="login-form" action="session" method="post">
                                <div className="modal-body">
                                    <div id="div-login-msg">
                                        <div id="icon-login-msg" className="glyphicon glyphicon-chevron-right"></div>
                                        <span id="text-login-msg"> Acceso de usuario a Skiff </span>
                                    </div>
                                    <input id="login_username" name="username" className="form-control" type="text" placeholder="usuario" required />
                                    <input id="login_password" name="password" className="form-control" type="password" placeholder="contraseña" required />
                                </div>
                                <div className="modal-footer">
                                    <div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Entrar</button>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-link">¿Olvidaste la contraseña?</button>
                                        <button type="button" className="btn btn-link"><a href="/register">Registrarse</a></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="login-modal-admin"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content mod-cont-admin">
                        <div className="modal-header">
                            <img className="img-circle" id="img_logo" src="./static/images/icono_ct_white.png" />
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </button>
                        </div>

                        <div id="div-forms">

                            <form id="login-form" action="/admin/session" method="post">
                                <div className="modal-body">
                                    <div id="div-login-msg">
                                        <div id="icon-login-msg" className="glyphicon glyphicon-chevron-right"></div>
                                        <span id="text-login-msg"> Acceso de Administrador </span>
                                    </div>
                                    <input id="login_username" name="admin" className="form-control" type="text" placeholder="administrador" required />
                                    <input id="login_password" name="password" className="form-control" type="password" placeholder="contraseña" required />
                                </div>
                                <div className="modal-footer">
                                    <div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Entrar</button>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-link">¿Olvidaste la contraseña?</button>
                                        <button type="button" className="btn btn-link"><a href="/register">Registrarse</a></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;


<div className="container">
    <div className="row">
        <h1 className="text-center">Modal Login with jQuery Effects</h1>
        <p className="text-center"><a href="#" className="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#login-modal">Open Login Modal</a></p>
    </div>
</div>
