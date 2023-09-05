import "./Footer.css"

import React from 'react'

export const Footer = () => {
  return (
    <div>

    <div className="container-fluid nfotcont">
        <div className="container">
            <div className="row">
				<div className="col-md-3 col-lg-3 col-xs-6">
					<p className="nfothed">Company</p>
					<ul className="list-group">
						<li className="list-group-item"><a href="about-us.php">About</a></li>
						<li className="list-group-item"><a href="facility.php">Facilities</a></li>
						<li className="list-group-item"><a href="career.php">Career</a></li>
						<li className="list-group-item"><a href="contact.php">Contact us</a></li>
						<li className="list-group-item"><a href="term.php">Terms &amp; Conditions</a></li>
						<li className="list-group-item"><a href="refund-policy.php">Refund Policy</a></li>
						<li className="list-group-item"><a href="privacy-policy.php">Privacy Policy</a></li>
					</ul>
				</div>                

				<div className="col-md-3 col-lg-3 col-xs-6 fotcol4">
					<p className="nfothed">Activities</p>
					<ul className="list-group">
						<li className="list-group-item"><a href="students-area.php">Art Gallery</a></li>
						<li className="list-group-item"><a href="activity-page.php?id=8">Workshops</a></li>
						<li className="list-group-item"><a href="activity-page.php?id=2">Outdoor Activities</a></li>
						<li className="list-group-item"><a href="activity-page.php?id=4">Media Coverage</a></li>
						<li className="list-group-item"><a href="activity-page.php?id=9">Art Events</a></li>
						<li className="list-group-item"><a href="activity-page.php?id=5">Exhibition</a></li>
						<li className="list-group-item"><a href="activity-page.php?id=7">Daily Activities</a></li>
					</ul>
				</div>

				<div className="col-md-3 col-lg-3 col-xs-6 fotcol4">
					<p className="nfothed">Popular Course</p>
					<ul className="list-group">
						<li className="list-group-item"><a href="course.php?id=29">Diploma in Fine Arts</a></li>
						<li className="list-group-item"><a href="course.php?id=30">Certificate Hobby Course</a></li>
						<li className="list-group-item"><a href="course.php?id=35">Entrance Preparation</a></li>
						<li className="list-group-item"><a href="course.php?id=38">BFA</a></li>
						<li className="list-group-item"><a href="course.php?id=31">Animation Sketching</a></li>
						<li className="list-group-item"><a href="course.php?id=39">Kids Diploma</a></li>
					</ul>
				</div>
				<div className="col-md-3 col-lg-3 col-xs-6 fotcol4">
					<p className="nfothed">Our Locations</p>
					<ul className="list-group">
						<li className="list-group-item"><a href="contact.php?locatin=gurgaon">Gurgaon (Dlf Phase - 4)</a></li>
						<li className="list-group-item"><a href="contact.php?locatin=mumbai">Mumbai (Andheri West)</a></li>
						<li className="list-group-item"><a href="contact.php?locatin=kailash-colony">South Delhi (Kailash Colony)</a></li>
					<br /><p className="nfothed">International Branches</p>
						<li className="list-group-item"><a href="contact.php?locatin=london">London</a></li>
						<li className="list-group-item"><a href="contact.php?locatin=usa">USA</a></li>
						<li className="list-group-item"><a href="contact.php?locatin=dubai">Dubai, UAE</a></li>
					</ul>
					 
				</div>				                
            </div>   
			<div className="row nfotrow2">
				<div className="col-md-5 col-lg-5 col-xs-12">
				<p className="nfothed mt-4 mt-sm-0">NIFA is a unit of Nifaedutech Pvt Ltd.</p>
					<p className="nfothed mt-4 mt-sm-0">Connect with us</p>
					<p><a href="tel:9555112200" target="_top">9555112200</a>,<a href="tel:9810130552" target="_top">9810130552</a> </p>
					<p><a href="mailto:admission@nifafinearts.com" target="_top">admission@nifafinearts.com</a></p>
					<ul className="list-inline nfot-soclist">
						<li className="list-inline-item"><a href="https://www.facebook.com/nifafinearts" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
						<li className="list-inline-item"><a href="https://twitter.com/artsnifa?lang=en" target="_blank"><i className="fab fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed" target="_blank"><i className="fab fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw" target="_blank"><i className="fab fa-youtube"></i></a></li>
					</ul>
				</div>

				<div className="col-md-7 col-lg-7 col-xs-12">
				<p className="nfothed text-right">Download the app</p>
				<ul className="list-inline nappimg text-right mb-0">
					<li className="list-inline-item"><a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr"><img src="https://i1.wp.com/www.bagel-labs.com/wp-content/uploads/2016/12/Google-Play-Button_resize.png?ssl=1" className="img-fluid" /></a></li>
					<li className="list-inline-item"><a href="https://apps.apple.com/us/app/apple-store/id1472483563"><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png" className="img-fluid" /></a></li>
				</ul>
				<p className="nfotbotline text-right mb-0">© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
				</div>               
			</div>         
        </div>
    </div>

    </div>
  )
}
