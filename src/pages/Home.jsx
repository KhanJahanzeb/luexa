import { IconCamera, IconCart, IconChat, IconCheck, IconChevronUp, IconClock, IconClose, IconDashboard, IconGauge, IconHeadset, IconInfo, IconLayers, IconPhone, IconSearch, IconSparkle, IconStorefront, IconTrendUp, IconUser, IconWeb } from "../components/icons/Icon.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import Avatar from "../components/Avatar.jsx";
import HeroArt from "../components/HeroArt.jsx";

import Layout from "../components/Layout.jsx";

export default function Home() {
  return (
    <Layout title={"Lunexa Studio — Digital Marketing Agency"} description={"Amplify your brand with cutting-edge digital marketing. From websites to marketplaces, Lunexa Studio is your full-stack digital partner — Lunexa Digital, LaunchPad, Connect & Media."} activePath={"/"}>
      <div className={"ban-sec-slider"}>
        <div className={"banner-sec"}>
          <div className={"ban-slide"}>
            <div className={"banner-pic lx-hero-bg"}></div>
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
                          Amplify Your Brand with Cutting-Edge Digital Marketing
                        </h1>
                        <ul>
                          <li>
                            From websites to marketplaces, customer support to visual storytelling — your full-stack digital partner
                          </li>
                          <li>
                            We build scalable digital ecosystems that help businesses grow and thrive
                          </li>
                        </ul>
                        <a href={"javascript:;"} className={"btn-cstm leadfrm"} type={"logo"}>
                          Get Started
                        </a>
                        <a href={"/contact"} className={"btn-cstm"}>
                          Get a Free Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"col-lg-6 lx-hero-art-col"}>
                    <HeroArt theme={"home"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"banner-sec"}>
          <div className={"ban-slide"}>
            <div className={"banner-pic lx-hero-bg"}></div>
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
                          Data Driven Strategies, Measurable Results
                        </h1>
                        <ul>
                          <li>
                            8+ years of experience in digital marketing services
                          </li>
                          <li>
                            Every strategy is powered by real-time data, analytics, and market insights
                          </li>
                          <li>
                            Complete transparency through clear, data-driven reporting
                          </li>
                        </ul>
                        <a href={"javascript:;"} className={"btn-cstm leadfrm"} rel={"Logo Design"}>
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"col-lg-6 lx-hero-art-col"}>
                    <HeroArt theme={"digital"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"banner-sec"}>
          <div className={"ban-slide"}>
            <div className={"banner-pic lx-hero-bg"}></div>
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
                          Your Success is Our Mission
                        </h1>
                        <ul>
                          <li>
                            In the fast-paced digital world, choosing the right digital marketing partner makes all the difference
                          </li>
                          <li>
                            Lunexa Digital, Lunexa LaunchPad, Lunexa Connect &amp; Lunexa Media — one team, every channel
                          </li>
                        </ul>
                        <a href={"javascript:;"} className={"btn-cstm leadfrm"} rel={"Logo Design"}>
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"col-lg-6 lx-hero-art-col"}>
                    <HeroArt theme={"connect"} />
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
            <div className={"col-md-12"}>
              <h2 className={"sec-hd text-center"}>
                Powering Success for Top Brands
                <span>
                  Innovative digital solutions for growth — websites, apps, and digital strategies that drive traffic, conversions, and scale.
                </span>
              </h2>
            </div>
            <div className={"col-md-12"}>
              <TrustStrip />
            </div>
          </div>
        </div>
      </section>
      <section className={"concept-sec sec-pad"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-5 col-md-5 animatedParent"} data-sequence={"150"}>
              <h2 className={"lg-hd animated bounceInLeft"} data-id={"1"}>
                Data Driven Strategies,{" "}
                <strong>
                  Measurable Results
                </strong>
              </h2>
              <div className={"concept-sldr-txt"}>
                <div>
                  <p className={"large-pra animated bounceInLeft"} data-id={"3"}>
                    At Lunexa, we specialize in crafting innovative digital marketing strategies that drive real business growth. Your brand stays ahead in the competitive digital landscape. Every strategy we create is powered by real-time data, analytics, and market insights to deliver results-driven digital marketing. We combine creative thinking with modern digital marketing technology to build innovative campaigns that stand out, backed by complete transparency through clear, data-driven reporting.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-1 col-md-1 text-center"}></div>
            <div className={"col-lg-6 col-md-6 text-center"}>
              <div className={"concept-sldr-img"}>
                <div>
                  <HeroArt theme={"home"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"types-sec"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-12"}>
              <h2 className={"sec-hd text-center"}>
                Core Service Divisions
                <span>
                  One team, four specialized divisions — everything your brand needs to grow.
                </span>
              </h2>
              <ul className={"type-ul"}>
                <li className={"type-li1"}>
                  <a href={"/website"}>
                    <div className={"type-box"}>
                      <i className={"lx-icon-badge"}><IconWeb size={36} /></i>
                      <h5>
                        Lunexa Digital
                      </h5>
                      <p>
                        Innovative digital solutions for growth. Websites, apps, and data-driven digital strategies designed to increase traffic, boost conversions, and scale your business — Web Development, Mobile Apps, Custom Software, Digital Marketing.
                      </p>
                    </div>
                  </a>
                </li>
                <li className={"type-li2"}>
                  <a href={"/branding"}>
                    <div className={"type-box"}>
                      <i className={"lx-icon-badge"}><IconStorefront size={36} /></i>
                      <h5>
                        Lunexa LaunchPad
                      </h5>
                      <p>
                        Your gateway to e-commerce success. From product sourcing to marketplace growth strategies that drive sales, visibility, and long-term success — Product Research, E-Commerce Marketing, Store Setup, Fulfillment &amp; Logistics.
                      </p>
                    </div>
                  </a>
                </li>
                <li className={"type-li3"}>
                  <a href={"/ecommerce"}>
                    <div className={"type-box"}>
                      <i className={"lx-icon-badge"}><IconHeadset size={36} /></i>
                      <h5>
                        Lunexa Connect
                      </h5>
                      <p>
                        Smarter outsourcing &amp; call center solutions. Improve customer experience, reduce operational costs, and scale business operations efficiently — Multilingual CX Management, Back-Office Outsourcing, Technical Support, Call Center Support.
                      </p>
                    </div>
                  </a>
                </li>
                <li className={"type-li4"}>
                  <a href={"/mobile"}>
                    <div className={"type-box"}>
                      <i className={"lx-icon-badge"}><IconCamera size={36} /></i>
                      <h5>
                        Lunexa Media
                      </h5>
                      <p>
                        Visuals that inspire, convert, and sell! High-quality photography and video content designed to elevate your brand and drive audience engagement — Product &amp; Brand Photography, Video &amp; Motion Content, Event Coverage, Lifestyle Shoots.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={"get-started-cta animatedParent lx-cta-bg"} data-img={"url(assets/images/cta-bg-01.jpg)"} data-sequence={"200"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-12"}>
              <h3 className={"color-white animated bounceInUp"} data-id={"1"}>
                <strong>
                  Your Success is Our Mission
                </strong>
                <span>
                  In the fast-paced digital world, choosing the right digital marketing partner makes all the difference. At Lunexa, we don't just create campaigns — we craft strategies that deliver measurable success. Partner with Lunexa &amp; take your brand to the next level.
                </span>
              </h3>
              <ul>
                <li className={"animated bounceInUp"} data-id={"3"}>
                  <a href={"/contact"} className={"text-center blue-cta-btn"}>
                    <i className={"lx-btn-icon"}><IconCheck size={18} /></i>
                    Let's Talk Strategy
                  </a>
                </li>
                <li className={"animated bounceInUp"} data-id={"4"}>
                  <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }} className={"text-center white-cta-btn"}>
                    <i className={"lx-btn-icon"}><IconChat size={18} /></i>
                    Live Chat
                  </a>
                </li>
              </ul>
              <div>
                <span className={"cta-call"}>
                  or call us at
                  <a href={"tel:+ 210 360 9849"}>
                    <i className={"lx-btn-icon"}><IconPhone size={16} /></i>
                    + 210 360 9849
                  </a>
                </span>
              </div>
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
      <section id={"packages-sec"} className={"tab-pack-box pack-sec sec-pad lp-pack-sec"} data-img={"url(assets/images/portf-bg.jpg)"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <h2 className={"sec-hd text-center"}>
                Your Marketing Department Without the Cost of Building One
                <span>
                  The Lunexa One Team Plan combines advertising, content creation, social media, SEO, and strategic consulting under one dedicated team.
                </span>
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
                    <li className={"less-offer-pack"}>
                      <i className={"pkg-icn pkg-icn1"}><IconLayers size={26} /></i>
                      <h3 className={"pack-title"}>
                        Lunexa One Team Plan
                        <span>
                          <br />
                          Best Seller
                        </span>
                      </h3>
                      <ul className={"pack-features pack-spec-scroll"}>
                        <li>
                          PLAN INCLUDES:
                        </li>
                        <li>
                          Marketing &amp; Advertising
                        </li>
                        <li>
                          Social Media Management
                        </li>
                        <li>
                          Content Creation
                        </li>
                        <li>
                          SEO &amp; Online Presence
                        </li>
                        <li>
                          Exclusive Benefits
                          <div className={"icn-tooltip"}>
                            <i className={"lx-btn-icon"}><IconInfo size={14} /></i>
                            <div className={"tooltip-innr"}>
                              (Dedicated Account Manager, Priority Support)
                            </div>
                          </div>
                        </li>
                        <li>
                          Reporting &amp; Strategy
                        </li>
                        <li>
                          6-Month Commitment Required
                        </li>
                      </ul>
                      <div className={"pack-price"}>
                        <h4>
                          <sup>
                            $
                          </sup>
                          5,000
                        </h4>
                        <p>
                          /month + Advertising Budget Separate
                        </p>
                        <a href={"/packages"} className={"view-more"}>
                          View Details
                        </a>
                      </div>
                      <a href={"/contact"} className={"pack-ordernow"}>
                        Get Started
                      </a>
                      <ul className={"pkg-cta"}>
                        <li>
                          <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }}>
                            <i className={"lx-btn-icon"}><IconChat size={18} /></i>
                            Live Chat
                          </a>
                        </li>
                        <li>
                          <a href={"tel:+ 210 360 9849"}>
                            <i className={"lx-btn-icon"}><IconPhone size={16} /></i>
                            + 210 360 9849
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"text-center"}>
                <br />
                <a href={"/packages"} className={"more-btn"}>
                  View All Packages
                </a>
                <div className={"feature-sec animatedParent"} data-sequence={"50"}>
                  <h2 className={"sec-hd text-center"}>
                    <span>
                      Your Success is Our Mission
                    </span>
                  </h2>
                  <ul className={"features-ul"}>
                    <li className={"animated bounceInLeft"} data-id={"1"}>
                      <i className={"feature-icn feature-icn-1"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconTrendUp size={22} /></i>
                      <h5>
                        Data-Driven
                        <br />
                        Approach
                      </h5>
                      <div className={"icn-tooltip"}>
                        <div className={"tooltip-innr"}>
                          Every strategy we create is powered by real-time data, analytics, and market insights to deliver results-driven digital marketing.
                        </div>
                      </div>
                    </li>
                    <li className={"animated bounceInLeft"} data-id={"2"}>
                      <i className={"feature-icn feature-icn-2"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconSparkle size={22} /></i>
                      <h5>
                        Creative &amp; Innovative
                      </h5>
                      <div className={"icn-tooltip"}>
                        <div className={"tooltip-innr"}>
                          We combine creative thinking with modern digital marketing technology to build innovative campaigns that stand out.
                        </div>
                      </div>
                    </li>
                    <li className={"animated bounceInLeft"} data-id={"3"}>
                      <i className={"feature-icn feature-icn-3"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconGauge size={22} /></i>
                      <h5>
                        Transparent
                        <br />
                        Reporting
                      </h5>
                      <div className={"icn-tooltip"}>
                        <div className={"tooltip-innr"}>
                          We believe in complete transparency through clear, data-driven reporting.
                        </div>
                      </div>
                    </li>
                    <li className={"animated bounceInLeft"} data-id={"4"}>
                      <i className={"feature-icn feature-icn-4"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconUser size={22} /></i>
                      <h5>
                        Dedicated
                        <br />
                        Account Manager
                      </h5>
                      <div className={"icn-tooltip"}>
                        <div className={"tooltip-innr"}>
                          Priority support and a dedicated account manager, so you always have a direct line to your team.
                        </div>
                      </div>
                    </li>
                    <li className={"animated bounceInLeft"} data-id={"5"}>
                      <i className={"feature-icn feature-icn-5"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconClock size={22} /></i>
                      <h5>
                        8+ Years of
                        <br />
                        Experience
                      </h5>
                      <div className={"icn-tooltip"}>
                        <div className={"tooltip-innr"}>
                          8+ years of experience delivering digital marketing services and measurable results for growing businesses.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"special-packg-sec special-branding"} data-img={"url(assets/images/special-brand-bg.jpg)"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-6"}>
              <h2 className={"color-white"}>
                Lunexa One Team Plan
                <span>
                  Your Marketing Department Without the Cost of Building One
                </span>
              </h2>
              <p>
                A complete marketing partnership combining advertising, content creation, social media, SEO, and strategic consulting under one dedicated team. Ideal for healthcare, law firms, home services, fitness brands, restaurants, and growing local businesses.
              </p>
              <ul className={"check-ul"}>
                <li className={"color-white"}>
                  Marketing &amp; Advertising
                </li>
                <li className={"color-white"}>
                  Social Media Management
                </li>
                <li className={"color-white"}>
                  Content Creation
                </li>
                <li className={"color-white"}>
                  SEO &amp; Online Presence
                </li>
                <li className={"color-white"}>
                  Exclusive Benefits
                </li>
                <li className={"color-white"}>
                  Reporting &amp; Strategy
                </li>
              </ul>
              <ul className={"cstm-li"}>
                <li>
                  <div className={"price"}>
                    $5,000
                    <span>
                      /month
                    </span>
                  </div>
                </li>
                <li>
                  <a href={"javascript:;"} className={"special-ordernow "} rel={"6512bd43d9caa6e02c990b0a82652dca"} amount={"$1499"} type={"all-in-one"}>
                    Get Started
                  </a>
                </li>
              </ul>
              <div className={"text-right"}>
                <a className={"mega-pkg-btn"} href={"/all-in-one"}>
                  View Details
                </a>
              </div>
            </div>
            <div className={"col-md-6"}>
              <div className={"spacebr"}>
                <br />
                <br />
              </div>
              <div id={"mega-packg"}>
                <img id={"layer-two"} className={"parallax-layer parallax-layer2"} src={"/assets/images/mega-package-img.png"} alt={"layer2"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"process-sec sec-pad"}>
        <div className={"container"}>
          <div className={"col-lg-12"}>
            <h2 className={"sec-hd text-center"}>
              Our Process
              <span>
                A clear, collaborative path from first conversation to measurable growth
              </span>
            </h2>
            <ul className={"process-ul"}>
              <i className={"actv-ul"}></i>
              <li id={"process1"} className={"prc-all prc-1 active"}>
                <h4>
                  Discovery &amp; Consult
                </h4>
                <i className={"process-icn prcss-icn1"}><IconSearch size={26} /></i>
              </li>
              <li id={"process2"} className={"prc-all prc-2"}>
                <h4>
                  Strategy &amp; Planning
                </h4>
                <i className={"process-icn prcss-icn2"}><IconLayers size={26} /></i>
              </li>
              <li id={"process3"} className={"prc-all prc-3"}>
                <h4>
                  Execution &amp; Optimize
                </h4>
                <i className={"process-icn prcss-icn3"}><IconGauge size={26} /></i>
              </li>
              <li id={"process4"} className={"prc-all prc-4"}>
                <h4>
                  Results &amp; Growth
                </h4>
                <i className={"process-icn prcss-icn4"}><IconTrendUp size={26} /></i>
              </li>
              <li id={"process5"} className={"prc-all prc-5"}>
                <h4>
                  Launch &amp; Scale
                </h4>
                <i className={"process-icn prcss-icn5"}><IconWeb size={26} /></i>
              </li>
              <li id={"process6"} className={"prc-all prc-6"}>
                <h4>
                  Ongoing Support
                </h4>
                <i className={"process-icn prcss-icn6"}><IconHeadset size={26} /></i>
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
                    We begin by understanding your business, goals, and audience through collaborative discussions to create a clear vision. This foundation shapes every recommendation that follows.
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
                    Next, we build a tailored roadmap — from brand direction to execution timelines — with a strong foundation, so every channel and campaign works toward the same goals.
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
                    Our team brings the strategy to life through impactful design, development, and marketing, with consistent refinement so performance keeps improving.
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
                    We track performance and refine consistently to achieve the best results, reporting clearly so you always know what's working and why.
                  </p>
                </div>
                <div className={"col-md-5 text-right"}>
                  <img src={"/assets/images/process-tab-4.png"} alt={""} />
                </div>
                <div className={"col-md-1"}></div>
              </div>
              <div className={"process5 process-tabs"}>
                <div className={"col-md-1"}></div>
                <div className={"col-md-5"}>
                  <div className={"spacebr"}>
                    <br />
                    <br />
                  </div>
                  <h3 className={"lg-sub-hd"}>
                    Launch &amp; Scale
                  </h3>
                  <p>
                    With a proven strategy in hand, we roll out across the right channels — advertising, social, SEO — and scale spend and effort behind whatever is driving results.
                  </p>
                </div>
                <div className={"col-md-5 text-right"}>
                  <img src={"/assets/images/process-tab-5.png"} alt={""} />
                </div>
                <div className={"col-md-1"}></div>
              </div>
              <div className={"process6 process-tabs"}>
                <div className={"col-md-1"}></div>
                <div className={"col-md-5"}>
                  <div className={"spacebr"}>
                    <br />
                    <br />
                  </div>
                  <h3 className={"lg-sub-hd"}>
                    Ongoing Support
                  </h3>
                  <p>
                    Your dedicated account manager stays engaged after launch — monthly reports, strategy review meetings, and a growth action plan keep your marketing improving month over month.
                  </p>
                </div>
                <div className={"col-md-5 text-right"}>
                  <img src={"/assets/images/process-tab-6.png"} alt={""} />
                </div>
                <div className={"col-md-1"}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"testi-sec sec-pad"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-5"}>
              <div className={"ftr-award-sec"}>
                <div className={"spacebr"}>
                  <br />
                  <br />
                </div>
                <h2 className={"sec-hd"}>
                  Case Studies
                  <span>
                    We don't just talk about results — we deliver them. See how our digital marketing strategies drive traffic, engagement, and conversions.
                  </span>
                </h2>
                <ul className={"award-sldr"}>
                  <li>
                    <i className={"awrd-icn awrd-icn1"}></i>
                    90% Improved Project
                  </li>
                  <li>
                    <i className={"awrd-icn awrd-icn2"}></i>
                    49% New Project
                  </li>
                  <li>
                    <i className={"awrd-icn awrd-icn3"}></i>
                    Social Media Growth
                  </li>
                </ul>
              </div>
            </div>
            <div className={"col-lg-7"}>
              <h2 className={"sec-hd"}>
                What Our Clients Are Saying About Us
              </h2>
              <ul className={"row testi-slider"}>
                <li className={"col-lg-4"}>
                  <div className={"testi-box"}>
                    Lunexa completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months.
                  </div>
                  <div className={"testi-author"}>
                    <Avatar name={"Emma Richard"} size={56} />
                    <p>
                      Emma Richard
                      <span>
                        CEO, Nexatech
                      </span>
                    </p>
                    <div className={"rating"}>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                    </div>
                  </div>
                </li>
                <li className={"col-lg-4"}>
                  <div className={"testi-box"}>
                    We've worked with many agencies before, but Lunexa stands out. Their data-driven approach and creative solutions gave us an edge over competitors.
                  </div>
                  <div className={"testi-author"}>
                    <Avatar name={"David Mont"} size={56} />
                    <p>
                      David Mont
                      <span>
                        Marketing Director
                      </span>
                    </p>
                    <div className={"rating"}>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star-o"} aria-hidden={"true"}></i>
                    </div>
                  </div>
                </li>
                <li className={"col-lg-4"}>
                  <div className={"testi-box"}>
                    From SEO to paid ads, Lunexa nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!
                  </div>
                  <div className={"testi-author"}>
                    <Avatar name={"Sophia Lewis"} size={56} />
                    <p>
                      Sophia Lewis
                      <span>
                        Founder
                      </span>
                    </p>
                    <div className={"rating"}>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star-half-o"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star-o"} aria-hidden={"true"}></i>
                    </div>
                  </div>
                </li>
                <li className={"col-lg-4"}>
                  <div className={"testi-box"}>
                    Local Business Digital Transformation: 5&times; ROI on social media campaigns &amp; 80% increase in engagement.
                  </div>
                  <div className={"testi-author"}>
                    <i className={"lx-icon-badge"} style={{width:56,height:56,borderRadius:"50%",background:"#f2edff",display:"inline-flex"}}><IconStorefront size={26} /></i>
                    <p>
                      Case Study
                      <span>
                        Local Business
                      </span>
                    </p>
                    <div className={"rating"}>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star-o"} aria-hidden={"true"}></i>
                    </div>
                  </div>
                </li>
                <li className={"col-lg-4"}>
                  <div className={"testi-box"}>
                    SaaS Lead Generation Success: 150% increase in qualified leads &amp; 70% lower customer acquisition cost.
                  </div>
                  <div className={"testi-author"}>
                    <i className={"lx-icon-badge"} style={{width:56,height:56,borderRadius:"50%",background:"#f2edff",display:"inline-flex"}}><IconDashboard size={26} /></i>
                    <p>
                      Case Study
                      <span>
                        SaaS
                      </span>
                    </p>
                    <div className={"rating"}>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                    </div>
                  </div>
                </li>
                <li className={"col-lg-4"}>
                  <div className={"testi-box"}>
                    E-Commerce Growth Boost: 3&times; increase in organic traffic &amp; 2&times; revenue growth in 6 months.
                  </div>
                  <div className={"testi-author"}>
                    <i className={"lx-icon-badge"} style={{width:56,height:56,borderRadius:"50%",background:"#f2edff",display:"inline-flex"}}><IconCart size={26} /></i>
                    <p>
                      Case Study
                      <span>
                        E-Commerce
                      </span>
                    </p>
                    <div className={"rating"}>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star-o"} aria-hidden={"true"}></i>
                    </div>
                  </div>
                </li>
                <li className={"col-lg-4"}>
                  <div className={"testi-box"}>
                    Startup Brand Awareness Expansion: 200% increase in brand mentions &amp; 60% higher engagement rates.
                  </div>
                  <div className={"testi-author"}>
                    <i className={"lx-icon-badge"} style={{width:56,height:56,borderRadius:"50%",background:"#f2edff",display:"inline-flex"}}><IconSparkle size={26} /></i>
                    <p>
                      Case Study
                      <span>
                        Startup Brand
                      </span>
                    </p>
                    <div className={"rating"}>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star"} aria-hidden={"true"}></i>
                      <i className={"fa fa-star-o"} aria-hidden={"true"}></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={"formSection"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-12"}>
              <div className={"text-center"}>
                <h1>
                  READY TO AMPLIFY YOUR BRAND?
                </h1>
                <h4>
                  Get a free consultation and see how a full-stack digital partner can drive real business growth
                </h4>
              </div>
              <form action={"#"} method={"POST"} id={"form1"} className={"js-recaptcha-form"}>
                <div className={"row"}>
                  <div className={"col-lg-6"}>
                    <input type={"text"} placeholder={"Name"} name={"popupname"} required />
                  </div>
                  <div className={"col-lg-6"}>
                    <input type={"email"} placeholder={"Email"} name={"popupemail"} required />
                  </div>
                  <div className={"col-lg-6"}>
                    <div className={"contact-dd newcountrycode"}>
                      <span></span>
                      <select className={"countrylist valid"} name={"pc"}>
                        <option value={"93"} data-abbr={"AF"}>
                          AFGHANISTAN
                        </option>
                        <option value={"358"} data-abbr={"AX"}>
                          ALAND ISLANDS
                        </option>
                        <option value={"355"} data-abbr={"AL"}>
                          ALBANIA
                        </option>
                        <option value={"213"} data-abbr={"DZ"}>
                          ALGERIA
                        </option>
                        <option value={"168"} data-abbr={"AS"}>
                          AMERICAN SAMOA
                        </option>
                        <option value={"376"} data-abbr={"AD"}>
                          ANDORRA
                        </option>
                        <option value={"244"} data-abbr={"AO"}>
                          ANGOLA
                        </option>
                        <option value={"264"} data-abbr={"AI"}>
                          ANGUILLA
                        </option>
                        <option value={"167"} data-abbr={"AQ"}>
                          ANTARCTICA
                        </option>
                        <option value={"268"} data-abbr={"AG"}>
                          ANTIGUA AND BARBUDA
                        </option>
                        <option value={"54"} data-abbr={"AR"}>
                          ARGENTINA
                        </option>
                        <option value={"374"} data-abbr={"AM"}>
                          ARMENIA
                        </option>
                        <option value={"297"} data-abbr={"AW"}>
                          ARUBA
                        </option>
                        <option value={"61"} data-abbr={"AU"}>
                          AUSTRALIA
                        </option>
                        <option value={"43"} data-abbr={"AT"}>
                          AUSTRIA
                        </option>
                        <option value={"994"} data-abbr={"AZ"}>
                          AZERBAIJAN
                        </option>
                        <option value={"242"} data-abbr={"BS"}>
                          BAHAMAS
                        </option>
                        <option value={"973"} data-abbr={"BH"}>
                          BAHRAIN
                        </option>
                        <option value={"880"} data-abbr={"BD"}>
                          BANGLADESH
                        </option>
                        <option value={"246"} data-abbr={"BB"}>
                          BARBADOS
                        </option>
                        <option value={"375"} data-abbr={"BY"}>
                          BELARUS
                        </option>
                        <option value={"32"} data-abbr={"BE"}>
                          BELGIUM
                        </option>
                        <option value={"501"} data-abbr={"BZ"}>
                          BELIZE
                        </option>
                        <option value={"229"} data-abbr={"BJ"}>
                          BENIN
                        </option>
                        <option value={"441"} data-abbr={"BM"}>
                          BERMUDA
                        </option>
                        <option value={"975"} data-abbr={"BT"}>
                          BHUTAN
                        </option>
                        <option value={"591"} data-abbr={"BO"}>
                          BOLIVIA
                        </option>
                        <option value={"387"} data-abbr={"BA"}>
                          BOSNIA AND HERZEGOVINA
                        </option>
                        <option value={"267"} data-abbr={"BW"}>
                          BOTSWANA
                        </option>
                        <option value={"55"} data-abbr={"BR"}>
                          BRAZIL
                        </option>
                        <option value={"246"} data-abbr={"IO"}>
                          BRITISH INDIAN OCEAN TERRITORY
                        </option>
                        <option value={"673"} data-abbr={"BN"}>
                          BRUNEI DARUSSALAM
                        </option>
                        <option value={"359"} data-abbr={"BG"}>
                          BULGARIA
                        </option>
                        <option value={"226"} data-abbr={"BF"}>
                          BURKINA FASO
                        </option>
                        <option value={"257"} data-abbr={"BI"}>
                          BURUNDI
                        </option>
                        <option value={"855"} data-abbr={"KH"}>
                          CAMBODIA
                        </option>
                        <option value={"237"} data-abbr={"CM"}>
                          CAMEROON
                        </option>
                        <option value={"1"} data-abbr={"CA"} selected>
                          CANADA
                        </option>
                        <option value={"238"} data-abbr={"CV"}>
                          CAPE VERDE
                        </option>
                        <option value={"345"} data-abbr={"KY"}>
                          CAYMAN ISLANDS
                        </option>
                        <option value={"236"} data-abbr={"CF"}>
                          CENTRAL AFRICAN REPUBLIC
                        </option>
                        <option value={"235"} data-abbr={"TD"}>
                          CHAD
                        </option>
                        <option value={"56"} data-abbr={"CL"}>
                          CHILE
                        </option>
                        <option value={"86"} data-abbr={"CN"}>
                          CHINA
                        </option>
                        <option value={"672"} data-abbr={"CX"}>
                          CHRISTMAS ISLAND
                        </option>
                        <option value={"672"} data-abbr={"CC"}>
                          COCOS (KEELING) ISLANDS
                        </option>
                        <option value={"57"} data-abbr={"CO"}>
                          COLOMBIA
                        </option>
                        <option value={"269"} data-abbr={"KM"}>
                          COMOROS
                        </option>
                        <option value={"242"} data-abbr={"CG"}>
                          CONGO
                        </option>
                        <option value={"682"} data-abbr={"CK"}>
                          COOK ISLANDS
                        </option>
                        <option value={"506"} data-abbr={"CR"}>
                          COSTA RICA
                        </option>
                        <option value={"225"} data-abbr={"CI"}>
                          COTE D'IVOIRE
                        </option>
                        <option value={"385"} data-abbr={"HR"}>
                          CROATIA
                        </option>
                        <option value={"53"} data-abbr={"CU"}>
                          CUBA
                        </option>
                        <option value={"357"} data-abbr={"CY"}>
                          CYPRUS
                        </option>
                        <option value={"420"} data-abbr={"CZ"}>
                          CZECH REPUBLIC
                        </option>
                        <option value={"45"} data-abbr={"DK"}>
                          DENMARK
                        </option>
                        <option value={"253"} data-abbr={"DJ"}>
                          DJIBOUTI
                        </option>
                        <option value={"176"} data-abbr={"DM"}>
                          DOMINICA
                        </option>
                        <option value={"809"} data-abbr={"DO"}>
                          DOMINICAN REPUBLIC
                        </option>
                        <option value={"593"} data-abbr={"EC"}>
                          ECUADOR
                        </option>
                        <option value={"20"} data-abbr={"EG"}>
                          EGYPT
                        </option>
                        <option value={"503"} data-abbr={"SV"}>
                          EL SALVADOR
                        </option>
                        <option value={"240"} data-abbr={"GQ"}>
                          EQUATORIAL GUINEA
                        </option>
                        <option value={"291"} data-abbr={"ER"}>
                          ERITREA
                        </option>
                        <option value={"372"} data-abbr={"EE"}>
                          ESTONIA
                        </option>
                        <option value={"251"} data-abbr={"ET"}>
                          ETHIOPIA
                        </option>
                        <option value={"500"} data-abbr={"FK"}>
                          FALKLAND ISLANDS (MALVINAS)
                        </option>
                        <option value={"298"} data-abbr={"FO"}>
                          FAROE ISLANDS
                        </option>
                        <option value={"679"} data-abbr={"FJ"}>
                          FIJI
                        </option>
                        <option value={"358"} data-abbr={"FI"}>
                          FINLAND
                        </option>
                        <option value={"33"} data-abbr={"FR"}>
                          FRANCE
                        </option>
                        <option value={"594"} data-abbr={"GF"}>
                          FRENCH GUIANA
                        </option>
                        <option value={"689"} data-abbr={"PF"}>
                          FRENCH POLYNESIA
                        </option>
                        <option value={"689"} data-abbr={"TF"}>
                          FRENCH SOUTHERN TERRITORIES
                        </option>
                        <option value={"241"} data-abbr={"GA"}>
                          GABON
                        </option>
                        <option value={"220"} data-abbr={"GM"}>
                          GAMBIA
                        </option>
                        <option value={"995"} data-abbr={"GE"}>
                          GEORGIA
                        </option>
                        <option value={"49"} data-abbr={"DE"}>
                          GERMANY
                        </option>
                        <option value={"233"} data-abbr={"GH"}>
                          GHANA
                        </option>
                        <option value={"350"} data-abbr={"GI"}>
                          GIBRALTAR
                        </option>
                        <option value={"30"} data-abbr={"GR"}>
                          GREECE
                        </option>
                        <option value={"299"} data-abbr={"GL"}>
                          GREENLAND
                        </option>
                        <option value={"473"} data-abbr={"GD"}>
                          GRENADA
                        </option>
                        <option value={"590"} data-abbr={"GP"}>
                          GUADELOUPE
                        </option>
                        <option value={"671"} data-abbr={"GU"}>
                          GUAM
                        </option>
                        <option value={"502"} data-abbr={"GT"}>
                          GUATEMALA
                        </option>
                        <option value={"224"} data-abbr={"GN"}>
                          GUINEA
                        </option>
                        <option value={"245"} data-abbr={"GW"}>
                          GUINEA-BISSAU
                        </option>
                        <option value={"592"} data-abbr={"GY"}>
                          GUYANA
                        </option>
                        <option value={"509"} data-abbr={"HT"}>
                          HAITI
                        </option>
                        <option value={"39"} data-abbr={"VA"}>
                          HOLY SEE (VATICAN CITY STATE)
                        </option>
                        <option value={"503"} data-abbr={"HN"}>
                          HONDURAS
                        </option>
                        <option value={"852"} data-abbr={"HK"}>
                          HONG KONG
                        </option>
                        <option value={"36"} data-abbr={"HU"}>
                          HUNGARY
                        </option>
                        <option value={"354"} data-abbr={"IS"}>
                          ICELAND
                        </option>
                        <option value={"91"} data-abbr={"IN"}>
                          INDIA
                        </option>
                        <option value={"62"} data-abbr={"ID"}>
                          INDONESIA
                        </option>
                        <option value={"98"} data-abbr={"IR"}>
                          IRAN, ISLAMIC REPUBLIC OF
                        </option>
                        <option value={"964"} data-abbr={"IQ"}>
                          IRAQ
                        </option>
                        <option value={"353"} data-abbr={"IE"}>
                          IRELAND
                        </option>
                        <option value={"972"} data-abbr={"IL"}>
                          ISRAEL
                        </option>
                        <option value={"39"} data-abbr={"IT"}>
                          ITALY
                        </option>
                        <option value={"876"} data-abbr={"JM"}>
                          JAMAICA
                        </option>
                        <option value={"81"} data-abbr={"JP"}>
                          JAPAN
                        </option>
                        <option value={"962"} data-abbr={"JO"}>
                          JORDAN
                        </option>
                        <option value={"7"} data-abbr={"KZ"}>
                          KAZAKHSTAN
                        </option>
                        <option value={"254"} data-abbr={"KE"}>
                          KENYA
                        </option>
                        <option value={"686"} data-abbr={"KI"}>
                          KIRIBATI
                        </option>
                        <option value={"82"} data-abbr={"KP"}>
                          KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                        </option>
                        <option value={"82"} data-abbr={"KR"}>
                          KOREA, REPUBLIC OF
                        </option>
                        <option value={"965"} data-abbr={"KW"}>
                          KUWAIT
                        </option>
                        <option value={"996"} data-abbr={"KG"}>
                          KYRGYZSTAN
                        </option>
                        <option value={"856"} data-abbr={"LA"}>
                          LAO PEOPLE'S DEMOCRATIC REPUBLIC
                        </option>
                        <option value={"371"} data-abbr={"LV"}>
                          LATVIA
                        </option>
                        <option value={"961"} data-abbr={"LB"}>
                          LEBANON
                        </option>
                        <option value={"266"} data-abbr={"LS"}>
                          LESOTHO
                        </option>
                        <option value={"231"} data-abbr={"LR"}>
                          LIBERIA
                        </option>
                        <option value={"218"} data-abbr={"LY"}>
                          LIBYAN ARAB JAMAHIRIYA
                        </option>
                        <option value={"423"} data-abbr={"LI"}>
                          LIECHTENSTEIN
                        </option>
                        <option value={"370"} data-abbr={"LT"}>
                          LITHUANIA
                        </option>
                        <option value={"352"} data-abbr={"LU"}>
                          LUXEMBOURG
                        </option>
                        <option value={"853"} data-abbr={"MO"}>
                          MACAO
                        </option>
                        <option value={"389"} data-abbr={"MK"}>
                          MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF
                        </option>
                        <option value={"261"} data-abbr={"MG"}>
                          MADAGASCAR
                        </option>
                        <option value={"265"} data-abbr={"MW"}>
                          MALAWI
                        </option>
                        <option value={"60"} data-abbr={"MY"}>
                          MALAYSIA
                        </option>
                        <option value={"960"} data-abbr={"MV"}>
                          MALDIVES
                        </option>
                        <option value={"223"} data-abbr={"ML"}>
                          MALI
                        </option>
                        <option value={"356"} data-abbr={"MT"}>
                          MALTA
                        </option>
                        <option value={"692"} data-abbr={"MH"}>
                          MARSHALL ISLANDS
                        </option>
                        <option value={"596"} data-abbr={"MQ"}>
                          MARTINIQUE
                        </option>
                        <option value={"222"} data-abbr={"MR"}>
                          MAURITANIA
                        </option>
                        <option value={"230"} data-abbr={"MU"}>
                          MAURITIUS
                        </option>
                        <option value={"269"} data-abbr={"YT"}>
                          MAYOTTE
                        </option>
                        <option value={"52"} data-abbr={"MX"}>
                          MEXICO
                        </option>
                        <option value={"691"} data-abbr={"FM"}>
                          MICRONESIA, FEDERATED STATES OF
                        </option>
                        <option value={"373"} data-abbr={"MD"}>
                          MOLDOVA, REPUBLIC OF
                        </option>
                        <option value={"377"} data-abbr={"MC"}>
                          MONACO
                        </option>
                        <option value={"976"} data-abbr={"MN"}>
                          MONGOLIA
                        </option>
                        <option value={"664"} data-abbr={"MS"}>
                          MONTSERRAT
                        </option>
                        <option value={"212"} data-abbr={"MA"}>
                          MOROCCO
                        </option>
                        <option value={"258"} data-abbr={"MZ"}>
                          MOZAMBIQUE
                        </option>
                        <option value={"95"} data-abbr={"MM"}>
                          MYANMAR
                        </option>
                        <option value={"264"} data-abbr={"NA"}>
                          NAMIBIA
                        </option>
                        <option value={"674"} data-abbr={"NR"}>
                          NAURU
                        </option>
                        <option value={"977"} data-abbr={"NP"}>
                          NEPAL
                        </option>
                        <option value={"31"} data-abbr={"NL"}>
                          NETHERLANDS
                        </option>
                        <option value={"599"} data-abbr={"AN"}>
                          NETHERLANDS ANTILLES
                        </option>
                        <option value={"687"} data-abbr={"NC"}>
                          NEW CALEDONIA
                        </option>
                        <option value={"64"} data-abbr={"NZ"}>
                          NEW ZEALAND
                        </option>
                        <option value={"505"} data-abbr={"NI"}>
                          NICARAGUA
                        </option>
                        <option value={"227"} data-abbr={"NE"}>
                          NIGER
                        </option>
                        <option value={"234"} data-abbr={"NG"}>
                          NIGERIA
                        </option>
                        <option value={"683"} data-abbr={"NU"}>
                          NIUE
                        </option>
                        <option value={"672"} data-abbr={"NF"}>
                          NORFOLK ISLAND
                        </option>
                        <option value={"167"} data-abbr={"MP"}>
                          NORTHERN MARIANA ISLANDS
                        </option>
                        <option value={"47"} data-abbr={"NO"}>
                          NORWAY
                        </option>
                        <option value={"968"} data-abbr={"OM"}>
                          OMAN
                        </option>
                        <option value={"92"} data-abbr={"PK"}>
                          PAKISTAN
                        </option>
                        <option value={"680"} data-abbr={"PW"}>
                          PALAU
                        </option>
                        <option value={"970"} data-abbr={"PS"}>
                          PALESTINIAN TERRITORY, OCCUPIED
                        </option>
                        <option value={"507"} data-abbr={"PA"}>
                          PANAMA
                        </option>
                        <option value={"675"} data-abbr={"PG"}>
                          PAPUA NEW GUINEA
                        </option>
                        <option value={"595"} data-abbr={"PY"}>
                          PARAGUAY
                        </option>
                        <option value={"51"} data-abbr={"PE"}>
                          PERU
                        </option>
                        <option value={"63"} data-abbr={"PH"}>
                          PHILIPPINES
                        </option>
                        <option value={"672"} data-abbr={"PN"}>
                          PITCAIRN
                        </option>
                        <option value={"48"} data-abbr={"PL"}>
                          POLAND
                        </option>
                        <option value={"351"} data-abbr={"PT"}>
                          PORTUGAL
                        </option>
                        <option value={"787"} data-abbr={"PR"}>
                          PUERTO RICO
                        </option>
                        <option value={"974"} data-abbr={"QA"}>
                          QATAR
                        </option>
                        <option value={"262"} data-abbr={"RE"}>
                          REUNION
                        </option>
                        <option value={"40"} data-abbr={"RO"}>
                          ROMANIA
                        </option>
                        <option value={"7"} data-abbr={"RU"}>
                          RUSSIAN FEDERATION
                        </option>
                        <option value={"250"} data-abbr={"RW"}>
                          RWANDA
                        </option>
                        <option value={"290"} data-abbr={"SH"}>
                          SAINT HELENA
                        </option>
                        <option value={"186"} data-abbr={"KN"}>
                          SAINT KITTS AND NEVIS
                        </option>
                        <option value={"175"} data-abbr={"LC"}>
                          SAINT LUCIA
                        </option>
                        <option value={"508"} data-abbr={"PM"}>
                          SAINT PIERRE AND MIQUELON
                        </option>
                        <option value={"180"} data-abbr={"VC"}>
                          SAINT VINCENT AND THE GRENADINES
                        </option>
                        <option value={"885"} data-abbr={"WS"}>
                          SAMOA
                        </option>
                        <option value={"378"} data-abbr={"SM"}>
                          SAN MARINO
                        </option>
                        <option value={"239"} data-abbr={"ST"}>
                          SAO TOME AND PRINCIPE
                        </option>
                        <option value={"966"} data-abbr={"SA"}>
                          SAUDI ARABIA
                        </option>
                        <option value={"221"} data-abbr={"SN"}>
                          SENEGAL
                        </option>
                        <option value={"381"} data-abbr={"CS"}>
                          SERBIA AND MONTENEGRO
                        </option>
                        <option value={"248"} data-abbr={"SC"}>
                          SEYCHELLES
                        </option>
                        <option value={"232"} data-abbr={"SL"}>
                          SIERRA LEONE
                        </option>
                        <option value={"65"} data-abbr={"SG"}>
                          SINGAPORE
                        </option>
                        <option value={"421"} data-abbr={"SK"}>
                          SLOVAKIA
                        </option>
                        <option value={"386"} data-abbr={"SI"}>
                          SLOVENIA
                        </option>
                        <option value={"677"} data-abbr={"SB"}>
                          SOLOMON ISLANDS
                        </option>
                        <option value={"252"} data-abbr={"SO"}>
                          SOMALIA
                        </option>
                        <option value={"27"} data-abbr={"ZA"}>
                          SOUTH AFRICA
                        </option>
                        <option value={"34"} data-abbr={"ES"}>
                          SPAIN
                        </option>
                        <option value={"94"} data-abbr={"LK"}>
                          SRI LANKA
                        </option>
                        <option value={"249"} data-abbr={"SD"}>
                          SUDAN
                        </option>
                        <option value={"597"} data-abbr={"SR"}>
                          SURINAME
                        </option>
                        <option value={"47"} data-abbr={"SJ"}>
                          SVALBARD AND JAN MAYEN
                        </option>
                        <option value={"268"} data-abbr={"SZ"}>
                          SWAZILAND
                        </option>
                        <option value={"46"} data-abbr={"SE"}>
                          SWEDEN
                        </option>
                        <option value={"41"} data-abbr={"CH"}>
                          SWITZERLAND
                        </option>
                        <option value={"963"} data-abbr={"SY"}>
                          SYRIAN ARAB REPUBLIC
                        </option>
                        <option value={"886"} data-abbr={"TW"}>
                          TAIWAN, PROVINCE OF CHINA
                        </option>
                        <option value={"992"} data-abbr={"TJ"}>
                          TAJIKISTAN
                        </option>
                        <option value={"255"} data-abbr={"TZ"}>
                          TANZANIA, UNITED REPUBLIC OF
                        </option>
                        <option value={"66"} data-abbr={"TH"}>
                          THAILAND
                        </option>
                        <option value={"670"} data-abbr={"TL"}>
                          TIMOR-LESTE
                        </option>
                        <option value={"228"} data-abbr={"TG"}>
                          TOGO
                        </option>
                        <option value={"690"} data-abbr={"TK"}>
                          TOKELAU
                        </option>
                        <option value={"676"} data-abbr={"TO"}>
                          TONGA
                        </option>
                        <option value={"186"} data-abbr={"TT"}>
                          TRINIDAD AND TOBAGO
                        </option>
                        <option value={"216"} data-abbr={"TN"}>
                          TUNISIA
                        </option>
                        <option value={"90"} data-abbr={"TR"}>
                          TURKEY
                        </option>
                        <option value={"993"} data-abbr={"TM"}>
                          TURKMENISTAN
                        </option>
                        <option value={"164"} data-abbr={"TC"}>
                          TURKS AND CAICOS ISLANDS
                        </option>
                        <option value={"688"} data-abbr={"TV"}>
                          TUVALU
                        </option>
                        <option value={"256"} data-abbr={"UG"}>
                          UGANDA
                        </option>
                        <option value={"380"} data-abbr={"UA"}>
                          UKRAINE
                        </option>
                        <option value={"971"} data-abbr={"AE"}>
                          UNITED ARAB EMIRATES
                        </option>
                        <option value={"44"} data-abbr={"GB"}>
                          UNITED KINGDOM
                        </option>
                        <option value={"1"} data-abbr={"US"} selected>
                          UNITED STATES
                        </option>
                        <option value={"598"} data-abbr={"UY"}>
                          URUGUAY
                        </option>
                        <option value={"998"} data-abbr={"UZ"}>
                          UZBEKISTAN
                        </option>
                        <option value={"678"} data-abbr={"VU"}>
                          VANUATU
                        </option>
                        <option value={"58"} data-abbr={"VE"}>
                          VENEZUELA
                        </option>
                        <option value={"84"} data-abbr={"VN"}>
                          VIETNAM
                        </option>
                        <option value={"128"} data-abbr={"VG"}>
                          VIRGIN ISLANDS, BRITISH
                        </option>
                        <option value={"134"} data-abbr={"VI"}>
                          VIRGIN ISLANDS, U.S.
                        </option>
                        <option value={"681"} data-abbr={"WF"}>
                          WALLIS AND FUTUNA
                        </option>
                        <option value={"212"} data-abbr={"EH"}>
                          WESTERN SAHARA
                        </option>
                        <option value={"967"} data-abbr={"YE"}>
                          YEMEN
                        </option>
                        <option value={"260"} data-abbr={"ZM"}>
                          ZAMBIA
                        </option>
                        <option value={"263"} data-abbr={"ZW"}>
                          ZIMBABWE
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className={"col-lg-6"}>
                    <div className={"noguttar"}>
                      <input type={"text"} name={"countrycode"} id={"countrycode"} readOnly />
                      <div className={"num-with-code"}>
                        <input type={"tel"} id={"phoneNum"} name={"phone"} placeholder={"Phone Number"} />
                        <input type={"hidden"} name={"msclkid"} defaultValue={""} />
                        <input type={"hidden"} name={"gclid"} defaultValue={""} />
                        <input type={"hidden"} name={"fbclid"} defaultValue={""} />
                        <input type={"hidden"} name={"__keyword"} defaultValue={""} />
                        <input type={"hidden"} name={"__device"} defaultValue={""} />
                        <input type={"hidden"} name={"__utm_source"} defaultValue={""} />
                        <input type={"hidden"} name={"__utm_campaign"} defaultValue={""} />
                        <input type={"hidden"} name={"__utm_content"} defaultValue={""} />
                        <input type={"hidden"} name={"__utm_term"} defaultValue={""} />
                        <input type={"hidden"} name={"__matchtype"} defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"row"}>
                  <div className={"col-md-12"}>
                    <textarea placeholder={"Provide as much information about the design requirement i.e. industry, color preference, potential uses, etc. so that we can get a clear idea."} name={"message"} required></textarea>
                  </div>
                  <div className={"row"}>
                    <div className={"col-md-9"}></div>
                    <div className={"col-md-3"}>
                      <input type={"hidden"} name={"source"} defaultValue={"footer"} />
                      <input className={"purple-s-btn"} type={"submit"} defaultValue={"Let’s Get Started"} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className={"side-bar-sm-frm rght-open"}>
        <div className={"side-head"}>
          Get In Touch
          <span>
            <i className={"lx-btn-icon"}><IconChevronUp size={16} /></i>
          </span>
        </div>
      </div>
      <div className={"side-bar-sm-frm lft-open"}>
        <div className={"side-head"}>
          <span>
            <i className={"lx-btn-icon"}><IconPhone size={16} /></i>
          </span>
        </div>
      </div>
      <div className={"popup-slide popup-slide-lft"}>
        <div className={"popup-slide-close"}></div>
        <div className={"popup-slide-innr"}>
          <h2 className={"sec-hd"}>
            Let Us Call You
            <span>
              Our team is here to help you grow your brand.
            </span>
          </h2>
          <form action={"#"} method={"POST"} id={"form2"} className={"js-recaptcha-form"}>
            <div className={"field"}>
              <input type={"text"} id={"name"} placeholder={"Full Name"} name={"popupname"} required />
            </div>
            <div className={"field"}>
              <div className={"contact-dd newcountrycode"}>
                <span></span>
                <select className={"countrylist valid"} name={"pc"}>
                  <option value={"93"} data-abbr={"AF"}>
                    AFGHANISTAN
                  </option>
                  <option value={"358"} data-abbr={"AX"}>
                    ALAND ISLANDS
                  </option>
                  <option value={"355"} data-abbr={"AL"}>
                    ALBANIA
                  </option>
                  <option value={"213"} data-abbr={"DZ"}>
                    ALGERIA
                  </option>
                  <option value={"168"} data-abbr={"AS"}>
                    AMERICAN SAMOA
                  </option>
                  <option value={"376"} data-abbr={"AD"}>
                    ANDORRA
                  </option>
                  <option value={"244"} data-abbr={"AO"}>
                    ANGOLA
                  </option>
                  <option value={"264"} data-abbr={"AI"}>
                    ANGUILLA
                  </option>
                  <option value={"167"} data-abbr={"AQ"}>
                    ANTARCTICA
                  </option>
                  <option value={"268"} data-abbr={"AG"}>
                    ANTIGUA AND BARBUDA
                  </option>
                  <option value={"54"} data-abbr={"AR"}>
                    ARGENTINA
                  </option>
                  <option value={"374"} data-abbr={"AM"}>
                    ARMENIA
                  </option>
                  <option value={"297"} data-abbr={"AW"}>
                    ARUBA
                  </option>
                  <option value={"61"} data-abbr={"AU"}>
                    AUSTRALIA
                  </option>
                  <option value={"43"} data-abbr={"AT"}>
                    AUSTRIA
                  </option>
                  <option value={"994"} data-abbr={"AZ"}>
                    AZERBAIJAN
                  </option>
                  <option value={"242"} data-abbr={"BS"}>
                    BAHAMAS
                  </option>
                  <option value={"973"} data-abbr={"BH"}>
                    BAHRAIN
                  </option>
                  <option value={"880"} data-abbr={"BD"}>
                    BANGLADESH
                  </option>
                  <option value={"246"} data-abbr={"BB"}>
                    BARBADOS
                  </option>
                  <option value={"375"} data-abbr={"BY"}>
                    BELARUS
                  </option>
                  <option value={"32"} data-abbr={"BE"}>
                    BELGIUM
                  </option>
                  <option value={"501"} data-abbr={"BZ"}>
                    BELIZE
                  </option>
                  <option value={"229"} data-abbr={"BJ"}>
                    BENIN
                  </option>
                  <option value={"441"} data-abbr={"BM"}>
                    BERMUDA
                  </option>
                  <option value={"975"} data-abbr={"BT"}>
                    BHUTAN
                  </option>
                  <option value={"591"} data-abbr={"BO"}>
                    BOLIVIA
                  </option>
                  <option value={"387"} data-abbr={"BA"}>
                    BOSNIA AND HERZEGOVINA
                  </option>
                  <option value={"267"} data-abbr={"BW"}>
                    BOTSWANA
                  </option>
                  <option value={"55"} data-abbr={"BR"}>
                    BRAZIL
                  </option>
                  <option value={"246"} data-abbr={"IO"}>
                    BRITISH INDIAN OCEAN TERRITORY
                  </option>
                  <option value={"673"} data-abbr={"BN"}>
                    BRUNEI DARUSSALAM
                  </option>
                  <option value={"359"} data-abbr={"BG"}>
                    BULGARIA
                  </option>
                  <option value={"226"} data-abbr={"BF"}>
                    BURKINA FASO
                  </option>
                  <option value={"257"} data-abbr={"BI"}>
                    BURUNDI
                  </option>
                  <option value={"855"} data-abbr={"KH"}>
                    CAMBODIA
                  </option>
                  <option value={"237"} data-abbr={"CM"}>
                    CAMEROON
                  </option>
                  <option value={"1"} data-abbr={"CA"} selected>
                    CANADA
                  </option>
                  <option value={"238"} data-abbr={"CV"}>
                    CAPE VERDE
                  </option>
                  <option value={"345"} data-abbr={"KY"}>
                    CAYMAN ISLANDS
                  </option>
                  <option value={"236"} data-abbr={"CF"}>
                    CENTRAL AFRICAN REPUBLIC
                  </option>
                  <option value={"235"} data-abbr={"TD"}>
                    CHAD
                  </option>
                  <option value={"56"} data-abbr={"CL"}>
                    CHILE
                  </option>
                  <option value={"86"} data-abbr={"CN"}>
                    CHINA
                  </option>
                  <option value={"672"} data-abbr={"CX"}>
                    CHRISTMAS ISLAND
                  </option>
                  <option value={"672"} data-abbr={"CC"}>
                    COCOS (KEELING) ISLANDS
                  </option>
                  <option value={"57"} data-abbr={"CO"}>
                    COLOMBIA
                  </option>
                  <option value={"269"} data-abbr={"KM"}>
                    COMOROS
                  </option>
                  <option value={"242"} data-abbr={"CG"}>
                    CONGO
                  </option>
                  <option value={"682"} data-abbr={"CK"}>
                    COOK ISLANDS
                  </option>
                  <option value={"506"} data-abbr={"CR"}>
                    COSTA RICA
                  </option>
                  <option value={"225"} data-abbr={"CI"}>
                    COTE D'IVOIRE
                  </option>
                  <option value={"385"} data-abbr={"HR"}>
                    CROATIA
                  </option>
                  <option value={"53"} data-abbr={"CU"}>
                    CUBA
                  </option>
                  <option value={"357"} data-abbr={"CY"}>
                    CYPRUS
                  </option>
                  <option value={"420"} data-abbr={"CZ"}>
                    CZECH REPUBLIC
                  </option>
                  <option value={"45"} data-abbr={"DK"}>
                    DENMARK
                  </option>
                  <option value={"253"} data-abbr={"DJ"}>
                    DJIBOUTI
                  </option>
                  <option value={"176"} data-abbr={"DM"}>
                    DOMINICA
                  </option>
                  <option value={"809"} data-abbr={"DO"}>
                    DOMINICAN REPUBLIC
                  </option>
                  <option value={"593"} data-abbr={"EC"}>
                    ECUADOR
                  </option>
                  <option value={"20"} data-abbr={"EG"}>
                    EGYPT
                  </option>
                  <option value={"503"} data-abbr={"SV"}>
                    EL SALVADOR
                  </option>
                  <option value={"240"} data-abbr={"GQ"}>
                    EQUATORIAL GUINEA
                  </option>
                  <option value={"291"} data-abbr={"ER"}>
                    ERITREA
                  </option>
                  <option value={"372"} data-abbr={"EE"}>
                    ESTONIA
                  </option>
                  <option value={"251"} data-abbr={"ET"}>
                    ETHIOPIA
                  </option>
                  <option value={"500"} data-abbr={"FK"}>
                    FALKLAND ISLANDS (MALVINAS)
                  </option>
                  <option value={"298"} data-abbr={"FO"}>
                    FAROE ISLANDS
                  </option>
                  <option value={"679"} data-abbr={"FJ"}>
                    FIJI
                  </option>
                  <option value={"358"} data-abbr={"FI"}>
                    FINLAND
                  </option>
                  <option value={"33"} data-abbr={"FR"}>
                    FRANCE
                  </option>
                  <option value={"594"} data-abbr={"GF"}>
                    FRENCH GUIANA
                  </option>
                  <option value={"689"} data-abbr={"PF"}>
                    FRENCH POLYNESIA
                  </option>
                  <option value={"689"} data-abbr={"TF"}>
                    FRENCH SOUTHERN TERRITORIES
                  </option>
                  <option value={"241"} data-abbr={"GA"}>
                    GABON
                  </option>
                  <option value={"220"} data-abbr={"GM"}>
                    GAMBIA
                  </option>
                  <option value={"995"} data-abbr={"GE"}>
                    GEORGIA
                  </option>
                  <option value={"49"} data-abbr={"DE"}>
                    GERMANY
                  </option>
                  <option value={"233"} data-abbr={"GH"}>
                    GHANA
                  </option>
                  <option value={"350"} data-abbr={"GI"}>
                    GIBRALTAR
                  </option>
                  <option value={"30"} data-abbr={"GR"}>
                    GREECE
                  </option>
                  <option value={"299"} data-abbr={"GL"}>
                    GREENLAND
                  </option>
                  <option value={"473"} data-abbr={"GD"}>
                    GRENADA
                  </option>
                  <option value={"590"} data-abbr={"GP"}>
                    GUADELOUPE
                  </option>
                  <option value={"671"} data-abbr={"GU"}>
                    GUAM
                  </option>
                  <option value={"502"} data-abbr={"GT"}>
                    GUATEMALA
                  </option>
                  <option value={"224"} data-abbr={"GN"}>
                    GUINEA
                  </option>
                  <option value={"245"} data-abbr={"GW"}>
                    GUINEA-BISSAU
                  </option>
                  <option value={"592"} data-abbr={"GY"}>
                    GUYANA
                  </option>
                  <option value={"509"} data-abbr={"HT"}>
                    HAITI
                  </option>
                  <option value={"39"} data-abbr={"VA"}>
                    HOLY SEE (VATICAN CITY STATE)
                  </option>
                  <option value={"503"} data-abbr={"HN"}>
                    HONDURAS
                  </option>
                  <option value={"852"} data-abbr={"HK"}>
                    HONG KONG
                  </option>
                  <option value={"36"} data-abbr={"HU"}>
                    HUNGARY
                  </option>
                  <option value={"354"} data-abbr={"IS"}>
                    ICELAND
                  </option>
                  <option value={"91"} data-abbr={"IN"}>
                    INDIA
                  </option>
                  <option value={"62"} data-abbr={"ID"}>
                    INDONESIA
                  </option>
                  <option value={"98"} data-abbr={"IR"}>
                    IRAN, ISLAMIC REPUBLIC OF
                  </option>
                  <option value={"964"} data-abbr={"IQ"}>
                    IRAQ
                  </option>
                  <option value={"353"} data-abbr={"IE"}>
                    IRELAND
                  </option>
                  <option value={"972"} data-abbr={"IL"}>
                    ISRAEL
                  </option>
                  <option value={"39"} data-abbr={"IT"}>
                    ITALY
                  </option>
                  <option value={"876"} data-abbr={"JM"}>
                    JAMAICA
                  </option>
                  <option value={"81"} data-abbr={"JP"}>
                    JAPAN
                  </option>
                  <option value={"962"} data-abbr={"JO"}>
                    JORDAN
                  </option>
                  <option value={"7"} data-abbr={"KZ"}>
                    KAZAKHSTAN
                  </option>
                  <option value={"254"} data-abbr={"KE"}>
                    KENYA
                  </option>
                  <option value={"686"} data-abbr={"KI"}>
                    KIRIBATI
                  </option>
                  <option value={"82"} data-abbr={"KP"}>
                    KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                  </option>
                  <option value={"82"} data-abbr={"KR"}>
                    KOREA, REPUBLIC OF
                  </option>
                  <option value={"965"} data-abbr={"KW"}>
                    KUWAIT
                  </option>
                  <option value={"996"} data-abbr={"KG"}>
                    KYRGYZSTAN
                  </option>
                  <option value={"856"} data-abbr={"LA"}>
                    LAO PEOPLE'S DEMOCRATIC REPUBLIC
                  </option>
                  <option value={"371"} data-abbr={"LV"}>
                    LATVIA
                  </option>
                  <option value={"961"} data-abbr={"LB"}>
                    LEBANON
                  </option>
                  <option value={"266"} data-abbr={"LS"}>
                    LESOTHO
                  </option>
                  <option value={"231"} data-abbr={"LR"}>
                    LIBERIA
                  </option>
                  <option value={"218"} data-abbr={"LY"}>
                    LIBYAN ARAB JAMAHIRIYA
                  </option>
                  <option value={"423"} data-abbr={"LI"}>
                    LIECHTENSTEIN
                  </option>
                  <option value={"370"} data-abbr={"LT"}>
                    LITHUANIA
                  </option>
                  <option value={"352"} data-abbr={"LU"}>
                    LUXEMBOURG
                  </option>
                  <option value={"853"} data-abbr={"MO"}>
                    MACAO
                  </option>
                  <option value={"389"} data-abbr={"MK"}>
                    MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF
                  </option>
                  <option value={"261"} data-abbr={"MG"}>
                    MADAGASCAR
                  </option>
                  <option value={"265"} data-abbr={"MW"}>
                    MALAWI
                  </option>
                  <option value={"60"} data-abbr={"MY"}>
                    MALAYSIA
                  </option>
                  <option value={"960"} data-abbr={"MV"}>
                    MALDIVES
                  </option>
                  <option value={"223"} data-abbr={"ML"}>
                    MALI
                  </option>
                  <option value={"356"} data-abbr={"MT"}>
                    MALTA
                  </option>
                  <option value={"692"} data-abbr={"MH"}>
                    MARSHALL ISLANDS
                  </option>
                  <option value={"596"} data-abbr={"MQ"}>
                    MARTINIQUE
                  </option>
                  <option value={"222"} data-abbr={"MR"}>
                    MAURITANIA
                  </option>
                  <option value={"230"} data-abbr={"MU"}>
                    MAURITIUS
                  </option>
                  <option value={"269"} data-abbr={"YT"}>
                    MAYOTTE
                  </option>
                  <option value={"52"} data-abbr={"MX"}>
                    MEXICO
                  </option>
                  <option value={"691"} data-abbr={"FM"}>
                    MICRONESIA, FEDERATED STATES OF
                  </option>
                  <option value={"373"} data-abbr={"MD"}>
                    MOLDOVA, REPUBLIC OF
                  </option>
                  <option value={"377"} data-abbr={"MC"}>
                    MONACO
                  </option>
                  <option value={"976"} data-abbr={"MN"}>
                    MONGOLIA
                  </option>
                  <option value={"664"} data-abbr={"MS"}>
                    MONTSERRAT
                  </option>
                  <option value={"212"} data-abbr={"MA"}>
                    MOROCCO
                  </option>
                  <option value={"258"} data-abbr={"MZ"}>
                    MOZAMBIQUE
                  </option>
                  <option value={"95"} data-abbr={"MM"}>
                    MYANMAR
                  </option>
                  <option value={"264"} data-abbr={"NA"}>
                    NAMIBIA
                  </option>
                  <option value={"674"} data-abbr={"NR"}>
                    NAURU
                  </option>
                  <option value={"977"} data-abbr={"NP"}>
                    NEPAL
                  </option>
                  <option value={"31"} data-abbr={"NL"}>
                    NETHERLANDS
                  </option>
                  <option value={"599"} data-abbr={"AN"}>
                    NETHERLANDS ANTILLES
                  </option>
                  <option value={"687"} data-abbr={"NC"}>
                    NEW CALEDONIA
                  </option>
                  <option value={"64"} data-abbr={"NZ"}>
                    NEW ZEALAND
                  </option>
                  <option value={"505"} data-abbr={"NI"}>
                    NICARAGUA
                  </option>
                  <option value={"227"} data-abbr={"NE"}>
                    NIGER
                  </option>
                  <option value={"234"} data-abbr={"NG"}>
                    NIGERIA
                  </option>
                  <option value={"683"} data-abbr={"NU"}>
                    NIUE
                  </option>
                  <option value={"672"} data-abbr={"NF"}>
                    NORFOLK ISLAND
                  </option>
                  <option value={"167"} data-abbr={"MP"}>
                    NORTHERN MARIANA ISLANDS
                  </option>
                  <option value={"47"} data-abbr={"NO"}>
                    NORWAY
                  </option>
                  <option value={"968"} data-abbr={"OM"}>
                    OMAN
                  </option>
                  <option value={"92"} data-abbr={"PK"}>
                    PAKISTAN
                  </option>
                  <option value={"680"} data-abbr={"PW"}>
                    PALAU
                  </option>
                  <option value={"970"} data-abbr={"PS"}>
                    PALESTINIAN TERRITORY, OCCUPIED
                  </option>
                  <option value={"507"} data-abbr={"PA"}>
                    PANAMA
                  </option>
                  <option value={"675"} data-abbr={"PG"}>
                    PAPUA NEW GUINEA
                  </option>
                  <option value={"595"} data-abbr={"PY"}>
                    PARAGUAY
                  </option>
                  <option value={"51"} data-abbr={"PE"}>
                    PERU
                  </option>
                  <option value={"63"} data-abbr={"PH"}>
                    PHILIPPINES
                  </option>
                  <option value={"672"} data-abbr={"PN"}>
                    PITCAIRN
                  </option>
                  <option value={"48"} data-abbr={"PL"}>
                    POLAND
                  </option>
                  <option value={"351"} data-abbr={"PT"}>
                    PORTUGAL
                  </option>
                  <option value={"787"} data-abbr={"PR"}>
                    PUERTO RICO
                  </option>
                  <option value={"974"} data-abbr={"QA"}>
                    QATAR
                  </option>
                  <option value={"262"} data-abbr={"RE"}>
                    REUNION
                  </option>
                  <option value={"40"} data-abbr={"RO"}>
                    ROMANIA
                  </option>
                  <option value={"7"} data-abbr={"RU"}>
                    RUSSIAN FEDERATION
                  </option>
                  <option value={"250"} data-abbr={"RW"}>
                    RWANDA
                  </option>
                  <option value={"290"} data-abbr={"SH"}>
                    SAINT HELENA
                  </option>
                  <option value={"186"} data-abbr={"KN"}>
                    SAINT KITTS AND NEVIS
                  </option>
                  <option value={"175"} data-abbr={"LC"}>
                    SAINT LUCIA
                  </option>
                  <option value={"508"} data-abbr={"PM"}>
                    SAINT PIERRE AND MIQUELON
                  </option>
                  <option value={"180"} data-abbr={"VC"}>
                    SAINT VINCENT AND THE GRENADINES
                  </option>
                  <option value={"885"} data-abbr={"WS"}>
                    SAMOA
                  </option>
                  <option value={"378"} data-abbr={"SM"}>
                    SAN MARINO
                  </option>
                  <option value={"239"} data-abbr={"ST"}>
                    SAO TOME AND PRINCIPE
                  </option>
                  <option value={"966"} data-abbr={"SA"}>
                    SAUDI ARABIA
                  </option>
                  <option value={"221"} data-abbr={"SN"}>
                    SENEGAL
                  </option>
                  <option value={"381"} data-abbr={"CS"}>
                    SERBIA AND MONTENEGRO
                  </option>
                  <option value={"248"} data-abbr={"SC"}>
                    SEYCHELLES
                  </option>
                  <option value={"232"} data-abbr={"SL"}>
                    SIERRA LEONE
                  </option>
                  <option value={"65"} data-abbr={"SG"}>
                    SINGAPORE
                  </option>
                  <option value={"421"} data-abbr={"SK"}>
                    SLOVAKIA
                  </option>
                  <option value={"386"} data-abbr={"SI"}>
                    SLOVENIA
                  </option>
                  <option value={"677"} data-abbr={"SB"}>
                    SOLOMON ISLANDS
                  </option>
                  <option value={"252"} data-abbr={"SO"}>
                    SOMALIA
                  </option>
                  <option value={"27"} data-abbr={"ZA"}>
                    SOUTH AFRICA
                  </option>
                  <option value={"34"} data-abbr={"ES"}>
                    SPAIN
                  </option>
                  <option value={"94"} data-abbr={"LK"}>
                    SRI LANKA
                  </option>
                  <option value={"249"} data-abbr={"SD"}>
                    SUDAN
                  </option>
                  <option value={"597"} data-abbr={"SR"}>
                    SURINAME
                  </option>
                  <option value={"47"} data-abbr={"SJ"}>
                    SVALBARD AND JAN MAYEN
                  </option>
                  <option value={"268"} data-abbr={"SZ"}>
                    SWAZILAND
                  </option>
                  <option value={"46"} data-abbr={"SE"}>
                    SWEDEN
                  </option>
                  <option value={"41"} data-abbr={"CH"}>
                    SWITZERLAND
                  </option>
                  <option value={"963"} data-abbr={"SY"}>
                    SYRIAN ARAB REPUBLIC
                  </option>
                  <option value={"886"} data-abbr={"TW"}>
                    TAIWAN, PROVINCE OF CHINA
                  </option>
                  <option value={"992"} data-abbr={"TJ"}>
                    TAJIKISTAN
                  </option>
                  <option value={"255"} data-abbr={"TZ"}>
                    TANZANIA, UNITED REPUBLIC OF
                  </option>
                  <option value={"66"} data-abbr={"TH"}>
                    THAILAND
                  </option>
                  <option value={"670"} data-abbr={"TL"}>
                    TIMOR-LESTE
                  </option>
                  <option value={"228"} data-abbr={"TG"}>
                    TOGO
                  </option>
                  <option value={"690"} data-abbr={"TK"}>
                    TOKELAU
                  </option>
                  <option value={"676"} data-abbr={"TO"}>
                    TONGA
                  </option>
                  <option value={"186"} data-abbr={"TT"}>
                    TRINIDAD AND TOBAGO
                  </option>
                  <option value={"216"} data-abbr={"TN"}>
                    TUNISIA
                  </option>
                  <option value={"90"} data-abbr={"TR"}>
                    TURKEY
                  </option>
                  <option value={"993"} data-abbr={"TM"}>
                    TURKMENISTAN
                  </option>
                  <option value={"164"} data-abbr={"TC"}>
                    TURKS AND CAICOS ISLANDS
                  </option>
                  <option value={"688"} data-abbr={"TV"}>
                    TUVALU
                  </option>
                  <option value={"256"} data-abbr={"UG"}>
                    UGANDA
                  </option>
                  <option value={"380"} data-abbr={"UA"}>
                    UKRAINE
                  </option>
                  <option value={"971"} data-abbr={"AE"}>
                    UNITED ARAB EMIRATES
                  </option>
                  <option value={"44"} data-abbr={"GB"}>
                    UNITED KINGDOM
                  </option>
                  <option value={"1"} data-abbr={"US"} selected>
                    UNITED STATES
                  </option>
                  <option value={"598"} data-abbr={"UY"}>
                    URUGUAY
                  </option>
                  <option value={"998"} data-abbr={"UZ"}>
                    UZBEKISTAN
                  </option>
                  <option value={"678"} data-abbr={"VU"}>
                    VANUATU
                  </option>
                  <option value={"58"} data-abbr={"VE"}>
                    VENEZUELA
                  </option>
                  <option value={"84"} data-abbr={"VN"}>
                    VIETNAM
                  </option>
                  <option value={"128"} data-abbr={"VG"}>
                    VIRGIN ISLANDS, BRITISH
                  </option>
                  <option value={"134"} data-abbr={"VI"}>
                    VIRGIN ISLANDS, U.S.
                  </option>
                  <option value={"681"} data-abbr={"WF"}>
                    WALLIS AND FUTUNA
                  </option>
                  <option value={"212"} data-abbr={"EH"}>
                    WESTERN SAHARA
                  </option>
                  <option value={"967"} data-abbr={"YE"}>
                    YEMEN
                  </option>
                  <option value={"260"} data-abbr={"ZM"}>
                    ZAMBIA
                  </option>
                  <option value={"263"} data-abbr={"ZW"}>
                    ZIMBABWE
                  </option>
                </select>
              </div>
            </div>
            <div className={"field field-100"}>
              <div className={"col-lg-2 noguttar"}>
                <input type={"text"} name={"countrycode"} className={"countrycode"} id={"countrycode"} readOnly />
              </div>
              <div className={"col-lg-10"}>
                <div className={"num-with-code"}>
                  <input type={"tel"} id={"phoneNum"} name={"phone"} placeholder={"Phone Number"} />
                  <input type={"hidden"} name={"gclid"} defaultValue={""} />
                  <input type={"hidden"} name={"fbclid"} defaultValue={""} />
                  <input type={"hidden"} name={"__keyword"} defaultValue={""} />
                  <input type={"hidden"} name={"__device"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_source"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_campaign"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_content"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_term"} defaultValue={""} />
                  <input type={"hidden"} name={"__matchtype"} defaultValue={""} />
                </div>
              </div>
            </div>
            <div className={"field"}>
              <input type={"hidden"} name={"leadsource"} defaultValue={"Call Back Form"} />
              <input type={"hidden"} name={"concode"} defaultValue={"leftside"} />
              <input type={"hidden"} placeholder={"Email"} name={"popupemail"} defaultValue={"x123yz@1741707675.com"} />
            </div>
            <div className={"text-center"}>
              <input type={"hidden"} name={"g-recaptcha-response"} />
              <input type={"hidden"} name={"concode"} defaultValue={"sideform"} />
              <input type={"submit"} defaultValue={"Let’s Get Started"} />
            </div>
          </form>
        </div>
      </div>
      <div className={"popup-slide popup-slide-rght"}>
        <div className={"popup-slide-close"}></div>
        <div className={"popup-slide-innr"}>
          <h2 className={"sec-hd"}>
            Get a Free Consultation
            <span>
              A tailored digital marketing strategy for your business
            </span>
          </h2>
          <form action={"#"} method={"POST"} id={"form3"} className={"js-recaptcha-form"}>
            <div className={"field"}>
              <input type={"text"} id={"name"} placeholder={"Full Name"} name={"popupname"} required />
            </div>
            <div className={"field"}>
              <div className={"contact-dd newcountrycode"}>
                <span></span>
                <select className={"countrylist valid"} name={"pc"}>
                  <option value={"93"} data-abbr={"AF"}>
                    AFGHANISTAN
                  </option>
                  <option value={"358"} data-abbr={"AX"}>
                    ALAND ISLANDS
                  </option>
                  <option value={"355"} data-abbr={"AL"}>
                    ALBANIA
                  </option>
                  <option value={"213"} data-abbr={"DZ"}>
                    ALGERIA
                  </option>
                  <option value={"168"} data-abbr={"AS"}>
                    AMERICAN SAMOA
                  </option>
                  <option value={"376"} data-abbr={"AD"}>
                    ANDORRA
                  </option>
                  <option value={"244"} data-abbr={"AO"}>
                    ANGOLA
                  </option>
                  <option value={"264"} data-abbr={"AI"}>
                    ANGUILLA
                  </option>
                  <option value={"167"} data-abbr={"AQ"}>
                    ANTARCTICA
                  </option>
                  <option value={"268"} data-abbr={"AG"}>
                    ANTIGUA AND BARBUDA
                  </option>
                  <option value={"54"} data-abbr={"AR"}>
                    ARGENTINA
                  </option>
                  <option value={"374"} data-abbr={"AM"}>
                    ARMENIA
                  </option>
                  <option value={"297"} data-abbr={"AW"}>
                    ARUBA
                  </option>
                  <option value={"61"} data-abbr={"AU"}>
                    AUSTRALIA
                  </option>
                  <option value={"43"} data-abbr={"AT"}>
                    AUSTRIA
                  </option>
                  <option value={"994"} data-abbr={"AZ"}>
                    AZERBAIJAN
                  </option>
                  <option value={"242"} data-abbr={"BS"}>
                    BAHAMAS
                  </option>
                  <option value={"973"} data-abbr={"BH"}>
                    BAHRAIN
                  </option>
                  <option value={"880"} data-abbr={"BD"}>
                    BANGLADESH
                  </option>
                  <option value={"246"} data-abbr={"BB"}>
                    BARBADOS
                  </option>
                  <option value={"375"} data-abbr={"BY"}>
                    BELARUS
                  </option>
                  <option value={"32"} data-abbr={"BE"}>
                    BELGIUM
                  </option>
                  <option value={"501"} data-abbr={"BZ"}>
                    BELIZE
                  </option>
                  <option value={"229"} data-abbr={"BJ"}>
                    BENIN
                  </option>
                  <option value={"441"} data-abbr={"BM"}>
                    BERMUDA
                  </option>
                  <option value={"975"} data-abbr={"BT"}>
                    BHUTAN
                  </option>
                  <option value={"591"} data-abbr={"BO"}>
                    BOLIVIA
                  </option>
                  <option value={"387"} data-abbr={"BA"}>
                    BOSNIA AND HERZEGOVINA
                  </option>
                  <option value={"267"} data-abbr={"BW"}>
                    BOTSWANA
                  </option>
                  <option value={"55"} data-abbr={"BR"}>
                    BRAZIL
                  </option>
                  <option value={"246"} data-abbr={"IO"}>
                    BRITISH INDIAN OCEAN TERRITORY
                  </option>
                  <option value={"673"} data-abbr={"BN"}>
                    BRUNEI DARUSSALAM
                  </option>
                  <option value={"359"} data-abbr={"BG"}>
                    BULGARIA
                  </option>
                  <option value={"226"} data-abbr={"BF"}>
                    BURKINA FASO
                  </option>
                  <option value={"257"} data-abbr={"BI"}>
                    BURUNDI
                  </option>
                  <option value={"855"} data-abbr={"KH"}>
                    CAMBODIA
                  </option>
                  <option value={"237"} data-abbr={"CM"}>
                    CAMEROON
                  </option>
                  <option value={"1"} data-abbr={"CA"} selected>
                    CANADA
                  </option>
                  <option value={"238"} data-abbr={"CV"}>
                    CAPE VERDE
                  </option>
                  <option value={"345"} data-abbr={"KY"}>
                    CAYMAN ISLANDS
                  </option>
                  <option value={"236"} data-abbr={"CF"}>
                    CENTRAL AFRICAN REPUBLIC
                  </option>
                  <option value={"235"} data-abbr={"TD"}>
                    CHAD
                  </option>
                  <option value={"56"} data-abbr={"CL"}>
                    CHILE
                  </option>
                  <option value={"86"} data-abbr={"CN"}>
                    CHINA
                  </option>
                  <option value={"672"} data-abbr={"CX"}>
                    CHRISTMAS ISLAND
                  </option>
                  <option value={"672"} data-abbr={"CC"}>
                    COCOS (KEELING) ISLANDS
                  </option>
                  <option value={"57"} data-abbr={"CO"}>
                    COLOMBIA
                  </option>
                  <option value={"269"} data-abbr={"KM"}>
                    COMOROS
                  </option>
                  <option value={"242"} data-abbr={"CG"}>
                    CONGO
                  </option>
                  <option value={"682"} data-abbr={"CK"}>
                    COOK ISLANDS
                  </option>
                  <option value={"506"} data-abbr={"CR"}>
                    COSTA RICA
                  </option>
                  <option value={"225"} data-abbr={"CI"}>
                    COTE D'IVOIRE
                  </option>
                  <option value={"385"} data-abbr={"HR"}>
                    CROATIA
                  </option>
                  <option value={"53"} data-abbr={"CU"}>
                    CUBA
                  </option>
                  <option value={"357"} data-abbr={"CY"}>
                    CYPRUS
                  </option>
                  <option value={"420"} data-abbr={"CZ"}>
                    CZECH REPUBLIC
                  </option>
                  <option value={"45"} data-abbr={"DK"}>
                    DENMARK
                  </option>
                  <option value={"253"} data-abbr={"DJ"}>
                    DJIBOUTI
                  </option>
                  <option value={"176"} data-abbr={"DM"}>
                    DOMINICA
                  </option>
                  <option value={"809"} data-abbr={"DO"}>
                    DOMINICAN REPUBLIC
                  </option>
                  <option value={"593"} data-abbr={"EC"}>
                    ECUADOR
                  </option>
                  <option value={"20"} data-abbr={"EG"}>
                    EGYPT
                  </option>
                  <option value={"503"} data-abbr={"SV"}>
                    EL SALVADOR
                  </option>
                  <option value={"240"} data-abbr={"GQ"}>
                    EQUATORIAL GUINEA
                  </option>
                  <option value={"291"} data-abbr={"ER"}>
                    ERITREA
                  </option>
                  <option value={"372"} data-abbr={"EE"}>
                    ESTONIA
                  </option>
                  <option value={"251"} data-abbr={"ET"}>
                    ETHIOPIA
                  </option>
                  <option value={"500"} data-abbr={"FK"}>
                    FALKLAND ISLANDS (MALVINAS)
                  </option>
                  <option value={"298"} data-abbr={"FO"}>
                    FAROE ISLANDS
                  </option>
                  <option value={"679"} data-abbr={"FJ"}>
                    FIJI
                  </option>
                  <option value={"358"} data-abbr={"FI"}>
                    FINLAND
                  </option>
                  <option value={"33"} data-abbr={"FR"}>
                    FRANCE
                  </option>
                  <option value={"594"} data-abbr={"GF"}>
                    FRENCH GUIANA
                  </option>
                  <option value={"689"} data-abbr={"PF"}>
                    FRENCH POLYNESIA
                  </option>
                  <option value={"689"} data-abbr={"TF"}>
                    FRENCH SOUTHERN TERRITORIES
                  </option>
                  <option value={"241"} data-abbr={"GA"}>
                    GABON
                  </option>
                  <option value={"220"} data-abbr={"GM"}>
                    GAMBIA
                  </option>
                  <option value={"995"} data-abbr={"GE"}>
                    GEORGIA
                  </option>
                  <option value={"49"} data-abbr={"DE"}>
                    GERMANY
                  </option>
                  <option value={"233"} data-abbr={"GH"}>
                    GHANA
                  </option>
                  <option value={"350"} data-abbr={"GI"}>
                    GIBRALTAR
                  </option>
                  <option value={"30"} data-abbr={"GR"}>
                    GREECE
                  </option>
                  <option value={"299"} data-abbr={"GL"}>
                    GREENLAND
                  </option>
                  <option value={"473"} data-abbr={"GD"}>
                    GRENADA
                  </option>
                  <option value={"590"} data-abbr={"GP"}>
                    GUADELOUPE
                  </option>
                  <option value={"671"} data-abbr={"GU"}>
                    GUAM
                  </option>
                  <option value={"502"} data-abbr={"GT"}>
                    GUATEMALA
                  </option>
                  <option value={"224"} data-abbr={"GN"}>
                    GUINEA
                  </option>
                  <option value={"245"} data-abbr={"GW"}>
                    GUINEA-BISSAU
                  </option>
                  <option value={"592"} data-abbr={"GY"}>
                    GUYANA
                  </option>
                  <option value={"509"} data-abbr={"HT"}>
                    HAITI
                  </option>
                  <option value={"39"} data-abbr={"VA"}>
                    HOLY SEE (VATICAN CITY STATE)
                  </option>
                  <option value={"503"} data-abbr={"HN"}>
                    HONDURAS
                  </option>
                  <option value={"852"} data-abbr={"HK"}>
                    HONG KONG
                  </option>
                  <option value={"36"} data-abbr={"HU"}>
                    HUNGARY
                  </option>
                  <option value={"354"} data-abbr={"IS"}>
                    ICELAND
                  </option>
                  <option value={"91"} data-abbr={"IN"}>
                    INDIA
                  </option>
                  <option value={"62"} data-abbr={"ID"}>
                    INDONESIA
                  </option>
                  <option value={"98"} data-abbr={"IR"}>
                    IRAN, ISLAMIC REPUBLIC OF
                  </option>
                  <option value={"964"} data-abbr={"IQ"}>
                    IRAQ
                  </option>
                  <option value={"353"} data-abbr={"IE"}>
                    IRELAND
                  </option>
                  <option value={"972"} data-abbr={"IL"}>
                    ISRAEL
                  </option>
                  <option value={"39"} data-abbr={"IT"}>
                    ITALY
                  </option>
                  <option value={"876"} data-abbr={"JM"}>
                    JAMAICA
                  </option>
                  <option value={"81"} data-abbr={"JP"}>
                    JAPAN
                  </option>
                  <option value={"962"} data-abbr={"JO"}>
                    JORDAN
                  </option>
                  <option value={"7"} data-abbr={"KZ"}>
                    KAZAKHSTAN
                  </option>
                  <option value={"254"} data-abbr={"KE"}>
                    KENYA
                  </option>
                  <option value={"686"} data-abbr={"KI"}>
                    KIRIBATI
                  </option>
                  <option value={"82"} data-abbr={"KP"}>
                    KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                  </option>
                  <option value={"82"} data-abbr={"KR"}>
                    KOREA, REPUBLIC OF
                  </option>
                  <option value={"965"} data-abbr={"KW"}>
                    KUWAIT
                  </option>
                  <option value={"996"} data-abbr={"KG"}>
                    KYRGYZSTAN
                  </option>
                  <option value={"856"} data-abbr={"LA"}>
                    LAO PEOPLE'S DEMOCRATIC REPUBLIC
                  </option>
                  <option value={"371"} data-abbr={"LV"}>
                    LATVIA
                  </option>
                  <option value={"961"} data-abbr={"LB"}>
                    LEBANON
                  </option>
                  <option value={"266"} data-abbr={"LS"}>
                    LESOTHO
                  </option>
                  <option value={"231"} data-abbr={"LR"}>
                    LIBERIA
                  </option>
                  <option value={"218"} data-abbr={"LY"}>
                    LIBYAN ARAB JAMAHIRIYA
                  </option>
                  <option value={"423"} data-abbr={"LI"}>
                    LIECHTENSTEIN
                  </option>
                  <option value={"370"} data-abbr={"LT"}>
                    LITHUANIA
                  </option>
                  <option value={"352"} data-abbr={"LU"}>
                    LUXEMBOURG
                  </option>
                  <option value={"853"} data-abbr={"MO"}>
                    MACAO
                  </option>
                  <option value={"389"} data-abbr={"MK"}>
                    MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF
                  </option>
                  <option value={"261"} data-abbr={"MG"}>
                    MADAGASCAR
                  </option>
                  <option value={"265"} data-abbr={"MW"}>
                    MALAWI
                  </option>
                  <option value={"60"} data-abbr={"MY"}>
                    MALAYSIA
                  </option>
                  <option value={"960"} data-abbr={"MV"}>
                    MALDIVES
                  </option>
                  <option value={"223"} data-abbr={"ML"}>
                    MALI
                  </option>
                  <option value={"356"} data-abbr={"MT"}>
                    MALTA
                  </option>
                  <option value={"692"} data-abbr={"MH"}>
                    MARSHALL ISLANDS
                  </option>
                  <option value={"596"} data-abbr={"MQ"}>
                    MARTINIQUE
                  </option>
                  <option value={"222"} data-abbr={"MR"}>
                    MAURITANIA
                  </option>
                  <option value={"230"} data-abbr={"MU"}>
                    MAURITIUS
                  </option>
                  <option value={"269"} data-abbr={"YT"}>
                    MAYOTTE
                  </option>
                  <option value={"52"} data-abbr={"MX"}>
                    MEXICO
                  </option>
                  <option value={"691"} data-abbr={"FM"}>
                    MICRONESIA, FEDERATED STATES OF
                  </option>
                  <option value={"373"} data-abbr={"MD"}>
                    MOLDOVA, REPUBLIC OF
                  </option>
                  <option value={"377"} data-abbr={"MC"}>
                    MONACO
                  </option>
                  <option value={"976"} data-abbr={"MN"}>
                    MONGOLIA
                  </option>
                  <option value={"664"} data-abbr={"MS"}>
                    MONTSERRAT
                  </option>
                  <option value={"212"} data-abbr={"MA"}>
                    MOROCCO
                  </option>
                  <option value={"258"} data-abbr={"MZ"}>
                    MOZAMBIQUE
                  </option>
                  <option value={"95"} data-abbr={"MM"}>
                    MYANMAR
                  </option>
                  <option value={"264"} data-abbr={"NA"}>
                    NAMIBIA
                  </option>
                  <option value={"674"} data-abbr={"NR"}>
                    NAURU
                  </option>
                  <option value={"977"} data-abbr={"NP"}>
                    NEPAL
                  </option>
                  <option value={"31"} data-abbr={"NL"}>
                    NETHERLANDS
                  </option>
                  <option value={"599"} data-abbr={"AN"}>
                    NETHERLANDS ANTILLES
                  </option>
                  <option value={"687"} data-abbr={"NC"}>
                    NEW CALEDONIA
                  </option>
                  <option value={"64"} data-abbr={"NZ"}>
                    NEW ZEALAND
                  </option>
                  <option value={"505"} data-abbr={"NI"}>
                    NICARAGUA
                  </option>
                  <option value={"227"} data-abbr={"NE"}>
                    NIGER
                  </option>
                  <option value={"234"} data-abbr={"NG"}>
                    NIGERIA
                  </option>
                  <option value={"683"} data-abbr={"NU"}>
                    NIUE
                  </option>
                  <option value={"672"} data-abbr={"NF"}>
                    NORFOLK ISLAND
                  </option>
                  <option value={"167"} data-abbr={"MP"}>
                    NORTHERN MARIANA ISLANDS
                  </option>
                  <option value={"47"} data-abbr={"NO"}>
                    NORWAY
                  </option>
                  <option value={"968"} data-abbr={"OM"}>
                    OMAN
                  </option>
                  <option value={"92"} data-abbr={"PK"}>
                    PAKISTAN
                  </option>
                  <option value={"680"} data-abbr={"PW"}>
                    PALAU
                  </option>
                  <option value={"970"} data-abbr={"PS"}>
                    PALESTINIAN TERRITORY, OCCUPIED
                  </option>
                  <option value={"507"} data-abbr={"PA"}>
                    PANAMA
                  </option>
                  <option value={"675"} data-abbr={"PG"}>
                    PAPUA NEW GUINEA
                  </option>
                  <option value={"595"} data-abbr={"PY"}>
                    PARAGUAY
                  </option>
                  <option value={"51"} data-abbr={"PE"}>
                    PERU
                  </option>
                  <option value={"63"} data-abbr={"PH"}>
                    PHILIPPINES
                  </option>
                  <option value={"672"} data-abbr={"PN"}>
                    PITCAIRN
                  </option>
                  <option value={"48"} data-abbr={"PL"}>
                    POLAND
                  </option>
                  <option value={"351"} data-abbr={"PT"}>
                    PORTUGAL
                  </option>
                  <option value={"787"} data-abbr={"PR"}>
                    PUERTO RICO
                  </option>
                  <option value={"974"} data-abbr={"QA"}>
                    QATAR
                  </option>
                  <option value={"262"} data-abbr={"RE"}>
                    REUNION
                  </option>
                  <option value={"40"} data-abbr={"RO"}>
                    ROMANIA
                  </option>
                  <option value={"7"} data-abbr={"RU"}>
                    RUSSIAN FEDERATION
                  </option>
                  <option value={"250"} data-abbr={"RW"}>
                    RWANDA
                  </option>
                  <option value={"290"} data-abbr={"SH"}>
                    SAINT HELENA
                  </option>
                  <option value={"186"} data-abbr={"KN"}>
                    SAINT KITTS AND NEVIS
                  </option>
                  <option value={"175"} data-abbr={"LC"}>
                    SAINT LUCIA
                  </option>
                  <option value={"508"} data-abbr={"PM"}>
                    SAINT PIERRE AND MIQUELON
                  </option>
                  <option value={"180"} data-abbr={"VC"}>
                    SAINT VINCENT AND THE GRENADINES
                  </option>
                  <option value={"885"} data-abbr={"WS"}>
                    SAMOA
                  </option>
                  <option value={"378"} data-abbr={"SM"}>
                    SAN MARINO
                  </option>
                  <option value={"239"} data-abbr={"ST"}>
                    SAO TOME AND PRINCIPE
                  </option>
                  <option value={"966"} data-abbr={"SA"}>
                    SAUDI ARABIA
                  </option>
                  <option value={"221"} data-abbr={"SN"}>
                    SENEGAL
                  </option>
                  <option value={"381"} data-abbr={"CS"}>
                    SERBIA AND MONTENEGRO
                  </option>
                  <option value={"248"} data-abbr={"SC"}>
                    SEYCHELLES
                  </option>
                  <option value={"232"} data-abbr={"SL"}>
                    SIERRA LEONE
                  </option>
                  <option value={"65"} data-abbr={"SG"}>
                    SINGAPORE
                  </option>
                  <option value={"421"} data-abbr={"SK"}>
                    SLOVAKIA
                  </option>
                  <option value={"386"} data-abbr={"SI"}>
                    SLOVENIA
                  </option>
                  <option value={"677"} data-abbr={"SB"}>
                    SOLOMON ISLANDS
                  </option>
                  <option value={"252"} data-abbr={"SO"}>
                    SOMALIA
                  </option>
                  <option value={"27"} data-abbr={"ZA"}>
                    SOUTH AFRICA
                  </option>
                  <option value={"34"} data-abbr={"ES"}>
                    SPAIN
                  </option>
                  <option value={"94"} data-abbr={"LK"}>
                    SRI LANKA
                  </option>
                  <option value={"249"} data-abbr={"SD"}>
                    SUDAN
                  </option>
                  <option value={"597"} data-abbr={"SR"}>
                    SURINAME
                  </option>
                  <option value={"47"} data-abbr={"SJ"}>
                    SVALBARD AND JAN MAYEN
                  </option>
                  <option value={"268"} data-abbr={"SZ"}>
                    SWAZILAND
                  </option>
                  <option value={"46"} data-abbr={"SE"}>
                    SWEDEN
                  </option>
                  <option value={"41"} data-abbr={"CH"}>
                    SWITZERLAND
                  </option>
                  <option value={"963"} data-abbr={"SY"}>
                    SYRIAN ARAB REPUBLIC
                  </option>
                  <option value={"886"} data-abbr={"TW"}>
                    TAIWAN, PROVINCE OF CHINA
                  </option>
                  <option value={"992"} data-abbr={"TJ"}>
                    TAJIKISTAN
                  </option>
                  <option value={"255"} data-abbr={"TZ"}>
                    TANZANIA, UNITED REPUBLIC OF
                  </option>
                  <option value={"66"} data-abbr={"TH"}>
                    THAILAND
                  </option>
                  <option value={"670"} data-abbr={"TL"}>
                    TIMOR-LESTE
                  </option>
                  <option value={"228"} data-abbr={"TG"}>
                    TOGO
                  </option>
                  <option value={"690"} data-abbr={"TK"}>
                    TOKELAU
                  </option>
                  <option value={"676"} data-abbr={"TO"}>
                    TONGA
                  </option>
                  <option value={"186"} data-abbr={"TT"}>
                    TRINIDAD AND TOBAGO
                  </option>
                  <option value={"216"} data-abbr={"TN"}>
                    TUNISIA
                  </option>
                  <option value={"90"} data-abbr={"TR"}>
                    TURKEY
                  </option>
                  <option value={"993"} data-abbr={"TM"}>
                    TURKMENISTAN
                  </option>
                  <option value={"164"} data-abbr={"TC"}>
                    TURKS AND CAICOS ISLANDS
                  </option>
                  <option value={"688"} data-abbr={"TV"}>
                    TUVALU
                  </option>
                  <option value={"256"} data-abbr={"UG"}>
                    UGANDA
                  </option>
                  <option value={"380"} data-abbr={"UA"}>
                    UKRAINE
                  </option>
                  <option value={"971"} data-abbr={"AE"}>
                    UNITED ARAB EMIRATES
                  </option>
                  <option value={"44"} data-abbr={"GB"}>
                    UNITED KINGDOM
                  </option>
                  <option value={"1"} data-abbr={"US"} selected>
                    UNITED STATES
                  </option>
                  <option value={"598"} data-abbr={"UY"}>
                    URUGUAY
                  </option>
                  <option value={"998"} data-abbr={"UZ"}>
                    UZBEKISTAN
                  </option>
                  <option value={"678"} data-abbr={"VU"}>
                    VANUATU
                  </option>
                  <option value={"58"} data-abbr={"VE"}>
                    VENEZUELA
                  </option>
                  <option value={"84"} data-abbr={"VN"}>
                    VIETNAM
                  </option>
                  <option value={"128"} data-abbr={"VG"}>
                    VIRGIN ISLANDS, BRITISH
                  </option>
                  <option value={"134"} data-abbr={"VI"}>
                    VIRGIN ISLANDS, U.S.
                  </option>
                  <option value={"681"} data-abbr={"WF"}>
                    WALLIS AND FUTUNA
                  </option>
                  <option value={"212"} data-abbr={"EH"}>
                    WESTERN SAHARA
                  </option>
                  <option value={"967"} data-abbr={"YE"}>
                    YEMEN
                  </option>
                  <option value={"260"} data-abbr={"ZM"}>
                    ZAMBIA
                  </option>
                  <option value={"263"} data-abbr={"ZW"}>
                    ZIMBABWE
                  </option>
                </select>
              </div>
            </div>
            <div className={"field"}>
              <div className={"col-lg-2 noguttar"}>
                <input type={"text"} name={"countrycode"} className={"countrycode"} id={"countrycode"} readOnly />
              </div>
              <div className={"col-lg-10"}>
                <div className={"num-with-code"}>
                  <input type={"tel"} id={"phoneNum"} name={"phone"} placeholder={"Phone Number"} />
                  <input type={"hidden"} name={"leadsource"} defaultValue={"side form"} />
                  <input type={"hidden"} name={"gclid"} defaultValue={""} />
                  <input type={"hidden"} name={"fbclid"} defaultValue={""} />
                  <input type={"hidden"} name={"__keyword"} defaultValue={""} />
                  <input type={"hidden"} name={"__device"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_source"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_campaign"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_content"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_term"} defaultValue={""} />
                  <input type={"hidden"} name={"__matchtype"} defaultValue={""} />
                </div>
              </div>
            </div>
            <div className={"field"}>
              <input type={"hidden"} name={"leadsource"} defaultValue={"Get 80% Discount"} />
              <input type={"hidden"} name={"concode"} defaultValue={"rightside"} />
              <input type={"text"} placeholder={"Email Address"} id={"email"} name={"popupemail"} required />
            </div>
            <div className={"field field-100"}>
              <select name={"service"} id={"service"}>
                <option value={"Logo Design"}>
                  Logo Design
                </option>
                <option value={"Website Design"}>
                  Website Design
                </option>
                <option value={"Branding"}>
                  Branding
                </option>
                <option value={"Mobile Apps"}>
                  Mobile Apps
                </option>
              </select>
            </div>
            <div className={"text-center"}>
              <input type={"hidden"} name={"concode"} defaultValue={"sideform"} />
              <input type={"submit"} defaultValue={"Let’s Get Started"} />
            </div>
          </form>
        </div>
      </div>
      <a href={"tel:+ 210 360 9849"} className={"fixed-mob-call-icon"}>
        <i className={"lx-btn-icon"}><IconPhone size={16} /></i>
      </a>
      <div className={"popup-layout popup-layout1"} id={"popup-layout"}>
        <div className={"popup-inner"}>
          <div className={"col-md-7 no-pad"}>
            <div className={"ovrflw-hdden"}>
              <img src={"/assets/images/popup-img.png"} alt={""} />
            </div>
          </div>
          <div className={"col-md-5 no-pad"}>
            <a className={"popup-close"} href={"javascript:;"}>
              <i className={"lx-btn-icon"}><IconClose size={16} /></i>
            </a>
            <form id={"popupform"} action={"test.php"} method={"POST"} className={"js-recaptcha-form"}>
              <input type={"hidden"} id={"package_html"} name={"package_html"} className={"package_html"} defaultValue={""} />
              <div className={"popup-header"}>
                <h3></h3>
                <p className={"ban-subhd"}></p>
              </div>
              <div className={"popup-bdy"}>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    FULL NAME
                  </label>
                  <input type={"text"} placeholder={"Enter Your Full Name"} name={"popupname"} id={"name"} required />
                </div>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    Email
                  </label>
                  <input type={"email"} placeholder={"Enter Your Email"} name={"popupemail"} id={"email"} required />
                </div>
                <div className={"frmicon-box newcountrycode"}>
                  <label htmlFor={""}>
                    Country
                  </label>
                  <span></span>
                  <select id={"popupformcountry"} className={"countrylist valid"} name={"pc"}>
                    <option value={"93"} data-abbr={"AF"}>
                      AFGHANISTAN
                    </option>
                    <option value={"358"} data-abbr={"AX"}>
                      ALAND ISLANDS
                    </option>
                    <option value={"355"} data-abbr={"AL"}>
                      ALBANIA
                    </option>
                    <option value={"213"} data-abbr={"DZ"}>
                      ALGERIA
                    </option>
                    <option value={"168"} data-abbr={"AS"}>
                      AMERICAN SAMOA
                    </option>
                    <option value={"376"} data-abbr={"AD"}>
                      ANDORRA
                    </option>
                    <option value={"244"} data-abbr={"AO"}>
                      ANGOLA
                    </option>
                    <option value={"264"} data-abbr={"AI"}>
                      ANGUILLA
                    </option>
                    <option value={"167"} data-abbr={"AQ"}>
                      ANTARCTICA
                    </option>
                    <option value={"268"} data-abbr={"AG"}>
                      ANTIGUA AND BARBUDA
                    </option>
                    <option value={"54"} data-abbr={"AR"}>
                      ARGENTINA
                    </option>
                    <option value={"374"} data-abbr={"AM"}>
                      ARMENIA
                    </option>
                    <option value={"297"} data-abbr={"AW"}>
                      ARUBA
                    </option>
                    <option value={"61"} data-abbr={"AU"}>
                      AUSTRALIA
                    </option>
                    <option value={"43"} data-abbr={"AT"}>
                      AUSTRIA
                    </option>
                    <option value={"994"} data-abbr={"AZ"}>
                      AZERBAIJAN
                    </option>
                    <option value={"242"} data-abbr={"BS"}>
                      BAHAMAS
                    </option>
                    <option value={"973"} data-abbr={"BH"}>
                      BAHRAIN
                    </option>
                    <option value={"880"} data-abbr={"BD"}>
                      BANGLADESH
                    </option>
                    <option value={"246"} data-abbr={"BB"}>
                      BARBADOS
                    </option>
                    <option value={"375"} data-abbr={"BY"}>
                      BELARUS
                    </option>
                    <option value={"32"} data-abbr={"BE"}>
                      BELGIUM
                    </option>
                    <option value={"501"} data-abbr={"BZ"}>
                      BELIZE
                    </option>
                    <option value={"229"} data-abbr={"BJ"}>
                      BENIN
                    </option>
                    <option value={"441"} data-abbr={"BM"}>
                      BERMUDA
                    </option>
                    <option value={"975"} data-abbr={"BT"}>
                      BHUTAN
                    </option>
                    <option value={"591"} data-abbr={"BO"}>
                      BOLIVIA
                    </option>
                    <option value={"387"} data-abbr={"BA"}>
                      BOSNIA AND HERZEGOVINA
                    </option>
                    <option value={"267"} data-abbr={"BW"}>
                      BOTSWANA
                    </option>
                    <option value={"55"} data-abbr={"BR"}>
                      BRAZIL
                    </option>
                    <option value={"246"} data-abbr={"IO"}>
                      BRITISH INDIAN OCEAN TERRITORY
                    </option>
                    <option value={"673"} data-abbr={"BN"}>
                      BRUNEI DARUSSALAM
                    </option>
                    <option value={"359"} data-abbr={"BG"}>
                      BULGARIA
                    </option>
                    <option value={"226"} data-abbr={"BF"}>
                      BURKINA FASO
                    </option>
                    <option value={"257"} data-abbr={"BI"}>
                      BURUNDI
                    </option>
                    <option value={"855"} data-abbr={"KH"}>
                      CAMBODIA
                    </option>
                    <option value={"237"} data-abbr={"CM"}>
                      CAMEROON
                    </option>
                    <option value={"1"} data-abbr={"CA"} selected>
                      CANADA
                    </option>
                    <option value={"238"} data-abbr={"CV"}>
                      CAPE VERDE
                    </option>
                    <option value={"345"} data-abbr={"KY"}>
                      CAYMAN ISLANDS
                    </option>
                    <option value={"236"} data-abbr={"CF"}>
                      CENTRAL AFRICAN REPUBLIC
                    </option>
                    <option value={"235"} data-abbr={"TD"}>
                      CHAD
                    </option>
                    <option value={"56"} data-abbr={"CL"}>
                      CHILE
                    </option>
                    <option value={"86"} data-abbr={"CN"}>
                      CHINA
                    </option>
                    <option value={"672"} data-abbr={"CX"}>
                      CHRISTMAS ISLAND
                    </option>
                    <option value={"672"} data-abbr={"CC"}>
                      COCOS (KEELING) ISLANDS
                    </option>
                    <option value={"57"} data-abbr={"CO"}>
                      COLOMBIA
                    </option>
                    <option value={"269"} data-abbr={"KM"}>
                      COMOROS
                    </option>
                    <option value={"242"} data-abbr={"CG"}>
                      CONGO
                    </option>
                    <option value={"682"} data-abbr={"CK"}>
                      COOK ISLANDS
                    </option>
                    <option value={"506"} data-abbr={"CR"}>
                      COSTA RICA
                    </option>
                    <option value={"225"} data-abbr={"CI"}>
                      COTE D'IVOIRE
                    </option>
                    <option value={"385"} data-abbr={"HR"}>
                      CROATIA
                    </option>
                    <option value={"53"} data-abbr={"CU"}>
                      CUBA
                    </option>
                    <option value={"357"} data-abbr={"CY"}>
                      CYPRUS
                    </option>
                    <option value={"420"} data-abbr={"CZ"}>
                      CZECH REPUBLIC
                    </option>
                    <option value={"45"} data-abbr={"DK"}>
                      DENMARK
                    </option>
                    <option value={"253"} data-abbr={"DJ"}>
                      DJIBOUTI
                    </option>
                    <option value={"176"} data-abbr={"DM"}>
                      DOMINICA
                    </option>
                    <option value={"809"} data-abbr={"DO"}>
                      DOMINICAN REPUBLIC
                    </option>
                    <option value={"593"} data-abbr={"EC"}>
                      ECUADOR
                    </option>
                    <option value={"20"} data-abbr={"EG"}>
                      EGYPT
                    </option>
                    <option value={"503"} data-abbr={"SV"}>
                      EL SALVADOR
                    </option>
                    <option value={"240"} data-abbr={"GQ"}>
                      EQUATORIAL GUINEA
                    </option>
                    <option value={"291"} data-abbr={"ER"}>
                      ERITREA
                    </option>
                    <option value={"372"} data-abbr={"EE"}>
                      ESTONIA
                    </option>
                    <option value={"251"} data-abbr={"ET"}>
                      ETHIOPIA
                    </option>
                    <option value={"500"} data-abbr={"FK"}>
                      FALKLAND ISLANDS (MALVINAS)
                    </option>
                    <option value={"298"} data-abbr={"FO"}>
                      FAROE ISLANDS
                    </option>
                    <option value={"679"} data-abbr={"FJ"}>
                      FIJI
                    </option>
                    <option value={"358"} data-abbr={"FI"}>
                      FINLAND
                    </option>
                    <option value={"33"} data-abbr={"FR"}>
                      FRANCE
                    </option>
                    <option value={"594"} data-abbr={"GF"}>
                      FRENCH GUIANA
                    </option>
                    <option value={"689"} data-abbr={"PF"}>
                      FRENCH POLYNESIA
                    </option>
                    <option value={"689"} data-abbr={"TF"}>
                      FRENCH SOUTHERN TERRITORIES
                    </option>
                    <option value={"241"} data-abbr={"GA"}>
                      GABON
                    </option>
                    <option value={"220"} data-abbr={"GM"}>
                      GAMBIA
                    </option>
                    <option value={"995"} data-abbr={"GE"}>
                      GEORGIA
                    </option>
                    <option value={"49"} data-abbr={"DE"}>
                      GERMANY
                    </option>
                    <option value={"233"} data-abbr={"GH"}>
                      GHANA
                    </option>
                    <option value={"350"} data-abbr={"GI"}>
                      GIBRALTAR
                    </option>
                    <option value={"30"} data-abbr={"GR"}>
                      GREECE
                    </option>
                    <option value={"299"} data-abbr={"GL"}>
                      GREENLAND
                    </option>
                    <option value={"473"} data-abbr={"GD"}>
                      GRENADA
                    </option>
                    <option value={"590"} data-abbr={"GP"}>
                      GUADELOUPE
                    </option>
                    <option value={"671"} data-abbr={"GU"}>
                      GUAM
                    </option>
                    <option value={"502"} data-abbr={"GT"}>
                      GUATEMALA
                    </option>
                    <option value={"224"} data-abbr={"GN"}>
                      GUINEA
                    </option>
                    <option value={"245"} data-abbr={"GW"}>
                      GUINEA-BISSAU
                    </option>
                    <option value={"592"} data-abbr={"GY"}>
                      GUYANA
                    </option>
                    <option value={"509"} data-abbr={"HT"}>
                      HAITI
                    </option>
                    <option value={"39"} data-abbr={"VA"}>
                      HOLY SEE (VATICAN CITY STATE)
                    </option>
                    <option value={"503"} data-abbr={"HN"}>
                      HONDURAS
                    </option>
                    <option value={"852"} data-abbr={"HK"}>
                      HONG KONG
                    </option>
                    <option value={"36"} data-abbr={"HU"}>
                      HUNGARY
                    </option>
                    <option value={"354"} data-abbr={"IS"}>
                      ICELAND
                    </option>
                    <option value={"91"} data-abbr={"IN"}>
                      INDIA
                    </option>
                    <option value={"62"} data-abbr={"ID"}>
                      INDONESIA
                    </option>
                    <option value={"98"} data-abbr={"IR"}>
                      IRAN, ISLAMIC REPUBLIC OF
                    </option>
                    <option value={"964"} data-abbr={"IQ"}>
                      IRAQ
                    </option>
                    <option value={"353"} data-abbr={"IE"}>
                      IRELAND
                    </option>
                    <option value={"972"} data-abbr={"IL"}>
                      ISRAEL
                    </option>
                    <option value={"39"} data-abbr={"IT"}>
                      ITALY
                    </option>
                    <option value={"876"} data-abbr={"JM"}>
                      JAMAICA
                    </option>
                    <option value={"81"} data-abbr={"JP"}>
                      JAPAN
                    </option>
                    <option value={"962"} data-abbr={"JO"}>
                      JORDAN
                    </option>
                    <option value={"7"} data-abbr={"KZ"}>
                      KAZAKHSTAN
                    </option>
                    <option value={"254"} data-abbr={"KE"}>
                      KENYA
                    </option>
                    <option value={"686"} data-abbr={"KI"}>
                      KIRIBATI
                    </option>
                    <option value={"82"} data-abbr={"KP"}>
                      KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                    </option>
                    <option value={"82"} data-abbr={"KR"}>
                      KOREA, REPUBLIC OF
                    </option>
                    <option value={"965"} data-abbr={"KW"}>
                      KUWAIT
                    </option>
                    <option value={"996"} data-abbr={"KG"}>
                      KYRGYZSTAN
                    </option>
                    <option value={"856"} data-abbr={"LA"}>
                      LAO PEOPLE'S DEMOCRATIC REPUBLIC
                    </option>
                    <option value={"371"} data-abbr={"LV"}>
                      LATVIA
                    </option>
                    <option value={"961"} data-abbr={"LB"}>
                      LEBANON
                    </option>
                    <option value={"266"} data-abbr={"LS"}>
                      LESOTHO
                    </option>
                    <option value={"231"} data-abbr={"LR"}>
                      LIBERIA
                    </option>
                    <option value={"218"} data-abbr={"LY"}>
                      LIBYAN ARAB JAMAHIRIYA
                    </option>
                    <option value={"423"} data-abbr={"LI"}>
                      LIECHTENSTEIN
                    </option>
                    <option value={"370"} data-abbr={"LT"}>
                      LITHUANIA
                    </option>
                    <option value={"352"} data-abbr={"LU"}>
                      LUXEMBOURG
                    </option>
                    <option value={"853"} data-abbr={"MO"}>
                      MACAO
                    </option>
                    <option value={"389"} data-abbr={"MK"}>
                      MACEDONIA THE FORMER YUGOSLAV REPUBLIC OF
                    </option>
                    <option value={"261"} data-abbr={"MG"}>
                      MADAGASCAR
                    </option>
                    <option value={"265"} data-abbr={"MW"}>
                      MALAWI
                    </option>
                    <option value={"60"} data-abbr={"MY"}>
                      MALAYSIA
                    </option>
                    <option value={"960"} data-abbr={"MV"}>
                      MALDIVES
                    </option>
                    <option value={"223"} data-abbr={"ML"}>
                      MALI
                    </option>
                    <option value={"356"} data-abbr={"MT"}>
                      MALTA
                    </option>
                    <option value={"692"} data-abbr={"MH"}>
                      MARSHALL ISLANDS
                    </option>
                    <option value={"596"} data-abbr={"MQ"}>
                      MARTINIQUE
                    </option>
                    <option value={"222"} data-abbr={"MR"}>
                      MAURITANIA
                    </option>
                    <option value={"230"} data-abbr={"MU"}>
                      MAURITIUS
                    </option>
                    <option value={"269"} data-abbr={"YT"}>
                      MAYOTTE
                    </option>
                    <option value={"52"} data-abbr={"MX"}>
                      MEXICO
                    </option>
                    <option value={"691"} data-abbr={"FM"}>
                      MICRONESIA, FEDERATED STATES OF
                    </option>
                    <option value={"373"} data-abbr={"MD"}>
                      MOLDOVA, REPUBLIC OF
                    </option>
                    <option value={"377"} data-abbr={"MC"}>
                      MONACO
                    </option>
                    <option value={"976"} data-abbr={"MN"}>
                      MONGOLIA
                    </option>
                    <option value={"664"} data-abbr={"MS"}>
                      MONTSERRAT
                    </option>
                    <option value={"212"} data-abbr={"MA"}>
                      MOROCCO
                    </option>
                    <option value={"258"} data-abbr={"MZ"}>
                      MOZAMBIQUE
                    </option>
                    <option value={"95"} data-abbr={"MM"}>
                      MYANMAR
                    </option>
                    <option value={"264"} data-abbr={"NA"}>
                      NAMIBIA
                    </option>
                    <option value={"674"} data-abbr={"NR"}>
                      NAURU
                    </option>
                    <option value={"977"} data-abbr={"NP"}>
                      NEPAL
                    </option>
                    <option value={"31"} data-abbr={"NL"}>
                      NETHERLANDS
                    </option>
                    <option value={"599"} data-abbr={"AN"}>
                      NETHERLANDS ANTILLES
                    </option>
                    <option value={"687"} data-abbr={"NC"}>
                      NEW CALEDONIA
                    </option>
                    <option value={"64"} data-abbr={"NZ"}>
                      NEW ZEALAND
                    </option>
                    <option value={"505"} data-abbr={"NI"}>
                      NICARAGUA
                    </option>
                    <option value={"227"} data-abbr={"NE"}>
                      NIGER
                    </option>
                    <option value={"234"} data-abbr={"NG"}>
                      NIGERIA
                    </option>
                    <option value={"683"} data-abbr={"NU"}>
                      NIUE
                    </option>
                    <option value={"672"} data-abbr={"NF"}>
                      NORFOLK ISLAND
                    </option>
                    <option value={"167"} data-abbr={"MP"}>
                      NORTHERN MARIANA ISLANDS
                    </option>
                    <option value={"47"} data-abbr={"NO"}>
                      NORWAY
                    </option>
                    <option value={"968"} data-abbr={"OM"}>
                      OMAN
                    </option>
                    <option value={"92"} data-abbr={"PK"}>
                      PAKISTAN
                    </option>
                    <option value={"680"} data-abbr={"PW"}>
                      PALAU
                    </option>
                    <option value={"970"} data-abbr={"PS"}>
                      PALESTINIAN TERRITORY, OCCUPIED
                    </option>
                    <option value={"507"} data-abbr={"PA"}>
                      PANAMA
                    </option>
                    <option value={"675"} data-abbr={"PG"}>
                      PAPUA NEW GUINEA
                    </option>
                    <option value={"595"} data-abbr={"PY"}>
                      PARAGUAY
                    </option>
                    <option value={"51"} data-abbr={"PE"}>
                      PERU
                    </option>
                    <option value={"63"} data-abbr={"PH"}>
                      PHILIPPINES
                    </option>
                    <option value={"672"} data-abbr={"PN"}>
                      PITCAIRN
                    </option>
                    <option value={"48"} data-abbr={"PL"}>
                      POLAND
                    </option>
                    <option value={"351"} data-abbr={"PT"}>
                      PORTUGAL
                    </option>
                    <option value={"787"} data-abbr={"PR"}>
                      PUERTO RICO
                    </option>
                    <option value={"974"} data-abbr={"QA"}>
                      QATAR
                    </option>
                    <option value={"262"} data-abbr={"RE"}>
                      REUNION
                    </option>
                    <option value={"40"} data-abbr={"RO"}>
                      ROMANIA
                    </option>
                    <option value={"7"} data-abbr={"RU"}>
                      RUSSIAN FEDERATION
                    </option>
                    <option value={"250"} data-abbr={"RW"}>
                      RWANDA
                    </option>
                    <option value={"290"} data-abbr={"SH"}>
                      SAINT HELENA
                    </option>
                    <option value={"186"} data-abbr={"KN"}>
                      SAINT KITTS AND NEVIS
                    </option>
                    <option value={"175"} data-abbr={"LC"}>
                      SAINT LUCIA
                    </option>
                    <option value={"508"} data-abbr={"PM"}>
                      SAINT PIERRE AND MIQUELON
                    </option>
                    <option value={"180"} data-abbr={"VC"}>
                      SAINT VINCENT AND THE GRENADINES
                    </option>
                    <option value={"885"} data-abbr={"WS"}>
                      SAMOA
                    </option>
                    <option value={"378"} data-abbr={"SM"}>
                      SAN MARINO
                    </option>
                    <option value={"239"} data-abbr={"ST"}>
                      SAO TOME AND PRINCIPE
                    </option>
                    <option value={"966"} data-abbr={"SA"}>
                      SAUDI ARABIA
                    </option>
                    <option value={"221"} data-abbr={"SN"}>
                      SENEGAL
                    </option>
                    <option value={"381"} data-abbr={"CS"}>
                      SERBIA AND MONTENEGRO
                    </option>
                    <option value={"248"} data-abbr={"SC"}>
                      SEYCHELLES
                    </option>
                    <option value={"232"} data-abbr={"SL"}>
                      SIERRA LEONE
                    </option>
                    <option value={"65"} data-abbr={"SG"}>
                      SINGAPORE
                    </option>
                    <option value={"421"} data-abbr={"SK"}>
                      SLOVAKIA
                    </option>
                    <option value={"386"} data-abbr={"SI"}>
                      SLOVENIA
                    </option>
                    <option value={"677"} data-abbr={"SB"}>
                      SOLOMON ISLANDS
                    </option>
                    <option value={"252"} data-abbr={"SO"}>
                      SOMALIA
                    </option>
                    <option value={"27"} data-abbr={"ZA"}>
                      SOUTH AFRICA
                    </option>
                    <option value={"34"} data-abbr={"ES"}>
                      SPAIN
                    </option>
                    <option value={"94"} data-abbr={"LK"}>
                      SRI LANKA
                    </option>
                    <option value={"249"} data-abbr={"SD"}>
                      SUDAN
                    </option>
                    <option value={"597"} data-abbr={"SR"}>
                      SURINAME
                    </option>
                    <option value={"47"} data-abbr={"SJ"}>
                      SVALBARD AND JAN MAYEN
                    </option>
                    <option value={"268"} data-abbr={"SZ"}>
                      SWAZILAND
                    </option>
                    <option value={"46"} data-abbr={"SE"}>
                      SWEDEN
                    </option>
                    <option value={"41"} data-abbr={"CH"}>
                      SWITZERLAND
                    </option>
                    <option value={"963"} data-abbr={"SY"}>
                      SYRIAN ARAB REPUBLIC
                    </option>
                    <option value={"886"} data-abbr={"TW"}>
                      TAIWAN, PROVINCE OF CHINA
                    </option>
                    <option value={"992"} data-abbr={"TJ"}>
                      TAJIKISTAN
                    </option>
                    <option value={"255"} data-abbr={"TZ"}>
                      TANZANIA, UNITED REPUBLIC OF
                    </option>
                    <option value={"66"} data-abbr={"TH"}>
                      THAILAND
                    </option>
                    <option value={"670"} data-abbr={"TL"}>
                      TIMOR-LESTE
                    </option>
                    <option value={"228"} data-abbr={"TG"}>
                      TOGO
                    </option>
                    <option value={"690"} data-abbr={"TK"}>
                      TOKELAU
                    </option>
                    <option value={"676"} data-abbr={"TO"}>
                      TONGA
                    </option>
                    <option value={"186"} data-abbr={"TT"}>
                      TRINIDAD AND TOBAGO
                    </option>
                    <option value={"216"} data-abbr={"TN"}>
                      TUNISIA
                    </option>
                    <option value={"90"} data-abbr={"TR"}>
                      TURKEY
                    </option>
                    <option value={"993"} data-abbr={"TM"}>
                      TURKMENISTAN
                    </option>
                    <option value={"164"} data-abbr={"TC"}>
                      TURKS AND CAICOS ISLANDS
                    </option>
                    <option value={"688"} data-abbr={"TV"}>
                      TUVALU
                    </option>
                    <option value={"256"} data-abbr={"UG"}>
                      UGANDA
                    </option>
                    <option value={"380"} data-abbr={"UA"}>
                      UKRAINE
                    </option>
                    <option value={"971"} data-abbr={"AE"}>
                      UNITED ARAB EMIRATES
                    </option>
                    <option value={"44"} data-abbr={"GB"}>
                      UNITED KINGDOM
                    </option>
                    <option value={"1"} data-abbr={"US"} selected>
                      UNITED STATES
                    </option>
                    <option value={"598"} data-abbr={"UY"}>
                      URUGUAY
                    </option>
                    <option value={"998"} data-abbr={"UZ"}>
                      UZBEKISTAN
                    </option>
                    <option value={"678"} data-abbr={"VU"}>
                      VANUATU
                    </option>
                    <option value={"58"} data-abbr={"VE"}>
                      VENEZUELA
                    </option>
                    <option value={"84"} data-abbr={"VN"}>
                      VIETNAM
                    </option>
                    <option value={"128"} data-abbr={"VG"}>
                      VIRGIN ISLANDS, BRITISH
                    </option>
                    <option value={"134"} data-abbr={"VI"}>
                      VIRGIN ISLANDS, U.S.
                    </option>
                    <option value={"681"} data-abbr={"WF"}>
                      WALLIS AND FUTUNA
                    </option>
                    <option value={"212"} data-abbr={"EH"}>
                      WESTERN SAHARA
                    </option>
                    <option value={"967"} data-abbr={"YE"}>
                      YEMEN
                    </option>
                    <option value={"260"} data-abbr={"ZM"}>
                      ZAMBIA
                    </option>
                    <option value={"263"} data-abbr={"ZW"}>
                      ZIMBABWE
                    </option>
                  </select>
                </div>
                <div className={"frmicon-box phonecode"}>
                  <label htmlFor={""}>
                    Phone Number
                  </label>
                  <input type={"text"} name={"countrycode"} id={"popupcountrycode"} readOnly />
                  <input type={"tel"} id={"phoneNum2"} name={"phone"} placeholder={"Enter Your Number"} />
                  <input type={"hidden"} name={"package_name"} defaultValue={"Basic"} />
                  <input type={"hidden"} name={"package_cost"} defaultValue={"$25"} />
                  <input type={"hidden"} name={"package_cat"} defaultValue={"logo"} />
                </div>
                <div className={"text-right"}>
                  <button type={"submit"} href={"javascript:;"} className={"popup-btn"}>
                    Let’s Get Started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={"popup-layout popup-layout5"} id={"popup-offer"}>
        <div className={"popup-inner"}>
          <div className={"col-md-7 no-pad"}>
            <div className={"ovrflw-hdden"}>
              <img src={"/assets/images/popup-img.png"} alt={""} />
            </div>
          </div>
          <div className={"col-md-5 no-pad"}>
            <a className={"popup-close"} href={"javascript:;"}>
              <i className={"lx-btn-icon"}><IconClose size={16} /></i>
            </a>
            <form id={"form5"} className={"js-recaptcha-form"} action={"test-mail.php"} methd={"post"}>
              <div className={"popup-header sm-headngtxt"}>
                <h3>
                  Get a Free Digital Marketing Consultation
                </h3>
                <p className={"ban-subhd"}>
                  Let's create a custom strategy that fits your business goals
                </p>
              </div>
              <div className={"popup-bdy"}>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    Full Name
                  </label>
                  <input type={"text"} placeholder={"Enter Your Full Name"} name={"popupname"} required />
                </div>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    Email
                  </label>
                  <input type={"email"} placeholder={"Enter Your Email"} name={"popupemail"} defaultValue={""} required />
                </div>
                <div className={"frmicon-box newcountrycode"}>
                  <label htmlFor={""}>
                    Country
                  </label>
                  <span></span>
                  <select id={"popupformcountry"} className={"countrylist valid"} name={"pc"}>
                    <option value={"93"} data-abbr={"AF"}>
                      AFGHANISTAN
                    </option>
                    <option value={"358"} data-abbr={"AX"}>
                      ALAND ISLANDS
                    </option>
                    <option value={"355"} data-abbr={"AL"}>
                      ALBANIA
                    </option>
                    <option value={"213"} data-abbr={"DZ"}>
                      ALGERIA
                    </option>
                    <option value={"168"} data-abbr={"AS"}>
                      AMERICAN SAMOA
                    </option>
                    <option value={"376"} data-abbr={"AD"}>
                      ANDORRA
                    </option>
                    <option value={"244"} data-abbr={"AO"}>
                      ANGOLA
                    </option>
                    <option value={"264"} data-abbr={"AI"}>
                      ANGUILLA
                    </option>
                    <option value={"167"} data-abbr={"AQ"}>
                      ANTARCTICA
                    </option>
                    <option value={"268"} data-abbr={"AG"}>
                      ANTIGUA AND BARBUDA
                    </option>
                    <option value={"54"} data-abbr={"AR"}>
                      ARGENTINA
                    </option>
                    <option value={"374"} data-abbr={"AM"}>
                      ARMENIA
                    </option>
                    <option value={"297"} data-abbr={"AW"}>
                      ARUBA
                    </option>
                    <option value={"61"} data-abbr={"AU"}>
                      AUSTRALIA
                    </option>
                    <option value={"43"} data-abbr={"AT"}>
                      AUSTRIA
                    </option>
                    <option value={"994"} data-abbr={"AZ"}>
                      AZERBAIJAN
                    </option>
                    <option value={"242"} data-abbr={"BS"}>
                      BAHAMAS
                    </option>
                    <option value={"973"} data-abbr={"BH"}>
                      BAHRAIN
                    </option>
                    <option value={"880"} data-abbr={"BD"}>
                      BANGLADESH
                    </option>
                    <option value={"246"} data-abbr={"BB"}>
                      BARBADOS
                    </option>
                    <option value={"375"} data-abbr={"BY"}>
                      BELARUS
                    </option>
                    <option value={"32"} data-abbr={"BE"}>
                      BELGIUM
                    </option>
                    <option value={"501"} data-abbr={"BZ"}>
                      BELIZE
                    </option>
                    <option value={"229"} data-abbr={"BJ"}>
                      BENIN
                    </option>
                    <option value={"441"} data-abbr={"BM"}>
                      BERMUDA
                    </option>
                    <option value={"975"} data-abbr={"BT"}>
                      BHUTAN
                    </option>
                    <option value={"591"} data-abbr={"BO"}>
                      BOLIVIA
                    </option>
                    <option value={"387"} data-abbr={"BA"}>
                      BOSNIA AND HERZEGOVINA
                    </option>
                    <option value={"267"} data-abbr={"BW"}>
                      BOTSWANA
                    </option>
                    <option value={"55"} data-abbr={"BR"}>
                      BRAZIL
                    </option>
                    <option value={"246"} data-abbr={"IO"}>
                      BRITISH INDIAN OCEAN TERRITORY
                    </option>
                    <option value={"673"} data-abbr={"BN"}>
                      BRUNEI DARUSSALAM
                    </option>
                    <option value={"359"} data-abbr={"BG"}>
                      BULGARIA
                    </option>
                    <option value={"226"} data-abbr={"BF"}>
                      BURKINA FASO
                    </option>
                    <option value={"257"} data-abbr={"BI"}>
                      BURUNDI
                    </option>
                    <option value={"855"} data-abbr={"KH"}>
                      CAMBODIA
                    </option>
                    <option value={"237"} data-abbr={"CM"}>
                      CAMEROON
                    </option>
                    <option value={"1"} data-abbr={"CA"} selected>
                      CANADA
                    </option>
                    <option value={"238"} data-abbr={"CV"}>
                      CAPE VERDE
                    </option>
                    <option value={"345"} data-abbr={"KY"}>
                      CAYMAN ISLANDS
                    </option>
                    <option value={"236"} data-abbr={"CF"}>
                      CENTRAL AFRICAN REPUBLIC
                    </option>
                    <option value={"235"} data-abbr={"TD"}>
                      CHAD
                    </option>
                    <option value={"56"} data-abbr={"CL"}>
                      CHILE
                    </option>
                    <option value={"86"} data-abbr={"CN"}>
                      CHINA
                    </option>
                    <option value={"672"} data-abbr={"CX"}>
                      CHRISTMAS ISLAND
                    </option>
                    <option value={"672"} data-abbr={"CC"}>
                      COCOS (KEELING) ISLANDS
                    </option>
                    <option value={"57"} data-abbr={"CO"}>
                      COLOMBIA
                    </option>
                    <option value={"269"} data-abbr={"KM"}>
                      COMOROS
                    </option>
                    <option value={"242"} data-abbr={"CG"}>
                      CONGO
                    </option>
                    <option value={"682"} data-abbr={"CK"}>
                      COOK ISLANDS
                    </option>
                    <option value={"506"} data-abbr={"CR"}>
                      COSTA RICA
                    </option>
                    <option value={"225"} data-abbr={"CI"}>
                      COTE D'IVOIRE
                    </option>
                    <option value={"385"} data-abbr={"HR"}>
                      CROATIA
                    </option>
                    <option value={"53"} data-abbr={"CU"}>
                      CUBA
                    </option>
                    <option value={"357"} data-abbr={"CY"}>
                      CYPRUS
                    </option>
                    <option value={"420"} data-abbr={"CZ"}>
                      CZECH REPUBLIC
                    </option>
                    <option value={"45"} data-abbr={"DK"}>
                      DENMARK
                    </option>
                    <option value={"253"} data-abbr={"DJ"}>
                      DJIBOUTI
                    </option>
                    <option value={"176"} data-abbr={"DM"}>
                      DOMINICA
                    </option>
                    <option value={"809"} data-abbr={"DO"}>
                      DOMINICAN REPUBLIC
                    </option>
                    <option value={"593"} data-abbr={"EC"}>
                      ECUADOR
                    </option>
                    <option value={"20"} data-abbr={"EG"}>
                      EGYPT
                    </option>
                    <option value={"503"} data-abbr={"SV"}>
                      EL SALVADOR
                    </option>
                    <option value={"240"} data-abbr={"GQ"}>
                      EQUATORIAL GUINEA
                    </option>
                    <option value={"291"} data-abbr={"ER"}>
                      ERITREA
                    </option>
                    <option value={"372"} data-abbr={"EE"}>
                      ESTONIA
                    </option>
                    <option value={"251"} data-abbr={"ET"}>
                      ETHIOPIA
                    </option>
                    <option value={"500"} data-abbr={"FK"}>
                      FALKLAND ISLANDS (MALVINAS)
                    </option>
                    <option value={"298"} data-abbr={"FO"}>
                      FAROE ISLANDS
                    </option>
                    <option value={"679"} data-abbr={"FJ"}>
                      FIJI
                    </option>
                    <option value={"358"} data-abbr={"FI"}>
                      FINLAND
                    </option>
                    <option value={"33"} data-abbr={"FR"}>
                      FRANCE
                    </option>
                    <option value={"594"} data-abbr={"GF"}>
                      FRENCH GUIANA
                    </option>
                    <option value={"689"} data-abbr={"PF"}>
                      FRENCH POLYNESIA
                    </option>
                    <option value={"689"} data-abbr={"TF"}>
                      FRENCH SOUTHERN TERRITORIES
                    </option>
                    <option value={"241"} data-abbr={"GA"}>
                      GABON
                    </option>
                    <option value={"220"} data-abbr={"GM"}>
                      GAMBIA
                    </option>
                    <option value={"995"} data-abbr={"GE"}>
                      GEORGIA
                    </option>
                    <option value={"49"} data-abbr={"DE"}>
                      GERMANY
                    </option>
                    <option value={"233"} data-abbr={"GH"}>
                      GHANA
                    </option>
                    <option value={"350"} data-abbr={"GI"}>
                      GIBRALTAR
                    </option>
                    <option value={"30"} data-abbr={"GR"}>
                      GREECE
                    </option>
                    <option value={"299"} data-abbr={"GL"}>
                      GREENLAND
                    </option>
                    <option value={"473"} data-abbr={"GD"}>
                      GRENADA
                    </option>
                    <option value={"590"} data-abbr={"GP"}>
                      GUADELOUPE
                    </option>
                    <option value={"671"} data-abbr={"GU"}>
                      GUAM
                    </option>
                    <option value={"502"} data-abbr={"GT"}>
                      GUATEMALA
                    </option>
                    <option value={"224"} data-abbr={"GN"}>
                      GUINEA
                    </option>
                    <option value={"245"} data-abbr={"GW"}>
                      GUINEA-BISSAU
                    </option>
                    <option value={"592"} data-abbr={"GY"}>
                      GUYANA
                    </option>
                    <option value={"509"} data-abbr={"HT"}>
                      HAITI
                    </option>
                    <option value={"39"} data-abbr={"VA"}>
                      HOLY SEE (VATICAN CITY STATE)
                    </option>
                    <option value={"503"} data-abbr={"HN"}>
                      HONDURAS
                    </option>
                    <option value={"852"} data-abbr={"HK"}>
                      HONG KONG
                    </option>
                    <option value={"36"} data-abbr={"HU"}>
                      HUNGARY
                    </option>
                    <option value={"354"} data-abbr={"IS"}>
                      ICELAND
                    </option>
                    <option value={"91"} data-abbr={"IN"}>
                      INDIA
                    </option>
                    <option value={"62"} data-abbr={"ID"}>
                      INDONESIA
                    </option>
                    <option value={"98"} data-abbr={"IR"}>
                      IRAN, ISLAMIC REPUBLIC OF
                    </option>
                    <option value={"964"} data-abbr={"IQ"}>
                      IRAQ
                    </option>
                    <option value={"353"} data-abbr={"IE"}>
                      IRELAND
                    </option>
                    <option value={"972"} data-abbr={"IL"}>
                      ISRAEL
                    </option>
                    <option value={"39"} data-abbr={"IT"}>
                      ITALY
                    </option>
                    <option value={"876"} data-abbr={"JM"}>
                      JAMAICA
                    </option>
                    <option value={"81"} data-abbr={"JP"}>
                      JAPAN
                    </option>
                    <option value={"962"} data-abbr={"JO"}>
                      JORDAN
                    </option>
                    <option value={"7"} data-abbr={"KZ"}>
                      KAZAKHSTAN
                    </option>
                    <option value={"254"} data-abbr={"KE"}>
                      KENYA
                    </option>
                    <option value={"686"} data-abbr={"KI"}>
                      KIRIBATI
                    </option>
                    <option value={"82"} data-abbr={"KP"}>
                      KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                    </option>
                    <option value={"82"} data-abbr={"KR"}>
                      KOREA, REPUBLIC OF
                    </option>
                    <option value={"965"} data-abbr={"KW"}>
                      KUWAIT
                    </option>
                    <option value={"996"} data-abbr={"KG"}>
                      KYRGYZSTAN
                    </option>
                    <option value={"856"} data-abbr={"LA"}>
                      LAO PEOPLE'S DEMOCRATIC REPUBLIC
                    </option>
                    <option value={"371"} data-abbr={"LV"}>
                      LATVIA
                    </option>
                    <option value={"961"} data-abbr={"LB"}>
                      LEBANON
                    </option>
                    <option value={"266"} data-abbr={"LS"}>
                      LESOTHO
                    </option>
                    <option value={"231"} data-abbr={"LR"}>
                      LIBERIA
                    </option>
                    <option value={"218"} data-abbr={"LY"}>
                      LIBYAN ARAB JAMAHIRIYA
                    </option>
                    <option value={"423"} data-abbr={"LI"}>
                      LIECHTENSTEIN
                    </option>
                    <option value={"370"} data-abbr={"LT"}>
                      LITHUANIA
                    </option>
                    <option value={"352"} data-abbr={"LU"}>
                      LUXEMBOURG
                    </option>
                    <option value={"853"} data-abbr={"MO"}>
                      MACAO
                    </option>
                    <option value={"389"} data-abbr={"MK"}>
                      MACEDONIA THE FORMER YUGOSLAV REPUBLIC OF
                    </option>
                    <option value={"261"} data-abbr={"MG"}>
                      MADAGASCAR
                    </option>
                    <option value={"265"} data-abbr={"MW"}>
                      MALAWI
                    </option>
                    <option value={"60"} data-abbr={"MY"}>
                      MALAYSIA
                    </option>
                    <option value={"960"} data-abbr={"MV"}>
                      MALDIVES
                    </option>
                    <option value={"223"} data-abbr={"ML"}>
                      MALI
                    </option>
                    <option value={"356"} data-abbr={"MT"}>
                      MALTA
                    </option>
                    <option value={"692"} data-abbr={"MH"}>
                      MARSHALL ISLANDS
                    </option>
                    <option value={"596"} data-abbr={"MQ"}>
                      MARTINIQUE
                    </option>
                    <option value={"222"} data-abbr={"MR"}>
                      MAURITANIA
                    </option>
                    <option value={"230"} data-abbr={"MU"}>
                      MAURITIUS
                    </option>
                    <option value={"269"} data-abbr={"YT"}>
                      MAYOTTE
                    </option>
                    <option value={"52"} data-abbr={"MX"}>
                      MEXICO
                    </option>
                    <option value={"691"} data-abbr={"FM"}>
                      MICRONESIA, FEDERATED STATES OF
                    </option>
                    <option value={"373"} data-abbr={"MD"}>
                      MOLDOVA, REPUBLIC OF
                    </option>
                    <option value={"377"} data-abbr={"MC"}>
                      MONACO
                    </option>
                    <option value={"976"} data-abbr={"MN"}>
                      MONGOLIA
                    </option>
                    <option value={"664"} data-abbr={"MS"}>
                      MONTSERRAT
                    </option>
                    <option value={"212"} data-abbr={"MA"}>
                      MOROCCO
                    </option>
                    <option value={"258"} data-abbr={"MZ"}>
                      MOZAMBIQUE
                    </option>
                    <option value={"95"} data-abbr={"MM"}>
                      MYANMAR
                    </option>
                    <option value={"264"} data-abbr={"NA"}>
                      NAMIBIA
                    </option>
                    <option value={"674"} data-abbr={"NR"}>
                      NAURU
                    </option>
                    <option value={"977"} data-abbr={"NP"}>
                      NEPAL
                    </option>
                    <option value={"31"} data-abbr={"NL"}>
                      NETHERLANDS
                    </option>
                    <option value={"599"} data-abbr={"AN"}>
                      NETHERLANDS ANTILLES
                    </option>
                    <option value={"687"} data-abbr={"NC"}>
                      NEW CALEDONIA
                    </option>
                    <option value={"64"} data-abbr={"NZ"}>
                      NEW ZEALAND
                    </option>
                    <option value={"505"} data-abbr={"NI"}>
                      NICARAGUA
                    </option>
                    <option value={"227"} data-abbr={"NE"}>
                      NIGER
                    </option>
                    <option value={"234"} data-abbr={"NG"}>
                      NIGERIA
                    </option>
                    <option value={"683"} data-abbr={"NU"}>
                      NIUE
                    </option>
                    <option value={"672"} data-abbr={"NF"}>
                      NORFOLK ISLAND
                    </option>
                    <option value={"167"} data-abbr={"MP"}>
                      NORTHERN MARIANA ISLANDS
                    </option>
                    <option value={"47"} data-abbr={"NO"}>
                      NORWAY
                    </option>
                    <option value={"968"} data-abbr={"OM"}>
                      OMAN
                    </option>
                    <option value={"92"} data-abbr={"PK"}>
                      PAKISTAN
                    </option>
                    <option value={"680"} data-abbr={"PW"}>
                      PALAU
                    </option>
                    <option value={"970"} data-abbr={"PS"}>
                      PALESTINIAN TERRITORY, OCCUPIED
                    </option>
                    <option value={"507"} data-abbr={"PA"}>
                      PANAMA
                    </option>
                    <option value={"675"} data-abbr={"PG"}>
                      PAPUA NEW GUINEA
                    </option>
                    <option value={"595"} data-abbr={"PY"}>
                      PARAGUAY
                    </option>
                    <option value={"51"} data-abbr={"PE"}>
                      PERU
                    </option>
                    <option value={"63"} data-abbr={"PH"}>
                      PHILIPPINES
                    </option>
                    <option value={"672"} data-abbr={"PN"}>
                      PITCAIRN
                    </option>
                    <option value={"48"} data-abbr={"PL"}>
                      POLAND
                    </option>
                    <option value={"351"} data-abbr={"PT"}>
                      PORTUGAL
                    </option>
                    <option value={"787"} data-abbr={"PR"}>
                      PUERTO RICO
                    </option>
                    <option value={"974"} data-abbr={"QA"}>
                      QATAR
                    </option>
                    <option value={"262"} data-abbr={"RE"}>
                      REUNION
                    </option>
                    <option value={"40"} data-abbr={"RO"}>
                      ROMANIA
                    </option>
                    <option value={"7"} data-abbr={"RU"}>
                      RUSSIAN FEDERATION
                    </option>
                    <option value={"250"} data-abbr={"RW"}>
                      RWANDA
                    </option>
                    <option value={"290"} data-abbr={"SH"}>
                      SAINT HELENA
                    </option>
                    <option value={"186"} data-abbr={"KN"}>
                      SAINT KITTS AND NEVIS
                    </option>
                    <option value={"175"} data-abbr={"LC"}>
                      SAINT LUCIA
                    </option>
                    <option value={"508"} data-abbr={"PM"}>
                      SAINT PIERRE AND MIQUELON
                    </option>
                    <option value={"180"} data-abbr={"VC"}>
                      SAINT VINCENT AND THE GRENADINES
                    </option>
                    <option value={"885"} data-abbr={"WS"}>
                      SAMOA
                    </option>
                    <option value={"378"} data-abbr={"SM"}>
                      SAN MARINO
                    </option>
                    <option value={"239"} data-abbr={"ST"}>
                      SAO TOME AND PRINCIPE
                    </option>
                    <option value={"966"} data-abbr={"SA"}>
                      SAUDI ARABIA
                    </option>
                    <option value={"221"} data-abbr={"SN"}>
                      SENEGAL
                    </option>
                    <option value={"381"} data-abbr={"CS"}>
                      SERBIA AND MONTENEGRO
                    </option>
                    <option value={"248"} data-abbr={"SC"}>
                      SEYCHELLES
                    </option>
                    <option value={"232"} data-abbr={"SL"}>
                      SIERRA LEONE
                    </option>
                    <option value={"65"} data-abbr={"SG"}>
                      SINGAPORE
                    </option>
                    <option value={"421"} data-abbr={"SK"}>
                      SLOVAKIA
                    </option>
                    <option value={"386"} data-abbr={"SI"}>
                      SLOVENIA
                    </option>
                    <option value={"677"} data-abbr={"SB"}>
                      SOLOMON ISLANDS
                    </option>
                    <option value={"252"} data-abbr={"SO"}>
                      SOMALIA
                    </option>
                    <option value={"27"} data-abbr={"ZA"}>
                      SOUTH AFRICA
                    </option>
                    <option value={"34"} data-abbr={"ES"}>
                      SPAIN
                    </option>
                    <option value={"94"} data-abbr={"LK"}>
                      SRI LANKA
                    </option>
                    <option value={"249"} data-abbr={"SD"}>
                      SUDAN
                    </option>
                    <option value={"597"} data-abbr={"SR"}>
                      SURINAME
                    </option>
                    <option value={"47"} data-abbr={"SJ"}>
                      SVALBARD AND JAN MAYEN
                    </option>
                    <option value={"268"} data-abbr={"SZ"}>
                      SWAZILAND
                    </option>
                    <option value={"46"} data-abbr={"SE"}>
                      SWEDEN
                    </option>
                    <option value={"41"} data-abbr={"CH"}>
                      SWITZERLAND
                    </option>
                    <option value={"963"} data-abbr={"SY"}>
                      SYRIAN ARAB REPUBLIC
                    </option>
                    <option value={"886"} data-abbr={"TW"}>
                      TAIWAN, PROVINCE OF CHINA
                    </option>
                    <option value={"992"} data-abbr={"TJ"}>
                      TAJIKISTAN
                    </option>
                    <option value={"255"} data-abbr={"TZ"}>
                      TANZANIA, UNITED REPUBLIC OF
                    </option>
                    <option value={"66"} data-abbr={"TH"}>
                      THAILAND
                    </option>
                    <option value={"670"} data-abbr={"TL"}>
                      TIMOR-LESTE
                    </option>
                    <option value={"228"} data-abbr={"TG"}>
                      TOGO
                    </option>
                    <option value={"690"} data-abbr={"TK"}>
                      TOKELAU
                    </option>
                    <option value={"676"} data-abbr={"TO"}>
                      TONGA
                    </option>
                    <option value={"186"} data-abbr={"TT"}>
                      TRINIDAD AND TOBAGO
                    </option>
                    <option value={"216"} data-abbr={"TN"}>
                      TUNISIA
                    </option>
                    <option value={"90"} data-abbr={"TR"}>
                      TURKEY
                    </option>
                    <option value={"993"} data-abbr={"TM"}>
                      TURKMENISTAN
                    </option>
                    <option value={"164"} data-abbr={"TC"}>
                      TURKS AND CAICOS ISLANDS
                    </option>
                    <option value={"688"} data-abbr={"TV"}>
                      TUVALU
                    </option>
                    <option value={"256"} data-abbr={"UG"}>
                      UGANDA
                    </option>
                    <option value={"380"} data-abbr={"UA"}>
                      UKRAINE
                    </option>
                    <option value={"971"} data-abbr={"AE"}>
                      UNITED ARAB EMIRATES
                    </option>
                    <option value={"44"} data-abbr={"GB"}>
                      UNITED KINGDOM
                    </option>
                    <option value={"1"} data-abbr={"US"} selected>
                      UNITED STATES
                    </option>
                    <option value={"598"} data-abbr={"UY"}>
                      URUGUAY
                    </option>
                    <option value={"998"} data-abbr={"UZ"}>
                      UZBEKISTAN
                    </option>
                    <option value={"678"} data-abbr={"VU"}>
                      VANUATU
                    </option>
                    <option value={"58"} data-abbr={"VE"}>
                      VENEZUELA
                    </option>
                    <option value={"84"} data-abbr={"VN"}>
                      VIETNAM
                    </option>
                    <option value={"128"} data-abbr={"VG"}>
                      VIRGIN ISLANDS, BRITISH
                    </option>
                    <option value={"134"} data-abbr={"VI"}>
                      VIRGIN ISLANDS, U.S.
                    </option>
                    <option value={"681"} data-abbr={"WF"}>
                      WALLIS AND FUTUNA
                    </option>
                    <option value={"212"} data-abbr={"EH"}>
                      WESTERN SAHARA
                    </option>
                    <option value={"967"} data-abbr={"YE"}>
                      YEMEN
                    </option>
                    <option value={"260"} data-abbr={"ZM"}>
                      ZAMBIA
                    </option>
                    <option value={"263"} data-abbr={"ZW"}>
                      ZIMBABWE
                    </option>
                  </select>
                </div>
                <div className={"frmicon-box phonecode"}>
                  <label htmlFor={""}>
                    Phone Number
                  </label>
                  <input type={"text"} name={"countrycode"} className={"countrycode"} id={"popupcountrycode"} defaultValue={"+1"} readOnly />
                  <input type={"tel"} id={"phoneNum2"} name={"phone"} placeholder={"Enter Your Number"} required />
                  <input type={"hidden"} name={"gclid"} defaultValue={""} />
                  <input type={"hidden"} name={"fbclid"} defaultValue={""} />
                  <input type={"hidden"} name={"__keyword"} defaultValue={""} />
                  <input type={"hidden"} name={"__device"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_source"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_campaign"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_content"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_term"} defaultValue={""} />
                  <input type={"hidden"} name={"__matchtype"} defaultValue={""} />
                </div>
                <input type={"hidden"} name={"g-recaptcha-response"} />
                <button type={"submit"} href={"javascript:;"} className={"popup-btn"} id={"popupformsubmit"}>
                  Let’s Get Started
                </button>
              </div>
            </form>
          </div>
          <span className={"uptownloader"}></span>
        </div>
      </div>
      <div className={"slideform"} id={"slideform"}>
        <div className={"slidefrm-inner1"}></div>
        <div className={"slidefrm-inner"}>
          <div>
            <form id={"form6"} className={"js-recaptcha-form"} action={"#"} methd={"post"}>
              <a className={"slidefrm-close"} href={"javascript:;"}>
                <i className={"lx-btn-icon"}><IconClose size={16} /></i>
              </a>
              <div className={"slidefrm-header"}>
                <img src={"/assets/images/sidefrm-header.png"} alt={""} />
                <br />
                <br />
                <p className={"ban-subhd"}>
                  Drop us your details and reserve the voucher for a limited time discount offer that is bound to take your branding strategy up a notch!
                </p>
              </div>
              <div className={"slidefrm-bdy"}>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    FULL NAME
                  </label>
                  <input type={"text"} placeholder={"Name"} name={"popupname"} id={"name"} required />
                </div>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    Email
                  </label>
                  <input type={"email"} placeholder={"Email"} id={"email"} name={"popupemail"} required />
                </div>
                <div className={"frmicon-box newcountrycode"}>
                  <label htmlFor={""}>
                    Country
                  </label>
                  <span></span>
                  <select id={"homeformcountry"} className={"countrylist valid"} name={"pc"}>
                    <option value={"93"} data-abbr={"AF"}>
                      AFGHANISTAN
                    </option>
                    <option value={"358"} data-abbr={"AX"}>
                      ALAND ISLANDS
                    </option>
                    <option value={"355"} data-abbr={"AL"}>
                      ALBANIA
                    </option>
                    <option value={"213"} data-abbr={"DZ"}>
                      ALGERIA
                    </option>
                    <option value={"168"} data-abbr={"AS"}>
                      AMERICAN SAMOA
                    </option>
                    <option value={"376"} data-abbr={"AD"}>
                      ANDORRA
                    </option>
                    <option value={"244"} data-abbr={"AO"}>
                      ANGOLA
                    </option>
                    <option value={"264"} data-abbr={"AI"}>
                      ANGUILLA
                    </option>
                    <option value={"167"} data-abbr={"AQ"}>
                      ANTARCTICA
                    </option>
                    <option value={"268"} data-abbr={"AG"}>
                      ANTIGUA AND BARBUDA
                    </option>
                    <option value={"54"} data-abbr={"AR"}>
                      ARGENTINA
                    </option>
                    <option value={"374"} data-abbr={"AM"}>
                      ARMENIA
                    </option>
                    <option value={"297"} data-abbr={"AW"}>
                      ARUBA
                    </option>
                    <option value={"61"} data-abbr={"AU"}>
                      AUSTRALIA
                    </option>
                    <option value={"43"} data-abbr={"AT"}>
                      AUSTRIA
                    </option>
                    <option value={"994"} data-abbr={"AZ"}>
                      AZERBAIJAN
                    </option>
                    <option value={"242"} data-abbr={"BS"}>
                      BAHAMAS
                    </option>
                    <option value={"973"} data-abbr={"BH"}>
                      BAHRAIN
                    </option>
                    <option value={"880"} data-abbr={"BD"}>
                      BANGLADESH
                    </option>
                    <option value={"246"} data-abbr={"BB"}>
                      BARBADOS
                    </option>
                    <option value={"375"} data-abbr={"BY"}>
                      BELARUS
                    </option>
                    <option value={"32"} data-abbr={"BE"}>
                      BELGIUM
                    </option>
                    <option value={"501"} data-abbr={"BZ"}>
                      BELIZE
                    </option>
                    <option value={"229"} data-abbr={"BJ"}>
                      BENIN
                    </option>
                    <option value={"441"} data-abbr={"BM"}>
                      BERMUDA
                    </option>
                    <option value={"975"} data-abbr={"BT"}>
                      BHUTAN
                    </option>
                    <option value={"591"} data-abbr={"BO"}>
                      BOLIVIA
                    </option>
                    <option value={"387"} data-abbr={"BA"}>
                      BOSNIA AND HERZEGOVINA
                    </option>
                    <option value={"267"} data-abbr={"BW"}>
                      BOTSWANA
                    </option>
                    <option value={"55"} data-abbr={"BR"}>
                      BRAZIL
                    </option>
                    <option value={"246"} data-abbr={"IO"}>
                      BRITISH INDIAN OCEAN TERRITORY
                    </option>
                    <option value={"673"} data-abbr={"BN"}>
                      BRUNEI DARUSSALAM
                    </option>
                    <option value={"359"} data-abbr={"BG"}>
                      BULGARIA
                    </option>
                    <option value={"226"} data-abbr={"BF"}>
                      BURKINA FASO
                    </option>
                    <option value={"257"} data-abbr={"BI"}>
                      BURUNDI
                    </option>
                    <option value={"855"} data-abbr={"KH"}>
                      CAMBODIA
                    </option>
                    <option value={"237"} data-abbr={"CM"}>
                      CAMEROON
                    </option>
                    <option value={"1"} data-abbr={"CA"} selected>
                      CANADA
                    </option>
                    <option value={"238"} data-abbr={"CV"}>
                      CAPE VERDE
                    </option>
                    <option value={"345"} data-abbr={"KY"}>
                      CAYMAN ISLANDS
                    </option>
                    <option value={"236"} data-abbr={"CF"}>
                      CENTRAL AFRICAN REPUBLIC
                    </option>
                    <option value={"235"} data-abbr={"TD"}>
                      CHAD
                    </option>
                    <option value={"56"} data-abbr={"CL"}>
                      CHILE
                    </option>
                    <option value={"86"} data-abbr={"CN"}>
                      CHINA
                    </option>
                    <option value={"672"} data-abbr={"CX"}>
                      CHRISTMAS ISLAND
                    </option>
                    <option value={"672"} data-abbr={"CC"}>
                      COCOS (KEELING) ISLANDS
                    </option>
                    <option value={"57"} data-abbr={"CO"}>
                      COLOMBIA
                    </option>
                    <option value={"269"} data-abbr={"KM"}>
                      COMOROS
                    </option>
                    <option value={"242"} data-abbr={"CG"}>
                      CONGO
                    </option>
                    <option value={"682"} data-abbr={"CK"}>
                      COOK ISLANDS
                    </option>
                    <option value={"506"} data-abbr={"CR"}>
                      COSTA RICA
                    </option>
                    <option value={"225"} data-abbr={"CI"}>
                      COTE D'IVOIRE
                    </option>
                    <option value={"385"} data-abbr={"HR"}>
                      CROATIA
                    </option>
                    <option value={"53"} data-abbr={"CU"}>
                      CUBA
                    </option>
                    <option value={"357"} data-abbr={"CY"}>
                      CYPRUS
                    </option>
                    <option value={"420"} data-abbr={"CZ"}>
                      CZECH REPUBLIC
                    </option>
                    <option value={"45"} data-abbr={"DK"}>
                      DENMARK
                    </option>
                    <option value={"253"} data-abbr={"DJ"}>
                      DJIBOUTI
                    </option>
                    <option value={"176"} data-abbr={"DM"}>
                      DOMINICA
                    </option>
                    <option value={"809"} data-abbr={"DO"}>
                      DOMINICAN REPUBLIC
                    </option>
                    <option value={"593"} data-abbr={"EC"}>
                      ECUADOR
                    </option>
                    <option value={"20"} data-abbr={"EG"}>
                      EGYPT
                    </option>
                    <option value={"503"} data-abbr={"SV"}>
                      EL SALVADOR
                    </option>
                    <option value={"240"} data-abbr={"GQ"}>
                      EQUATORIAL GUINEA
                    </option>
                    <option value={"291"} data-abbr={"ER"}>
                      ERITREA
                    </option>
                    <option value={"372"} data-abbr={"EE"}>
                      ESTONIA
                    </option>
                    <option value={"251"} data-abbr={"ET"}>
                      ETHIOPIA
                    </option>
                    <option value={"500"} data-abbr={"FK"}>
                      FALKLAND ISLANDS (MALVINAS)
                    </option>
                    <option value={"298"} data-abbr={"FO"}>
                      FAROE ISLANDS
                    </option>
                    <option value={"679"} data-abbr={"FJ"}>
                      FIJI
                    </option>
                    <option value={"358"} data-abbr={"FI"}>
                      FINLAND
                    </option>
                    <option value={"33"} data-abbr={"FR"}>
                      FRANCE
                    </option>
                    <option value={"594"} data-abbr={"GF"}>
                      FRENCH GUIANA
                    </option>
                    <option value={"689"} data-abbr={"PF"}>
                      FRENCH POLYNESIA
                    </option>
                    <option value={"689"} data-abbr={"TF"}>
                      FRENCH SOUTHERN TERRITORIES
                    </option>
                    <option value={"241"} data-abbr={"GA"}>
                      GABON
                    </option>
                    <option value={"220"} data-abbr={"GM"}>
                      GAMBIA
                    </option>
                    <option value={"995"} data-abbr={"GE"}>
                      GEORGIA
                    </option>
                    <option value={"49"} data-abbr={"DE"}>
                      GERMANY
                    </option>
                    <option value={"233"} data-abbr={"GH"}>
                      GHANA
                    </option>
                    <option value={"350"} data-abbr={"GI"}>
                      GIBRALTAR
                    </option>
                    <option value={"30"} data-abbr={"GR"}>
                      GREECE
                    </option>
                    <option value={"299"} data-abbr={"GL"}>
                      GREENLAND
                    </option>
                    <option value={"473"} data-abbr={"GD"}>
                      GRENADA
                    </option>
                    <option value={"590"} data-abbr={"GP"}>
                      GUADELOUPE
                    </option>
                    <option value={"671"} data-abbr={"GU"}>
                      GUAM
                    </option>
                    <option value={"502"} data-abbr={"GT"}>
                      GUATEMALA
                    </option>
                    <option value={"224"} data-abbr={"GN"}>
                      GUINEA
                    </option>
                    <option value={"245"} data-abbr={"GW"}>
                      GUINEA-BISSAU
                    </option>
                    <option value={"592"} data-abbr={"GY"}>
                      GUYANA
                    </option>
                    <option value={"509"} data-abbr={"HT"}>
                      HAITI
                    </option>
                    <option value={"39"} data-abbr={"VA"}>
                      HOLY SEE (VATICAN CITY STATE)
                    </option>
                    <option value={"503"} data-abbr={"HN"}>
                      HONDURAS
                    </option>
                    <option value={"852"} data-abbr={"HK"}>
                      HONG KONG
                    </option>
                    <option value={"36"} data-abbr={"HU"}>
                      HUNGARY
                    </option>
                    <option value={"354"} data-abbr={"IS"}>
                      ICELAND
                    </option>
                    <option value={"91"} data-abbr={"IN"}>
                      INDIA
                    </option>
                    <option value={"62"} data-abbr={"ID"}>
                      INDONESIA
                    </option>
                    <option value={"98"} data-abbr={"IR"}>
                      IRAN, ISLAMIC REPUBLIC OF
                    </option>
                    <option value={"964"} data-abbr={"IQ"}>
                      IRAQ
                    </option>
                    <option value={"353"} data-abbr={"IE"}>
                      IRELAND
                    </option>
                    <option value={"972"} data-abbr={"IL"}>
                      ISRAEL
                    </option>
                    <option value={"39"} data-abbr={"IT"}>
                      ITALY
                    </option>
                    <option value={"876"} data-abbr={"JM"}>
                      JAMAICA
                    </option>
                    <option value={"81"} data-abbr={"JP"}>
                      JAPAN
                    </option>
                    <option value={"962"} data-abbr={"JO"}>
                      JORDAN
                    </option>
                    <option value={"7"} data-abbr={"KZ"}>
                      KAZAKHSTAN
                    </option>
                    <option value={"254"} data-abbr={"KE"}>
                      KENYA
                    </option>
                    <option value={"686"} data-abbr={"KI"}>
                      KIRIBATI
                    </option>
                    <option value={"82"} data-abbr={"KP"}>
                      KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
                    </option>
                    <option value={"82"} data-abbr={"KR"}>
                      KOREA, REPUBLIC OF
                    </option>
                    <option value={"965"} data-abbr={"KW"}>
                      KUWAIT
                    </option>
                    <option value={"996"} data-abbr={"KG"}>
                      KYRGYZSTAN
                    </option>
                    <option value={"856"} data-abbr={"LA"}>
                      LAO PEOPLE'S DEMOCRATIC REPUBLIC
                    </option>
                    <option value={"371"} data-abbr={"LV"}>
                      LATVIA
                    </option>
                    <option value={"961"} data-abbr={"LB"}>
                      LEBANON
                    </option>
                    <option value={"266"} data-abbr={"LS"}>
                      LESOTHO
                    </option>
                    <option value={"231"} data-abbr={"LR"}>
                      LIBERIA
                    </option>
                    <option value={"218"} data-abbr={"LY"}>
                      LIBYAN ARAB JAMAHIRIYA
                    </option>
                    <option value={"423"} data-abbr={"LI"}>
                      LIECHTENSTEIN
                    </option>
                    <option value={"370"} data-abbr={"LT"}>
                      LITHUANIA
                    </option>
                    <option value={"352"} data-abbr={"LU"}>
                      LUXEMBOURG
                    </option>
                    <option value={"853"} data-abbr={"MO"}>
                      MACAO
                    </option>
                    <option value={"389"} data-abbr={"MK"}>
                      MACEDONIA THE FORMER YUGOSLAV REPUBLIC OF
                    </option>
                    <option value={"261"} data-abbr={"MG"}>
                      MADAGASCAR
                    </option>
                    <option value={"265"} data-abbr={"MW"}>
                      MALAWI
                    </option>
                    <option value={"60"} data-abbr={"MY"}>
                      MALAYSIA
                    </option>
                    <option value={"960"} data-abbr={"MV"}>
                      MALDIVES
                    </option>
                    <option value={"223"} data-abbr={"ML"}>
                      MALI
                    </option>
                    <option value={"356"} data-abbr={"MT"}>
                      MALTA
                    </option>
                    <option value={"692"} data-abbr={"MH"}>
                      MARSHALL ISLANDS
                    </option>
                    <option value={"596"} data-abbr={"MQ"}>
                      MARTINIQUE
                    </option>
                    <option value={"222"} data-abbr={"MR"}>
                      MAURITANIA
                    </option>
                    <option value={"230"} data-abbr={"MU"}>
                      MAURITIUS
                    </option>
                    <option value={"269"} data-abbr={"YT"}>
                      MAYOTTE
                    </option>
                    <option value={"52"} data-abbr={"MX"}>
                      MEXICO
                    </option>
                    <option value={"691"} data-abbr={"FM"}>
                      MICRONESIA, FEDERATED STATES OF
                    </option>
                    <option value={"373"} data-abbr={"MD"}>
                      MOLDOVA, REPUBLIC OF
                    </option>
                    <option value={"377"} data-abbr={"MC"}>
                      MONACO
                    </option>
                    <option value={"976"} data-abbr={"MN"}>
                      MONGOLIA
                    </option>
                    <option value={"664"} data-abbr={"MS"}>
                      MONTSERRAT
                    </option>
                    <option value={"212"} data-abbr={"MA"}>
                      MOROCCO
                    </option>
                    <option value={"258"} data-abbr={"MZ"}>
                      MOZAMBIQUE
                    </option>
                    <option value={"95"} data-abbr={"MM"}>
                      MYANMAR
                    </option>
                    <option value={"264"} data-abbr={"NA"}>
                      NAMIBIA
                    </option>
                    <option value={"674"} data-abbr={"NR"}>
                      NAURU
                    </option>
                    <option value={"977"} data-abbr={"NP"}>
                      NEPAL
                    </option>
                    <option value={"31"} data-abbr={"NL"}>
                      NETHERLANDS
                    </option>
                    <option value={"599"} data-abbr={"AN"}>
                      NETHERLANDS ANTILLES
                    </option>
                    <option value={"687"} data-abbr={"NC"}>
                      NEW CALEDONIA
                    </option>
                    <option value={"64"} data-abbr={"NZ"}>
                      NEW ZEALAND
                    </option>
                    <option value={"505"} data-abbr={"NI"}>
                      NICARAGUA
                    </option>
                    <option value={"227"} data-abbr={"NE"}>
                      NIGER
                    </option>
                    <option value={"234"} data-abbr={"NG"}>
                      NIGERIA
                    </option>
                    <option value={"683"} data-abbr={"NU"}>
                      NIUE
                    </option>
                    <option value={"672"} data-abbr={"NF"}>
                      NORFOLK ISLAND
                    </option>
                    <option value={"167"} data-abbr={"MP"}>
                      NORTHERN MARIANA ISLANDS
                    </option>
                    <option value={"47"} data-abbr={"NO"}>
                      NORWAY
                    </option>
                    <option value={"968"} data-abbr={"OM"}>
                      OMAN
                    </option>
                    <option value={"92"} data-abbr={"PK"}>
                      PAKISTAN
                    </option>
                    <option value={"680"} data-abbr={"PW"}>
                      PALAU
                    </option>
                    <option value={"970"} data-abbr={"PS"}>
                      PALESTINIAN TERRITORY, OCCUPIED
                    </option>
                    <option value={"507"} data-abbr={"PA"}>
                      PANAMA
                    </option>
                    <option value={"675"} data-abbr={"PG"}>
                      PAPUA NEW GUINEA
                    </option>
                    <option value={"595"} data-abbr={"PY"}>
                      PARAGUAY
                    </option>
                    <option value={"51"} data-abbr={"PE"}>
                      PERU
                    </option>
                    <option value={"63"} data-abbr={"PH"}>
                      PHILIPPINES
                    </option>
                    <option value={"672"} data-abbr={"PN"}>
                      PITCAIRN
                    </option>
                    <option value={"48"} data-abbr={"PL"}>
                      POLAND
                    </option>
                    <option value={"351"} data-abbr={"PT"}>
                      PORTUGAL
                    </option>
                    <option value={"787"} data-abbr={"PR"}>
                      PUERTO RICO
                    </option>
                    <option value={"974"} data-abbr={"QA"}>
                      QATAR
                    </option>
                    <option value={"262"} data-abbr={"RE"}>
                      REUNION
                    </option>
                    <option value={"40"} data-abbr={"RO"}>
                      ROMANIA
                    </option>
                    <option value={"7"} data-abbr={"RU"}>
                      RUSSIAN FEDERATION
                    </option>
                    <option value={"250"} data-abbr={"RW"}>
                      RWANDA
                    </option>
                    <option value={"290"} data-abbr={"SH"}>
                      SAINT HELENA
                    </option>
                    <option value={"186"} data-abbr={"KN"}>
                      SAINT KITTS AND NEVIS
                    </option>
                    <option value={"175"} data-abbr={"LC"}>
                      SAINT LUCIA
                    </option>
                    <option value={"508"} data-abbr={"PM"}>
                      SAINT PIERRE AND MIQUELON
                    </option>
                    <option value={"180"} data-abbr={"VC"}>
                      SAINT VINCENT AND THE GRENADINES
                    </option>
                    <option value={"885"} data-abbr={"WS"}>
                      SAMOA
                    </option>
                    <option value={"378"} data-abbr={"SM"}>
                      SAN MARINO
                    </option>
                    <option value={"239"} data-abbr={"ST"}>
                      SAO TOME AND PRINCIPE
                    </option>
                    <option value={"966"} data-abbr={"SA"}>
                      SAUDI ARABIA
                    </option>
                    <option value={"221"} data-abbr={"SN"}>
                      SENEGAL
                    </option>
                    <option value={"381"} data-abbr={"CS"}>
                      SERBIA AND MONTENEGRO
                    </option>
                    <option value={"248"} data-abbr={"SC"}>
                      SEYCHELLES
                    </option>
                    <option value={"232"} data-abbr={"SL"}>
                      SIERRA LEONE
                    </option>
                    <option value={"65"} data-abbr={"SG"}>
                      SINGAPORE
                    </option>
                    <option value={"421"} data-abbr={"SK"}>
                      SLOVAKIA
                    </option>
                    <option value={"386"} data-abbr={"SI"}>
                      SLOVENIA
                    </option>
                    <option value={"677"} data-abbr={"SB"}>
                      SOLOMON ISLANDS
                    </option>
                    <option value={"252"} data-abbr={"SO"}>
                      SOMALIA
                    </option>
                    <option value={"27"} data-abbr={"ZA"}>
                      SOUTH AFRICA
                    </option>
                    <option value={"34"} data-abbr={"ES"}>
                      SPAIN
                    </option>
                    <option value={"94"} data-abbr={"LK"}>
                      SRI LANKA
                    </option>
                    <option value={"249"} data-abbr={"SD"}>
                      SUDAN
                    </option>
                    <option value={"597"} data-abbr={"SR"}>
                      SURINAME
                    </option>
                    <option value={"47"} data-abbr={"SJ"}>
                      SVALBARD AND JAN MAYEN
                    </option>
                    <option value={"268"} data-abbr={"SZ"}>
                      SWAZILAND
                    </option>
                    <option value={"46"} data-abbr={"SE"}>
                      SWEDEN
                    </option>
                    <option value={"41"} data-abbr={"CH"}>
                      SWITZERLAND
                    </option>
                    <option value={"963"} data-abbr={"SY"}>
                      SYRIAN ARAB REPUBLIC
                    </option>
                    <option value={"886"} data-abbr={"TW"}>
                      TAIWAN, PROVINCE OF CHINA
                    </option>
                    <option value={"992"} data-abbr={"TJ"}>
                      TAJIKISTAN
                    </option>
                    <option value={"255"} data-abbr={"TZ"}>
                      TANZANIA, UNITED REPUBLIC OF
                    </option>
                    <option value={"66"} data-abbr={"TH"}>
                      THAILAND
                    </option>
                    <option value={"670"} data-abbr={"TL"}>
                      TIMOR-LESTE
                    </option>
                    <option value={"228"} data-abbr={"TG"}>
                      TOGO
                    </option>
                    <option value={"690"} data-abbr={"TK"}>
                      TOKELAU
                    </option>
                    <option value={"676"} data-abbr={"TO"}>
                      TONGA
                    </option>
                    <option value={"186"} data-abbr={"TT"}>
                      TRINIDAD AND TOBAGO
                    </option>
                    <option value={"216"} data-abbr={"TN"}>
                      TUNISIA
                    </option>
                    <option value={"90"} data-abbr={"TR"}>
                      TURKEY
                    </option>
                    <option value={"993"} data-abbr={"TM"}>
                      TURKMENISTAN
                    </option>
                    <option value={"164"} data-abbr={"TC"}>
                      TURKS AND CAICOS ISLANDS
                    </option>
                    <option value={"688"} data-abbr={"TV"}>
                      TUVALU
                    </option>
                    <option value={"256"} data-abbr={"UG"}>
                      UGANDA
                    </option>
                    <option value={"380"} data-abbr={"UA"}>
                      UKRAINE
                    </option>
                    <option value={"971"} data-abbr={"AE"}>
                      UNITED ARAB EMIRATES
                    </option>
                    <option value={"44"} data-abbr={"GB"}>
                      UNITED KINGDOM
                    </option>
                    <option value={"1"} data-abbr={"US"} selected>
                      UNITED STATES
                    </option>
                    <option value={"598"} data-abbr={"UY"}>
                      URUGUAY
                    </option>
                    <option value={"998"} data-abbr={"UZ"}>
                      UZBEKISTAN
                    </option>
                    <option value={"678"} data-abbr={"VU"}>
                      VANUATU
                    </option>
                    <option value={"58"} data-abbr={"VE"}>
                      VENEZUELA
                    </option>
                    <option value={"84"} data-abbr={"VN"}>
                      VIETNAM
                    </option>
                    <option value={"128"} data-abbr={"VG"}>
                      VIRGIN ISLANDS, BRITISH
                    </option>
                    <option value={"134"} data-abbr={"VI"}>
                      VIRGIN ISLANDS, U.S.
                    </option>
                    <option value={"681"} data-abbr={"WF"}>
                      WALLIS AND FUTUNA
                    </option>
                    <option value={"212"} data-abbr={"EH"}>
                      WESTERN SAHARA
                    </option>
                    <option value={"967"} data-abbr={"YE"}>
                      YEMEN
                    </option>
                    <option value={"260"} data-abbr={"ZM"}>
                      ZAMBIA
                    </option>
                    <option value={"263"} data-abbr={"ZW"}>
                      ZIMBABWE
                    </option>
                  </select>
                </div>
                <div className={"frmicon-box phonecode"}>
                  <label htmlFor={""}>
                    Phone Number
                  </label>
                  <input type={"text"} name={"countrycode"} id={"countrycode"} readOnly />
                  <input type={"tel"} id={"phoneNum"} name={"phone"} placeholder={"Phone Number"} required />
                  <input type={"hidden"} name={"gclid"} defaultValue={""} />
                  <input type={"hidden"} name={"fbclid"} defaultValue={""} />
                  <input type={"hidden"} name={"__keyword"} defaultValue={""} />
                  <input type={"hidden"} name={"__device"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_source"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_campaign"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_content"} defaultValue={""} />
                  <input type={"hidden"} name={"__utm_term"} defaultValue={""} />
                  <input type={"hidden"} name={"__matchtype"} defaultValue={""} />
                </div>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    Select Service
                  </label>
                  <select id={"service"} name={"service"} required>
                    <option>
                      Select Service
                    </option>
                    <option rel={"logo"}>
                      Logo Design
                    </option>
                    <option rel={"web"}>
                      Website Design
                    </option>
                    <option rel={"brochure"}>
                      Brochure Design
                    </option>
                    <option rel={"branding"}>
                      Branding
                    </option>
                    <option rel={"stationery"}>
                      Stationery
                    </option>
                    <option rel={"seo"}>
                      SEO
                    </option>
                  </select>
                </div>
                <div className={"frmicon-box"}>
                  <label htmlFor={""}>
                    Industry
                  </label>
                  <select id={"service"} name={"Industry"}>
                    <option value={"all"}>
                      Select Your Industry
                    </option>
                    <option value={"accounting"}>
                      Accounting
                    </option>
                    <option value={"advertising"}>
                      Advertising Agency
                    </option>
                    <option value={"agriculture"}>
                      Agriculture
                    </option>
                    <option value={"animals-pets"}>
                      Animals and Pets
                    </option>
                    <option value={"anniversary"}>
                      Anniversary
                    </option>
                    <option value={"art-design"}>
                      Art and Design
                    </option>
                    <option value={"attorney-law"}>
                      Attorney & Law
                    </option>
                    <option value={"automotive-vehicle"}>
                      Automotive & Vehicle
                    </option>
                    <option value={"bar-nightclub"}>
                      Bar & Nightclub
                    </option>
                    <option value={"business-consulting"}>
                      Business & Consulting
                    </option>
                    <option value={"communication"}>
                      Communications
                    </option>
                    <option value={"children-and-childcare"}>
                      Children & Childcare
                    </option>
                    <option value={"cleaning-and-maintenance"}>
                      Cleaning & Maintenance
                    </option>
                    <option value={"community-and-non-profit"}>
                      Community & Non-Profit
                    </option>
                    <option value={"computer-it"}>
                      Computer & IT
                    </option>
                    <option value={"construction"}>
                      Construction & Tools
                    </option>
                    <option value={"cosmetics-and-beauty"}>
                      Cosmetics & Beauty
                    </option>
                    <option value={"education"}>
                      Education
                    </option>
                    <option value={"entertainment"}>
                      Entertainment
                    </option>
                    <option value={"environmental-green"}>
                      Environmental & Green
                    </option>
                    <option value={"fashion"}>
                      Fashion
                    </option>
                    <option value={"floral"}>
                      Floral
                    </option>
                    <option value={"food-drink"}>
                      Food & Drink
                    </option>
                    <option value={"home-furnishings"}>
                      Home Furnishings
                    </option>
                    <option value={"industrial"}>
                      Industrial
                    </option>
                    <option value={"logistics"}>
                      Logistics
                    </option>
                    <option value={"medical-pharmaceutical"}>
                      Medical & Pharmaceutical
                    </option>
                    <option value={"photography"}>
                      Photography
                    </option>
                    <option value={"physical-fitness"}>
                      Physical Fitness
                    </option>
                    <option value={"real-estate-mortgage"}>
                      Real Estate & Mortgage
                    </option>
                    <option value={"restaurant"}>
                      Restaurant
                    </option>
                    <option value={"retail-shopping"}>
                      Retail & Shopping
                    </option>
                    <option value={"spa-esthetics"}>
                      Spa & Esthetics
                    </option>
                    <option value={"sports"}>
                      Sports
                    </option>
                    <option value={"technology"}>
                      Technology
                    </option>
                    <option value={"travel-hotel"}>
                      Travel & Hotel
                    </option>
                    <option value={"wedding-services"}>
                      Wedding Services
                    </option>
                  </select>
                </div>
                <div className={"checkbox-wrap"}>
                  <input type={"checkbox"} id={"check1"} required name={"check1"} />
                  <label htmlFor={"check1"}>
                    I agree with Lunexa Studio Design Policy and provide my consent to receive B2B marketing communications from Lunexa Studio Design
                  </label>
                </div>
                <div className={"checkbox-wrap"}>
                  <input type={"checkbox"} id={"check2"} required name={"check2"} />
                  <label htmlFor={"check2"}>
                    Message and data rates may apply. Reply STOP to opt-out, Text Help for help. 4 messages/month.
                  </label>
                </div>
                <div className={"checkbox-wrap"}>
                  <input type={"checkbox"} id={"check3"} required name={"check3"} />
                  <label htmlFor={"check3"}>
                    I Agree and accepts
                    <a target={"_blank"} href={"#"}>
                      Terms Conditions
                    </a>
                    and
                    <a target={"_blank"} href={"privacy-policy"}>
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div className={"text-right"}>
                  <ul className={"slide-cta"}>
                    <li>
                      <a href={"javascript:;"} title={"Live Chat"} target={"_self"} onClick={() => { if (typeof window.setButtonURL === "function") window.setButtonURL(); }}>
                        <i className={"lx-btn-icon"}><IconChat size={18} /></i>
                        Live Chat
                      </a>
                    </li>
                    <li>
                      <a href={"tel:+ 210 360 9849"}>
                        <i className={"lx-btn-icon"}><IconPhone size={16} /></i>
                        + 210 360 9849
                      </a>
                    </li>
                  </ul>
                  <span className={"newuptownloader "}></span>
                  <input type={"hidden"} name={"g-recaptcha-response"} />
                  <button type={"submit"} href={"javascript:;"} className={"popup-btn"} id={"popupformsubmit"}>
                    Let’s Get Started
                  </button>
                </div>
                <div className={"clearfix"}></div>
                <ul className={"features-ul"}>
                  <li>
                    <i className={"feature-icn feature-icn-1"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconTrendUp size={22} /></i>
                    <h5>
                      Data-Driven
                      <br />
                      Strategy
                    </h5>
                  </li>
                  <li>
                    <i className={"feature-icn feature-icn-3"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconGauge size={22} /></i>
                    <h5>
                      Transparent
                      <br />
                      Reporting
                    </h5>
                  </li>
                  <li>
                    <i className={"feature-icn feature-icn-4"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconUser size={22} /></i>
                    <h5>
                      Dedicated
                      <br />
                      Account Manager
                    </h5>
                  </li>
                  <li>
                    <i className={"feature-icn feature-icn-5"} style={{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"50%",background:"#f2edff",margin:"0 auto"}}><IconClock size={22} /></i>
                    <h5>
                      8+ Years
                      <br />
                      Experience
                    </h5>
                  </li>
                </ul>
                <h5 className={"award-hd"}>
                  Trusted By Growing Brands
                </h5>
                <ul className={"award-sldr"}>
                  <li>
                    <i className={"awrd-icn awrd-icn1"}></i>
                  </li>
                  <li>
                    <i className={"awrd-icn awrd-icn2"}></i>
                  </li>
                  <li>
                    <i className={"awrd-icn awrd-icn3"}></i>
                  </li>
                  <li>
                    <i className={"awrd-icn awrd-icn4"}></i>
                  </li>
                  <li>
                    <i className={"awrd-icn awrd-icn5"}></i>
                  </li>
                </ul>
              </div>
              <span className={"uptownloader"}></span>
            </form>
          </div>
        </div>
      </div>
      <a href={"tel:+ 210 360 9849"} className={"mob-call-icon"}>
        <i className={"lx-btn-icon"}><IconPhone size={16} /></i>
      </a>
      <a href={"javascript:"} id={"return-to-top"}>
        <i className={"lx-btn-icon"}><IconChevronUp size={16} /></i>
      </a>
      <style>
        {"\n        .checkbox-wrap {\n            display: flex;\n            align-items: flex-start;\n            gap: 10px;\n            text-align: left;\n            margin-bottom: 15px;\n        }\n\n        .checkbox-wrap label {\n            line-height: 1.3;\n            color: white;\n        }\n\n        .checkbox-wrap input {\n            margin-top: 4px;\n            width: auto !important;\n        }\n    "}
      </style>
    </Layout>
  );
}
