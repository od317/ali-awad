// components/ProjectsSection.tsx
import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

type Project = {
  id: number;
  title: string;
  type: string;
  year: string;
  description: string;
  coverImage: string;
  images: string[];
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 4,
      title: "Lakeside Retreat",
      type: "Residential",
      year: "2019",
      description:
        "A minimalist retreat designed to maximize connection with the lakeside environment while maintaining privacy and comfort.",
      coverImage: "/projects/p4/p1.jpg",
      images: [
        "/projects/p4/p2.jpg",
        "/projects/p4/p3.jpg",
        "/projects/p4/p4.jpg",
        "/projects/p4/p5.jpg",
        "/projects/p4/p6.jpg",
        "/projects/p4/p7.jpg",
        "/projects/p4/p8.jpg",
        "/projects/p4/p9.jpg",
        "/projects/p4/p10.jpg",
        "/projects/p4/p11.jpg",
        "/projects/p4/p12.jpg",
        "/projects/p4/p13.jpg",
        "/projects/p4/p14.jpg",
        "/projects/p4/p15.jpg",
        "/projects/p4/p16.jpg",
        "/projects/p4/p17.jpg",
        "/projects/p4/p18.jpg",
        "/projects/p4/p19.jpg",
        "/projects/p4/p20.jpg",
      ],
    },
    {
      id: 1,
      title: "Design Academy",
      type: "Residential",
      year: "",
      description:
        "A modern design academy that combines functional simplicity with dynamic composition. Multiple openings and levels allow for visual interaction and flexibility of use, reflecting the spirit of innovation and creativity in a stimulating learning environment.",
      coverImage: "/projects/p1/p1.jpg",
      images: [
        "/projects/p1/p1.jpg",
        "/projects/p1/p2.jpg",
        "/projects/p1/p3.jpg",
        "/projects/p1/p4.jpg",
        "/projects/p1/p5.jpg",
        "/projects/p1/p6.jpg",
        "/projects/p1/p7.jpg",
        "/projects/p1/p8.jpg",
      ],
    },
    {
      id: 2,
      title: "Administrative residential tower",
      type: "Commercial",
      year: "",
      description: `The general site was studied according to the surrounding context in the Marota City area in Damascus and in relation to solar orientation.

The tower's base has an octagonal shape to provide larger and smoother internal circulation areas, along with the addition of an interactive outdoor space covered with a treated glass canopy, featuring an open-close mechanism as needed.

Interactive public spaces, green areas, and water surfaces were provided, along with the inclusion of service roads around the plot to optimally serve all functions within the project.

The tower was formed from four square floor plans, each rotated 45 degrees from the other, giving the tower a fractured form and triangular-shaped façades.

Structural system of the tower: load-bearing core.
Structural system of the podium: ribbed slabs and columns.
Structural system of the basements: hollow-core slabs (hourdi), retaining walls, and columns.`,
      coverImage: "/projects/p2/p1.png",
      images: [
        "/projects/p2/p1.png",
        "/projects/p2/p2.png",
        "/projects/p2/p3.png",
        "/projects/p2/p4.png",
        "/projects/p2/p5.png",
        "/projects/p2/p6.png",
        "/projects/p2/p7.png",
        "/projects/p2/p8.png",
        "/projects/p2/p9.png",
        "/projects/p2/p10.png",
        "/projects/p2/p11.png",
        "/projects/p2/p12.png",
      ],
    },
    {
      id: 3,
      title:
        "Preparation of an executive study for a residential building for an artist.",
      type: "Cultural",
      year: "",
      description:
        "An executive study project for a residential building for an artist, focusing on translating the architectural design into precise construction drawings that consider both aesthetics and functionality. This includes studying the structural aspect in terms of selecting the most appropriate structural system and detailing the load-bearing elements to ensure the building's stability and structural safety.",
      coverImage: "/projects/p3/p1.png",
      images: [
        "/projects/p3/p1.png",
        "/projects/p3/p2.png",
        "/projects/p3/p3.png",
        "/projects/p3/p4.png",
        "/projects/p3/p5.png",
        "/projects/p3/p6.png",
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-arch-primary mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer  overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(project)}
            >
              <div className="relative h-64">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-arch-light">
                      {project.type} • {project.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;
