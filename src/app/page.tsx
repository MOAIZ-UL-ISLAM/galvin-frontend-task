import About from "./components/About-us";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testamonial from "./components/Testamonial";

export default function Home() {
  return (

    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Testamonial />
      <Footer />

    </div>
  );
}
