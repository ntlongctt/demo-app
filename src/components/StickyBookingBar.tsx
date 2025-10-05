import { useNavigate } from "react-router";

interface StickyBookingBarProps {
  className?: string;
}

export default function StickyBookingBar({
  className = "",
}: StickyBookingBarProps) {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const handleChooseRoom = () => {
    navigate("/hotel/1/rooms");
  };

  return (
    <div className={`bg-white border-t border-gray-200 p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-600">Giá phòng mỗi đêm từ</div>
          <div className="text-xl font-bold text-orange-500">
            {formatPrice(5561400)} ₫
          </div>
          <div className="text-xs text-gray-500">Đã bao gồm thuế</div>
        </div>
        <button
          onClick={handleChooseRoom}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Chọn phòng
        </button>
      </div>
    </div>
  );
}
