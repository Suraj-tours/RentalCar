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

function App() {
	return (
		<div>
			<Header />
			<main>
				<Home />
				<Featured />
				<Collection />
				<Luxury />
				<Offer />
				<Fleet />
				<Testimonials />
				<Newsletter />
			</main>
			<Footer />
		</div>
	);
}

export default App;