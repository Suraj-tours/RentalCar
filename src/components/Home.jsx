import React from 'react';
import styles from './styles/Home.module.css';

const Home = () => (
   <section className={styles.home} id="home">
      <div className={`${styles['home-container']} bd-grid`}>
         <div className={styles['home-car']}>
            <div className={styles['home-shape']}></div>
            <img src="https://pngimg.com/d/tesla_car_PNG21.png" alt="Tesla Model 3" className={styles['home-img']} />
         </div>
         <div className={styles['home-data']}>
            <span className={styles['home-new']}>New Arrival</span>
            <h1 className={styles['home-title']}>Drive Premium. Arrive in Style.</h1>
            <p className={styles['home-description']}>Luxury, comfort, and performance. Discover the best car rental experience with AutoRent.</p>
            <div className={styles['home-buttons']}>
               <a href="#featured" className="button">View Fleet</a>
               <a href="#contact" className="button button-outline">Contact Us</a>
            </div>
         </div>
      </div>
   </section>
);

export default Home;