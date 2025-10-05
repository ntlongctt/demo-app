import { useNavigate } from "react-router";

interface Hotel {
  id: string;
  name: string;
  rating: number;
  price: number;
  imageUrl?: string;
}

interface HotelCardProps {
  hotel: Hotel;
  className?: string;
}

export default function HotelCard({ hotel, className = "" }: HotelCardProps) {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const handleClick = () => {
    navigate(`/hotel/${hotel.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <div className="flex p-4 gap-4">
        {/* Left side - Hotel Image (40-45% width) */}
        <div className="">
          {hotel.imageUrl ? (
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="min-w-[120px] h-[120px] object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-30 bg-gray-200 rounded-l-xl animate-pulse">
              <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-l-xl"></div>
            </div>
          )}
        </div>

        {/* Right side - Hotel Information (55-60% width) */}
        <div className="flex flex-col">
          <div className="">
            <h3 className="text-[14px] font-bold text-gray-900 line-clamp-2 leading-tight">
              {hotel.name}
            </h3>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-black mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-lg font-semibold text-gray-700">
                {hotel.rating}
              </span>
            </div>
          </div>

          <div className="">
            <div className="flex items-baseline">
              <span className="text-[16px] font-bold text-[#e8952f]">
                {formatPrice(hotel.price)}
              </span>
              <span className="text-sm text-gray-500 ml-2">₫ /đêm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
