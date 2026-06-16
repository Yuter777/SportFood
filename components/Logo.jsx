export default function Logo({ className = "", showWordmark = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SF monogramma — logodagi qiya, sportiv shakl */}
      <svg
        viewBox="0 0 120 90"
        className="h-9 w-auto"
        role="img"
        aria-label="SportFood logo"
      >
        {/* qizil S */}
        <path
          d="M58 14 H30 C18 14 10 22 10 34 C10 44 17 50 30 51 L42 52 C46 52 47 54 47 56 C47 59 45 60 41 60 H12 L4 76 H44 C58 76 66 68 66 56 C66 46 59 40 46 39 L34 38 C30 38 29 36 29 34 C29 31 31 30 35 30 H50 Z"
          fill="#e8281f"
          transform="skewX(-9)"
        />
        {/* oq F */}
        <path
          d="M74 14 H114 L106 30 H85 V40 H102 L96 55 H85 V76 H66 L74 14 Z"
          fill="#f5f6f8"
          transform="skewX(-9)"
        />
        {/* tepa qizil "uchqun" piksellar */}
        <rect x="92" y="2" width="6" height="6" fill="#e8281f" transform="skewX(-9)" />
        <rect x="101" y="8" width="4" height="4" fill="#e8281f" transform="skewX(-9)" />
      </svg>

      {showWordmark && (
        <span className="font-display text-xl font-700 tracking-wide text-white">
          Sport<span className="text-flame">Food</span>
        </span>
      )}
    </div>
  );
}
