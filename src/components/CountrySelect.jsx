import countries from "../data/countries.js";

// Faithful port of the legacy `.countrylist` <select> used by every lead form.
// Dial codes are not unique (US/Canada both "1"), so — like the original markup —
// the default pick is expressed via `selected` on the individual <option>
// rather than a <select> defaultValue (which can only match the first same-value option).
export default function CountrySelect({ id, name = "pc", className = "countrylist valid", onChange }) {
  return (
    <select id={id} name={name} className={className} onChange={onChange}>
      {countries.map((c) => (
        <option key={`${c.abbr}-${c.dial}`} value={c.dial} data-abbr={c.abbr} selected={c.selected}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
