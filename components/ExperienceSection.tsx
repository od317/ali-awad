// components/ExperienceSection.tsx
import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Modern House Company | 2024 - 2025 ",
      position: "Site Engineer",
      duration: "2024 - 2025",
      responsibilities: [
        "Supervised residential project execution ",
        "Monitored material quality and specification compliance",
        "Coordinated between work teams and contractors",
      ],
    },
    {
      company: "Abdullah Al-Akoub Office",
      position: "Architectural Assistant (Internship)",
      duration: "2023 - 2024",
      responsibilities: [
        "repared executive drawings using Revit and AutoCAD",
        "Assisted in preparing technical reports",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-arch-paper">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-arch-primary mb-12 text-center">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-arch-secondary transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 md:mb-16 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 p-6">
                <div
                  className={`bg-white p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-arch-secondary">
                    {exp.company}
                  </h3>
                  <p className="text-arch-accent mb-2">{exp.position}</p>
                  <p className="text-arch-dark font-medium mb-4">
                    {exp.duration}
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-arch-dark">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
