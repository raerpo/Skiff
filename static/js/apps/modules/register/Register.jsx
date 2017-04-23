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
			phone: {newClass : "none"},
			name: {newClass : "none"},
			lastName : {newClass : "none"},
			pasword: {newClass : "none"},
			email: {newClass : "none"},
			date : {newClass: "none"},
			country : {newClass : "none"},
			key: {newClass: "none"},
			keys : []
		}

		this.send = this.send.bind(this);
		this.validation = this.validation.bind(this);
	}

	submit(){
		alert("buen intento campeón :v");
	}

	send(){
		const evaluate = this.state.keys.filter(data => data.keygen == key);
		const rut = this.refs.Formulary.refs.inputRut.value;
		const phone = this.refs.Formulary.refs.inputPhone.value;
		const name = this.refs.Formulary.refs.inputName.value;
		const lastName = this.refs.Formulary.refs.inputLastName.value;
		const psw1 = this.refs.Formulary.refs.inputPsw2.value;
		const psw2 = this.refs.Formulary.refs.inputPsw1.value;
		const email = this.refs.Formulary.refs.inputEmail.value;
		const date = this.refs.Formulary.refs.inputDate.value;	
		const country = this.refs.Formulary.refs.selectCountry.value;

		if(this.state.keys.length > 0){
			if (this.state.rut.newClass === "dataCorrect" &&
				this.state.phone.newClass === "dataCorrect" &&
				this.state.name.newClass === "dataCorrect" &&
				this.state.lastName.newClass === "dataCorrect" &&
				this.state.pasword.newClass === "dataCorrect" &&
				this.state.email.newClass === "dataCorrect" &&
				this.state.date.newClass === "dataCorrect" &&
				this.state.country.newClass === "dataCorrect"){
				alert("usuario creado exitosamente");
				$.post('/register/createAccount', {
					data : {
						rut,
						password : psw1,
						name,
						lastName,
						birth : date,					
						phone,
						email,
						comune : "none",
						country,
						avaibleDays : null,
						id_market : null,
						type : 1,
						statusAccount: 2,				
					},
					key : this.state.keys[0].keygen		
				});
			}
		}else{
			this.setState({ key : {newClass : "dataIncorrect"} });
			alert('Key inválida');
		}

	}


	validation(){
		const key = this.refs.Formulary.refs.inputKey.value;
		getKeys().then(data => this.setState({ keys : data.filter(info => info.keygen == key) }))
		const rut = this.refs.Formulary.refs.inputRut.value;
		const phone = this.refs.Formulary.refs.inputPhone.value;
		const name = this.refs.Formulary.refs.inputName.value;
		const lastName = this.refs.Formulary.refs.inputLastName.value;
		const psw1 = this.refs.Formulary.refs.inputPsw2.value;
		const psw2 = this.refs.Formulary.refs.inputPsw1.value;
		const email = this.refs.Formulary.refs.inputEmail.value;
		const date = this.refs.Formulary.refs.inputDate.value;	
		const country = this.refs.Formulary.refs.selectCountry.value;

		const validateRut = /^(\d{1,2}(\.?\d{3}){2})\-([\dkK])$/;
		const validateEmail = /(^[0-9a-zA-Z]+(?:[._][0-9a-zA-Z]+)*)@([0-9a-zA-Z]+(?:[._-][0-9a-zA-Z]+)*\.[0-9a-zA-Z]{2,3})$/;
		const validateName = /^[a-zA-Z\-]{2,10}$/;
		const validatePhone = /^[9|6|7][0-9]{8}$/;
		const validateDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

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

		if(phone != ""){
			if(validatePhone.test(phone)){
				this.setState({ phone : {newClass : "dataCorrect"} });
			}else{
				this.setState({ phone : {newClass : "dataIncorrect"} });
			}
		}else{
			this.setState({ phone : {newClass : "none"} });
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

		if(country != ""){
			if(country.length > 2){
				this.setState({ country : {newClass : "dataCorrect"} });
			}else{
				this.setState({ country : {newClass : "dataIncorrect"} });
			}
		}else{
			this.setState({ country : {newClass : "none"} });
		}


		if(date.length > 2){
			if(validateDate.test(date)){
				this.setState({ date : {newClass : "dataCorrect"} });
			}else{
				this.setState({ date : {newClass : "dataIncorrect"} });
			}
		}else{
			this.setState({ date : {newClass : "none"} });
		}

	}

	render(){
		return (
		<div>
			<div className="content content-register">
				<Formulary ref="Formulary" submit={this.submit} send={this.send} press={this.validation}
					classRut={this.state.rut.newClass}
					classPhone={this.state.phone.newClass}
					classNameUser = {this.state.name.newClass}
					classLastName= {this.state.lastName.newClass}
					classPassword = {this.state.pasword.newClass}
					classEmail={this.state.email.newClass}
					classCountry={this.state.country.newClass}
					classDate={this.state.date.newClass}
					classKey={this.state.key.newClass}
				/>	
			</div>
			<Footer 
			classNames={'footer_type_2'}
			/>
		</div>
		)
	}
}

export default Register;