import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';import FacebookIcon from '@mui/icons-material/Facebook';
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
  	 			<Link style={{"textDecoration":"none"}} to="/home"><li ><a href="#">Home</a></li></Link>
  	 			<Link style={{"textDecoration":"none"}} to="/">	<li><a href="#">About Us</a></li> </Link>
  	 			<Link style={{"textDecoration":"none"}} to="/aboutus">	<li><a href="#">Contact Us</a></li> </Link>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><a href="#">send an email to </a></li>
  	 				<li><a href="#">the email adress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#" style={{"textTransform":"lowercase"}}>
                       Amman – Jordan<br/>

email: tasnimwheebi@gmail.com<br/>
<br/>
</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://github.com/Tasnimwheebi"><GitHubIcon/></a>
  	 				<a href="https://www.linkedin.com/in/tasnim-wheebi/"><LinkedInIcon/></a>
  	 				<a href="https://www.facebook.com/gloria.k.1690"><FacebookIcon /></a>
  	 				<a href="https://www.instagram.com/tasnimwheebi/"><InstagramIcon /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

</body>
    )
}

export default Footer ;