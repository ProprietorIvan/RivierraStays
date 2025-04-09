import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Hammer, Paintbrush, Clock, CheckCircle2, Compass, Home } from 'lucide-react';
import Image from 'next/image';

const KitchenBathRestoration = () => {
  const [customerType, setCustomerType] = useState<'homeowner' | 'business' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (833) 324-2818';
  };

  const serviceFeatures = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Expert Design",
      description: "Professional design consultation for optimal space utilization"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Quality Craftsmanship",
      description: "Master craftsmen with decades of restoration experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Completion",
      description: "Efficient project management for minimal disruption"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Complete Service",
      description: "Full-service restoration from design to final touches"
    }
  ];

  const restorationServices = [
    {
      title: "Kitchen Restoration",
      points: [
        "Cabinet refinishing & repair",
        "Countertop restoration",
        "Tile & backsplash renewal",
        "Appliance integration"
      ]
    },
    {
      title: "Bathroom Revival",
      points: [
        "Tile & grout restoration",
        "Fixture updates",
        "Vanity refinishing",
        "Waterproofing services"
      ]
    },
    {
      title: "Surface Treatments",
      points: [
        "Natural stone restoration",
        "Ceramic tile repair",
        "Countertop refinishing",
        "Custom finishes"
      ]
    },
    {
      title: "Structural Updates",
      points: [
        "Plumbing upgrades",
        "Electrical improvements",
        "Ventilation systems",
        "Storage solutions"
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
                Expert Kitchen & Bath Restoration
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Transform Your
                <span className="block text-[#8B2635]">Kitchen & Bath</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                Revitalize your space with expert restoration services. Our master craftsmen bring new life to your kitchen and bath with precision and care.
              </p>
              
              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/7.jpg"
                  alt="Professional Kitchen and Bath Restoration"
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">The Restoration Difference</h2>
            <p className="text-lg text-[#44403C]">Expert craftsmanship meets modern design</p>
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Comprehensive Services</h2>
            <p className="text-lg text-[#44403C]">Complete restoration solutions for your kitchen and bath</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restorationServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1917]">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, pointIndex) => (
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
              <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">Beautiful Results</h2>
              <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                Our expert restoration team has transformed over 500 kitchens and bathrooms, creating stunning spaces that blend functionality with style.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom design solutions",
                  "Premium materials and finishes",
                  "Expert installation",
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
                src="/photos/homepage/2.jpg"
                alt="Kitchen and Bath Restoration Results"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Transform Your Space</h2>
            <p className="text-lg text-[#44403C]">Professional design • Expert restoration</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Customer Type Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setCustomerType('homeowner')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === 'homeowner'
                      ? 'border-[#8B2635] bg-[#8B2635]/5'
                      : 'border-stone-200 hover:border-[#8B2635]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-1 ${
                    customerType === 'homeowner' ? 'text-[#8B2635]' : 'text-[#1C1917]'
                  }`}>
                    Homeowner
                  </h3>
                  <p className="text-sm text-[#44403C]">Residential property</p>
                </button>

                <button
                  onClick={() => setCustomerType('business')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === 'business'
                      ? 'border-[#8B2635] bg-[#8B2635]/5'
                      : 'border-stone-200 hover:border-[#8B2635]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-1 ${
                    customerType === 'business' ? 'text-[#8B2635]' : 'text-[#1C1917]'
                  }`}>
                    Business
                  </h3>
                  <p className="text-sm text-[#44403C]">Commercial property</p>
                </button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1917] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1917] mb-2">
                    Phone Number *
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
                  Property Address *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  required
                />
              </div>

              {/* Business-specific fields */}
              {customerType === 'business' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Project Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="kitchen">Kitchen Restoration</option>
                      <option value="bathroom">Bathroom Restoration</option>
                      <option value="both">Both Kitchen & Bath</option>
                      <option value="commercial">Commercial Space</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Space Size (sq ft) - Approximate
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#1C1917] mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  placeholder="Tell us about your kitchen or bathroom restoration needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
              >
                Schedule Your Design Consultation
              </button>

              <p className="text-sm text-[#44403C] text-center">
                Expert consultation • Premium materials • Professional installation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transform Your Kitchen & Bath Today
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Professional restoration services with guaranteed craftsmanship.
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call For Expert Service</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default KitchenBathRestoration;