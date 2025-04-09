import React from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "What is included in a luxury yacht charter?",
      answer: "Our luxury yacht charters include a professional crew (captain, chef, stewards), all onboard amenities, water toys and equipment, gourmet meals and beverages, fuel for standard cruising, and berthing at your embarkation/disembarkation ports. Additional costs may include special requests, premium wines, harbor fees at other ports, and special activities."
    },
    {
      question: "How far in advance should I book my charter?",
      answer: "For peak season (July-August) and special events like the Monaco Grand Prix, we recommend booking 6-12 months in advance. For other periods, 3-6 months ahead is advisable to ensure the best yacht selection and allow time for proper trip planning."
    },
    {
      question: "What are the popular destinations from Monaco?",
      answer: "Popular destinations include the French Riviera (Saint-Tropez, Cannes, Antibes), Italian Riviera (Portofino, Cinque Terre), Corsica, Sardinia, and the Amalfi Coast. We can customize itineraries based on your preferences and desired experiences."
    },
    {
      question: "Can you accommodate special dietary requirements?",
      answer: "Absolutely. Our experienced chefs can accommodate all dietary requirements including vegetarian, vegan, gluten-free, kosher, or any specific allergies. We'll discuss your preferences during the planning phase to ensure a perfect culinary experience."
    },
    {
      question: "What is the typical charter duration?",
      answer: "Most charters run for 7 days, typically starting from Saturday to Saturday. However, we can arrange shorter 3-4 day trips or extended voyages depending on your wishes and yacht availability. Each charter is customized to your schedule."
    },
    {
      question: "What activities are available during the charter?",
      answer: "Our yachts come equipped with various water toys including jet skis, seabobs, paddleboards, and snorkeling gear. We can also arrange onshore activities like beach clubs, restaurant reservations, golf outings, spa treatments, and cultural excursions."
    }
  ];

  return (
    <section className="py-24 px-5 bg-white" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-serif lg:tracking-tight text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-lg mt-4 text-slate-600">
              Learn more about our luxury charter experience
            </p>
          </div>
          
          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-slate-200">
              {faqData.map((faq, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none text-slate-900">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRight className="h-5 w-5 text-blue-400" />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;