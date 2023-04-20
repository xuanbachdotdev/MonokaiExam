import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import Offer from "../partials/Offer";

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
