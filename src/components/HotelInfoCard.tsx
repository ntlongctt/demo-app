interface HotelInfoCardProps {
  className?: string;
}

export default function HotelInfoCard({ className = "" }: HotelInfoCardProps) {
  return (
    <div className={`bg-white rounded-t-3xl p-4 ${className}`}>
      <div className="space-y-4">
        {/* Hotel Name */}
        <h1 className="text-[16px] font-bold text-gray-900">
          Vinpearl Luxury Nha Trang
        </h1>

        {/* Rating */}
        <div className="flex w-fit rounded-2xl items-center bg-[#ffff0021] px-2">
          <span className="text-sm text-gray-600 ml-1">Khách sạn</span>
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
      </div>
    </div>
  );
}
