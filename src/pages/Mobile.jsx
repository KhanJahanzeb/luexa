import { useState } from "react";
import Layout from "../components/Layout.jsx";

const MEDIA_PORTFOLIO_TABS = [
  {
    label: "Birthdays & Events",
    icon: "fa-birthday-cake",
    group: "media-birthday",
    images: Array.from({ length: 11 }, (_, i) => i + 1).map((n) => ({
      src: `/assets/images/portfolio/birthday/b${n}.jpg`,
      alt: `Lunexa Media Birthdays & Events photo ${n}`,
    })),
  },
  {
    label: "Family Portraits",
    icon: "fa-users",
    group: "media-family",
    images: Array.from({ length: 10 }, (_, i) => i + 1).map((n) => ({
      src: `/assets/images/portfolio/family/f${n}.jpg`,
      alt: `Lunexa Media Family Portraits photo ${n}`,
    })),
  },
  {
    label: "Graduation Sessions",
    icon: "fa-graduation-cap",
    group: "media-graduation",
    images: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => ({
      src: `/assets/images/portfolio/graduation/g${n}.jpg`,
      alt: `Lunexa Media Graduation Sessions photo ${n}`,
    })),
  },
];

export default function Mobile() {
  const [activePortfolioTab, setActivePortfolioTab] = useState(0);
  return (
    <Layout title={"Lunexa Media — Professional Photography & Video | Lunexa Studios"} description={"From stunning photography to impactful visuals, Lunexa Media transforms your vision into powerful stories that connect, inspire, and sell."} activePath={"/mobile"}>
      <div className={"ban-sec-slider"}>
        <div className={"banner-sec"}>
          <div className={"ban-slide"}>
            <div className={"banner-pic"}>
              <img src={"/assets/images/Mobile Appsbanoverlay-01.png"} alt={""} />
            </div>
            <div className={"ban-txt-box"}>
              <div className={"container"}>
                <div className={"row"}>
                  <div className={"col-lg-6"}>
                    <div className={"txt-container"}>
                      <div className={"ban-txt"}>
                        <br />
                        <br />
                        <br />
                        <h1>
                          Professional Photography &amp; Visuals That Capture Stories
                        </h1>
                        <h4>
                          From stunning photography to impactful visuals, Lunexa Media transforms your vision into powerful stories that connect, inspire, and sell.
                        </h4>
                        <ul>
                          <li>
                            Product &amp; Brand Photography, Video &amp; Motion Content
                          </li>
                          <li>
                            Event Coverage &amp; Lifestyle Shoots
                          </li>
                        </ul>
                        <a href={"javascript:;"} className={"btn-cstm leadfrm"} rel={"Lunexa Media"}>
                          Get Started
                        </a>
                        <a href={"/contact"} className={"btn-cstm"}>
                          Get a Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={"ban-btm-box"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"ban-btm-logos"}>
              <ul>
                <li>
                  <img src={"/assets/images/bclient-logos/01.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/02.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/03.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/04.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/05.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/06.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/07.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/08.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/09.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/10.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/11.png"} height={"50"} alt={""} />
                </li>
                <li>
                  <img src={"/assets/images/bclient-logos/12.png"} height={"50"} alt={""} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={"types-sec"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-12"}>
              <h2 className={"sec-hd text-center"}>
                What We Shoot
                <span>
                  Every session is crafted to capture real moments with a polished, editorial feel.
                </span>
              </h2>
              <ul className={"type-ul"}>
                <li className={"type-li1"}>
                  <div className={"type-box"}>
                    <i className={"sprite-icn sprite-icn-static"}></i>
                    <h5>
                      Portraits
                    </h5>
                    <p>
                      Beautiful &amp; Creative Portrait Photography
                    </p>
                  </div>
                </li>
                <li className={"type-li2"}>
                  <div className={"type-box"}>
                    <i className={"sprite-icn sprite-icn-dynamic"}></i>
                    <h5>
                      Weddings
                    </h5>
                    <p>
                      Capturing Your Special Day With Elegance
                    </p>
                  </div>
                </li>
                <li className={"type-li3"}>
                  <div className={"type-box"}>
                    <i className={"sprite-icn sprite-icn-cms"}></i>
                    <h5>
                      Glamour
                    </h5>
                    <p>
                      Stylish &amp; Artistic Glamour Shoots
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={"get-started-cta animatedParent"} data-img={"url(assets/images/cta-bg-01.jpg)"} data-sequence={"200"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-12"}>
              <h3 className={"color-white animated bounceInUp"} data-id={"1"}>
                <strong>
                  Your Success is Our Mission
                </strong>
                <span>
                  In the fast-paced digital world, choosing the right marketing partner makes all the difference. Partner with Lunexa &amp; take your brand to the next level.
                </span>
              </h3>
              <ul>
                <li className={"animated bounceInUp"} data-id={"3"}>
                  <a href={"/contact"} className={"text-center blue-cta-btn"}>
                    <i className={"fa fa-check-circle"} aria-hidden={"true"}></i>
                    Let's Talk Strategy
                  </a>
                </li>
                <li className={"animated bounceInUp"} data-id={"4"}>
                  <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }} className={"text-center white-cta-btn"}>
                    <i className={"fa fa-comments"} aria-hidden={"true"}></i>
                    Live Chat
                  </a>
                </li>
              </ul>
              <div>
                <span className={"cta-call"}>
                  or call us at
                  <a href={"tel:+ 210 360 9849"}>
                    <i className={"fa fa-phone"} aria-hidden={"true"}></i>
                    + 210 360 9849
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"tab-pack-box pack-sec sec-pad"} data-img={"url(assets/images/packeges.jpg)"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-12 text-center"}>
              <h3 className={"lg-sub-hd"}>
                Get in Touch
              </h3>
              <p>
                Ready to capture your moments? Contact us today! &middot; <a href={"tel:+ 210 360 9849"}>210 360 9849</a> &middot; <a href={"mailto:Lunexastudios1@gmail.com"}>Lunexastudios1@gmail.com</a> &middot; Texas, USA
              </p>
            </div>
            <div className={"col-lg-12"}>
              <h2 className={"sec-hd text-center"}>
                Photography &amp; Video Packages
              </h2>
              <div className={"spacebr"}>
                <br />
              </div>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <div className={"custom-pkg package logopack"}>
                <div className={"logodesign-package"}>
                  <ul className={"pack-list animatedParent"} data-sequence={"100"}>
                    <li className={"normal-offer-pack"}>
                      <i className={"pkg-icn pkg-icn1"}></i>
                      <h3 className={"pack-title"}>
                        Family Session
                        <span>
                          <br />
                          One hour, one location
                        </span>
                      </h3>
                      <ul className={"pack-features pack-spec-scroll"}>
                        <li>
                          1 hour session, One location
                        </li>
                        <li>
                          Up to 5 people (additional $50 per person over 5)
                        </li>
                        <li>
                          30 high-resolution images (including B&amp;W edits)
                        </li>
                        <li>
                          Online gallery for 4 weeks
                        </li>
                        <li>
                          30 Second Vertical cinematic reel
                        </li>
                      </ul>
                      <div className={"pack-price"}>
                        <h4>
                          <sup>
                            $
                          </sup>
                          450
                        </h4>
                      </div>
                      <a href={"/contact"} className={"pack-ordernow"}>
                        Book Now
                      </a>
                      <ul className={"pkg-cta"}>
                        <li>
                          <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }}>
                            <i className={"fa fa-comments"} aria-hidden={"true"}></i>
                            Live Chat
                          </a>
                        </li>
                        <li>
                          <a href={"tel:+ 210 360 9849"}>
                            <i className={"fa fa-phone"} aria-hidden={"true"}></i>
                            + 210 360 9849
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className={"normal-offer-pack"}>
                      <i className={"pkg-icn pkg-icn2"}></i>
                      <h3 className={"pack-title"}>
                        Graduation Session
                        <span>
                          <br />
                          One hour, outdoor location
                        </span>
                      </h3>
                      <ul className={"pack-features pack-spec-scroll"}>
                        <li>
                          1 hour session, 1 Outdoor Location
                        </li>
                        <li>
                          Graduation person only (Add family/friend: +$50)
                        </li>
                        <li>
                          30 high-resolution images (B&amp;W edits included)
                        </li>
                        <li>
                          Online gallery for 4 weeks
                        </li>
                        <li>
                          30 second Vertical Cinematic Reel
                        </li>
                      </ul>
                      <div className={"pack-price"}>
                        <h4>
                          <sup>
                            $
                          </sup>
                          450
                        </h4>
                      </div>
                      <a href={"/contact"} className={"pack-ordernow"}>
                        Book Now
                      </a>
                      <ul className={"pkg-cta"}>
                        <li>
                          <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }}>
                            <i className={"fa fa-comments"} aria-hidden={"true"}></i>
                            Live Chat
                          </a>
                        </li>
                        <li>
                          <a href={"tel:+ 210 360 9849"}>
                            <i className={"fa fa-phone"} aria-hidden={"true"}></i>
                            + 210 360 9849
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className={"always-active pkg-active popular"}>
                      <i className={"pkg-icn pkg-icn3"}></i>
                      <h3 className={"pack-title"}>
                        Birthday / Party
                        <span>
                          <br />
                          Two hours, one location
                        </span>
                      </h3>
                      <ul className={"pack-features pack-spec-scroll"}>
                        <li>
                          2 hour session, One location
                        </li>
                        <li>
                          Event candid pictures
                        </li>
                        <li>
                          Family portraits and groups included
                        </li>
                        <li>
                          100+ high-resolution pictures
                        </li>
                        <li>
                          Online gallery for 4 weeks
                        </li>
                        <li>
                          Add Videographer for $350
                        </li>
                      </ul>
                      <div className={"pack-price"}>
                        <h4>
                          <sup>
                            $
                          </sup>
                          500
                        </h4>
                      </div>
                      <a href={"/contact"} className={"pack-ordernow"}>
                        Inquire Now
                      </a>
                      <ul className={"pkg-cta"}>
                        <li>
                          <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }}>
                            <i className={"fa fa-comments"} aria-hidden={"true"}></i>
                            Live Chat
                          </a>
                        </li>
                        <li>
                          <a href={"tel:+ 210 360 9849"}>
                            <i className={"fa fa-phone"} aria-hidden={"true"}></i>
                            + 210 360 9849
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className={"pkg-sealed-icn"}>
                      <i className={"pkg-icn pkg-icn4"}></i>
                      <h3 className={"pack-title"}>
                        Wedding Events
                        <span>
                          <br />
                          Starting package
                        </span>
                      </h3>
                      <ul className={"pack-features pack-spec-scroll"}>
                        <li>
                          Outdoor Photography Couple Session
                        </li>
                        <li>
                          4 hours session
                        </li>
                        <li>
                          One Outdoor location and 1 venue
                        </li>
                        <li>
                          Online gallery for 4 weeks
                        </li>
                        <li>
                          30 Second Vertical cinematic reel
                        </li>
                        <li>
                          Add-ons: Videography Coverage +$1000, Drone Coverage +$350, Printed Album (60 Pictures) +$200
                        </li>
                      </ul>
                      <div className={"pack-price"}>
                        <h4>
                          Starting from
                          <sup>
                            $
                          </sup>
                          1200
                        </h4>
                      </div>
                      <a href={"/contact"} className={"pack-ordernow"}>
                        Details &amp; Booking
                      </a>
                      <ul className={"pkg-cta"}>
                        <li>
                          <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }}>
                            <i className={"fa fa-comments"} aria-hidden={"true"}></i>
                            Live Chat
                          </a>
                        </li>
                        <li>
                          <a href={"tel:+ 210 360 9849"}>
                            <i className={"fa fa-phone"} aria-hidden={"true"}></i>
                            + 210 360 9849
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"concept-sec sec-pad"}>
        <style>{`
          .media-portfolio-thumb { width: 100%; height: 220px; object-fit: cover; }
          .portfolio-tabs-nav { margin-bottom: 30px; }
          .portfolio-tabs-nav li a { cursor: pointer; user-select: none; }
          .portfolio-tab-panel { animation: portfolioFadeIn .4s ease; }
          @keyframes portfolioFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-12 col-md-12 text-center"}>
              <h2 className={"sec-hd text-center"}>
                Our Creative Portfolio
                <span>
                  Showcasing the passion and quality of Lunexa Media. Pick a category, then click any photo to view the full gallery.
                </span>
              </h2>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-lg-12 text-center"}>
              <ul className={"pack-list-tabs portfolio-tabs-nav"}>
                {MEDIA_PORTFOLIO_TABS.map((tab, i) => (
                  <li key={tab.label}>
                    <a
                      href={"javascript:;"}
                      className={i === activePortfolioTab ? "active" : ""}
                      onClick={() => setActivePortfolioTab(i)}
                    >
                      <i className={`fa ${tab.icon}`} aria-hidden={"true"}></i>
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={"row portfolio-tab-panel"} key={activePortfolioTab}>
            <div className={"col-lg-12"}>
              <div className={"portfolio-slider"}>
                <div className={"portfolio-tar logoport"}>
                  <ul className={"row portfolio-box"}>
                    {MEDIA_PORTFOLIO_TABS[activePortfolioTab].images.map((img) => (
                      <li className={"col-6 col-sm-4 col-md-3"} key={img.src}>
                        <a href={img.src} data-fancybox={MEDIA_PORTFOLIO_TABS[activePortfolioTab].group}>
                          <span className={"iconport"}>
                            <i className={"fa fa-search-plus"} aria-hidden={"true"}></i>
                          </span>
                          <img src={img.src} className={"img-responsive media-portfolio-thumb"} alt={img.alt} loading={"lazy"} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"process-sec sec-pad"}>
        <div className={"container"}>
          <div className={"col-lg-12"}>
            <h2 className={"sec-hd text-center"}>
              Simple Steps to Digital Success
              <span>
                Our streamlined process ensures your digital growth is seamless and effective.
              </span>
            </h2>
            <ul className={"process-ul"}>
              <i className={"actv-ul"}></i>
              <li id={"mprocess1"} className={"prc-all prc-1 active"}>
                <h4>
                  Discovery &amp; Consult
                </h4>
                <i className={"process-icn prcss-icn1"}></i>
              </li>
              <li id={"mprocess2"} className={"prc-all prc-2"}>
                <h4>
                  Strategy &amp; Planning
                </h4>
                <i className={"process-icn prcss-icn2"}></i>
              </li>
              <li id={"mprocess3"} className={"prc-all prc-3"}>
                <h4>
                  Execution &amp; Optimize
                </h4>
                <i className={"process-icn prcss-icn3"}></i>
              </li>
              <li id={"mprocess4"} className={"prc-all prc-4"}>
                <h4>
                  Results &amp; Growth
                </h4>
                <i className={"process-icn prcss-icn4"}></i>
              </li>
            </ul>
            <div className={"process-content"}>
              <div className={"process-arrows"}>
                <div className={"arrow-left disable"}></div>
                <div className={"arrow-right"}></div>
              </div>
              <div className={"process1 process-tabs active"}>
                <div className={"col-md-1"}></div>
                <div className={"col-md-5"}>
                  <div className={"spacebr"}>
                    <br />
                    <br />
                  </div>
                  <h3 className={"lg-sub-hd"}>
                    Discovery &amp; Consult
                  </h3>
                  <p>
                    We begin by understanding your business, goals, and audience. Through collaborative discussions, we gather insights to create a clear vision and define project objectives.
                  </p>
                </div>
                <div className={"col-md-5 text-right"}>
                  <img src={"/assets/images/process-tab-1.png"} alt={""} />
                </div>
                <div className={"col-md-1"}></div>
              </div>
              <div className={"process2 process-tabs"}>
                <div className={"col-md-1"}></div>
                <div className={"col-md-5"}>
                  <div className={"spacebr"}>
                    <br />
                    <br />
                  </div>
                  <h3 className={"lg-sub-hd"}>
                    Strategy &amp; Planning
                  </h3>
                  <p>
                    Next, we build a tailored roadmap. From brand direction to execution timelines, we structure a strategic approach to ensure your project has a strong foundation.
                  </p>
                </div>
                <div className={"col-md-5 text-right"}>
                  <img src={"/assets/images/process-tab-2.png"} alt={""} />
                </div>
                <div className={"col-md-1"}></div>
              </div>
              <div className={"process3 process-tabs"}>
                <div className={"col-md-1"}></div>
                <div className={"col-md-5"}>
                  <div className={"spacebr"}>
                    <br />
                    <br />
                  </div>
                  <h3 className={"lg-sub-hd"}>
                    Execution &amp; Optimize
                  </h3>
                  <p>
                    Our team brings the strategy to life through impactful design, development, and marketing. We track performance and refine consistently to achieve the best results.
                  </p>
                </div>
                <div className={"col-md-5 text-right"}>
                  <img data-src={"/assets/images/process-tab-3.png"} alt={""} />
                </div>
                <div className={"col-md-1"}></div>
              </div>
              <div className={"process4 process-tabs"}>
                <div className={"col-md-1"}></div>
                <div className={"col-md-5"}>
                  <div className={"spacebr"}>
                    <br />
                    <br />
                  </div>
                  <h3 className={"lg-sub-hd"}>
                    Results &amp; Growth
                  </h3>
                  <p>
                    Our team brings the strategy to life through impactful design, development, and marketing. We track performance and refine consistently to achieve the best results.
                  </p>
                </div>
                <div className={"col-md-5 text-right"}>
                  <img src={"/assets/images/process-tab-4.png"} alt={""} />
                </div>
                <div className={"col-md-1"}></div>
              </div>
            </div>
            <div className={"text-center"}>
              <br />
              <a href={"/contact"} className={"more-btn"}>
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={"concept-sec sec-pad"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-12 col-md-12 text-center"}>
              <h2 className={"sec-hd text-center"}>
                Transform Your Business with Lunexa!
                <span>
                  Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
