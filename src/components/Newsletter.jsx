import React from 'react';
import styles from './styles/Newsletter.module.css';

const Newsletter = () => (
	<section className={`${styles.newsletter} section`} id="contact">
		<div className={`${styles['newsletter-container']} bd-grid`}>
			<div className="newsletter-content">
				<h3 className={styles['newsletter-title']}>Stay Updated with AutoRent</h3>
				<p className={styles['newsletter-description']}>Get exclusive offers, updates on new arrivals, special promotions, and insider access to our premium fleet</p>
			</div>
			<form action="" className="newsletter-subscribe">
				<div className={styles['newsletter-form']}>
					<input type="email" className={styles['newsletter-input']} placeholder="Your email address" required />
					<button type="submit" className="button">Subscribe</button>
				</div>
			</form>
		</div>
	</section>
);

export default Newsletter;