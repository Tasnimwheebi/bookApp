import React from 'react';
// import {FacebookIcon,GitHubIcon ,TwitterIcon,InstagramIcon  } from '@mui/icons-material';
import './footer.css'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer () {
    return (
        <body>
  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Book App</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">About Us</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><a href="#">Order Now</a></li>
  	 				<li><a href="#">Ask Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#">
                       Amman – Jordan<br/>
Telephone: +962-6-0000000<br/>
email: bookApp@jo.org<br/>
Mailing address: P.O. Box 17101 Amman 11195 Jordan<br/>
</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><GitHubIcon/></a>
  	 				<a href="#"><TwitterIcon/></a>
  	 				<a href="#"><FacebookIcon /></a>
  	 				<a href="#"><InstagramIcon /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

</body>
    )
}

export default Footer ;