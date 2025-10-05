import { useState } from "react";

interface HotelDetailTabsProps {
  className?: string;
}

const tabs = [
  { id: "overview", label: "Tổng quan" },
  { id: "amenities", label: "Tiện nghi" },
  { id: "reviews", label: "Đánh giá" },
  { id: "location", label: "Vị trí" },
];

export default function HotelDetailTabs({
  className = "",
}: HotelDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className={`bg-white border-b border-gray-200 ${className}`}>
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-[#e8952f] border-b-2 border-orange-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
