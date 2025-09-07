import React from 'react';
import styles from './styles/Footer.module.css';

const Footer = () => (
	<footer className={`${styles.footer} section`}>
		<div className={`${styles['footer-container']} bd-grid`}>
			<div className={`${styles['footer-box']} footer-about`}>
				<a href="#" className={styles['footer-logo']}>Auto<span>Rent</span></a>
				<p className={styles['footer-description']}>Premium car rental services with a focus on luxury, comfort, and exceptional customer experiences.</p>
				<div className={styles['footer-social']}>
					<a href="#" className={styles['footer-social-link']}><i className="bx bxl-facebook"></i></a>
					<a href="#" className={styles['footer-social-link']}><i className="bx bxl-instagram"></i></a>
					<a href="#" className={styles['footer-social-link']}><i className="bx bxl-twitter"></i></a>
					<a href="#" className={styles['footer-social-link']}><i className="bx bxl-linkedin"></i></a>
				</div>
			</div>
			<div className={styles['footer-box']}>
				<h3 className={styles['footer-title']}>Navigation</h3>
				<ul>
					<li><a href="#home" className={styles['footer-link']}>Home</a></li>
					<li><a href="#featured" className={styles['footer-link']}>Featured Vehicles</a></li>
					<li><a href="#luxury" className={styles['footer-link']}>Luxury Fleet</a></li>
					<li><a href="#fleet" className={styles['footer-link']}>Our Fleet</a></li>
					<li><a href="#contact" className={styles['footer-link']}>Contact Us</a></li>
				</ul>
			</div>
			<div className={styles['footer-box']}>
				<h3 className={styles['footer-title']}>Customer Support</h3>
				<ul>
					<li><a href="#" className={styles['footer-link']}>FAQs</a></li>
					<li><a href="#" className={styles['footer-link']}>Privacy Policy</a></li>
					<li><a href="#" className={styles['footer-link']}>Terms of Service</a></li>
					<li><a href="#" className={styles['footer-link']}>Rental Agreement</a></li>
					<li><a href="#" className={styles['footer-link']}>Roadside Assistance</a></li>
				</ul>
			</div>
			<div className={`${styles['footer-box']} footer-contact`}>
				<h3 className={styles['footer-title']}>Get In Touch</h3>
				<ul>
					<li><i className="bx bx-map"></i> 123 Premium Drive, Luxury District</li>
					<li><i className="bx bx-phone"></i> +1 (555) 123-4567</li>
					<li><i className="bx bx-envelope"></i> info@autorent.com</li>
					<li><i className="bx bx-time"></i> Mon-Sun: 8:00 AM - 8:00 PM</li>
				</ul>
			</div>
		</div>
		<div className={styles['footer-bottom']}>
			<p className={styles['footer-copy']}>&#169; 2023 <a href="#" className={styles['footer-copy-link']}>AutoRent</a>. All rights reserved</p>
			<div className={styles['footer-payments']}>
				<i className="bx bxl-visa"></i>
				<i className="bx bxl-mastercard"></i>
				<i className="bx bxl-paypal"></i>
				<i className="bx bxl-amex"></i>
			</div>
		</div>
	</footer>
);

export default Footer;