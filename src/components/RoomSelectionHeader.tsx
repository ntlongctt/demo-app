import { useNavigate } from "react-router";
import HeaderButton from "./HeaderButton";

interface RoomSelectionHeaderProps {
  className?: string;
}

export default function RoomSelectionHeader({
  className = "",
}: RoomSelectionHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={`bg-white ${className}`}>
      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded-full mr-2"
            aria-label="Go back"
            tabIndex={0}
            onClick={() => navigate(-1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") navigate(-1);
            }}
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-900 truncate">
            Vinpearl Luxury Nha Trang
          </h1>
        </div>
        <HeaderButton />
      </div>
    </header>
  );
}
