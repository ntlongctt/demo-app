import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import HeaderButton from "./HeaderButton";

interface ImageCarouselProps {
  className?: string;
}

export default function ImageCarousel({ className = "" }: ImageCarouselProps) {
  const [currentImage] = useState(0);
  const navigate = useNavigate();

  // Using carousel.png as the main image
  const images = [
    "/room-detail.png",
    "/room-detail.png",
    "/room-detail.png",
    "/room-detail.png",
  ];

  return (
    <div className={`absolute w-full top-0 ${className}`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Hotel view"
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          aria-label="Back to hotel list"
          className="absolute left-[30px] top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/60 text-white rounded-full p-2"
          onClick={() => navigate("/hotels")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/hotels");
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="absolute right-[30px] top-1/2 -translate-y-1/2 bg-black/20  text-white rounded-full">
          <HeaderButton />
        </div>
      </div>
    </div>
  );
}
