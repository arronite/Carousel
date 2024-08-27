import React, { useState } from 'react';

const images = [
    "https://via.placeholder.com/600x300?text=Image+1",
    "https://via.placeholder.com/600x300?text=Image+2",
    "https://via.placeholder.com/600x300?text=Image+3",
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default ImageCarousel;
