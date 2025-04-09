import React from "react";
import {
  ArrowRight,
  Wine,
  Compass,
  Waves,
  Utensils,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const ComparisonSection = () => {
  const features = [
    {
      title: "Unmatched Luxury",
      description: "Step into a world of opulence",
      details:
        "Experience unparalleled luxury with master suites featuring panoramic views, private balconies, and state-of-the-art entertainment systems. Every detail is crafted for your comfort.",
      icon: Star,
      image:
        "/photos/CHRISTINAO/66919f11c6cc2a1306e76a7b_CHRISTINA-O-aerial-Aft-2022-p-1600.jpg",
      stats: [
        { value: "50m+", label: "YACHT LENGTH" },
        { value: "5", label: "MASTER SUITES" },
      ],
    },
    {
      title: "Exquisite Dining",
      description: "Culinary excellence at sea",
      details:
        "Our world-class chefs create personalized menus featuring the finest ingredients, paired with premium wines from our curated cellar. From intimate dinners to grand celebrations.",
      icon: Utensils,
      image:
        "/photos/CHRISTINAO/6691a5a37796c8b5d1049025_christina-o-bbq-2018.jpg",
      stats: [
        { value: "24/7", label: "PRIVATE CHEF" },
        { value: "350+", label: "WINE SELECTION" },
      ],
    },
    {
      title: "Elite Destinations",
      description: "Discover hidden Mediterranean gems",
      details:
        "Navigate the most prestigious ports and secluded coves of the Mediterranean. From Monaco's glamour to Sardinia's pristine beaches, every destination is extraordinary.",
      icon: Compass,
      image: "/photos/CHRISTINAO/6691a5df8ef063ef7180c36a_unnamed-4.jpg",
      stats: [
        { value: "15+", label: "DESTINATIONS" },
        { value: "100%", label: "EXCLUSIVE ACCESS" },
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Riviera Yachts Charter Services",
    description:
      "Luxury yacht charter services in Monaco and the French Riviera",
    provider: {
      "@type": "Organization",
      name: "Riviera Yachts",
      image: "/logo.png",
    },
    areaServed: {
      "@type": "Place",
      name: "Monaco and French Riviera",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yacht Charter Services",
      itemListElement: features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  };

  return (
    <>
      <Head>
        <title>Luxury Yacht Charter Services in Monaco | Riviera Yachts</title>
        <meta
          name="description"
          content="Experience the ultimate in maritime luxury with Riviera Yachts. Premium yacht charters featuring world-class amenities, gourmet dining, and exclusive Mediterranean adventures."
        />
        <meta
          name="keywords"
          content="luxury yacht charter, Monaco yacht rental, Mediterranean yacht cruise, private yacht charter, luxury boat rental Monaco"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900">
              Experience Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the epitome of luxury yachting with our meticulously
              curated experiences
            </p>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                variants={fadeInUp}
                className="relative"
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div
                    className={`space-y-8 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 text-black font-medium bg-slate-100 px-4 py-2 rounded-full shadow-sm">
                      <feature.icon className="w-6 h-6" />
                      <span className="text-lg tracking-wide">
                        {feature.description}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-serif text-slate-900 drop-shadow-sm">
                      {feature.title}
                    </h3>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      {feature.details}
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-serif text-slate-900 mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm tracking-wider text-slate-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-black hover:text-slate-700 transition-colors group font-medium"
                    >
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div
                    className={`relative h-[600px] rounded-2xl overflow-hidden group ${
                      index % 2 === 0 ? "md:order-last" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="mt-24 text-center"
          >
            <Link
              href="/fleet"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-slate-900 transition-colors group shadow-lg shadow-slate-200"
            >
              <span className="font-medium">View Our Fleet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ComparisonSection;
