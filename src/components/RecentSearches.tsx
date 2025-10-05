import React from "react";

interface RecentSearch {
  id: string;
  icon: "hotel" | "location";
  name: string;
  dates: string;
  details: string;
}

interface RecentSearchesProps {
  className?: string;
}

const recentSearches: RecentSearch[] = [
  {
    id: "1",
    icon: "hotel",
    name: "VinHolidays Fiesta Phú Qu...",
    dates: "04/10/2025 – 05/10/2025",
    details: "2 phòng, 2 người lớn, 1 trẻ em",
  },
  {
    id: "2",
    icon: "location",
    name: "VinHolidays Fiesta Phú Qu...",
    dates: "02/02/202",
    details: "2 phòng, 2 người lớn, 1 trẻ em",
  },
];

export default function RecentSearches({
  className = "",
}: RecentSearchesProps) {
  return (
    <div className={`px-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900">Tra cứu gần đây</h2>
        <button className="text-orange-500 text-sm">Xóa</button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {recentSearches.map((search) => (
          <div
            key={search.id}
            className="flex-shrink-0 bg-white rounded-xl shadow-sm p-4 min-w-[280px]"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {search.icon === "hotel" ? (
                  <svg
                    className="w-6 h-6 text-[#e8952f]"
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-[#e8952f]"
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
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {search.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{search.dates}</p>
                <p className="text-xs text-gray-500 mt-1">{search.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
