// Sodda, chiziqli SVG ikonkalar — har bir mahsulot turi uchun.
export default function ProductIcon({ name, className = "h-7 w-7" }) {
  const icons = {
    protein: (
      <>
        <path d="M8 3h8M9 3v3.5L6 13a5 5 0 0 0 5 7h2a5 5 0 0 0 5-7l-3-6.5V3" />
        <path d="M6.5 11h11" />
      </>
    ),
    gainer: (
      <>
        <rect x="6" y="8" width="12" height="13" rx="2" />
        <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M6 13h12" />
      </>
    ),
    creatine: (
      <>
        <path d="M12 2v6M12 2l3 2M12 2l-3 2" />
        <rect x="5" y="8" width="14" height="13" rx="2" />
        <path d="M9 14h6" />
      </>
    ),
    bcaa: (
      <>
        <circle cx="7" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <circle cx="12" cy="16" r="3" />
        <path d="M9 9.5 11 14M15 9.5 13 14" />
      </>
    ),
    vitamins: (
      <>
        <circle cx="9" cy="9" r="6" />
        <path d="M9 3v12M3 9h12" />
        <circle cx="17" cy="17" r="4" />
      </>
    ),
    fatburner: (
      <>
        <path d="M12 3c0 4-5 5-5 10a5 5 0 0 0 10 0c0-2-1-3-2-4 0 1.5-1 2-2 2 1-3-1-6-1-8z" />
      </>
    ),
    preworkout: (
      <>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
      </>
    ),
    snack: (
      <>
        <rect x="3" y="8" width="18" height="8" rx="4" />
        <path d="M7 8v8M11 8v8M15 8v8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name] || icons.protein}
    </svg>
  );
}
