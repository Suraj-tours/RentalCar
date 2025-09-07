import React from 'react';
import styles from './styles/Offer.module.css';

const Offer = () => (
	<section className={`${styles.offer} section`}>
		<div className={`${styles['offer-container']} bd-grid`}>
			<div className={styles['offer-data']}>
				<span className={styles['offer-subtitle']}>Limited Time Special</span>
				<h3 className={styles['offer-title']}>20% OFF</h3>
				<p className={styles['offer-description']}>Weekly rentals - Save big on extended stays. Minimum 7 day rental required.</p>
				<a href="#" className="button">Book Now</a>
			</div>
			<div className={styles['offer-image']}>
				<img src="https://pngimg.com/d/mercedes_PNG80135.png" alt="Special Offer" className={styles['offer-img']} />
			</div>
		</div>
	</section>
);

export default Offer;