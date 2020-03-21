import React from "react";
import About from "../components/About/About";
import { Parallax, Background } from "react-parallax";
import HestiaBanner from "../assets/Images/HestiaBanner.png";
import Header from "../components/Header/Header";
import Welcome from '../components/Welcome/Welcome';

function LandingPage() {
  return (
    <>
      <Header />
      <Parallax
        blur={{ min: -15, max: 30 }}
        bgImage={HestiaBanner}
        bgImageAlt="houseImageBanner"
        strength={-200}
        style={{
          height: "650px",
          shadow: "0px 0px 44px 0px rgba(0, 0, 0, 0.11)",
          backgroundColor: '#D1735A'
        }}
      >
        <div style={{ height: "200px" }} />
      </Parallax>
      <Welcome />
    </>
  );
}

export default LandingPage;
