import React from 'react';

const Footer = ({ typeFooter }) => (
	<footer className={ `footer_type_${typeFooter}` }>
		<div className="footer-social">
			<div className="social-img-footer"><a href="https://www.facebook.com/"><img src="/static/images/facebook.png" /></a></div>         
			<div className="social-img-footer"><a href="https://twitter.com/?lang=es"><img src="/static/images/twitter.png" /></a></div>
			<div className="social-img-footer"><a href="https://www.instagram.com/"><img src="/static/images/instagram.png" /></a></div>     
			<div className="textFooter">MarketPlace todos los derechos reservados &copy;</div>   
		</div>
	</footer>
);

export default Footer;

//footerLoginUser