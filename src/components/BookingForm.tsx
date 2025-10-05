import { useNavigate } from "react-router";
import React from "react";

interface BookingFormProps {
  className?: string;
}

const Location = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-500 mr-2"
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
  );
};

const DateIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-500 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

const PersonIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-500 mr-2"
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
  );
};

export default function BookingForm({ className = "" }: BookingFormProps) {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = React.useState<Date>(() => new Date());
  const [checkOut, setCheckOut] = React.useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });
  const [openPicker, setOpenPicker] = React.useState<"in" | "out" | null>(null);
  const pickerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!openPicker) return;
    function handleOutside(event: MouseEvent | TouchEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpenPicker(null);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [openPicker]);

  function formatViDate(date: Date) {
    const weekdays = [
      "Chủ nhật",
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
    ];
    const day = weekdays[date.getDay()];
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${day}, ${dd}/${mm}/${yyyy}`;
  }

  function handleDateChange(kind: "in" | "out", value: string) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return;
    if (kind === "in") {
      setCheckIn(parsed);
      if (parsed >= checkOut) {
        const next = new Date(parsed);
        next.setDate(next.getDate() + 1);
        setCheckOut(next);
      }
    } else {
      setCheckOut(parsed);
      if (parsed <= checkIn) {
        const prev = new Date(parsed);
        prev.setDate(prev.getDate() - 1);
        setCheckIn(prev);
      }
    }
    setOpenPicker(null);
  }
  return (
    <div className={`bg-white rounded-2xl shadow-xs p-6 mx-4 ${className}`}>
      {/* Destination */}
      <div className="mb-6 flex items-start">
        <div className="flex items-center ">
          <Location />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-800">Điểm đến, khách sạn</span>
          <div className="text-lg font-semibold text-gray-900">Nha Trang</div>
        </div>
      </div>

      {/* Check-in Date & Nights */}
      <div className="mb-6">
        <div className="flex items-start">
          <DateIcon />
          <div className="flex flex-col flex-1">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Ngày nhận phòng</span>
                <button
                  type="button"
                  className="text-left text-lg font-semibold text-gray-900 underline decoration-dotted"
                  onClick={() => setOpenPicker("in")}
                  aria-label="Chọn ngày nhận phòng"
                >
                  {formatViDate(checkIn)}
                </button>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Số đêm nghỉ</span>
                <div className="text-lg font-semibold text-gray-900">
                  {Math.max(
                    1,
                    Math.ceil(
                      (checkOut.getTime() - checkIn.getTime()) /
                        (1000 * 60 * 60 * 24)
                    )
                  )}{" "}
                  đêm
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Ngày trả phòng:{" "}
              <button
                type="button"
                className="text-black underline decoration-dotted"
                onClick={() => setOpenPicker("out")}
                aria-label="Chọn ngày trả phòng"
              >
                {formatViDate(checkOut)}
              </button>
            </div>
          </div>
        </div>
        {/* Simple popover with native date input to emulate picker */}
        {openPicker && (
          <div className="relative mt-3" ref={pickerRef}>
            <div className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-md p-3">
              <input
                type="date"
                className="border border-gray-300 rounded-md px-2 py-1"
                value={(openPicker === "in" ? checkIn : checkOut)
                  .toISOString()
                  .slice(0, 10)}
                min={
                  openPicker === "out"
                    ? checkIn.toISOString().slice(0, 10)
                    : undefined
                }
                onChange={(e) => handleDateChange(openPicker, e.target.value)}
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Rooms & Guests */}
      <div className="mb-6">
        <div className="flex items-start">
          <PersonIcon />
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Số phòng và khách</span>
            <div className="text-lg font-semibold text-gray-900">
              1 phòng, 2 người lớn
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={() => navigate("/hotels")}
        className="w-full bg-[#e8953f] hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
      >
        Tìm kiếm
      </button>
    </div>
  );
}
