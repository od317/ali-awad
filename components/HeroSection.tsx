// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-arch-paper pt-20"
    >
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-arch-primary mb-4">
            Ali Ammar Awad
          </h1>
          <h2 className="text-2xl md:text-3xl text-arch-accent mb-8">
            Licensed Architecture Engineer
          </h2>
          <p className="text-lg text-arch-dark mb-8 max-w-lg">
            Architect and site engineer specialized in executive design and
            project management, combining field supervision experience with
            advanced digital design skills. Seeking to apply my expertise in a
            work environment that integrates architectural creativity with
            executive efficiency.
          </p>
          <button className="bg-arch-secondary hover:bg-arch-secondary-dark text-arch-dark font-bold py-3 px-6 rounded transition-colors duration-300">
            View My Work
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-arch-secondary">
            <Image
              src="/architect-profile.jpg" // Replace with your image path
              alt="Architect Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
