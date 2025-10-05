import { useState } from "react";

interface RoomFilterBarProps {
  className?: string;
}

const filters = [
  { id: "wifi", label: "Wifi miễn phí" },
  { id: "breakfast", label: "Miễn phí bữa sáng" },
];

export default function RoomFilterBar({ className = "" }: RoomFilterBarProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>(["wifi"]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className={`bg-white px-4 py-3 border-b border-gray-200 ${className}`}>
      <div className="flex space-x-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeFilters.includes(filter.id)
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
