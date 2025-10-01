import { Routes, Route } from "react-router-dom";
import Template2 from "./template/template-2";
import BlogPage from "./template/blog-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Template2 />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}
