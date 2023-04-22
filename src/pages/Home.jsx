import React from "react";

import Header from "../components//Header";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Offer from "../components/Offer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden dark:bg-zinc-950">
      <Offer
        offerText="Cơ hội nhận free"
        offerPrice="0d"
        offerTime=""
        offerLink=""
      />
      {/*  Site header */}
      <Header isHasOffer={true} />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
