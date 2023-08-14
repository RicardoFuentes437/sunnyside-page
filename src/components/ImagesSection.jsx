import React from 'react';
import '../styles/galleryStyles.scss';

const ImagesSection = () => {
    return (
        <div id="gallery">
            <img src="images/desktop/image-gallery-milkbottles.jpg" alt="milkbottles" id="milkbottles"></img>
            <img src="images/desktop/image-gallery-orange.jpg" alt="orange" id="orange"></img>
            <img src="images/desktop/image-gallery-cone.jpg" alt="cone" id="cone"></img>
            <img src="images/desktop/image-gallery-sugarcubes.jpg" alt="sugarcubes" id="sugarcubes"></img>
        </div>
    );
}

export default ImagesSection;
