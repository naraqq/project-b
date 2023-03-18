import Footer from "../Footer";
import Navigation from "./Navigation";
import { useEffect } from "react";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      <div className="h-[60px] w-full"></div>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
