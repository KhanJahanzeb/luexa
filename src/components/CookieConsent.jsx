import { IconClose } from "./icons/Icon.jsx";
// Slide-in "Get In Touch" popup with a countdown clock. The countdown numbers
// (.days/.hours/.minutes/.seconds under #clockdiv) are populated at runtime
// by initializeClock() in the legacy assets/js/custom.js script.
// Reworded from the original template's "Cyber Monday $10 Free Voucher" —
// fabricated discount code, and its CTA linked to a page that doesn't exist.
export default function CookieConsent() {
  return (
    <>
      <div className="cyber-popup">
        <div className="close-cybr"><i className={"lx-btn-icon"}><IconClose size={16} /></i></div>
        <h3>Get In <br />Touch</h3>
        <div className="countr">
          <div className="clock" id="clockdiv">
            <div>
              <span className="days">1</span>
              <div className="smalltext">:</div>
            </div>
            <div>
              <span className="hours">11</span>
              <div className="smalltext">:</div>
            </div>
            <div>
              <span className="minutes">59</span>
              <div className="smalltext">:</div>
            </div>
            <div>
              <span className="seconds">54</span>
            </div>
          </div>
        </div>
        <h4 className="cybr-hd2">This week's <span>Free Consultation Slots</span></h4>
        <a href="/contact" className="cybr-btn">Book a Free Consultation</a>
      </div>

      <div className="black-layout"></div>
    </>
  );
}
