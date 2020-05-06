import React from "react";
import { Parallax} from "react-parallax";
import HestiaBanner from "../assets/Images/HestiaBanner.jpg";
import Header from "../components/Header/Header";
import Welcome from '../components/Welcome/Welcome';
import './landing.scss';

function LandingPage() {
  return (
    <>
      <Header />
      <div
        className="parallax-class"
      >
        <img src={HestiaBanner} className="parallax-class"/>
      </div>
      <Welcome />
    </>
  );
}

export default LandingPage;
