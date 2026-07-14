export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="url(#tsmc-g)" />
        <path d="M10 12h12M16 12v10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 8l4 4-4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <defs>
          <linearGradient id="tsmc-g" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#4f46e5" />
            <stop offset="1" stopColor="#8b7cf6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
        TSMC<span className="text-muted-foreground font-normal"> Marketing</span>
      </span>
    </div>
  );
}
