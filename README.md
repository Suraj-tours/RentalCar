### Project Structure
```
my-react-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Featured.js
│   │   ├── Collection.js
│   │   ├── Luxury.js
│   │   ├── Offer.js
│   │   ├── Fleet.js
│   │   ├── Testimonials.js
│   │   ├── Newsletter.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
├── package.json
```

### Component Files

**1. Header.js**
```javascript
import React from 'react';

const Header = () => {
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-grid">
        <div className="nav-toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
        <a href="#" className="nav-logo">Auto<span>Rent</span></a>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list"></ul>
        </div>
        <div className="nav-cta">
          <a href="#" className="button button-outline">Reserve Now</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
```

**2. Home.js**
```javascript
import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container bd-grid">
        <div className="home-car"></div>
        <div className="home-data"></div>
      </div>
    </section>
  );
};

export default Home;
```

**3. Featured.js**
```javascript
import React from 'react';

const Featured = () => {
  return (
    <section className="featured" id="featured">
      <div className="section-header">
        <span className="section-subtitle">Handpicked Selection</span>
        <h2 className="section-title">FEATURED VEHICLES</h2>
      </div>
      <div className="featured-container bd-grid">
        <article className="vehicle"></article>
        <article className="vehicle"></article>
        <article className="vehicle"></article>
      </div>
    </section>
  );
};

export default Featured;
```

**4. Collection.js**
```javascript
import React from 'react';

const Collection = () => {
  return (
    <section className="collection section">
      <div className="collection-container bd-grid">
        <div className="collection-card collection-card-suv"></div>
        <div className="collection-card collection-card-sports"></div>
      </div>
    </section>
  );
};

export default Collection;
```

**5. Luxury.js**
```javascript
import React from 'react';

const Luxury = () => {
  return (
    <section className="luxury section" id="luxury">
      <div className="section-header">
        <span className="section-subtitle">Ultimate Luxury</span>
        <h2 className="section-title">PREMIUM LUXURY FLEET</h2>
      </div>
      <div className="luxury-container bd-grid">
        <article className="vehicle vehicle-luxury"></article>
        <article className="vehicle vehicle-luxury"></article>
        <article className="vehicle vehicle-luxury"></article>
        <article className="vehicle vehicle-luxury"></article>
      </div>
    </section>
  );
};

export default Luxury;
```

**6. Offer.js**
```javascript
import React from 'react';

const Offer = () => {
  return (
    <section className="offer section">
      <div className="offer-container bd-grid">
        <div className="offer-data"></div>
        <div className="offer-image"></div>
      </div>
    </section>
  );
};

export default Offer;
```

**7. Fleet.js**
```javascript
import React from 'react';

const Fleet = () => {
  return (
    <section className="fleet section" id="fleet">
      <div className="section-header">
        <span className="section-subtitle">Complete Vehicle Selection</span>
        <h2 className="section-title">OUR COMPLETE FLEET</h2>
      </div>
      <div className="fleet-container bd-grid">
        <div className="fleet-categories"></div>
        <div className="fleet-vehicles"></div>
      </div>
    </section>
  );
};

export default Fleet;
```

**8. Testimonials.js**
```javascript
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="section-header">
        <span className="section-subtitle">Customer Stories</span>
        <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
      </div>
      <div className="testimonials-container bd-grid">
        <div className="testimonial-card"></div>
        <div className="testimonial-card"></div>
      </div>
    </section>
  );
};

export default Testimonials;
```

**9. Newsletter.js**
```javascript
import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter section" id="contact">
      <div className="newsletter-container bd-grid">
        <div className="newsletter-content"></div>
        <form action="" className="newsletter-subscribe"></form>
      </div>
    </section>
  );
};

export default Newsletter;
```

**10. Footer.js**
```javascript
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-container bd-grid">
        <div className="footer-box footer-about">
          <a href="#" className="footer-logo">Auto<span>Rent</span></a>
          <p className="footer-description">Premium car rental services with a focus on luxury, comfort, and exceptional customer experiences.</p>
          <div className="footer-social"></div>
        </div>
        <div className="footer-box">
          <h3 className="footer-title">Navigation</h3>
          <ul></ul>
        </div>
        <div className="footer-box">
          <h3 className="footer-title">Customer Support</h3>
          <ul></ul>
        </div>
        <div className="footer-box footer-contact">
          <h3 className="footer-title">Get In Touch</h3>
          <ul></ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">&#169; 2023 <a href="#" className="footer-copy-link">AutoRent</a>. All rights reserved</p>
        <div className="footer-payments">
          <i className="bx bxl-visa"></i>
          <i className="bx bxl-mastercard"></i>
          <i className="bx bxl-paypal"></i>
          <i className="bx bxl-amex"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### App.js
```javascript
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Featured from './components/Featured';
import Collection from './components/Collection';
import Luxury from './components/Luxury';
import Offer from './components/Offer';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Featured />
      <Collection />
      <Luxury />
      <Offer />
      <Fleet />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
```

### index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Installation of Dependencies
Run the following command in your terminal to create the React app and install necessary dependencies:
```
npx create-react-app my-react-app
cd my-react-app
npm install boxicons
```

After setting up the components and installing dependencies, you can run your React app using:
```
npm start
``` 

This will start the development server, and you can view your application in the browser.