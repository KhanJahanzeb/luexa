import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LeadPopup from "./LeadPopup.jsx";
import CookieConsent from "./CookieConsent.jsx";

// custom.js is mostly bare top-level jQuery ($('.selector').on(...), .slick({...}))
// rather than $(document).ready(...) — it was written to be the last script on an
// already-fully-rendered static page. Loading it in index.html (before React paints)
// means it queries an empty #root and binds nothing. Injecting it here, after the
// page's real content has mounted, gives it the DOM it expects — every navigation is
// a full page load (see README §"navigation uses plain <a>"), so this runs fresh
// exactly once per page view, same as the original site loading it at the bottom of <body>.
let customJsLoaded = false;
function loadCustomJs() {
  if (customJsLoaded) return;
  customJsLoaded = true;
  const script = document.createElement("script");
  script.src = "/assets/js/custom.js";
  document.body.appendChild(script);
}

export default function Layout({ title, description, activePath, children, showLeadPopup = true }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  useEffect(() => {
    loadCustomJs();
  }, []);

  return (
    <>
      <Header activePath={activePath} />
      {showLeadPopup && <LeadPopup />}
      {children}
      <Footer />
      <CookieConsent />
    </>
  );
}
