import React from 'react';

class FormularyMarket extends React.Component {
    render(){
        return(
   <div id="content-formRegister-market" className="panel panel-primary">
    <div className="panel-heading">
           <br /><h3 className="panel-title">Formulario Supermercado</h3><br />
    </div>
    <div className="panel-body">
        <form id="formRegister" onSubmit={this.props.submit}>
      <div className="col-md-12 col-sm-12">

       <div className="form-group col-md-6 col-sm-6">
                 <label>Ciudad*</label>
                 <input ref="inputCity" type="text" onKeyUp={this.props.press} className={`form-control input-sm ${this.props.classCity}`} placeholder="Ciudad"/>
             </div>

       <div className="form-group col-md-6 col-sm-6">
                 <label>Direccion*</label>
                 <input ref="inputAddress" type="text" onKeyUp={this.props.press} className={`form-control input-sm ${this.props.classAddress}`} autoComplete= 'off' placeholder="Ej: pasaje ejemplo #444"/>
             </div>

             <div className="form-group col-md-6 col-sm-6">
                 <label>Numero de cajas*</label>
                 <input ref="inputBox" type="text" onKeyUp={this.props.press} className={`form-control input-sm ${this.props.classBox}`} autoComplete= 'off' placeholder="Ej: 5"/>
             </div>

       <div className="form-group col-md-6 col-sm-6">
           <label>Supermercado*</label>
           <select ref="selectType" onClick={this.props.press} className={`form-control input-sm ${this.props.classType}`} >
         <option value="">Tipo de Supermercado</option>
         <option value="Lider"> Lider </option>
         <option value="Jumbo"> Jumbo </option>
         <option value="Tottus"> Tottus </option>
         <option value="Unimarc"> Unimarc </option>
         <option value="Santa Isabel"> Santa Isabel </option>
           </select>
       </div>

       <div className="contentBtnRgister">
        <input className="btn btn-primary" type="button" value="Registrar Supermercado" onClick={this.props.send}/>
       </div>
      </div>
     </form>
    </div>
   </div>
  )
    }
}

export default FormularyMarket;
