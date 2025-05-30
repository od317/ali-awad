// components/ContactSection.tsx
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-arch-primary text-arch-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-arch-secondary mb-12 text-center">
          Contact
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope
                    className="text-arch-secondary mt-1 mr-4"
                    size={20}
                  />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:architect@example.com"
                      className="hover:text-arch-secondary transition-colors"
                    >
                      architect@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone
                    className="text-arch-secondary mt-1 mr-4"
                    size={20}
                  />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="hover:text-arch-secondary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt
                    className="text-arch-secondary mt-1 mr-4"
                    size={20}
                  />
                  <div>
                    <p className="font-medium">Location</p>
                    <p>123 Design Street, Creative City, CC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
