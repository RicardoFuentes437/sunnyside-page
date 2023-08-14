import React from 'react';
import PropTypes from 'prop-types';
import '../styles/sectionStyles.scss';

const Section = ({type, props}) => {
    return (
        <div className='info-section'>
            {type === '1' ?
                <div id="type-1">
                    <div className='text-section'>
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                        <a id="button-1">Learn More</a>
                    </div>
                    <img src={props.image} alt="section-background" className='image-section'></img>
                </div>
            :
                type === '2' ? 
                    <div id="type-2">
                        <img src={props.image} alt="section-background" className='image-section'></img>
                        <div className='text-section'>
                            <h2>{props.title}</h2>
                            <p>{props.text}</p>
                            <a id="button-2">Learn More</a>
                        </div>
                    </div>
                    :
                    <div className="type-3">
                        <div id="graphic-design" className='text-section'>
                            <h2>{props.title1}</h2>
                            <p>{props.text1}</p>
                        </div>
                        <div id="photography" className='text-section'>
                            <h2>{props.title2}</h2>
                            <p>{props.text2}</p>
                        </div>
                    </div>
                }
            
        </div>
    );
};


Section.propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired
};


export default Section;
