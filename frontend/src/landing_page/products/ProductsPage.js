import React from 'react';
import OpenAc from '../OpenAc';
import Hero from './Hero';
import LeftSec from './LeftSec';
import RightSec from './RightSec';
import Universe from './Universe';

function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSec />
            <RightSec />
            <Universe />
            <OpenAc />
        </>
    );
}

export default ProductsPage;
