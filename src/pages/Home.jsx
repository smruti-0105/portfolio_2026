import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800" id="hero-text">
        Hi, I'm Smrutisudha!! 👋
      </h1>
      <br />
      
      <p className="text-xl text-black-700 mt-4">Frontend Developer</p>
      <p className="text-black-500 mt-4">
        I build modern, responsive and user friendly web applications using
        React and modern web technologies.
      </p>
      <br />
      <button
        onClick={() => navigate("/projects")}
        className="mt-8 bg-pink-500 text-white rounded-lg hover:bg-yellow-400 w-50 h-15 transition duration-300"
      >
        Explore My Projects
      </button>
    </section>
  );
}

export default Home;
