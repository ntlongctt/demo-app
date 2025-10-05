import { useState } from "react";

interface ImageCarouselProps {
  className?: string;
}

export default function ImageCarousel({ className = "" }: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Using carousel.png as the main image
  const images = [
    "/carousel.png",
    "/carousel.png", // Placeholder for additional images
    "/carousel.png", // Placeholder for additional images
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Hotel view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentImage ? "bg-orange-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
