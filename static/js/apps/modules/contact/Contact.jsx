import React from 'react';
import Footer from '../Footer';
import NoAvailable from '../NoAvailable';

class Contact extends React.Component {
 render(){
  return (
   <div>
    <h1 className="test">Contáctenos</h1>
    <p className="paragraphContact">Sus solicitudes y opiniones son importantes para nosotros</p>

    <form className="form-horizontal" role="form">
     <div className="form-group">
         <label for="ejemplo_email_3" className="col-lg-2 control-label">Nombre:</label>
         <div className="col-lg-10">
            <input type="email" className="form-control" id="ejemplo_email_3"/>
         </div>
       </div>
       <div className="form-group">
         <label for="ejemplo_email_3" className="col-lg-2 control-label">E-Mail</label>
         <div className="col-lg-10">
            <input type="email" className="form-control" id="ejemplo_email_3" />
         </div>
       </div>
      <div className="form-group">
         <div className="col-lg-offset-2 col-lg-10">
          <button type="submit" className="btn btn-default">Enviar</button>
         </div>
       </div>
    </form>



    <Footer
    typeFooter={'1'} />
   </div>
  )
 }
}

export default Contact;
