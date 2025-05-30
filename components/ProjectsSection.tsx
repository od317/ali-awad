// components/ProjectsSection.tsx
import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

type Project = {
  id: number;
  title: string;
  type: string;
  year: string;
  description: any;
  coverImage: string;
  images: string[];
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 4,
      title: "120-bed children's hospital - Qamishli city",
      type: "Residential",
      year: "",
      description:
        "The project aims to provide children with the ability to continue their daily lives, including play areas, study areas, and social and recreational spaces, while enhancing their medical recovery. In short, it aims to create an environment that enhances the child's well-being in the hospital and stimulates the healing process, while paying attention to safety factors. Thus, we give sick children the opportunity to continue their routine life without sudden interruption.",
      coverImage: "/projects/p4/p1.jpg",
      images: [
        "/projects/p4/p1.jpg",
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
        "/projects/p4/p21.jpg",
        "/projects/p4/p22.jpg",
        "/projects/p4/p23.jpg",
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
      coverImage: "/projects/p2/p9.png",
      images: [
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
    {
      id: 5,
      title:
        "Revitalizing Al-Thawra Street into a vital (environmentally, culturally, and socially) central artery in Damascus",
      type: "Cultural",
      year: "",
      description: (
        <>
          1. Environmental Aspect: Increasing green spaces by establishing
          gardens in vacant areas (optimal utilization of unused spaces)
          <br /> 2. Social Aspect: Connecting parks via pedestrian bridges over
          vehicular roads, while incorporating seating areas for social
          interaction and rest <br /> 3. Adding a cultural center to revitalize
          the street culturally
          <br /> 4. Adding an open-air amphitheater opposite the Justice Palace
          and connecting it to the nodal island in front (to enhance pedestrian
          accessibility) <br /> 5. Revitalizing a branch of the Barada River
          near the citadel and establishing an adjacent green berm to serve
          visitors
          <br /> 6.Increasing tree planting to reduce pollution and mitigate
          climate change effects, particularly in Al-Qaramani Park (through
          removing violations/commercial stalls and replacing them with green
          spaces) <br /> 7. Street section redesign featuring dedicated lanes
          for bicycles, public transport, and private vehicles, along with
          sidewalk optimization and urban furniture upgrades
        </>
      ),
      coverImage: "/projects/p5/p20.jpg",
      images: [
        "/projects/p5/p1.jpg",
        "/projects/p5/p2.jpg",
        "/projects/p5/p3.jpg",
        "/projects/p5/p4.jpg",
        "/projects/p5/p5.jpg",
        "/projects/p5/p6.jpg",
        "/projects/p5/p7.jpg",
        "/projects/p5/p8.jpg",
        "/projects/p5/p9.jpg",
        "/projects/p5/p10.jpg",
        "/projects/p5/p11.jpg",
        "/projects/p5/p12.jpg",
        "/projects/p5/p13.jpg",
        "/projects/p5/p14.jpg",
        "/projects/p5/p15.jpg",
        "/projects/p5/p16.jpg",
        "/projects/p5/p17.jpg",
        "/projects/p5/p18.jpg",
        "/projects/p5/p19.jpg",
        "/projects/p5/p20.jpg",
        "/projects/p5/p21.jpg",
        "/projects/p5/p22.jpg",
        "/projects/p5/p23.jpg",
        "/projects/p5/p24.jpg",
        "/projects/p5/p25.jpg",
        "/projects/p5/p26.jpg",
        "/projects/p5/p27.jpg",
        "/projects/p5/p28.jpg",
        "/projects/p5/p29.jpg",
      ],
    },
    {
      id: 6,
      title:
        "Rehabilitation and development of a residential segment in the city of Darayya - a sustainable urban investment vision",
      type: "Cultural",
      year: "",
      description:
        "The project aims to rehabilitate a damaged urban area in the city of Darayya and transform it into a modern residential and investment area based on the principles of sustainable planning and quality of life. The project focuses on achieving a balance between housing needs and economic opportunities within an integrated urban environment.",
      coverImage: "/projects/p6/p15.jpg",
      images: [
        "/projects/p6/p1.png",
        "/projects/p6/p2.png",
        "/projects/p6/p6.png",
        "/projects/p6/p7.png",
        "/projects/p6/p9.png",
        "/projects/p6/p10.png",
        "/projects/p6/p11.png",
        "/projects/p6/p13.jpg",
        "/projects/p6/p14.jpg",
        "/projects/p6/p15.jpg",
        "/projects/p6/p16.jpg",
        "/projects/p6/p17.jpg",
        "/projects/p6/p18.jpg",
        "/projects/p6/p19.jpg",
        "/projects/p6/p20.jpg",
      ],
    },
    {
      id: 7,
      title: "Ministry of Tourism + Tourism Institute",
      type: "Cultural",
      year: "",
      description:
        "The project aims to establish a complex housing the Ministry of Tourism and a specialized institute for tourism education and training. This will serve as a national center for human resources development and support for the development of the tourism sector. The project seeks to raise the efficiency of tourism workers and enhance the quality of tourism services in line with international standards.",
      coverImage: "/projects/p8/p2.jpg",
      images: [
        "/projects/p8/p1.jpg",
        "/projects/p8/p2.jpg",
        "/projects/p8/p3.jpg",
        "/projects/p8/p4.jpg",
        "/projects/p8/p5.jpg",
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
