import { CircleCheck, CircleX } from "lucide-react";

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
      className={`border border-gray-300 rounded-xl overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className=" flex items-start justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {room.imageUrl ? (
            <img
              src={room.imageUrl}
              alt={room.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
          ) : (
            <ImageSkeleton />
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
            <div className="text-sm text-gray-500">{room.size}</div>
          </div>
        </div>
        <button
          className="p-1 border border-gray-200 rounded-full hover:bg-gray-100"
          aria-label="Toggle room details"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Details */}
      <div className="border-b border-gray-200">
        <div className="p-4 space-y-3 border-b border-gray-200">
          <div className="flex items-center text-base text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500 mr-3"
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
          <div className="flex items-center text-base text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500 mr-3"
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
        </div>
        <div className="p-4 space-y-3 border-b border-gray-200">
          <div className="space-y-3">
            {room.amenities.map((amenity) => (
              <div key={amenity.id} className="flex items-center text-base">
                {amenity.type === "positive" ? (
                  <CircleCheck className="w-5 h-5 text-green-500 mr-3" />
                ) : (
                  <CircleX className="w-5 h-5 text-gray-300 mr-3" />
                )}
                <span
                  className={
                    amenity.type === "positive"
                      ? "text-gray-800"
                      : "text-gray-400"
                  }
                >
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-[#e8952f]">
            {formatPrice(room.price)} ₫
          </span>
          <span className="text-sm ">/ phòng / đêm</span>
        </div>
        <button className="bg-[#e8952f] hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-xl transition-colors duration-200">
          Đặt phòng
        </button>
      </div>
    </div>
  );
}
