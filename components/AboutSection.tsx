// components/AboutSection.tsx
import React from "react";

const AboutSection = () => {
  const skills = [
    "Architectural Design",
    "3D Modeling & Rendering",
    "Sustainable Design",
    "Project Management",
    "Building Codes & Regulations",
    "Construction Documentation",
  ];

  const education = [
    {
      degree: "Bachelor of Architecture",
      institution: "yrian Private University of Antioch",
      year: "2024",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-arch-primary mb-12 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-arch-secondary mb-6">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-arch-secondary rounded-full mr-3"></div>
                  <span className="text-arch-dark">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-arch-secondary mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-arch-secondary pl-4 py-2"
                >
                  <h4 className="text-xl font-medium text-arch-primary">
                    {edu.degree}
                  </h4>
                  <p className="text-arch-accent">{edu.institution}</p>
                  <p className="text-arch-dark">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-arch-paper p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-arch-secondary mb-4">
            Professional Approach
          </h3>
          <p className="text-arch-dark mb-4">
            With over 5 years of experience in architectural design, I approach
            each project with a focus on sustainability, functionality, and
            aesthetic excellence. My designs are informed by a deep
            understanding of materials, environmental considerations, and client
            needs.
          </p>
          <p className="text-arch-dark">
            I believe architecture should serve both the people who use it and
            the environment it inhabits, creating spaces that are beautiful,
            practical, and responsible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
