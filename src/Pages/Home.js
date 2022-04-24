import React from "react";
import AboutInfo from "../components/AboutInfo/AboutInfo";
import Banner from "../components/Banner/Banner";
import BitCount from "../components/BitCount/BitCount";
import CoinsTable from "../components/CoinsTable/CoinsTable";
import ConntectedSvg from "../components/ConntectedSvg/ConntectedSvg";
import Features from "../components/Features/Features";
import ParticleBackground from "../components/ParticleBackground/ParticleBackground";
import Team from "../components/Team/Team";
import UpsideSvg from "../components/UpsideSvg/UpsideSvg";

const Home = () => {
  return (
    <>
      <ParticleBackground />
      <Banner />
      <AboutInfo />
      <ConntectedSvg />
      <Features />
      <UpsideSvg />
      <BitCount />
      <CoinsTable />
      <Team />
    </>
  );
};

export default Home;
