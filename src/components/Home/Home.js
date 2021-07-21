import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaIcons } from "../../assets/data";

import "./Home.scss";

const Home = () => {
  return (
    <main id="home" className="home">
      <h1 className="home__heading">
        Swastik <span className="home__heading--secondary">Sonkusare</span>
      </h1>
      <h2 className="home__sub-heading">Web Developer</h2>

      <div className="home__icons">
        {socialMediaIcons.map((icon) => (
          <Link to="#!">
            <FontAwesomeIcon icon={icon} size="2x" />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
