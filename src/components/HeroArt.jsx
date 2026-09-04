import {
  IconWeb,
  IconStorefront,
  IconHeadset,
  IconCamera,
  IconTrendUp,
  IconCheck,
  IconCart,
  IconGlobe,
  IconLayers,
  IconMobileApp,
  IconChat,
  IconUsers,
  IconMail,
} from "./icons/Icon.jsx";

// One hand-drawn SVG composition, themed per division, replacing the old
// stock-photo hero banners (a travel-booking mockup, a poster gallery, a
// fitness-app screenshot — none related to Lunexa's real services). Sharing
// one structure across pages (device card + floating badges + chart) is what
// gives the site a single consistent visual language instead of five
// unrelated illustration styles, per the brand's icon-system requirement.

const THEMES = {
  digital: {
    bg: "#efe9ff",
    accent: "#6a3df5",
    accent2: "#2563eb",
    Icon: IconWeb,
    chipIcon: IconMobileApp,
    label: "Websites & Apps",
  },
  launchpad: {
    bg: "#fff2e2",
    accent: "#e07a1f",
    accent2: "#6a3df5",
    Icon: IconStorefront,
    chipIcon: IconCart,
    label: "Marketplace Growth",
  },
  connect: {
    bg: "#e6f6f5",
    accent: "#0891b2",
    accent2: "#6a3df5",
    Icon: IconHeadset,
    chipIcon: IconGlobe,
    label: "24/7 Support",
  },
  media: {
    bg: "#fdeaf0",
    accent: "#e11d48",
    accent2: "#6a3df5",
    Icon: IconCamera,
    chipIcon: IconLayers,
    label: "Photo & Video",
  },
  home: {
    bg: "#efe9ff",
    accent: "#6a3df5",
    accent2: "#0891b2",
    Icon: IconTrendUp,
    chipIcon: IconChat,
    label: "Full-Stack Growth",
  },
  pricing: {
    bg: "#efe9ff",
    accent: "#6a3df5",
    accent2: "#16a34a",
    Icon: IconLayers,
    chipIcon: IconTrendUp,
    label: "Flexible Plans",
  },
  about: {
    bg: "#efe9ff",
    accent: "#6a3df5",
    accent2: "#e07a1f",
    Icon: IconUsers,
    chipIcon: IconTrendUp,
    label: "Our Team",
  },
  contact: {
    bg: "#efe9ff",
    accent: "#6a3df5",
    accent2: "#0891b2",
    Icon: IconMail,
    chipIcon: IconChat,
    label: "Get In Touch",
  },
};

export default function HeroArt({ theme = "home", className = "" }) {
  const t = THEMES[theme] ?? THEMES.home;
  const { Icon, chipIcon: ChipIcon } = t;

  return (
    <svg
      viewBox="0 0 560 460"
      className={`lx-hero-art ${className}`}
      role="img"
      aria-label={`${t.label} illustration`}
    >
      <circle cx="300" cy="220" r="210" fill="#ffffff" opacity="0.05" />

      {/* main device card */}
      <rect x="90" y="90" width="330" height="230" rx="18" fill="#ffffff" stroke="#e7e1fb" strokeWidth="1.5" />
      <rect x="90" y="90" width="330" height="34" rx="18" fill={t.accent} opacity="0.12" />
      <circle cx="112" cy="107" r="4.5" fill={t.accent} opacity="0.55" />
      <circle cx="128" cy="107" r="4.5" fill={t.accent} opacity="0.35" />
      <circle cx="144" cy="107" r="4.5" fill={t.accent} opacity="0.2" />

      {/* bar chart */}
      <rect x="118" y="230" width="26" height="60" rx="5" fill={t.accent} opacity="0.25" />
      <rect x="154" y="205" width="26" height="85" rx="5" fill={t.accent} opacity="0.45" />
      <rect x="190" y="175" width="26" height="115" rx="5" fill={t.accent} />
      <rect x="226" y="220" width="26" height="70" rx="5" fill={t.accent2} opacity="0.4" />

      {/* headline / text placeholders */}
      <rect x="270" y="150" width="120" height="10" rx="5" fill="#e7e1fb" />
      <rect x="270" y="172" width="90" height="10" rx="5" fill="#e7e1fb" />
      <rect x="270" y="194" width="100" height="10" rx="5" fill="#e7e1fb" />

      <foreignObject x="270" y="215" width="140" height="80">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: t.accent,
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 14px",
            fontSize: "13px",
            fontWeight: 700,
            width: "fit-content",
          }}
        >
          <IconCheck size={16} />
          Growing
        </div>
      </foreignObject>

      {/* central theme icon badge, overlapping the card */}
      <circle cx="255" cy="220" r="44" fill="#ffffff" stroke={t.accent} strokeWidth="2" />
      <foreignObject x="231" y="196" width="48" height="48">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: t.accent }}>
          <Icon size={30} />
        </div>
      </foreignObject>

      {/* floating chip, bottom-right */}
      <rect x="330" y="300" width="150" height="56" rx="14" fill="#ffffff" stroke="#e7e1fb" strokeWidth="1.5" />
      <foreignObject x="344" y="314" width="28" height="28">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: t.accent2 }}>
          <ChipIcon size={24} />
        </div>
      </foreignObject>
      <rect x="384" y="316" width="80" height="9" rx="4.5" fill="#e7e1fb" />
      <rect x="384" y="332" width="55" height="9" rx="4.5" fill="#e7e1fb" />

      {/* floating growth badge, top-right */}
      <rect x="340" y="60" width="120" height="46" rx="23" fill={t.accent2} opacity="0.12" />
      <foreignObject x="352" y="72" width="22" height="22">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: t.accent2 }}>
          <IconTrendUp size={18} />
        </div>
      </foreignObject>
      <text x="382" y="88" fontSize="14" fontWeight="700" fill={t.accent2} fontFamily="inherit">
        +90%
      </text>

      {/* small decorative dots */}
      <circle cx="70" cy="330" r="7" fill={t.accent} opacity="0.3" />
      <circle cx="490" cy="120" r="10" fill={t.accent2} opacity="0.25" />
      <circle cx="500" cy="360" r="6" fill={t.accent} opacity="0.4" />
    </svg>
  );
}
