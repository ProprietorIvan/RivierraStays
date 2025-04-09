import React from "react";
import {
  Calendar,
  Ship,
  Compass,
  Utensils,
  Star,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const StepsSection = () => {
  const metrics = [
    { value: "15+", label: "LUXURY YACHTS" },
    { value: "100%", label: "SATISFACTION" },
    { value: "24/7", label: "CONCIERGE" },
    { value: "10+", label: "DESTINATIONS" },
  ];

  const steps = [
    {
      icon: Calendar,
      phase: "PLANNING",
      title: "Initial Consultation",
      description: "Begin your journey with a personalized consultation",
      details: [
        "Define your perfect yacht experience",
        "Select ideal dates and destinations",
        "Discuss special requirements",
        "Review preliminary budget",
      ],
    },
    {
      icon: Ship,
      phase: "SELECTION",
      title: "Choose Your Yacht",
      description: "Find your perfect vessel from our elite fleet",
      details: [
        "Virtual yacht tours available",
        "Review crew profiles",
        "Explore yacht amenities",
        "Confirm availability",
      ],
    },
    {
      icon: MapPin,
      phase: "ITINERARY",
      title: "Plan Your Route",
      description: "Craft your Mediterranean adventure",
      details: [
        "Select dream destinations",
        "Plan port visits",
        "Arrange special activities",
        "Consider seasonal highlights",
      ],
    },
    {
      icon: Utensils,
      phase: "PREFERENCES",
      title: "Customize Experience",
      description: "Tailor every aspect to your desires",
      details: [
        "Design your menu",
        "Select fine wines",
        "Choose entertainment options",
        "Plan special occasions",
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-slate-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-slate-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Metrics Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-serif text-slate-900 mb-2"
              >
                {metric.value}
              </motion.div>
              <div className="text-sm tracking-wider text-slate-500">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Steps Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900">
            Your Journey Begins Here
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience a seamless process from initial consultation to your
            unforgettable voyage
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-serif text-black">
                      {index + 1}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm font-medium text-black tracking-wider bg-slate-100 inline-block px-3 py-1 rounded-full">
                      {step.phase}
                    </div>
                    <h3 className="text-xl font-serif text-slate-900 drop-shadow-sm">
                      {step.title}
                    </h3>
                    <p className="text-slate-700">{step.description}</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 text-black flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-slate-900 transition-colors group shadow-lg shadow-slate-200"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
