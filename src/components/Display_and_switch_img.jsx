import React from "react";
import { useState } from "react";
import ArrowLeft from "../assets/Icons/arrow-left-circle-svgrepo-com.svg";
import ArrowRight from "../assets/Icons/arrow-right-circle-svgrepo-com.svg";

const Display = ({ Images, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Get the current set of 3 images to display
    const getVisibleImages = () => {
        return [
            Images[currentIndex % Images.length],
            Images[(currentIndex + 1) % Images.length],
            Images[(currentIndex + 2) % Images.length]
        ];
    };

    // Right arrow moves left (decreases index)
    const handleRightClick = () => {
        setCurrentIndex(prev => 
            prev === 0 ? Images.length - 1 : prev - 1
        );
    };
    
    // Left arrow moves right (increases index)
    const handleLeftClick = () => {
        setCurrentIndex(prev => 
            (prev + 1) % Images.length
        );
    };
    
    return (
        <div className="image-display-container">
            <img src={ArrowLeft} alt="Move Right" className="Arrow nav-button" onClick={handleLeftClick}/>
            <div className="Container_list">
                {getVisibleImages().map((image, idx) => (
                <div key={`${image.src}-${idx}-${currentIndex}`} className={className}>
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="display-image"
                    />
                    {(image.title) && (
                        <div className="image-title" style={{ display: 'block' }}>
                            <h3>{image.title}</h3>
                            <p>Get It Now dude!</p>
                        </div>
                    )}
                </div>
            ))}
            </div>
            <img src={ArrowRight} alt="Move Left" className="Arrow nav-button" onClick={handleRightClick}/>
        </div>
    );
};

export default Display;