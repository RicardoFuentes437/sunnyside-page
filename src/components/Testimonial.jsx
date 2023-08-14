import React from 'react';
import PropTypes from 'prop-types';


const Testimonial = ({props}) => {
    return (
        <div className='testimonial'>
            <img src={props.image} alt="user-icon" className="user-icon"></img>
            <p className='user-comment'>{props.text}</p>
            <p className='user-name'>{props.name}</p>
            <p className='user-job'>{props.job}</p>
        </div>
    );
};


Testimonial.propTypes = {
    props: PropTypes.object.isRequired
};


export default Testimonial;
