import React from "react";
import HestiaBanner from "../assets/Images/HestiaBanner.jpg";
import Header from "../components/Header/Header";
import './landing.scss';
import TopMap from "../components/TopMap/TopMap";

function LandingPage() {
  return (
    <>
      <Header />
      <div
        className="parallax-class"
      >
        <img src={HestiaBanner} className="parallax-class" alt="BannerHero"/>
      </div>
      <TopMap />
    </>
  );
}

export default LandingPage;
