import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Info from "../components/Info";
import Layout from "../components/Layouts/Layout";
function Home() {
  return (
    <Layout>
      <ParallaxProvider>
        <div className="h-[calc(100vh-60px)] relative">
          <div
            style={{
              // backgroundSize: "cover",
              background: `url(https://dmd-mongolie.com/en/wp-content/uploads/2019/08/220cc9453cbf66516e333fbabcf33e85.jpg)`,
              // backgroundSize: "cover",
            }}
            className="absolute top-[-60px] h-screen w-screen"
          ></div>
          {/* <HomeCarousel /> */}
        </div>
        <div className="h-full py-10 bg-gray-50">
          <Info />
        </div>
        <div className="h-screen">im home page</div>
      </ParallaxProvider>
    </Layout>
  );
}

export default Home;
