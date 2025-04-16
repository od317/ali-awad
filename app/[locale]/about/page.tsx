// app/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { FaBookOpen, FaHeart, FaAward, FaUsers } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About BookHaven - Our Story & Mission",
  description:
    "Discover the story behind BookHaven - your trusted online bookstore committed to connecting readers with their next favorite book since 2010.",
  keywords: "about BookHaven, online bookstore, our mission, book lovers",
};

export default function AboutPage() {
  return (
    <div className="bg-book-paper dark:bg-book-dark w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-book-primary to-book-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting readers with their next favorite book since 2010
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
    
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-secondary mb-4">
                At BookHaven, we believe in the transformative power of books.
                Our mission is to create a welcoming space where readers of all
                ages can discover stories that inspire, educate, and entertain.
              </p>
              <p className="text-secondary">
                What began as a single bookstore in Seattle has grown into a
                beloved online destination for book lovers worldwide, while
                still maintaining our commitment to personalized service and
                community values.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-book-primary/10 dark:bg-book-dark/50 p-8 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard
              icon={<FaBookOpen className="h-8 w-8" />}
              number="250,000+"
              label="Titles Available"
            />
            <StatCard
              icon={<FaHeart className="h-8 w-8" />}
              number="1M+"
              label="Happy Readers"
            />
            <StatCard
              icon={<FaAward className="h-8 w-8" />}
              number="15+"
              label="Awards Won"
            />
            <StatCard
              icon={<FaUsers className="h-8 w-8" />}
              number="50+"
              label="Team Members"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Curated Selection"
              description="Every book in our store is hand-picked by our team of bibliophiles to ensure quality and diversity."
              icon="📚"
            />
            <ValueCard
              title="Community Focus"
              description="We support local authors, host virtual events, and donate books to schools and libraries."
              icon="🤝"
            />
            <ValueCard
              title="Sustainability"
              description="Eco-friendly packaging and a tree-planting program for every order placed."
              icon="🌱"
            />
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember
              name="Sarah Johnson"
              role="Founder & CEO"
              bio="Former librarian with a passion for connecting people with great books."
              image="/images/team/sarah.jpg"
            />
            <TeamMember
              name="Michael Chen"
              role="Head Buyer"
              bio="Knows every upcoming release and hidden gem in the literary world."
              image="/images/team/michael.jpg"
            />
            <TeamMember
              name="Elena Rodriguez"
              role="Community Manager"
              bio="Organizes our book clubs and author events."
              image="/images/team/elena.jpg"
            />
            <TeamMember
              name="David Kim"
              role="Tech Lead"
              bio="Makes sure your browsing experience is seamless."
              image="/images/team/david.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

// Component for Statistics Cards
function StatCard({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="bg-white dark:bg-book-dark p-6 rounded-lg shadow-sm">
      <div className="text-book-primary mb-2 flex justify-center">{icon}</div>
      <div className="text-2xl font-bold text-primary mb-1">{number}</div>
      <div className="text-secondary">{label}</div>
    </div>
  );
}

// Component for Values Cards
function ValueCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white dark:bg-book-dark p-6 rounded-lg shadow-sm border border-secondary">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
}

// Component for Team Members
function TeamMember({
  name,
  role,
  bio,
  image,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
}) {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-book-primary">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold text-primary">{name}</h3>
      <p className="text-book-secondary mb-2">{role}</p>
      <p className="text-secondary text-sm">{bio}</p>
    </div>
  );
}
