import React from "react";
import { Parallax} from "react-parallax";
import HestiaBanner from "../assets/Images/HestiaBanner.png";
import Header from "../components/Header/Header";
import Welcome from '../components/Welcome/Welcome';
import './landing.scss';

function LandingPage() {
  return (
    <>
      <Header />
      <Parallax
        blur={{ min: -15, max: 30 }}
        bgImage={HestiaBanner}
        bgImageAlt="houseImageBanner"
        strength={-200}
        className="parallax-class"
      >
        <div style={{ height: "200px" }} />
      </Parallax>
      <Welcome />
    </>
  );
}

export default LandingPage;
