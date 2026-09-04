import { IconLayers, IconTrendUp, IconClock, IconUsers } from "./icons/Icon.jsx";

// Replaces the "client logo" strip. No real client logos exist anywhere —
// checked the live site too, it repeats a single WhatsApp screenshot for all
// six "brands." Real, verified stats (used elsewhere in the site's own copy)
// are honest and read as more premium than a row of fake logos.
const ITEMS = [
  { icon: IconClock, value: "8+", label: "Years of Experience" },
  { icon: IconUsers, value: "2.7k+", label: "Positive Reviews" },
  { icon: IconTrendUp, value: "90%", label: "Improved Projects" },
  { icon: IconLayers, value: "4", label: "Specialized Divisions" },
];

export default function TrustStrip({ className = "" }) {
  return (
    <div className={`lx-trust-strip ${className}`}>
      {ITEMS.map(({ icon: Icon, value, label }) => (
        <div className="lx-trust-item" key={label}>
          <Icon size={26} />
          <span>
            <strong>{value}</strong>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
