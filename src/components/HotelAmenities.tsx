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
      <h2 className="text-lg font-bold text-gray-900 mb-3">Tiện nghi</h2>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity) => (
          <span
            key={amenity.id}
            className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm font-medium"
          >
            {amenity.label}
          </span>
        ))}
      </div>
    </div>
  );
}
