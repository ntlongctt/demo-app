import { CircleChevronDown } from "lucide-react";
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
      <img src="/icon-moon.svg" alt="night" className="w-6 h-6 mr-2" />
      <span className="text-sm">2</span>
    </div>
  );
};

const Item2 = () => {
  return (
    <div className="flex items-center">
      <img src="/door.svg" alt="door" className="w-6 h-6 mr-2" />
      <span className="text-sm">2</span>
    </div>
  );
};
const Item3 = () => {
  return (
    <div className="flex items-center">
      <img src="/person.svg" alt="guest" className="w-6 h-6 mr-2" />
      <span className="text-sm">3</span>
    </div>
  );
};

export default function DetailsBar({ className = "" }: BookingDetailsBarProps) {
  return (
    <div
      className={`bg-gray-800 text-white px-4 py-3 flex justify-between ${className}`}
    >
      <Date />
      <Item1 />
      <Item2 />
      <Item3 />
      <CircleChevronDown className="w-5 h-5 text-white" />
    </div>
  );
}
