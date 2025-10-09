import { Routes, Route } from "react-router-dom";
import Template2 from "./template/template-2";
import BlogPage from "./template/blog-page";
import BlogDetail from "./template/blog-detail";
import Portfolio from "./template/portfolio";
import Karir from "./template/karir";
import TentangPage from "./template/tentang";
import SalamMobilePage from "./template/salam-mobile-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Template2 />} />
      <Route path="/tentang" element={<TentangPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/karir" element={<Karir />} />
      <Route path="/product/salam-mobile" element={<SalamMobilePage />} />
    </Routes>
  )
}
