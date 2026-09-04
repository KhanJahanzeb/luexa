// Lunexa unified icon system — single-weight outline icons (24x24, 1.75 stroke,
// round caps/joins, currentColor). One visual language everywhere it's used,
// replacing the old CSS-sprite icons and the grab-bag of FontAwesome glyphs.
// Size and color are controlled by the caller via className/style — icons
// never hardcode their own color so they inherit the section's palette.

function Base({ size = 24, className = "", children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lx-icon ${className}`}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconCheck = (p) => (
  <Base {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </Base>
);

export const IconChat = (p) => (
  <Base {...p}>
    <path d="M4 5.5h16v11H9.5L5 20.5v-4H4z" />
  </Base>
);

export const IconPhone = (p) => (
  <Base {...p}>
    <path d="M6 3.5c1 0 2.6.3 3 1s.2 2.2-.3 3 1 2.7 2 3.7 2.9 2.5 3.7 2 2-0.7 3-.3 1 2 1 3-1.3 2.5-2.5 2.5c-6 0-11-5-11-11 0-1.2 1-2.5 2.5-2.5z" />
  </Base>
);

export const IconMail = (p) => (
  <Base {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="M4 6.5l8 6.5 8-6.5" />
  </Base>
);

export const IconMapPin = (p) => (
  <Base {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0112 3.5a6.5 6.5 0 016.5 6.5c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10.5" r="2.25" />
  </Base>
);

export const IconUser = (p) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
  </Base>
);

export const IconMenu = (p) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconChevronUp = (p) => (
  <Base {...p}>
    <path d="M5 15l7-7 7 7" />
  </Base>
);

export const IconClose = (p) => (
  <Base {...p}>
    <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
  </Base>
);

export const IconZoomIn = (p) => (
  <Base {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M20 20l-4.8-4.8M10.5 7.5v6M7.5 10.5h6" />
  </Base>
);

export const IconInfo = (p) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5.5M12 7.75v.1" />
  </Base>
);

export const IconWeb = (p) => (
  <Base {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
    <path d="M3 8.5h18" />
    <path d="M6.25 6.5h.1M8.75 6.5h.1" />
  </Base>
);

export const IconMobileApp = (p) => (
  <Base {...p}>
    <rect x="7.5" y="2.75" width="9" height="18.5" rx="2" />
    <path d="M10.75 18.25h2.5" />
  </Base>
);

export const IconDashboard = (p) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="1.75" />
    <path d="M8.25 16V12M12 16V8.5M15.75 16v-4.75" />
  </Base>
);

export const IconMarketing = (p) => (
  <Base {...p}>
    <path d="M3.5 10.5v3l3 .5v-4z" />
    <path d="M6.5 9.5l8-4v13l-8-4z" />
    <path d="M17.5 8.5a3.5 3.5 0 010 7" />
    <path d="M8 14.5l1.2 4.5" />
  </Base>
);

export const IconTarget = (p) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.75" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </Base>
);

export const IconCart = (p) => (
  <Base {...p}>
    <path d="M3.5 4.5h2l2.2 11.2a1.5 1.5 0 001.5 1.3h7.1a1.5 1.5 0 001.47-1.2l1.3-6.8H6.2" />
    <circle cx="10" cy="20" r="1.35" />
    <circle cx="17" cy="20" r="1.35" />
  </Base>
);

export const IconSearch = (p) => (
  <Base {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M20 20l-4.8-4.8" />
  </Base>
);

export const IconStorefront = (p) => (
  <Base {...p}>
    <path d="M4 9.5l1-5h14l1 5" />
    <path d="M4 9.5a2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </Base>
);

export const IconTruck = (p) => (
  <Base {...p}>
    <path d="M3 6.5h11v9H3z" />
    <path d="M14 10h3.5L20 12.7v2.8h-6z" />
    <circle cx="7.25" cy="17.5" r="1.75" />
    <circle cx="16.75" cy="17.5" r="1.75" />
  </Base>
);

export const IconHeadset = (p) => (
  <Base {...p}>
    <path d="M4 13v-1a8 8 0 0116 0v1" />
    <rect x="3" y="13" width="4" height="5.5" rx="1.25" />
    <rect x="17" y="13" width="4" height="5.5" rx="1.25" />
    <path d="M19 18.5v.5a3 3 0 01-3 3h-2.5" />
  </Base>
);

export const IconGlobe = (p) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5z" />
  </Base>
);

export const IconCamera = (p) => (
  <Base {...p}>
    <path d="M4 8.5a1.5 1.5 0 011.5-1.5h2l1-2h7l1 2h2A1.5 1.5 0 0120 8.5v9A1.5 1.5 0 0118.5 19h-13A1.5 1.5 0 014 17.5z" />
    <circle cx="12" cy="12.5" r="3.75" />
  </Base>
);

export const IconFilm = (p) => (
  <Base {...p}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
    <path d="M8 4.5v15M16 4.5v15M3.5 9h4.5M3.5 15h4.5M16 9h4.5M16 15h4.5" />
  </Base>
);

export const IconImage = (p) => (
  <Base {...p}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
    <circle cx="9" cy="10" r="1.75" />
    <path d="M4 17.5l5-5 3.2 3.2L16 12l4.5 5" />
  </Base>
);

export const IconCalendar = (p) => (
  <Base {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </Base>
);

export const IconTrendUp = (p) => (
  <Base {...p}>
    <path d="M4 16l5.2-5.5 3.6 3 6.2-7" />
    <path d="M15.5 6.5H19v3.5" />
  </Base>
);

export const IconSparkle = (p) => (
  <Base {...p}>
    <path d="M12 3.5l1.7 4.9 4.9 1.7-4.9 1.7-1.7 4.9-1.7-4.9-4.9-1.7 4.9-1.7z" />
    <path d="M19 15l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
  </Base>
);

export const IconShield = (p) => (
  <Base {...p}>
    <path d="M12 3.5l7 2.7v5.3c0 4.6-3 7.9-7 9-4-1.1-7-4.4-7-9V6.2z" />
    <path d="M9 12l2 2 4-4.5" />
  </Base>
);

export const IconClock = (p) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3.2 2" />
  </Base>
);

export const IconUsers = (p) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
    <path d="M15.5 6.2a3 3 0 010 5.6" />
    <path d="M16 13.6c2.2.5 3.9 2.3 4.4 5.4" />
  </Base>
);

export const IconLayers = (p) => (
  <Base {...p}>
    <path d="M12 3.5l8 4.3-8 4.3-8-4.3z" />
    <path d="M4 12.2l8 4.3 8-4.3M4 16.3l8 4.2 8-4.2" />
  </Base>
);

export const IconChevronDown = (p) => (
  <Base {...p}>
    <path d="M5 9l7 7 7-7" />
  </Base>
);

export const IconGauge = (p) => (
  <Base {...p}>
    <path d="M4 16a8 8 0 1116 0" />
    <path d="M12 16l4-5.5" />
    <circle cx="12" cy="16" r="1.15" fill="currentColor" stroke="none" />
  </Base>
);
