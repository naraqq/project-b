import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layouts/Layout";
import WelcomeContent from "../components/WelcomeContent";
function Home() {
  return (
    <Layout>
      <ParallaxProvider>
        <WelcomeContent />
      </ParallaxProvider>
    </Layout>
  );
}

export default Home;
