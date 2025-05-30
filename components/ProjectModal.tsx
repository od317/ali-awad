// components/ProjectModal.tsx
import React from "react";
import Image from "next/image";

type ProjectModalProps = {
  project: {
    title: string;
    type: string;
    year: string;
    description: string;
    images: string[];
  };
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b z-10">
          <h3 className="text-2xl font-bold text-arch-primary">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="text-arch-dark hover:text-arch-secondary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-arch-secondary text-arch-dark px-3 py-1 rounded-full text-sm">
                {project.type}
              </span>
              <span className="bg-arch-accent text-white px-3 py-1 rounded-full text-sm">
                {project.year}
              </span>
            </div>
            <div className="text-arch-dark">
              {typeof project.description === "string" ? (
                <p>{project.description}</p>
              ) : (
                project.description
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  priority={index < 3} // Only prioritize first few images
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
