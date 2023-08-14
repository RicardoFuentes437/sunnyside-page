import React from 'react';
import Footer from './Footer';
import ImagesSection from './ImagesSection';
import SectionsContainer from './SectionsContainer';
import TestimonialsContainer from './TestimonialsContainer';
import Welcome from './Welcome';

const EverythingContainer = () => {
    return (
        <div id="everything-container">
            <Welcome></Welcome>
            <SectionsContainer></SectionsContainer>
            <TestimonialsContainer></TestimonialsContainer>
            <ImagesSection></ImagesSection>
            <Footer></Footer>
        </div>
    );
}

export default EverythingContainer;
