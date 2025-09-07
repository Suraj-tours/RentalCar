import React, { useEffect, useRef } from 'react';
import styles from './styles/Fleet.module.css';

const Fleet = () => {
	const categoriesRef = useRef(null);

	useEffect(() => {
		// Fleet Category Filter
		const categories = categoriesRef.current.querySelectorAll('.fleet-category');
		categories.forEach(category => {
			category.addEventListener('click', () => {
				categories.forEach(c => c.classList.remove('active'));
				category.classList.add('active');
				// Filtering logic can be added here
			});
		});
		// Cleanup
		return () => {
			categories.forEach(category => {
				category.replaceWith(category.cloneNode(true));
			});
		};
	}, []);

	return (
		<section className={`${styles.fleet} section`} id="fleet">
			<div className="section-header">
				<span className="section-subtitle">Complete Vehicle Selection</span>
				<h2 className="section-title">OUR COMPLETE FLEET</h2>
			</div>
			<div className={`${styles['fleet-container']} bd-grid`}>
				<div className={styles['fleet-categories']} ref={categoriesRef}>
					<div className={`${styles['fleet-category']} active`} data-category="economy">
						<i className="bx bx-car"></i>
						<span>Economy</span>
					</div>
					<div className={styles['fleet-category']} data-category="sedan">
						<i className="bx bx-car"></i>
						<span>Sedan</span>
					</div>
					<div className={styles['fleet-category']} data-category="suv">
						<i className="bx bx-car"></i>
						<span>SUV</span>
					</div>
					<div className={styles['fleet-category']} data-category="luxury">
						<i className="bx bx-car"></i>
						<span>Luxury</span>
					</div>
					<div className={styles['fleet-category']} data-category="sports">
						<i className="bx bx-car"></i>
						<span>Sports</span>
					</div>
				</div>
				<div className={styles['fleet-vehicles']}>
					<div className={styles['fleet-vehicle-card']}>
						<img src="https://pngimg.com/d/toyota_PNG1953.png" alt="Toyota Corolla" className={styles['fleet-vehicle-img']} />
						<div className={styles['fleet-vehicle-overlay']}>
							<div className={styles['fleet-vehicle-info']}>
								<h4>Toyota Corolla</h4>
								<span className="price">$49/day</span>
								<div className="features">
									<span><i className="bx bx-user"></i> 5</span>
									<span><i className="bx bx-gas-pump"></i> 6.7L/100km</span>
									<span><i className="bx bx-cog"></i> Auto</span>
								</div>
							</div>
							<a href="#" className="button">Rent Now</a>
						</div>
					</div>
					<div className={styles['fleet-vehicle-card']}>
						<img src="https://pngimg.com/d/hyundai_PNG11217.png" alt="Honda Civic" className={styles['fleet-vehicle-img']} />
						<div className={styles['fleet-vehicle-overlay']}>
							<div className={styles['fleet-vehicle-info']}>
								<h4>Honda Civic</h4>
								<span className="price">$59/day</span>
								<div className="features">
									<span><i className="bx bx-user"></i> 5</span>
									<span><i className="bx bx-gas-pump"></i> 6.2L/100km</span>
									<span><i className="bx bx-cog"></i> Auto</span>
								</div>
							</div>
							<a href="#" className="button">Rent Now</a>
						</div>
					</div>
					<div className={styles['fleet-vehicle-card']}>
						<img src="https://www.freeiconspng.com/uploads/red-hyundai-car-png-15.png" alt="Ford Mustang" className={styles['fleet-vehicle-img']} />
						<div className={styles['fleet-vehicle-overlay']}>
							<div className={styles['fleet-vehicle-info']}>
								<h4>Ford Mustang</h4>
								<span className="price">$129/day</span>
								<div className="features">
									<span><i className="bx bx-user"></i> 4</span>
									<span><i className="bx bx-gas-pump"></i> 9.8L/100km</span>
									<span><i className="bx bx-cog"></i> Auto</span>
								</div>
							</div>
							<a href="#" className="button">Rent Now</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fleet;