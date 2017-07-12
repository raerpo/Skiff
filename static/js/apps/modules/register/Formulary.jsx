import React from 'react';


class Formulary extends React.Component {
  render(){
    return(
      <div id="content-formRegister" className="panel panel-primary">
        <div className="panel-heading">
              <br /><h3 className="panel-title">Formulario de Registro</h3><br />
        </div>
        <div className="panel-body">
            <form id="formRegister" onSubmit={this.props.submit}>
            <div className="col-md-12 col-sm-12">
              <div className="form-group col-md-6 col-sm-6">
                    <label>Nombre*</label>
                      <input ref="inputName" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classNameUser}`} id="name" autoComplete= 'off' placeholder="Nombre"/>
                  </div>

                  <div className="form-group col-md-6 col-sm-6">
                      <label>Apellido*</label>
                      <input ref="inputLastName" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classLastName}`} id="lastName" autoComplete= 'off' placeholder="Apellido"/>
                  </div>

                  <div className="form-group col-md-6 col-sm-6">
                    <label>Contraseña*</label>
                    <input ref="inputPsw1" onKeyUp={this.props.press} type="password" className={`form-control input-sm ${this.props.classPassword} psw-bottstrap`} id="password" placeholder="Contraseña"/>
                  </div>

              <div className="form-group col-md-6 col-sm-6">
                      <label>Confirmar contraseña*</label>
                      <input ref="inputPsw2" onKeyUp={this.props.press} type="password" className={`form-control input-sm ${this.props.classPassword} psw-bottstrap`} id="confirmPassword" placeholder="Confirmar contraseña"/>
                  </div>

              <div className="form-group col-md-6 col-sm-6">
                      <label>Rut*</label>
                      <input ref="inputRut" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classRut}`} id="rut" autoComplete= 'off' placeholder="Ej: 16356467-3"/>
                  </div>

              <div className="form-group col-md-6 col-sm-6">
                      <label>Correo*</label>
                      <input ref="inputEmail" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classEmail}`}  id="email" autoComplete= 'off' placeholder="example@correo.com"/>
                  </div>

              <div className="contentBtnRgister" onFocus={this.props.press} >
                <input className="btn btn-primary btn-register" type="button" value="Registrarse" onClick={this.props.send}/>
              </div>

            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Formulary;
