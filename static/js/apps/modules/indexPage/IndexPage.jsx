import React from 'react';
import Footer from '../Footer';

class IndexPage extends React.Component {
	render(){

		setTimeout(function(){
			var date = new Date();
		}, 1000);
		
		return (
		<div>
			<div className="content">
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
			      <ol className="carousel-indicators">
			        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			        <li data-target="#myCarousel" data-slide-to="1"></li>
			        <li data-target="#myCarousel" data-slide-to="2"></li>
			      </ol>
			      <div className="carousel-inner" role="listbox">
			        <div className="item active">
			          <img className="first-slide" src="./static/images/carousel_index/image_1.jpg" alt="First slide" />
			          <div className="container">
			            <div className="carousel-caption">
			             	<div className="titleFloat"><h1>MarketPlace</h1></div>
			              	<p className="minText">Es la aplicación web que optimizará y mejorará la toma de turnos ofreciendo comodidad, estabilidad y calidad.</p>
			            </div>
			          </div>
			        </div>
			        <div className="item">
			          <img className="second-slide" src="./static/images/carousel_index/image_2.jpg" alt="Second slide" />
			          <div className="container">
			            <div className="carousel-caption">
			              <div className="titleFloat"><h1>Expansión</h1></div>
			              <p className="minText">Siempre hay que apuntar hacia el futuro, por ello MarketPlace se mantiene en constante crecimiento día a día.</p>
			            </div>
			          </div>
			        </div>
			         <div className="item">
			          <img className="third-slide" src="./static/images/carousel_index/image_3.jpg" alt="third slide" />
			          <div className="container">
			            <div className="carousel-caption">
			              <div className="titleFloat"><h1>Comodidad</h1></div>
			              <p className="minText">Gracias al enfoque de MarketPlace podrás tomar turnos con tus compañeros de trabajo desde la comodidad de tu hogar.</p>
			            </div>
			          </div>
			        </div>
			        
			        
			      </div>
			      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			        <span className="sr-only">Previous</span>
			      </a>
			      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			        <span className="sr-only">Next</span>
			      </a>
			    </div><hr className="separator"/>

			    <div className="row">
			        <div className="col-lg-4">
			          <img className="img-circle" src="static/images/registro.png" alt="Generic placeholder image" width="140" height="140" />
			          <h2>Registrate</h2>
			          <p>Solo debes dirigirte a nuestro boton "registrarse" para que puedas formar parte de MarketPlace.</p>
			          
					</div>
			        <div className="col-lg-4">
			          <img className="img-circle" src="static/images/12379140591570510706dholler_ok.svg.hi.png" alt="Generic placeholder image" width="140" height="140" />
			          <h2>Activa tu cuenta</h2>
			          <p>Una vez registrado, deberás esperar a que tu cuenta sea activada ya sea por tu empleador o por el administrador.</p>
			 
					</div>
			        <div className="col-lg-4">
			          <img className="img-circle" src="static/images/f939ac_6ec238b523784dfe81f895ee2657d8ab.png" alt="Generic placeholder image" width="140" height="140" />
			          <h2>Toma turnos!</h2>
			          <p>Tomar turnos es muy sencillo en MarketPlace, solo un par de pasos y ya podrás seleccionar tus horarios.</p>
			        </div>
		      	</div>
			</div>
			<Footer 
			classNames={'footer_type_2'}
			/>
		</div>
		)
	}
}

export default IndexPage;