import { useEffect, useState } from "react";

interface PromotionsProps {
  className?: string;
}

const promotions = [
  {
    id: 1,
    title: "ONE-STOP SHOP FOR ALL VINPEARL",
    subtitle: "Early-bird Deals",
    image: "/promo.png",
  },
  {
    id: 2,
    title: "Summer Special",
    subtitle: "Book Now & Save",
    image: "/api/placeholder/400/200",
  },
  {
    id: 3,
    title: "Family Package",
    subtitle: "Perfect for Families",
    image: "/api/placeholder/400/200",
  },
  {
    id: 4,
    title: "Luxury Experience",
    subtitle: "Premium Services",
    image: "/api/placeholder/400/200",
  },
];

export default function Promotions({ className = "" }: PromotionsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`px-4 ${className}`}>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Ưu đãi</h2>

      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {promotions.map((promotion) => (
              <div key={promotion.id} className="w-full flex-shrink-0 relative">
                <img className="w-full" src="/promo.png" />
                {/* <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-48 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm font-medium mb-2">
                      {promotion.title}
                    </div>
                    <div className="text-2xl font-bold">
                      {promotion.subtitle}
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-1 mt-4">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-6 h-[2px] rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
