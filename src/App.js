import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import "./style/sass.scss";
import "./style/news.scss";
import "./style/home.scss";
import "./style/footer.css";
import "./style/style.less";
import "./style/keepin.scss";
import "./style/partners.scss";
import "./style/contact-us.scss";
import CV from "./pages/CV";
import Home from "./pages/Home";
import CVDetail from "./pages/CVDetail";
import NotFound from "./pages/NotFound";
import OpenJobs from "./pages/OpenJobs";
import InfoPage from "./pages/InfoPage";
import CEOWords from "./pages/CEOWords";
import OurHistory from "./pages/OurHistory";
import WhatWeDone from "./pages/WhatWeDone";
import NewsDetail from "./pages/NewsDetail";
import KeepInTouch from "./pages/KeepInTouch";
import WhyourCompany from "./pages/WhyourCompany";
import Jobs from "./pages/Jobs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Ажлын-байр" element={<OpenJobs />} />
        <Route path="/news" element={<InfoPage />} />
        <Route path="/news-detail" element={<NewsDetail />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/about-us" element={<OurHistory />} />
        <Route path="/захирлын-мэндчилгээ" element={<CEOWords />} />
        <Route path="/human-resource" element={<WhyourCompany />} />
        <Route path="/Бидний-гүйцэтсэн-ажил" element={<WhatWeDone />} />
        <Route path="/contact-us" element={<KeepInTouch />} />
        <Route path="/cv-detail" element={<CVDetail />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
