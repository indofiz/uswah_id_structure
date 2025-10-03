import { Routes, Route } from "react-router-dom";
import Template2 from "./template/template-2";
import BlogPage from "./template/blog-page";
import Portfolio from "./template/portfolio";
import Karir from "./template/karir";
import TentangPage from "./template/tentang";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Template2 />} />
      <Route path="/tentang" element={<TentangPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/karir" element={<Karir />} />
    </Routes>
  )
}
