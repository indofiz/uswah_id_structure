import { Routes, Route } from "react-router-dom";
import Template2 from "./template/template-2";
import BlogPage from "./template/blog-page";
import BlogDetail from "./template/blog-detail";
import Portfolio from "./template/portfolio";
import Karir from "./template/karir";
import TentangPage from "./template/tentang";
import SalamMobilePage from "./template/salam-mobile-page";
import SalamAdminPage from "./template/salam-admin-page";
import ERaporPage from "./template/e-rapor-page";
import LMSMoodlePage from "./template/lms-moodle-page";
import LMSYazanPage from "./template/lms-yazan-page";
import AMSPage from "./template/ams-page";
import ZISWAFPage from "./template/ziswaf-page";
import BIDashboardPage from "./template/bi-dashboard-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Template2 />} />
      <Route path="/tentang" element={<TentangPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/karir" element={<Karir />} />
      <Route path="/salam-mobile" element={<SalamMobilePage />} />
      <Route path="/salam-admin" element={<SalamAdminPage />} />
      <Route path="/e-rapor" element={<ERaporPage />} />
      <Route path="/lms-moodle" element={<LMSMoodlePage />} />
      <Route path="/lms-yazan" element={<LMSYazanPage />} />
      <Route path="/ams" element={<AMSPage />} />
      <Route path="/ziswaf" element={<ZISWAFPage />} />
      <Route path="/bi-dashboard" element={<BIDashboardPage />} />
    </Routes>
  )
}
