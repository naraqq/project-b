import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import "./style/footer.css";
import "./style/sass.scss";
import "./style/keepin.scss";
import "./style/style.less";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OpenJobs from "./pages/OpenJobs";
import WhyourCompany from "./pages/WhyourCompany";
import InfoPage from "./pages/InfoPage";
import OurHistory from "./pages/OurHistory";
import WhatWeDone from "./pages/WhatWeDone";
import CV from "./pages/CV";
import KeepInTouch from "./pages/KeepInTouch";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Ажлын-байр" element={<OpenJobs />} />
        <Route path="/news" element={<InfoPage />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Танилцуулга" element={<OurHistory />} />
        <Route path="/яагаад-xxk-гэж" element={<WhyourCompany />} />
        <Route path="/Бидний-гүйцэтсэн-ажил" element={<WhatWeDone />} />
        <Route path="/Холбоо-барих" element={<KeepInTouch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
