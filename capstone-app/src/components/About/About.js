import React from "react";
import hestia from "../../assets/Images/hestia.jpg";
import "./about.scss";
import Tree from "../../assets/Images/Tree.png";

function About() {
  return (
    <article>
      <h2 className="about__heading">ABOUT HESTIA</h2>
      <div className="about">
        <div className="about__info">
          <p>
            In Ancient Greek religion, Hestia (/ˈhɛstiə, ˈhɛstʃə/; Greek: Ἑστία,
            "hearth" or "fireside") is the virgin goddess of the hearth, the
            right ordering of domesticity, the family, the home, and the state.
            In Greek mythology, she is the daughter and firstborn child of
            Kronos and Rhea. This is why she was chosen for the name of the website.
            Look at the tree below to see how she relates to other popular Greek
            Gods and Goddesses:
          </p>
          <div className="about__box">
            <img src={Tree} className="about__stuff" alt="GreekTree"/>
            <img src={hestia} className="about__image" alt="Hestia"/>
          </div>
        </div>
      </div>
      <h2 className="about__heading">ABOUT ME</h2>
      <div className="about">
        <div className="about__info">
          <p>
            Hi my name is Gurtaj and this is my capstone project for BrainStation's Web Developement Winter 2020 cohort. This project uses React, DeckGL and D3js to display and aggregate Crime and Locality information from TorontoPolice's OpenDataBase about Toronto's 140 neighbourhoods to provide a rating for all the neighbourhoods.
          </p>
        </div>
      </div>
    </article>
  );
}

export default About;
