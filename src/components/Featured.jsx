import React from 'react';
import styles from './styles/Featured.module.css';

const Featured = () => (
	<section className={styles.featured} id="featured">
		<div className="section-header">
			<span className="section-subtitle">Handpicked Selection</span>
			<h2 className="section-title">FEATURED VEHICLES</h2>
		</div>
		<div className={`${styles['featured-container']} bd-grid`}>
			<article className={styles.vehicle}>
				<div className={`${styles['vehicle-badge']} ${styles.premium}`}>Premium</div>
				<img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_b7e0a9a9580e2839ca4f782eda39ad41.webp" alt="BMW 3 Series" className={styles['vehicle-img']} />
				<div className={styles['vehicle-info']}>
					<div className={styles['vehicle-meta']}>
						<span className={styles['vehicle-name']}>BMW 3 Series</span>
						<span className={styles['vehicle-price']}>$99<span>/day</span></span>
					</div>
					<div className={styles['vehicle-features']}>
						<span><i className="bx bx-user"></i> 5 seats</span>
						<span><i className="bx bx-diamond"></i> Premium</span>
						<span><i className="bx bx-cog"></i> Automatic</span>
					</div>
					<a href="#" className="button button-small">Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></a>
				</div>
			</article>
			<article className={styles.vehicle}>
				<div className={`${styles['vehicle-badge']} ${styles.popular}`}>Popular</div>
				<img src="https://pngimg.com/d/audi_PNG1736.png" alt="Audi A4" className={styles['vehicle-img']} />
				<div className={styles['vehicle-info']}>
					<div className={styles['vehicle-meta']}>
						<span className={styles['vehicle-name']}>Audi A4</span>
						<span className={styles['vehicle-price']}>$89<span>/day</span></span>
					</div>
					<div className={styles['vehicle-features']}>
						<span><i className="bx bx-user"></i> 5 seats</span>
						<span><i className="bx bx-diamond"></i> Premium</span>
						<span><i className="bx bx-cog"></i> Automatic</span>
					</div>
					<a href="#" className="button button-small">Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></a>
				</div>
			</article>
			<article className={styles.vehicle}>
				<div className={`${styles['vehicle-badge']} ${styles.family}`}>Family</div>
				<img src="https://www.pngplay.com/wp-content/uploads/7/Black-Car-Transparent-Background.png" alt="Volvo XC60" className={styles['vehicle-img']} />
				<div className={styles['vehicle-info']}>
					<div className={styles['vehicle-meta']}>
						<span className={styles['vehicle-name']}>Volvo XC60</span>
						<span className={styles['vehicle-price']}>$119<span>/day</span></span>
					</div>
					<div className={styles['vehicle-features']}>
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

export default Featured;