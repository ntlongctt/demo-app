import { Button } from "./ui/button";

interface FilterSortBarProps {
  className?: string;
}

export default function FilterSortBar({ className = "" }: FilterSortBarProps) {
  return (
    <div className={`bg-white px-4 py-3 border-b border-gray-200 ${className}`}>
      <div className="flex space-x-3 justify-between">
        <Button
          style={{
            borderColor: "#9E9E9E",
          }}
          className="rounded-3xl h-[32px] py-2"
          variant="outline"
        >
          Lọc
        </Button>
        <Button
          style={{
            borderColor: "#9E9E9E",
            height: "32px",
          }}
          variant="outline"
          className={`py-2 px-4 rounded-3xl font-medium transition-colors duration-200 `}
        >
          Phổ biến nhất
        </Button>
      </div>
    </div>
  );
}
