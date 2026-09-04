import { IconChat, IconMenu, IconPhone, IconUser } from "./icons/Icon.jsx";
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/website", label: "Lunexa Digital" },
  { to: "/branding", label: "Lunexa Launchpad" },
  { to: "/ecommerce", label: "Lunexa Connect" },
  { to: "/mobile", label: "Lunexa Media" },
  { to: "/about", label: "About Us" },
  { to: "/packages", label: "Our Pricing" },
  { to: "/contact", label: "Contact" },
];

export default function Header({ activePath }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="logo">
              <a href="/">
                <img src="/assets/images/sticky-logo.svg" alt="" />
                <img src="/assets/images/sticky-logo.svg" className="stick-img" alt="" />
              </a>
              <a href="javascript:;" className="nav-btn">
                <i className={"lx-btn-icon"}><IconMenu size={20} /></i>
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="hdr-top-links">
              <ul className="top-info-links">
                <li><a href="#"><i className={"lx-btn-icon"}><IconUser size={14} /></i> My Account</a></li>
                <li>
                  <a
                    href="javascript:;"
                    title="Live Chat"
                    target="_self"
                    onClick={() => {
                      if (typeof window.setButtonURL === "function") window.setButtonURL();
                    }}
                  >
                    <i className={"lx-btn-icon"}><IconChat size={18} /></i> Live Chat
                  </a>
                </li>
                <li><a href="tel:+ 210 360 9849"><i className={"lx-btn-icon"}><IconPhone size={16} /></i>+ 210 360 9849</a></li>
              </ul>
            </div>

            <div className="clearfix"></div>

            <div className="top-nav">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.to}
                    className={`dropdown-parent${link.to === activePath ? " active_nav" : ""}`}
                  >
                    <a href={link.to}>{link.label}</a>
                  </li>
                ))}
                <li className="sticky-call">
                  <a href="tel:+ 210 360 9849"><i className={"lx-btn-icon"}><IconPhone size={16} /></i>+ 210 360 9849</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid no-pad">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
      </div>
    </header>
  );
}
