export default function Footer() {
  return (
    <footer>
      <div className="ftr-top-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ftr-logo text-left">
                <a href="/">
                  <img src="/assets/images/LogifyeLogoWhite.png" alt="" />
                </a>
              </div>
              <p className="ftr-tagline">Driving Digital Growth with Innovation &amp; Strategy</p>
              <ul className="ftr-contact-info remove-border text-left">
                <li><i className="fa fa-phone" aria-hidden="true"></i> Toll Free:+ 210 360 9849</li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:Lunexastudios1@gmail.com">Lunexastudios1@gmail.com</a></li>
                <li><i className="fa fa-map-marker" aria-hidden="true"></i>Texas, USA</li>
                <li className="nopad-left">
                  <ul className="ftr-social-icon"></ul>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="ftr-links text-left">
                    <h4>Services</h4>
                    <ul className="ds-inline-blck">
                      <li><a href="/">Lunexa Studio</a></li>
                      <li><a href="/website">Lunexa Digital</a></li>
                      <li><a href="/branding">Lunexa Launchpad</a></li>
                      <li><a href="/ecommerce">Lunexa Connect</a></li>
                      <li><a href="/mobile">Lunexa Media</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ftr-links text-left">
                    <h4>More Links</h4>
                    <ul className="ds-inline-blck">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/packages">Our Pricing</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ftr-btm-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              &copy; 2026 Lunexa. All Rights Reserved.{" "}
              <span className="ftr-btm-links">
                &nbsp;<a href="/terms-and-conditions">Terms And Conditions</a>
                &nbsp;|&nbsp;
                <a href="/privacy-policy">Privacy Policy</a>
                &nbsp;|&nbsp;
                <a href="/refund-policy">Refund Policy</a>
              </span>
            </div>
            <div className="col-lg-4 col-md-4 text-right">
              <img src="/assets/images/paypal-pic.png" width="189" height="32" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="disclaimer-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p><strong>Disclaimer:</strong></p>
              <p>
                Logo, portfolio, images and content are sole property of Lunexa Studio Design. All third party
                company names, brand names, trademarks displayed on this website are the property of their
                respective owners. Furthermore, Lunexa Studio Design has no influence over the third party
                material that is being displayed on the website. Therefore, we are also not responsible for any
                resemblance with any other material on the web. These portfolios and case studies are actual but
                exemplary (for better understanding); the actual names, designs, functionality, content and
                stats/facts may differ from the actual projects. This is due to the strict NDA policy that Lunexa
                Studio Design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
