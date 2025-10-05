interface CheckInOutTimesProps {
  className?: string;
}

export default function CheckInOutTimes({
  className = "",
}: CheckInOutTimesProps) {
  return (
    <div className={`bg-white p-4 ${className}`}>
      <h2 className="text-lg font-bold text-gray-900 mb-3">
        Giờ nhận phòng / trả phòng
      </h2>
      <div className="space-y-3">
        <div className="flex items-center">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="flex flex-1 justify-between">
            <span className="text-sm  text-gray-900">Nhận phòng</span>
            <div>
              <div className="text-sm font-bold">15:00 - 03:00</div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="flex flex-1 justify-between">
            <span className="text-sm  text-gray-900">Trả phòng</span>

            <div>
              <div className="text-sm font-bold">trước 11:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
