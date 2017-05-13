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
					            <label>Rut*</label>
					            <input ref="inputRut" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classRut}`} id="rut" autoComplete= 'off' placeholder="Ej: 16356467-3"/>
					        </div>

					        <div className="form-group col-md-6 col-sm-6">
					            <label>Celular</label>
					            <input ref="inputPhone" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classPhone}`} id="phone" autoComplete= 'off' placeholder="Ej: 955554444"/>
				        	</div>

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
					            <input ref="inputPsw1" onKeyUp={this.props.press} type="password" className={`form-control input-sm ${this.props.classPassword}`} id="password" placeholder="Contraseña"/>
					        </div>

							<div className="form-group col-md-6 col-sm-6">
					            <label>Contraseña*</label>
					            <input ref="inputPsw2" onKeyUp={this.props.press} type="password" className={`form-control input-sm ${this.props.classPassword}`} id="confirmPassword" placeholder="Confirmar contraseña"/>
					        </div>

							<div className="form-group col-md-6 col-sm-6">
					            <label>Correo*</label>
					            <input ref="inputEmail" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classEmail}`}  id="email" autoComplete= 'off' placeholder="example@correo.com"/>
					        </div>

					        <div className="form-group col-md-6 col-sm-6">
					            <label>Key*</label>
					            <input ref="inputKey" onKeyUp={this.props.press} type="text" className={`form-control input-sm ${this.props.classKey}`} id="key" autoComplete= 'off' placeholder="key asociada"/>
					        </div>

							<div className="form-group col-md-6 col-sm-6">
							      <label>País*</label>	 
							      <select ref="selectCountry" onClick={this.props.press} className={`form-control input-sm ${this.props.classCountry}`} id="Country">
									<option value="">Selecciona tu país</option>
									<option value="Chile"> Chile </option>
									<option value="Argentina"> Argentina </option>
									<option value="Perú"> Perú </option>
									<option value="Bolivia"> Bolivia </option>
									<option value="Uruguay"> Uruguay </option>
									<option value="Paraguay"> Paraguay </option>
									<option value="Venezuela"> Venezuela </option>
									<option value="Colombia"> Colombia </option>
									<option value="Ecuador"> Ecuador </option>
									<option value="Mexico"> Mexico </option>
							      </select>
							</div>
							<div className="form-group col-md-6 col-sm-6">
								<label className="specialLabel">Fecha de nacimiento*</label>	 
						      	<input ref="inputDate" onClick={this.props.press} type='text' className={`form-control ${this.props.classDate}`} autoComplete= 'off' id='datetimepicker4' />
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