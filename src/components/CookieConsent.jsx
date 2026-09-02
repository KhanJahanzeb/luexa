// "Cyber Monday" promo popup with countdown clock. The countdown numbers
// (.days/.hours/.minutes/.seconds under #clockdiv) are populated at runtime
// by initializeClock() in the legacy assets/js/custom.js script.
export default function CookieConsent() {
  return (
    <>
      <div className="cyber-popup">
        <div className="close-cybr"><i className="fa fa-times" aria-hidden="true"></i></div>
        <h3>Cyber <br />Monday</h3>
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
        <h4 className="cybr-hd2">just today! <span>$10 Free Voucher</span></h4>
        <a href="cyber-logo-offer/" className="cybr-btn">Avail Voucher Now</a>
        <h6 className="cybr-code">Code: CYBERMONDAY10</h6>
      </div>

      <div className="black-layout"></div>
    </>
  );
}
