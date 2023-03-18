import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import "./style/footer.css";
import "./style/sass.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
