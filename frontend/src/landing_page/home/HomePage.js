import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAc from '../OpenAc';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
       <>
       <Navbar />
       <Hero />
       <Awards />
       <Stats />
       <Pricing />
       <Education />
       <OpenAc />
       <Footer />
       </>
     );
}

export default HomePage;