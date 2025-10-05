interface RoomFilterBarProps {
  className?: string;
}

const filters = [
  { id: "wifi", label: "Wifi miễn phí" },
  { id: "breakfast", label: "Miễn phí bữa sáng" },
];

export default function RoomFilterBar({ className = "" }: RoomFilterBarProps) {
  return (
    <div className={`px-4 py-3 ${className}`}>
      <div className="flex space-x-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-4 py-2 border border-gray-300  text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
