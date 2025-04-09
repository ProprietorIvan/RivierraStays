import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Paintbrush, Ruler, Clock, CheckCircle2, Shield, Wrench } from 'lucide-react';
import Image from 'next/image';

const DrywallPaintServices = () => {
  const [customerType, setCustomerType] = useState<'residential' | 'commercial' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+17182345678';
  };

  const serviceFeatures = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Restoration",
      description: "Specialized in water damage repair and restoration"
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Quality Materials",
      description: "Using water-resistant and mold-resistant materials"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "Quick assessment and rapid restoration process"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guaranteed Work",
      description: "Full warranty on all restoration services"
    }
  ];

  const serviceTypes = [
    {
      title: "Water Damage Repair",
      points: [
        "Emergency water extraction",
        "Structural drying",
        "Mold prevention",
        "Complete restoration"
      ]
    },
    {
      title: "Drywall Restoration",
      points: [
        "Water-damaged wall removal",
        "Moisture barrier installation",
        "New drywall installation",
        "Perfect finish matching"
      ]
    },
    {
      title: "Painting Services",
      points: [
        "Surface preparation",
        "Water damage sealing",
        "Color matching",
        "Complete repainting"
      ]
    },
    {
      title: "Additional Services",
      points: [
        "Texture matching",
        "Ceiling repair",
        "Baseboard replacement",
        "Trim restoration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
        <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Professional Drywall & Paint Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Expert
                <span className="block text-[#8B2635]">Water Damage Restoration</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                Specialized in restoring water-damaged walls with expert drywall repair and professional painting services. Fast response times and guaranteed results.
              </p>
              
              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Emergency Service</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/7.jpg"
                  alt="Professional Drywall and Painting"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Professional Restoration Services</h2>
            <p className="text-lg text-[#44403C]">Expert water damage repair and drywall restoration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#44403C]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Our Services</h2>
            <p className="text-lg text-[#44403C]">Complete water damage restoration solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1917]">{type.title}</h3>
                <ul className="space-y-3">
                  {type.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B2635]" />
                      <span className="text-[#44403C]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">Guaranteed Results</h2>
              <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                Our experienced team ensures complete restoration of water-damaged walls, returning your space to its pre-damage condition with professional results.
              </p>
              <ul className="space-y-4">
                {[
                  "Complete water damage assessment",
                  "Professional restoration process",
                  "Quality materials and finishes",
                  "Long-lasting results"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B2635]" />
                    <span className="text-[#44403C] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/homepage/3.jpg"
                alt="Water Damage Restoration Results"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Request Service</h2>
            <p className="text-lg text-[#44403C]">Fast response • Professional restoration</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Property Type Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setCustomerType('residential')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === 'residential'
                      ? 'border-[#8B2635] bg-[#8B2635]/5'
                      : 'border-stone-200 hover:border-[#8B2635]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-1 ${
                    customerType === 'residential' ? 'text-[#8B2635]' : 'text-[#1C1917]'
                  }`}>
                    Residential
                  </h3>
                  <p className="text-sm text-[#44403C]">Home restoration</p>
                </button>

                <button
                  onClick={() => setCustomerType('commercial')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === 'commercial'
                      ? 'border-[#8B2635] bg-[#8B2635]/5'
                      : 'border-stone-200 hover:border-[#8B2635]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-1 ${
                    customerType === 'commercial' ? 'text-[#8B2635]' : 'text-[#1C1917]'
                  }`}>
                    Commercial
                  </h3>
                  <p className="text-sm text-[#44403C]">Business property</p>
                </button>
              </div>

              {/* Contact Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1917] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1917] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C1917] mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C1917] mb-2">
                  Service Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  placeholder="Please describe the water damage and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
              >
                Request Service Now
              </button>

              <p className="text-sm text-[#44403C] text-center">
                Fast response • Expert restoration • Guaranteed results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Expert Water Damage Restoration Services
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Professional restoration with guaranteed results
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call For Service Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DrywallPaintServices;