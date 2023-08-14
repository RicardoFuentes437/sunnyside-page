import React from 'react';
import Testimonial from './Testimonial';
import {test1, test2, test3} from "../variables";

import '../styles/testimonialsStyles.scss';

const TestimonialsContainer = () => {
    return (
        <div id="testimonials-section">
            <p id="testimonials-title">CLIENT TESTIMONIALS</p>
            <div id="testimonials">
                <Testimonial props={test1}></Testimonial>
                <Testimonial props={test2}></Testimonial>
                <Testimonial props={test3}></Testimonial>
            </div>
        </div>
    );
}

export default TestimonialsContainer;
