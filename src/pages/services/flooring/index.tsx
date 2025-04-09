import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Hammer, Sparkles, Timer, CheckCircle2, Bot, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const FloorRestoration = () => {
  const [customerType, setCustomerType] = useState<'homeowner' | 'business' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (833) 324-2818';
  };

  const restorationFeatures = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Advanced Technology",
      description: "AI-powered inspection ensures complete restoration of every damaged area"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Expert Craftsmanship",
      description: "Meticulous attention to detail in every restoration project"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Fast Response",
      description: "Complete restoration within 48 hours"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "5-Year Guarantee",
      description: "Industry-leading warranty on all restoration work"
    }
  ];

  const floorTypes = [
    {
      title: "Hardwood Floors",
      points: [
        "Complete water extraction",
        "Expert sanding & refinishing",
        "Cupping & buckling restoration",
        "Perfect color matching"
      ]
    },
    {
      title: "Carpet & Padding",
      points: [
        "Deep hot water extraction",
        "Complete odor elimination",
        "Fresh padding installation",
        "Thorough sanitization"
      ]
    },
    {
      title: "Tile & Grout",
      points: [
        "Professional grout restoration",
        "Seamless tile replacement",
        "Advanced cleaning process",
        "Anti-microbial protection"
      ]
    },
    {
      title: "Subfloor Systems",
      points: [
        "Complete structural drying",
        "Comprehensive mold prevention",
        "Detailed support inspection",
        "Total system restoration"
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
                Complete Restoration Within 48 Hours
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Master
                <span className="block text-[#8B2635]">Floor & Carpet Restoration</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                When disaster strikes, we bring your floors back to life. Our expert team combines advanced technology with masterful craftsmanship to restore your floors to their original beauty - or better.
              </p>
              
              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Start Your Restoration Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/3.jpg"
                  alt="Professional Floor Restoration"
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">The Master Restoration Difference</h2>
            <p className="text-lg text-[#44403C]">Unmatched expertise in bringing floors back to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restorationFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Complete Floor Restoration</h2>
            <p className="text-lg text-[#44403C]">Expert restoration for all floor types</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {floorTypes.map((type, index) => (
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
              <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">Exceptional Results</h2>
              <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                With over 500 successful restorations and a 98% success rate, our expert team delivers results that exceed expectations. We don not just restore - we perfect.
              </p>
              <ul className="space-y-4">
                {[
                  "Complete restoration in 48 hours",
                  "5-year comprehensive guarantee",
                  "Advanced sanitization included",
                  "Perfect color and texture matching"
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
                src="/photos/homepage/4.jpg"
                alt="Floor Restoration Results"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Restore Your Floors to Perfection</h2>
            <p className="text-lg text-[#44403C]">48-hour expert restoration • Guaranteed results</p>
          </div>

          {/* Rest of the form section remains the same */}
          
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
                  <p className="text-sm text-[#44403C]">Residential floors</p>
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
                      Floor Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    >
                      <option value="">Select floor type</option>
                      <option value="hardwood">Hardwood</option>
                      <option value="carpet">Carpet</option>
                      <option value="tile">Tile</option>
                      <option value="mixed">Mixed Surfaces</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Floor Area (sq ft) - Approximate
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
                  Describe the Damage
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  placeholder="Tell us about the current condition of your floors..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
              >
                Schedule Your Expert Restoration
              </button>

              <p className="text-sm text-[#44403C] text-center">
                Professional assessment • 48-hour restoration service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Expert Floor Restoration When You Need It Most
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Return your floors to their original beauty - or better. Professional results guaranteed.
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call For Expert Service Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FloorRestoration;