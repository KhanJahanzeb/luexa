import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Website from "./pages/Website.jsx";
import Branding from "./pages/Branding.jsx";
import Ecommerce from "./pages/Ecommerce.jsx";
import Mobile from "./pages/Mobile.jsx";
import About from "./pages/About.jsx";
import Packages from "./pages/Packages.jsx";
import Contact from "./pages/Contact.jsx";
import Faqs from "./pages/Faqs.jsx";
import Reviews from "./pages/Reviews.jsx";
import Crm from "./pages/Crm.jsx";
import Seo from "./pages/Seo.jsx";
import AllInOne from "./pages/AllInOne.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Website />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/all-in-one" element={<AllInOne />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
}
