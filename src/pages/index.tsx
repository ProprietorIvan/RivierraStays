import React from "react";
import {
  ArrowRight,
  Star,
  MessageSquare,
  Users,
  Bed,
  Clock,
  ChevronRight,
  MapPin,
  Compass,
  Wine,
  Utensils,
  Calendar,
  Award,
  Shield,
  Coffee,
  Home as HomeIcon,
  Building,
  Key,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation("common");

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Riviera Stays",
    description: "Luxury short-term rentals in Monaco and the French Riviera",
    url: "https://riviera-stays.com",
    logo: "https://riviera-stays.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monaco",
      addressCountry: "MC",
    },
    sameAs: [
      "https://www.facebook.com/rivierastays",
      "https://www.instagram.com/rivierastays",
      "https://twitter.com/rivierastays",
    ],
    offers: {
      "@type": "Offer",
      description: "Luxury short-term rentals in Monaco and the French Riviera",
      areaServed: "Monaco and French Riviera",
    },
  };

  const featuredProperties = [
    {
      name: "MONACO HARBOUR - LUXURY FLAT",
      image: "/photos/homepage/apartment2/004-photopetit-140323-1679310750.jpg",
      guests: 10,
      bedrooms: 5,
      description:
        "Located on the port of Monaco in the &apos;Panorama&apos; residence with panoramic views of the sea, port, and Formula 1 Grand Prix.",
      location: "Monaco Port",
    },
    {
      name: "BEVERLY PALACE - RENOVATED FAMILY FLAT",
      image: "/photos/homepage/apartment1/terrasse-1733152883.jpg",
      guests: 6,
      bedrooms: 3,
      description:
        "Located in the Moneghetti residential area, this tastefully renovated family flat offers beautiful views over the town and the Rock.",
      location: "Moneghetti, Monaco",
    },
    {
      name: "FONTVIEILLE - CONTEMPORARY FLAT, SEA VIEW",
      image: "/photos/homepage/apartment3/chambre-2-1734108955.jpg",
      guests: 2,
      bedrooms: 1,
      description:
        "This contemporary, fully-renovated apartment in the &apos;EDEN STAR&apos; residence boasts superb views of the sea and the Rock.",
      location: "Fontvieille, Monaco",
    },
  ];

  const testimonials = [
    {
      quote:
        "Riviera Stays provided an exceptional experience from start to finish. Their attention to detail and professional service made our stay in Monaco truly unforgettable.",
      author: "James Harrison",
      title: "Luxury Property Renter",
    },
    {
      quote:
        "The apartment we rented exceeded all expectations. From the immaculate condition to the five-star service, every moment was pure luxury. Will definitely book again!",
      author: "Sofia Laurent",
      title: "Repeat Client",
    },
    {
      quote:
        "Organized a corporate retreat through Riviera Stays. The team's expertise in planning and execution made our event a tremendous success. Highly recommended!",
      author: "Alessandro Romano",
      title: "Corporate Event Planner",
    },
  ];

  const faqItems = [
    {
      question: "What is included in a luxury rental?",
      answer:
        "Our luxury rentals typically include premium accommodations, high-end amenities, concierge services, and welcome packages. Additional services such as daily cleaning, private chef, and chauffeur can be arranged upon request.",
    },
    {
      question: "How far in advance should I book my stay?",
      answer:
        "For peak season (May-August, especially during Monaco Grand Prix and Cannes Film Festival), we recommend booking 6-12 months in advance. For other periods, 3-6 months is usually sufficient to secure your preferred property and dates.",
    },
    {
      question: "What are the popular areas to stay in Monaco?",
      answer:
        "Popular areas include Monte Carlo (known for luxury and the famous casino), Larvotto (with beautiful beaches), Fontvieille (modern and quiet), and La Condamine (vibrant with markets and the port area).",
    },
    {
      question: "Can you accommodate special requests?",
      answer:
        "Absolutely. Our concierge service can arrange everything from private chef services, grocery delivery, special dietary requirements, to childcare services and exclusive experiences tailored to your preferences.",
    },
    {
      question: "What is the typical rental duration?",
      answer:
        "Our minimum stay is typically 3 nights, but we recommend at least 7 days to fully experience Monaco and the French Riviera. We also offer monthly rentals for those looking for extended stays.",
    },
    {
      question: "What activities and experiences can you arrange?",
      answer:
        "We can arrange a wide variety of experiences, from yacht charters and helicopter tours to restaurant reservations at exclusive venues, tickets to events like the Grand Prix, private guided tours, and wellness services in the comfort of your rental property.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          {t("home.hero_title")} | {t("site_name")}
        </title>
        <meta
          name="description"
          content={`${t("home.hero_subtitle")} ${t("site_name")}.`}
        />
        <meta
          name="keywords"
          content="luxury rentals, Monaco apartments, French Riviera villas, short-term rental, premium accommodation, vacation rental"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content={`${t("home.hero_title")} | ${t("site_name")}`}
        />
        <meta
          property="og:description"
          content={`${t("home.hero_subtitle")} ${t("site_name")}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riviera-stays.com" />
        <meta
          property="og:image"
          content="https://riviera-stays.com/og-image.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${t("home.hero_title")} | ${t("site_name")}`}
        />
        <meta name="twitter:description" content={t("home.hero_subtitle")} />
        <meta
          name="twitter:image"
          content="https://riviera-stays.com/twitter-image.jpg"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={true} />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          {/* Background Image with overlay (replacing video) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/photos/homepage/apartment2/004-photopetit-140323-1679310750.jpg"
              alt="Luxury property background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                {t("home.hero_title")}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl">
                {t("home.hero_subtitle")}
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
              >
                <span>{t("home.cta_button")}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                {t("home.featured_title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("home.featured_subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {featuredProperties.map((property, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm">
                        {property.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3">
                      {property.name}
                    </h3>

                    <div className="flex flex-wrap gap-6 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Users size={18} className="mr-2" />
                        <span>
                          {property.guests} {t("properties.guests")}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bed size={18} className="mr-2" />
                        <span>
                          {property.bedrooms} {t("properties.beds")}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {property.description}
                    </p>

                    <Link
                      href="/properties"
                      className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium"
                    >
                      {t("properties.view_details")}
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
              >
                <span>{t("home.view_all")}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Why Choose Riviera Stays
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a personalized approach to luxury short-term rentals,
                ensuring your stay in Monaco and the French Riviera is nothing
                short of exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  Handpicked Properties
                </h3>
                <p className="text-gray-600">
                  Our properties are carefully selected to meet the highest
                  standards of luxury, comfort, and location, ensuring an
                  exceptional experience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  Personalized Concierge
                </h3>
                <p className="text-gray-600">
                  Our dedicated concierge team is available to handle all your
                  requests, from restaurant reservations to organizing exclusive
                  experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Key className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  Seamless Experience
                </h3>
                <p className="text-gray-600">
                  From booking to check-out, we ensure a smooth and hassle-free
                  experience, allowing you to focus on enjoying your time in the
                  French Riviera.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">Prime Locations</h3>
                <p className="text-gray-600">
                  Our properties are situated in the most desirable locations,
                  offering easy access to the region&apos;s finest attractions,
                  dining, and shopping.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">Flexible Stays</h3>
                <p className="text-gray-600">
                  Whether you need a short-term rental for a weekend getaway, a
                  business trip, or an extended vacation, we have options to
                  suit your schedule.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  Multilingual Support
                </h3>
                <p className="text-gray-600">
                  Our team speaks multiple languages, ensuring clear
                  communication and assistance for international clients
                  throughout their stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read about the experiences of our satisfied clients who have
                enjoyed our luxury rental properties and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
                  <div className="mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-light mb-6 tracking-tight">
              Ready to Experience Luxury Living?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Contact us today to book your luxury short-term rental in Monaco
              or the French Riviera. Our team is ready to help you find the
              perfect property for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
              >
                <span>Contact Us</span>
              </Link>
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-base font-medium"
              >
                <span>Browse Properties</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our luxury rental
                properties and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-medium mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6">
                Have more questions? We&apos;re here to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
              >
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-light mb-4 tracking-tight">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Subscribe to our newsletter for exclusive offers, new property
              listings, and insider tips on experiencing the best of Monaco and
              the French Riviera.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default Home;
