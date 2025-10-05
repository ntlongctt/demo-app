import { Ellipsis, CircleX } from "lucide-react";

const HeaderButton = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-between bg-gray-500/10 rounded-full w-[62px] h-[24px] px-2">
        <div className="flex items-center gap-1" aria-hidden="true">
          <Ellipsis className="w-3 h-3 " />
        </div>
        <span className="w-px h-4 bg-gray-500/60" aria-hidden="true" />
        <button
          type="button"
          className="rounded-full hover:bg-gray-200"
          aria-label="Close"
        >
          <CircleX className="w-3 h-3"></CircleX>
        </button>
      </div>
    </div>
  );
};

export default HeaderButton;
