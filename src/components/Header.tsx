interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`bg-transparent ${className}`}>
      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <img src="/logo.png" alt="VINPEARL" className="h-8 w-auto" />
        <div className="flex items-center space-x-3">
          <button className="p-1 hover:bg-white/10 rounded-full">
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            style={{
              display: "flex",
              gap: "8px",
              borderRadius: 20,
              background: "rgba(255, 255, 255, 0.3)",
              padding: 4,
            }}
            className=""
          >
            <button className="rotate-90 p-1 hover:bg-white/10 rounded-full">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
            <button className="p-1 hover:bg-white/10 rounded-full">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
