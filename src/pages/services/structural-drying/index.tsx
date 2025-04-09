import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Fan, Droplets, ThermometerSnowflake, Timer, Gauge, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const StructuralDrying = () => {
  const [customerType, setCustomerType] = useState<'homeowner' | 'business' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (833) 324-2818';
  };

  const dryingFeatures = [
    {
      icon: <Fan className="w-6 h-6" />,
      title: "Industrial Air Movers",
      description: "3x more powerful than standard equipment, strategically placed for maximum moisture removal"
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6" />,
      title: "Advanced Dehumidifiers",
      description: "Removes up to 240 pints of water per day - faster than any residential system"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Precision Monitoring",
      description: "Military-grade moisture detection ensures complete drying of hidden water pockets"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "24/7 Active Monitoring",
      description: "Real-time adjustments and tracking prevent secondary damage and mold growth"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Rapid Response",
      description: "Expert team arrives within 60 minutes with industrial equipment"
    },
    {
      number: "02",
      title: "Power Deployment",
      description: "Immediate setup of military-grade drying systems"
    },
    {
      number: "03",
      title: "Active Monitoring",
      description: "24/7 tracking with thermal imaging and moisture sensors"
    },
    {
      number: "04",
      title: "Guaranteed Results",
      description: "Complete structural drying verified by scientific testing"
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
                Available Now - 60 Minute Response
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Professional
                <span className="block text-[#8B2635]">Moisture Extraction & Recovery</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                Stop water damage in its tracks. Our industrial-grade extraction and rapid drying systems prevent mold, protect your property, and restore your space fast. Trusted by 500+ Brooklyn property owners.
              </p>
              
              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now - Available 24/7</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Professional Structural Drying Equipment"
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Military-Grade Equipment</h2>
            <p className="text-lg text-[#44403C]">Powerful industrial systems that outperform standard drying methods</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dryingFeatures.map((feature, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#44403C]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Guaranteed Results in 72 Hours</h2>
            <p className="text-lg text-[#44403C]">Our battle-tested process eliminates water damage fast</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-6xl font-bold text-[#8B2635]/10 absolute -top-4 right-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2 relative z-10">{step.title}</h3>
                <p className="text-[#44403C] relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Setup Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">Why We&apos;re Brooklyn&apos;s #1 Choice</h2>
              <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                Our military-grade equipment and scientific approach removes water 3x faster than standard methods. We prevent mold growth and structural damage by extracting hidden moisture other companies miss.
              </p>
              <ul className="space-y-4">
                {[
                  "Up to 240 pints of water removed per day",
                  "Thermal imaging finds hidden moisture",
                  "24/7 monitoring prevents mold growth",
                  "Guaranteed results in 72 hours"
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
                alt="Equipment Setup"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Get Professional Help Now</h2>
            <p className="text-lg text-[#44403C]">60-minute response • 100% satisfaction guaranteed</p>
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
                      Business Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    >
                      <option value="">Select business type</option>
                      <option value="retail">Retail</option>
                      <option value="office">Office</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Property Size (sq ft) - Approximate
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
                  Brief Description of Situation
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  placeholder="Please describe the water damage situation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
              >
                Submit Request
              </button>

              <p className="text-sm text-[#44403C] text-center">
                For emergencies, call us directly at +1 (833) 324-2818
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructuralDrying;