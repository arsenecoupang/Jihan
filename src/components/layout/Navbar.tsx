function Navbar() {
  return (
    <nav className="fixed inset-x-0 mx-auto w-[min(70rem,92vw)] z-50 top-10 glass-navbar rounded-2xl backdrop-blur-2xl backdrop-saturate-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-14">
        <a href="#" className="flex items-center gap-1">
          <svg width="32" height="32" viewBox="0 0 32 32" className="shrink-0">
            <defs>
              <linearGradient
                id="logo-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <rect
              width="32"
              height="32"
              rx="8"
              fill="url(#logo-grad)"
              opacity="0.15"
            />
            <text
              x="50%"
              y="54%"
              dominantBaseline="central"
              textAnchor="middle"
              fill="url(#logo-grad)"
              fontSize="20"
              fontWeight="bold"
              fontFamily="Inter, sans-serif"
            >
              J.
            </text>
          </svg>
        </a>
        <div className="flex gap-8 text-sm text-foreground ">
          <a
            href="#home"
            className="hover:text-muted-foreground transition-colors rainbow-text font-light duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-muted-foreground transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-muted-foreground transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-muted-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
