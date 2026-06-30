import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAc from '../OpenAc';

function HomePage() {
    return ( 
       <>
       
       <Hero  />
       <Awards />
       <Stats />
       <Pricing />
       <Education />
       <OpenAc />
       
       </>
     );
}

export default HomePage;
