import React from 'react';
import Formulary from './Formulary';
import Footer from '../Footer';

function getKeys(){
 return $.getJSON('/data/k/ffgh4dwwwwq24rrgtyuwe');
}

class Register extends React.Component {
 constructor(props){
  super(props);

  this.state = {
   rut : {newClass : "none"},
   name: {newClass : "none"},
   lastName : {newClass : "none"},
   pasword: {newClass : "none"},
   email: {newClass : "none"}
  }

  this.send = this.send.bind(this);
  this.validation = this.validation.bind(this);
 }

 submit(){
  alert("buen intento campeón :v");
 }

 send(){
  const rut = this.refs.Formulary.refs.inputRut.value;
  const name = this.refs.Formulary.refs.inputName.value;
  const lastName = this.refs.Formulary.refs.inputLastName.value;
  const psw1 = this.refs.Formulary.refs.inputPsw2.value;
  const psw2 = this.refs.Formulary.refs.inputPsw1.value;
  const email = this.refs.Formulary.refs.inputEmail.value;

  if (this.state.rut.newClass === "dataCorrect" &&
   this.state.name.newClass === "dataCorrect" &&
   this.state.lastName.newClass === "dataCorrect" &&
   this.state.pasword.newClass === "dataCorrect" &&
   this.state.email.newClass === "dataCorrect"){
   $.post('/register/createAccount', {
    data : {
     rut,
     password : psw1,
     name,
     lastName,
     birth : '10',
     phone: '97775554',
     email,
      comune : 'valparaiso',
     country: 'Chile',
     availableDays : null,
     work_id : null,
     type : 1,
     statusAccount: 2
    }
   }).then((result) => {
        alert('usuario creado exitosamente, ahora tu administrador tiene que aprobar tu cuenta.');
        window.location.href = result.url;
      });
  }else{
   alert('Datos incorrectos');
  }

 }

 validation(){
  const rut = this.refs.Formulary.refs.inputRut.value;
  const name = this.refs.Formulary.refs.inputName.value;
  const lastName = this.refs.Formulary.refs.inputLastName.value;
  const psw1 = this.refs.Formulary.refs.inputPsw2.value;
  const psw2 = this.refs.Formulary.refs.inputPsw1.value;
  const email = this.refs.Formulary.refs.inputEmail.value;

  const validateRut = /^(\d{1,2}(\.?\d{3}){2})\-([\dkK])$/;
  const validateEmail = /(^[0-9a-zA-Z]+(?:[._][0-9a-zA-Z]+)*)@([0-9a-zA-Z]+(?:[._-][0-9a-zA-Z]+)*\.[0-9a-zA-Z]{2,3})$/;
  const validateName = /^[a-zA-Z\-]{2,10}$/;

  if(rut != ""){
   if(validateRut.test(rut)){
    var newRut = rut.split('.').join("");
    this.setState({ rut : {newClass : "dataCorrect"} });
   }else{
    this.setState({ rut : {newClass : "dataIncorrect"} });
   }
  }else{
   this.setState({ rut : {newClass : "none"} });
  }

  if(name != ""){
   if(validateName.test(name)){
    this.setState({ name : {newClass : "dataCorrect"} });
   }else{
    this.setState({ name : {newClass : "dataIncorrect"} });
   }
  }else{
   this.setState({ name : {newClass : "none"} });
  }

  if(lastName != ""){
   if(validateName.test(lastName)){
    this.setState({ lastName : {newClass : "dataCorrect"} });
   }else{
    this.setState({ lastName : {newClass : "dataIncorrect"} });
   }
  }else{
   this.setState({ lastName : {newClass : "none"} });
  }

  if(psw1 != "" && psw2 != ""){
   if(psw1 === psw2){
    this.setState({ pasword : {newClass : "dataCorrect"} });
   }else{
    this.setState({ pasword : {newClass : "dataIncorrect"} });
   }
  }else{
   this.setState({ pasword : {newClass : "none"} });
  }

  if(email != ""){
   if(validateEmail.test(email)){
    this.setState({ email : {newClass : "dataCorrect"} });
   }else{
    this.setState({ email : {newClass : "dataIncorrect"} });
   }
  }else{
   this.setState({ email : {newClass : "none"} });
  }
 }

 render(){
  return (
  <div>
   <div className="content content-register">
    <Formulary ref="Formulary" submit={this.submit} send={this.send} press={this.validation}
     classRut={this.state.rut.newClass}
     classNameUser = {this.state.name.newClass}
     classLastName= {this.state.lastName.newClass}
     classPassword = {this.state.pasword.newClass}
     classEmail={this.state.email.newClass}
    />
   </div>
   <Footer
   typeFooter={'2'}
   />
  </div>
  )
 }
}

export default Register;
