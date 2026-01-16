import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2"
      suppressHydrationWarning
    >
      <div aria-label="HyS Logo">
        <svg
          height="32"
          viewBox="0 0 125 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            .hys-logo-font {
              font-family: var(--font-headline), sans-serif;
              font-size: 50px;
              font-weight: 900;
              letter-spacing: -3px;
            }
          `}</style>
          <text
            x="36"
            y="46"
            className="hys-logo-font"
            fill="hsl(var(--foreground))"
          >
            Y
          </text>
          <g clipPath="url(#h_clip_path_logo)">
            <text
              x="0"
              y="46"
              className="hys-logo-font"
              fill="hsl(var(--primary))"
            >
              H
            </text>
          </g>
          <text
            x="68"
            y="46"
            className="hys-logo-font"
            fill="hsl(var(--accent))"
          >
            S
          </text>
          <defs>
            <clipPath id="h_clip_path_logo">
              <path d="M0 0 H 45 L 38 50 H 0 Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="hidden md:block border-l-2 border-muted h-8 mx-3"></div>
      <span className="hidden md:block font-headline font-bold text-sm uppercase tracking-wide text-muted-foreground">
        Tecnología SAS
      </span>
    </Link>
  );
};

export default Logo;
