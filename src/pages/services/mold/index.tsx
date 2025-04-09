import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Shield, Search, Clock, CheckCircle2, Microscope, SprayCanIcon } from 'lucide-react';
import Image from 'next/image';

const MoldRemediation = () => {
  const [customerType, setCustomerType] = useState<'homeowner' | 'business' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (833) 324-2818';
  };

  const serviceFeatures = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Advanced Detection",
      description: "State-of-the-art testing equipment identifies all mold species and moisture sources"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Experts",
      description: "IICRC certified technicians with specialized mold remediation training"
    },
    {
      icon: <SprayCanIcon className="w-6 h-6" />,
      title: "Safe Treatment",
      description: "EPA-approved solutions and contained remediation processes"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Prevention Focus",
      description: "Comprehensive moisture control to prevent future growth"
    }
  ];

  const remediationServices = [
    {
      title: "Inspection & Testing",
      points: [
        "Advanced moisture detection",
        "Air quality testing",
        "Hidden mold detection",
        "Laboratory analysis"
      ]
    },
    {
      title: "Mold Removal",
      points: [
        "HEPA air filtration",
        "Contamination containment",
        "Safe mold elimination",
        "Surface treatment"
      ]
    },
    {
      title: "Restoration",
      points: [
        "Structural repair",
        "Material replacement",
        "Dehumidification",
        "Preventive treatments"
      ]
    },
    {
      title: "Prevention",
      points: [
        "Moisture source elimination",
        "Ventilation improvement",
        "Waterproofing services",
        "Ongoing protection"
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
                Certified Mold Remediation Specialists
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Professional
                <span className="block text-[#8B2635]">Mold Remediation</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                Complete mold elimination and prevention by certified experts. We detect, remove, and prevent mold growth while ensuring your safety and peace of mind.
              </p>
              
              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Expert Help Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/5.jpg"
                  alt="Professional Mold Remediation"
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Expert Mold Solutions</h2>
            <p className="text-lg text-[#44403C]">Advanced technology and certified expertise for complete mold elimination</p>
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Complete Remediation Process</h2>
            <p className="text-lg text-[#44403C]">Thorough mold elimination and prevention solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remediationServices.map((service, index) => (
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
              <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">Guaranteed Results</h2>
              <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                Our certified remediation experts have successfully treated over 1,000 properties. We guarantee complete mold elimination and provide preventive solutions for lasting protection.
              </p>
              <ul className="space-y-4">
                {[
                  "Certified mold remediation experts",
                  "EPA-approved treatment methods",
                  "Complete moisture control",
                  "Long-term prevention solutions"
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
                src="/photos/homepage/1.jpg"
                alt="Mold Remediation Results"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Get Expert Help Today</h2>
            <p className="text-lg text-[#44403C]">Professional assessment • Certified remediation</p>
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
                  <p className="text-sm text-[#44403C]">Residential properties</p>
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
                      Building Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    >
                      <option value="">Select building type</option>
                      <option value="office">Office Building</option>
                      <option value="retail">Retail Space</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="apartment">Apartment Complex</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Affected Area (sq ft) - Approximate
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
                  Describe the Mold Issue
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  placeholder="Tell us about the mold problem you're experiencing..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
              >
                Schedule Your Expert Assessment
              </button>

              <p className="text-sm text-[#44403C] text-center">
                Professional inspection • Certified remediation • Guaranteed results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Do not Let Mold Compromise Your Health
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Professional mold remediation with guaranteed complete elimination.
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

export default MoldRemediation;