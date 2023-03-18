import { ParallaxProvider } from "react-scroll-parallax";
import Info from "../components/Info";
import Layout from "../components/Layouts/Layout";
import RecentJobs from "../components/RecentJobs";
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
        <div className="h-full">
          <Info />
        </div>
        <div className="h-full">
          <RecentJobs />
        </div>
        {/* <div className="h-full">
          <OurWork />
        </div> */}
      </ParallaxProvider>
    </Layout>
  );
}

export default Home;
