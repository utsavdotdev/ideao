import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Services from "../component/Services";
import Page from "../component/Page";

function Home() {
  return (
    <>
      <Page title="Home">
        <Navbar />
        <Hero />
        <Services />
        <Footer />
      </Page>
    </>
  );
}

export default Home;
