import { useState } from "react";
import CountrySelect from "./CountrySelect.jsx";

// The slide-in "Get 80% Discount" lead form that sits at the top of every page.
// Originally posted to process-form.php (PHPMailer) — kept intact, see README.
export default function LeadPopup() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/process-form.php", {
        method: "POST",
        body: new FormData(e.target),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="form-topmain">
      <div className="container">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <div className="open-form-slide">
              <form id="form7" className="js-recaptcha-form" method="POST" onSubmit={handleSubmit}>
                <div>
                  <div className="frmicon-box">
                    <input type="text" placeholder="Enter Your Full Name" name="popupname" id="name" required />
                  </div>

                  <div className="frmicon-box">
                    <input type="email" placeholder="Enter Your Email" name="popupemail" id="email" required />
                  </div>

                  <div className="frmicon-box newcountrycode">
                    <span></span>
                    <CountrySelect id="popupformcountry" name="pc" />
                  </div>

                  <div className="frmicon-box phonecode">
                    <input type="text" name="countrycode" id="popupcountrycode" readOnly />
                    <input type="tel" id="phoneNum2" name="phone" placeholder="Enter Your Number" />
                  </div>

                  <div className="text-center">
                    <input type="hidden" name="g-recaptcha-response" />
                    <button type="submit" className="popup-btn" id="popupformsubmit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Let’s Get Started"}
                    </button>
                  </div>
                  {status === "sent" && <p className="lead-popup-status lead-popup-status--ok">Thanks! We’ll be in touch shortly.</p>}
                  {status === "error" && <p className="lead-popup-status lead-popup-status--err">Something went wrong, please try again.</p>}
                </div>
                <span className="uptownloader"></span>
              </form>
            </div>
            <div className="open-form-footr">
              <h4>Get 80% Discount <i className="fa fa-arrow-circle-down" aria-hidden="true"></i></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
