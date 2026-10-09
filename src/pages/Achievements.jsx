import React from "react";

function Achievements() {
  const achievements = [
    "1st in project exhibition at Engineer's Day",
    "Led my teammates in Smart India Hackathon",
    "Participated in 24 hours Hackfest at GIET, Ghangapatana",
    "Got 3rd prize in Paper Presentation at National Conference",
    "Participated in 24 hours IIIT, Bhubaneswar Hackfest",
  ];

  return (
    <section className="achievements-section">
      <h1 className="achievements-title">Achievements</h1>

      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <span className="achievement-number">{index + 1}</span>
            <br />
            <p>{achievement}</p>
          </div>
        ))}
      </div>
      <br />
    </section>
  );
}

export default Achievements;
