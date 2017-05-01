import React from 'react';
import FormularyMarket from './FormularyMarket';

class CreateMarket extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			city : {newClass : "none"},
			address: {newClass : "none"},
			numberBox: {newClass : "none"},
			type : {newClass : "none"}
		}


		this.validation = this.validation.bind(this);
		this.send = this.send.bind(this);
	}

	send(){
		const city = this.refs.FormularyMarket.refs.inputCity.value;
		const address = this.refs.FormularyMarket.refs.inputAddress.value;
		const numberBox = this.refs.FormularyMarket.refs.inputBox.value;
		const type = this.refs.FormularyMarket.refs.selectType.value;

		if(	this.state.city.newClass === "dataCorrect" &&
			this.state.address.newClass === "dataCorrect" &&
			this.state.numberBox.newClass === "dataCorrect" &&
			this.state.type.newClass === "dataCorrect" ){
			$.post('/admin/market/create/validate', {
				city, address, numberBox, type
			});
		}else{
			alert("Corrige los campos incorrectos");
		}
	}

	validation(){
		const city = this.refs.FormularyMarket.refs.inputCity.value;
		const address = this.refs.FormularyMarket.refs.inputAddress.value;
		const numberBox = this.refs.FormularyMarket.refs.inputBox.value;
		const type = this.refs.FormularyMarket.refs.selectType.value;

		const validateNumber = /^\d{1,2}$/;
		const validateCity = /^[a-zA-Z]{2,15}$/;

		if(city != ""){
			if(validateCity.test(city)){
				this.setState({ city : {newClass : "dataCorrect"} });
			}else{
				this.setState({ city : {newClass : "dataIncorrect"} });
			}
		}else{
			this.setState({ city : {newClass : "none"} });
		}

		if(address != ""){
			this.setState({ address : {newClass : "dataCorrect"} });
		}else{
			this.setState({ address : {newClass : "none"} });
		}

		if(numberBox != ""){
			if(validateNumber.test(numberBox)){
				this.setState({ numberBox : {newClass : "dataCorrect"} });
			}else{
				this.setState({ numberBox : {newClass : "dataIncorrect"} });
			}
		}else{
			this.setState({ numberBox : {newClass : "none"} });
		}

		if(type != ""){
			this.setState({ type : {newClass : "dataCorrect"} });
		}else{
			this.setState({ type : {newClass : "none"} });
		}

	}

	render(){
		return (
			<div>
				<FormularyMarket ref="FormularyMarket" press={this.validation} send={this.send}
					classCity={this.state.city.newClass}
					classAddress={this.state.address.newClass}
					classBox={this.state.numberBox.newClass}
					classType={this.state.type.newClass}
				/>
			</div>
		)
	}
}

export default CreateMarket;