import Hero from "./components/Hero";

import Image from "next/image";
import Features from "./components/Features";
import Feauturest from "./components/Feauturest";
import ScrollSection from "./components/ScrollSection";
import FAQ from "./components/FAQ";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black">




      <Hero>

      </Hero>

      <Features>


      </Features>
      <Feauturest></Feauturest>


      <ScrollSection></ScrollSection>
      <FAQ></FAQ>

      <Waitlist>


      </Waitlist>
      <Footer></Footer>
    </div>
  );
}
