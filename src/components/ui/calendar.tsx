import * as React from "react";

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  captionLayout?: "dropdown" | "buttons";
  mode?: "single";
  month?: Date;
  onMonthChange?: (date: Date) => void;
}

export function Calendar({
  selected,
  onSelect,
  month,
  onMonthChange,
}: CalendarProps) {
  const [internalMonth, setInternalMonth] = React.useState<Date>(
    month ?? selected ?? new Date()
  );
  const view = month ?? internalMonth;

  function startOfMonth(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }
  function addMonths(d: Date, n: number) {
    return new Date(d.getFullYear(), d.getMonth() + n, 1);
  }

  const days: Date[] = React.useMemo(() => {
    const first = startOfMonth(view);
    const start = new Date(first);
    start.setDate(1 - ((first.getDay() + 6) % 7)); // Monday start
    const result: Date[] = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      result.push(d);
    }
    return result;
  }, [view]);

  const isSameDay = (a: Date, b?: Date) =>
    !!b && a.toDateString() === b.toDateString();
  const inCurrentMonth = (d: Date) => d.getMonth() === view.getMonth();

  function goto(offset: number) {
    const next = addMonths(view, offset);
    if (onMonthChange) {
      onMonthChange(next);
    } else {
      setInternalMonth(next);
    }
  }

  return (
    <div className="p-3 w-[280px] select-none">
      <div className="flex items-center justify-between mb-2">
        <button
          className="px-2 py-1 rounded hover:bg-gray-100"
          onClick={() => goto(-1)}
          aria-label="Prev month"
        >
          ‹
        </button>
        <div className="font-medium">
          {view.toLocaleDateString("vi-VN", { month: "long", year: "numeric" })}
        </div>
        <button
          className="px-2 py-1 rounded hover:bg-gray-100"
          onClick={() => goto(1)}
          aria-label="Next month"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-1">
        {"T2 T3 T4 T5 T6 T7 CN".split(" ").map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => {
          const selectedCls = isSameDay(d, selected)
            ? "bg-black text-white"
            : "hover:bg-gray-100";
          const faded = inCurrentMonth(d) ? "" : "text-gray-300";
          return (
            <button
              key={d.toISOString()}
              className={`h-9 rounded ${selectedCls} ${faded}`}
              onClick={() => onSelect?.(d)}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
