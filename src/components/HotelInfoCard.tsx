interface HotelInfoCardProps {
  className?: string;
}

export default function HotelInfoCard({ className = "" }: HotelInfoCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  return (
    <div className={`bg-white p-4 ${className}`}>
      <div className="space-y-4">
        {/* Hotel Name */}
        <h1 className="text-2xl font-bold text-gray-900">
          Vinpearl Luxury Nha Trang
        </h1>

        {/* Rating */}
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-lg font-semibold text-gray-900 ml-2">4,8</span>
          <span className="text-sm text-gray-600 ml-1">Khách sạn</span>
        </div>

        {/* Location */}
        <div className="flex items-start">
          <svg
            className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm text-gray-600">
            Đảo Hòn Tre, Tp. Nha Trang, Tỉnh Khánh Hòa, Việt Nam
          </span>
        </div>

        {/* Price and Booking */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-2">Giá phòng mỗi đêm từ</div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-orange-500">
                {formatPrice(5561400)} ₫
              </span>
              <div className="text-xs text-gray-500 mt-1">Đã bao gồm thuế</div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Chọn phòng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
