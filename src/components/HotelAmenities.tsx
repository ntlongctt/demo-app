interface HotelAmenitiesProps {
  className?: string;
}

const amenities = [
  { id: "restaurant", label: "Nhà hàng" },
  { id: "reception", label: "Lễ tân 24h" },
  { id: "pool", label: "Hồ bơi" },
  { id: "wifi", label: "Wifi" },
];

export default function HotelAmenities({
  className = "",
}: HotelAmenitiesProps) {
  return (
    <div className={`bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Tiện nghi</h2>
        <button className="text-[#e8952f] text-sm font-medium ">
          Xem tất cả &gt;
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {amenities.map((amenity) => (
          <span
            key={amenity.id}
            className="border-gray-200 border flex justify-center bg-white text-gray-700 px-3 py-2 rounded-full text-sm font-medium"
          >
            {amenity.label}
          </span>
        ))}
      </div>
    </div>
  );
}
