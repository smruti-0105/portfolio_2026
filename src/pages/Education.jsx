import React from "react";
import EducationCard from "../components/education/EducationCard";
import { educations } from "../../utils/CONSTENT";

const Education = () => {
  return (
    <section className="education-section px-6 py-12">
      <h1 className="education-title text-center text-5xl font-bold text-pink-500 mb-12">
        Education
      </h1>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {educations.map((education, clg) => (
          <EducationCard
            key={clg}
            title={education.title}
            college={education.college}
            location={education.location}
            image={education.image}
            details={
              <>
                {education.isCgpa ? "(CGPA)" : "Percentage"}:{" "}
                {education.percentage}
                <br />
                Year: {education.year}
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
