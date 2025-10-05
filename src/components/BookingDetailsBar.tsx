interface BookingDetailsBarProps {
  className?: string;
}

const Date = () => {
  return (
    <div className="flex items-center">
      <svg
        className="w-4 h-4 text-white mr-2"
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
      <span className="text-sm">04/11/2025</span>
    </div>
  );
};

const Item1 = () => {
  return (
    <div className="flex items-center">
      <svg
        className="w-4 h-4 text-white mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <span className="text-sm">2</span>
    </div>
  );
};

const Item2 = () => {
  return (
    <div className="flex items-center">
      <svg
        className="w-4 h-4 text-white mr-2"
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
      <span className="text-sm">2</span>
    </div>
  );
};
const Item3 = () => {
  return (
    <div className="flex items-center">
      <svg
        className="w-4 h-4 text-white mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span className="text-sm">3</span>
    </div>
  );
};

export default function BookingDetailsBar({
  className = "",
}: BookingDetailsBarProps) {
  return (
    <div
      className={`bg-gray-800 text-white px-4 py-3 flex justify-between ${className}`}
    >
      <Date />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}
