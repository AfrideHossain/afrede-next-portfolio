import About from "@/components/Home/About/About";
import BannerTem from "@/components/Home/Banner/BannerTem";
// import Banner from "@/components/Home/Banner/Banner";
import Navbar from "@/components/shared/Navbar/Navbar";
import Skillsets from "@/components/Home/Skillsets/Skillsets";
import Projects from "@/components/Home/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      <BannerTem />
      {/* <About /> */}
      <Skillsets />
      <Projects />
    </>
  );
}
