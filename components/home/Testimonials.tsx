import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "BookHaven has the best selection of books I've found online. Their recommendations are always spot on!",
      author: "Sarah J.",
      role: "Avid Reader",
    },
    {
      quote:
        "I love the monthly book box. It's like Christmas morning every time it arrives!",
      author: "Michael T.",
      role: "Subscription Member",
    },
    {
      quote:
        "As a teacher, I appreciate their educational discounts and fast shipping for classroom books.",
      author: "Emily R.",
      role: "Elementary Teacher",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-book-paper">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Readers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <FaQuoteLeft className="text-book-primary text-2xl mb-4" />
            <blockquote className="text-gray-600 italic mb-4">
              {testimonial.quote}
            </blockquote>
            <div className="font-medium">
              <p>{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
