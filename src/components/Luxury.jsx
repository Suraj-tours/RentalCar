import React from 'react';
import styles from './styles/Luxury.module.css';

const Luxury = () => (
	<section className={`${styles.luxury} section`} id="luxury">
		<div className="section-header">
			<span className="section-subtitle">Ultimate Luxury</span>
			<h2 className="section-title">PREMIUM LUXURY FLEET</h2>
		</div>
		<div className={`${styles['luxury-container']} bd-grid`}>
			<article className={`${styles['vehicle-luxury']} vehicle`}>
				<img src="https://pngimg.com/d/mercedes_PNG1903.png" alt="Mercedes S-Class" className="vehicle-img" />
				<div className="vehicle-info">
					<div className="vehicle-meta">
						<span className="vehicle-name">Mercedes S-Class</span>
						<span className="vehicle-price">$199<span>/day</span></span>
					</div>
					<div className="vehicle-features">
						<span><i className="bx bx-user"></i> 5 seats</span>
						<span><i className="bx bx-diamond"></i> Premium</span>
						<span><i className="bx bx-cog"></i> Automatic</span>
					</div>
					<a href="#" className="button button-small">Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></a>
				</div>
			</article>
			<article className={`${styles['vehicle-luxury']} vehicle`}>
				<img src="https://www.pngall.com/wp-content/uploads/8/SUV-Car-PNG-File.png" alt="Porsche 911" className="vehicle-img" />
				<div className="vehicle-info">
					<div className="vehicle-meta">
						<span className="vehicle-name">Porsche 911</span>
						<span className="vehicle-price">$249<span>/day</span></span>
					</div>
					<div className="vehicle-features">
						<span><i className="bx bx-user"></i> 2 seats</span>
						<span><i className="bx bx-diamond"></i> Premium</span>
						<span><i className="bx bx-cog"></i> Automatic</span>
					</div>
					<a href="#" className="button button-small">Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></a>
				</div>
			</article>
			<article className={`${styles['vehicle-luxury']} vehicle`}>
				<img src="https://www.pngplay.com/wp-content/uploads/7/White-Car-Transparent-Free-PNG.png" alt="Range Rover Sport" className="vehicle-img" />
				<div className="vehicle-info">
					<div className="vehicle-meta">
						<span className="vehicle-name">Range Rover Sport</span>
						<span className="vehicle-price">$179<span>/day</span></span>
					</div>
					<div className="vehicle-features">
						<span><i className="bx bx-user"></i> 5 seats</span>
						<span><i className="bx bx-diamond"></i> Diesel</span>
						<span><i className="bx bx-cog"></i> Automatic</span>
					</div>
					<a href="#" className="button button-small">Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></a>
				</div>
			</article>
			<article className={`${styles['vehicle-luxury']} vehicle`}>
				<img src="https://pngimg.com/d/bmw_PNG1690.png" alt="BMW 7 Series" className="vehicle-img" />
				<div className="vehicle-info">
					<div className="vehicle-meta">
						<span className="vehicle-name">BMW 7 Series</span>
						<span className="vehicle-price">$189<span>/day</span></span>
					</div>
					<div className="vehicle-features">
						<span><i className="bx bx-user"></i> 5 seats</span>
						<span><i className="bx bx-diamond"></i> Premium</span>
						<span><i className="bx bx-cog"></i> Automatic</span>
					</div>
					<a href="#" className="button button-small">Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></a>
				</div>
			</article>
		</div>
	</section>
);

export default Luxury;