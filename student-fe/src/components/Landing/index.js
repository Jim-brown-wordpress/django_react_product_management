import React from 'react';


import { Carousel } from './Carousel';
import { About } from './About';
import { Feature } from './Feature';
import { Offer } from './Offer';
import { Cta } from './Cta';
import { Portfolio } from './Portfolio';
import { Price } from './Price';
import { Faq } from './Faq';
import { Contact } from './Contact';


const Landing = ({

}) => {
    return (
        <>
            <Carousel />
            <main id="main">
                <About />
                <Feature />
                <Cta />
                <Offer />
                <Price />
                <Faq />
                <Contact />
            </main>
        </>
    )
}

export {Landing};
