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
            Kronos and Rhea. See the tree below to see how she relates to other popular Greek Gods and Goddesses:
          </p>
          <img src={Tree} className="about__stuff" />
        </div>
        <img src={hestia} className="about__image" />
      </div>
    </article>
  );
}

export default About;
