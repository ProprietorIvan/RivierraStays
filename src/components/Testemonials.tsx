import { Star } from "lucide-react";
import Card from "./Card";
import Image from "next/image";

const Testimonials = () => {
  const renderTestimonials = () => {
    const testimonials = [
      {
        src: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "James Harrison",
        role: "Luxury Yacht Owner",
        text: "Riviera Yachts provided an exceptional experience from start to finish. Their attention to detail and professional crew made our Mediterranean voyage truly unforgettable.",
      },
      {
        src: "https://randomuser.me/api/portraits/women/42.jpg",
        name: "Sofia Laurent",
        role: "Charter Client",
        text: "The yacht we chartered exceeded all expectations. From the immaculate condition to the five-star service, every moment was pure luxury. Will definitely book again!",
      },
      {
        src: "https://randomuser.me/api/portraits/men/45.jpg",
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
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16">
            <Image
              src={review.src}
              alt={`${review.name}'s testimonial`}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="font-serif text-lg">{review.name}</h3>
            <p className="text-blue-200/90 text-sm">{review.role}</p>
          </div>
        </div>
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-slate-600 text-sm md:text-base italic">
          {review.text}
        </p>
      </Card>
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Discover why discerning clients choose Riviera Yachts for their luxury
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
