import { Star } from "lucide-react";
import Card from "./Card";

const Testimonials = () => {
  const renderTestimonials = () => {
    const testimonials = [
      {
        name: "James Harrison",
        role: "Luxury Yacht Owner",
        text: "Riviera Yachts provided an exceptional experience from start to finish. Their attention to detail and professional crew made our Mediterranean voyage truly unforgettable.",
      },
      {
        name: "Sofia Laurent",
        role: "Charter Client",
        text: "The yacht we chartered exceeded all expectations. From the immaculate condition to the five-star service, every moment was pure luxury. Will definitely book again!",
      },
      {
        name: "Alessandro Romano",
        role: "Corporate Event Planner",
        text: "Organized a corporate retreat through Riviera Yachts. The team's expertise in planning and execution made our event a tremendous success. Highly recommended!",
      },
    ];

    return testimonials.map((review, index) => (
      <Card
        key={index}
        className="bg-white/80 backdrop-blur-sm p-8 border-none hover:bg-white hover:shadow-lg transition-all duration-300 group rounded-2xl"
      >
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-slate-600 text-sm md:text-base italic mb-4">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="mt-auto">
          <h3 className="font-serif text-lg">{review.name}</h3>
          <p className="text-black/90 text-sm">{review.role}</p>
        </div>
      </Card>
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">
          Client Testimonials
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Discover why discerning clients trust Riviera Yachts for their luxury
          maritime experiences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {renderTestimonials()}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
