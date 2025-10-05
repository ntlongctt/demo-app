interface Room {
  id: string;
  name: string;
  size: string;
  capacity: string;
  bedding: string;
  amenities: Array<{
    id: string;
    label: string;
    type: "positive" | "negative";
  }>;
  price: number;
  imageUrl?: string;
}

interface RoomCardProps {
  room: Room;
  className?: string;
}

function ImageSkeleton() {
  return (
    <div className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse">
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"></div>
    </div>
  );
}

export default function RoomCard({ room, className = "" }: RoomCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 ${className}`}
    >
      <div className="flex space-x-4">
        {/* Room Image */}
        <div className="flex-shrink-0">
          {room.imageUrl ? (
            <img
              src={room.imageUrl}
              alt={room.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
          ) : (
            <ImageSkeleton />
          )}
        </div>

        {/* Room Details */}
        <div className="flex-1 min-w-0">
          <div className="space-y-2">
            {/* Room Name */}
            <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>

            {/* Size */}
            <div className="text-sm text-gray-600">{room.size}</div>

            {/* Capacity */}
            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {room.capacity}
            </div>

            {/* Bedding */}
            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
              </svg>
              {room.bedding}
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center text-xs">
                  {amenity.type === "positive" ? (
                    <svg
                      className="w-3 h-3 text-green-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 text-red-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M7 7l10 10M7 17L17 7" />
                    </svg>
                  )}
                  <span
                    className={
                      amenity.type === "positive"
                        ? "text-green-700"
                        : "text-red-700"
                    }
                  >
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price and Booking */}
        <div className="flex-shrink-0 text-right">
          <div className="space-y-2">
            <div>
              <div className="text-2xl font-bold text-orange-500">
                {formatPrice(room.price)} ₫
              </div>
              <div className="text-xs text-gray-500">/ phòng / đêm</div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-200">
              Đặt phòng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
