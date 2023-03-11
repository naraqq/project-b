import Footer from "../Footer";
import Navigation from "./Navigation";

function Layout({ children }) {
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
