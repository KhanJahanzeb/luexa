// Deterministic initials avatar — replaces stock/stranger headshot photos
// used for testimonials and team cards. No real client or team photos exist
// (confirmed against the live site too), so a monogram is honest instead of
// implying a fake real photo.

const PALETTE = ["#6a3df5", "#2563eb", "#0891b2", "#d946ef", "#f59e0b", "#16a34a", "#e11d48"];

function initials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function colorFor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return PALETTE[hash % PALETTE.length];
}

export default function Avatar({ name, size = 64, className = "" }) {
  return (
    <span
      className={`lx-avatar ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.36), background: colorFor(name) }}
    >
      {initials(name)}
    </span>
  );
}
