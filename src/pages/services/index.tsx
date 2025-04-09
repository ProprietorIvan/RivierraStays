import React, { useState, useEffect } from 'react';
import { Check, Phone, Mail, ArrowRight, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Navigation from '../../components/Navigation';

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: "Emergency Water Extraction",
      description: "Rapid water removal services with state-of-the-art equipment for immediate flood response.",
      details: ["Immediate emergency response", "Flood water removal", "Advanced pumping equipment", "Standing water elimination"],
      image: "/photos/homepage/2.jpg",
      url: "/flood-repair"
    },
    {
      title: "Structural Drying & Dehumidification",
      description: "Professional-grade drying solutions to prevent long-term structural damage.",
      details: ["Industrial air movers", "Professional dehumidifiers", "Moisture tracking", "Complete dry-out service"],
      image: "/photos/homepage/3.jpg",
      url: "/services/structural-drying"
    },
    {
      title: "Floor & Carpet Restoration",
      description: "Comprehensive flooring restoration services for all types of water-damaged surfaces.",
      details: ["Hardwood floor repair/replacement", "Carpet cleaning/replacement", "Subfloor repair", "Tile restoration"],
      image: "/photos/homepage/4.jpg",
      url: "/services/flooring"
    },
    {
      title: "Drywall & Paint Services",
      description: "Expert wall restoration and painting services to restore your space.",
      details: ["Water-damaged wall removal", "New drywall installation", "Texture matching", "Complete repainting"],
      image: "/photos/homepage/7.jpg",
      url: "/services/drywall"
    },
    {
      title: "Mold Remediation",
      description: "Professional mold removal and prevention services to ensure a healthy environment.",
      details: ["Professional mold removal", "Anti-microbial treatment", "Air quality testing", "Prevention protocols"],
      image: "/photos/homepage/5.jpg",
      url: "/services/mold"
    },
    {
      title: "Kitchen & Bath Restoration",
      description: "Specialized restoration services for water-damaged kitchens and bathrooms.",
      details: ["Cabinet repair/replacement", "Countertop restoration", "Plumbing inspection/repair", "Fixture replacement"],
      image: "/photos/homepage/6.jpg",
      url: "/services/kitchen-bath"
    }
  ];

  const copyToClipboard = async (text: string, isPhone: boolean) => {
    if (!mounted) return;
    try {
      await navigator.clipboard.writeText(text);
      if (isPhone) {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1917]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#1C1917] py-16">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Brooklyn&apos;s 24/7 Emergency<br />Flood Response Team
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <button
                onClick={() => copyToClipboard("+1 (833) 324-2818", true)}
                className={`${
                  copiedPhone ? 'bg-[#27AE60] scale-95' : 'bg-[#8B2635] hover:bg-[#7A2230]'
                } px-8 py-3 rounded-lg transition-all duration-300 group min-w-[240px]`}
              >
                {copiedPhone ? (
                  <div className="flex items-center justify-center gap-2 text-white">
                    <span>Copied!</span>
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="text-white font-bold">
                    +1 (833) 324-2818
                  </div>
                )}
              </button>
              <button
                onClick={() => copyToClipboard("office@floodbrooklyn.com", false)}
                className={`${
                  copiedEmail ? 'bg-[#27AE60] scale-95' : 'bg-white hover:bg-stone-100'
                } px-8 py-3 rounded-lg transition-all duration-300 min-w-[240px]`}
              >
                {copiedEmail ? (
                  <div className="flex items-center justify-center gap-2 text-white">
                    <span>Copied!</span>
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="text-[#1C1917] font-bold">
                    Email Us
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-video relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917] group-hover:text-[#8B2635] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#44403C] mb-4">{service.description}</p>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedService === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#8B2635] flex-shrink-0 mt-1" />
                        <span className="text-[#44403C]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="text-[#8B2635] hover:text-[#7A2230] transition-colors flex items-center gap-1"
                  >
                    {expandedService === index ? (
                      <>
                        <Minus className="w-4 h-4" />
                        <span>Less Info</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>More Info</span>
                      </>
                    )}
                  </button>
                  
                  <a
                    href={service.url}
                    className="inline-flex items-center gap-1 text-[#8B2635] hover:text-[#7A2230] transition-colors"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;