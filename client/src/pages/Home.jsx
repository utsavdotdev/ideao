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
        <div className="yt_wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hQAHSlTtcmY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Services />
        <Footer />
      </Page>
    </>
  );
}

export default Home;
