import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layouts/Layout";

function Home() {
  return (
    <Layout>
      <ParallaxProvider>
        <Parallax className="">
          <Parallax speed={-10}>
            <div
              style={{
                background:
                  "url(https://mcs.mn/wp-content/uploads/2020/03/about_header4.jpg)",
              }}
              className="h-screen"
            >
              im home page
            </div>
          </Parallax>
        </Parallax>
        <div className="h-screen">im home page</div>
        <div className="h-screen">im home page</div>
      </ParallaxProvider>
    </Layout>
  );
}

export default Home;
