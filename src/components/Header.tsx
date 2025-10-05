import HeaderButton from "./HeaderButton";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`bg-transparent ${className}`}>
      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <img src="/logo.svg" alt="VINPEARL" className="h-8 w-auto" />
        <div className="flex items-center space-x-3">
          <button
            className="p-1 hover:bg-white/10 rounded-full"
            aria-label="Live area"
          >
            <img src="/live-area.svg" alt="live area" className="w-5 h-5" />
          </button>
          <HeaderButton />
        </div>
      </div>
    </header>
  );
}
