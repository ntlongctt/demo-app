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
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="text-sm font-bold">Giá phòng mỗi đêm từ</div>
          <div className="flex justify-end flex-col items-end">
            <div className=" font-bold text-[#e8952f]">
              {formatPrice(5561400)} ₫
            </div>
            <div className="text-xs text-gray-500">Đã bao gồm thuế</div>
          </div>
        </div>
        <button
          onClick={handleChooseRoom}
          className="bg-[#e8952f] hover:bg-orange-600 text-white  py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Chọn phòng
        </button>
      </div>
    </div>
  );
}
