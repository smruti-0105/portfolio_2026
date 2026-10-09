import React from "react";
import { useNavigate } from "react-router-dom";
import Education from "./Education";
import Achievements from "./Achievements";

import profileImage from "../assets/Pastel Scrapbook Portrait Collage-Photoroom.png";
import { ComicText } from "../components/ui/comic-text";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="hero">
        <div id="hero-right">
          <img src={profileImage} alt="Smrutisudha" id="pht" />
        </div>

        <div id="hero-left">
          <h1 id="hero-text">
            Hi, I'm
            <ComicText fontSize={3} className="text-left">
              Smrutisudha!! 👋
            </ComicText>
          </h1>

          <p id="hero-des">Frontend Developer</p>

          <p id="hero-desc">
            I build modern, responsive and user-friendly web applications using
            React and modern web technologies.
          </p>

          <button id="btn" onClick={() => navigate("/projects")}>
            Explore Projects →
          </button>
        </div>
      </section>

      <Education />
      <Achievements />
    </div>
  );
}

export default Home;
