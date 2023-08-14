import React from 'react';
import Section from './Section';
import {props1, props2, props3} from "../variables";

const SectionsContainer = () => {
    
    return (
        <div>
            <Section type='1' props={props1}></Section>
            <Section type='2' props={props2}></Section>
            <Section type='3' props={props3}></Section>
        </div>
    );
}

export default SectionsContainer;
