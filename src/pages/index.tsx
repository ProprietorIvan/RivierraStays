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
  Ship,
  Calendar,
  Award,
  Shield,
  Coffee,
  Anchor,
  ChevronDown,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Riviera Yachts",
    description:
      "Luxury yacht charter services in Monaco and the French Riviera",
    url: "https://rivierayachts.com",
    logo: "https://rivierayachts.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monaco",
      addressCountry: "MC",
    },
    sameAs: [
      "https://www.facebook.com/rivierayachts",
      "https://www.instagram.com/rivierayachts",
      "https://twitter.com/rivierayachts",
    ],
    offers: {
      "@type": "Offer",
      description: "Luxury yacht charters in the Mediterranean",
      areaServed: "Mediterranean Sea",
    },
  };

  const featuredYachts = [
    {
      name: "CHRISTINA O",
      image: "/photos/CHRISTINAO/6691a5df8ef063ef7180c36a_unnamed-4.jpg",
      guests: 34,
      cabins: 18,
      description:
        "An iconic superyacht with a rich history, offering unmatched luxury and comfort for the most discerning charterers.",
    },
    {
      name: "ST DAVID",
      image:
        "/photos/StDavid/66929739be99ed26097803c9_DSC_8798.jpg.pagespeed.ce_.8zwqRklk0t-2-2048x1365-p-1600.jpg",
      guests: 12,
      cabins: 6,
      description:
        "A masterpiece of Italian craftsmanship with elegant exterior lines and an opulent Andrew Winch-designed interior.",
    },
    {
      name: "MOONRAKER",
      image:
        "/photos/moon/1189c760-0394-11ef-86f6-1d78f30f3411-9081045_20231009135149856_1_XLARGE.webp",
      guests: 10,
      cabins: 5,
      description:
        "A sleek and sporty superyacht with impressive speed and striking design, offering the perfect blend of performance and luxury.",
    },
  ];

  const dayCharters = [
    {
      name: "SHADOW 900",
      image: "/photos/Shadow900/000001.jpg",
      guests: 12,
      cabins: 1,
      description:
        "The SHADOW 900 by Fjord is a statement of modern luxury and performance. Perfect for stylish day cruising along the Mediterranean coast.",
    },
    {
      name: "VanDutch 40",
      image: "/photos/VanDutch40 /000001.jpeg",
      guests: 10,
      cabins: 1,
      description:
        "The VanDutch 40 is a masterpiece of minimalist design with sleek lines and exceptional performance. Ideal for sophisticated day cruising.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Riviera Yachts provided an exceptional experience from start to finish. Their attention to detail and professional crew made our Mediterranean voyage truly unforgettable.",
      author: "James Harrison",
      title: "Luxury Yacht Owner",
    },
    {
      quote:
        "The yacht we chartered exceeded all expectations. From the immaculate condition to the five-star service, every moment was pure luxury. Will definitely book again!",
      author: "Sofia Laurent",
      title: "Charter Client",
    },
    {
      quote:
        "Organized a corporate retreat through Riviera Yachts. The team's expertise in planning and execution made our event a tremendous success. Highly recommended!",
      author: "Alessandro Romano",
      title: "Corporate Event Planner",
    },
  ];

  const faqItems = [
    {
      question: "What is included in a luxury yacht charter?",
      answer:
        "Our luxury yacht charters typically include the yacht, professional crew, insurance, and all onboard amenities. Additional costs may include fuel, food and beverages, dockage fees, and any special requests.",
    },
    {
      question: "How far in advance should I book my charter?",
      answer:
        "For peak season (July-August), we recommend booking 6-12 months in advance. For other periods, 3-6 months is usually sufficient to secure your preferred yacht and dates.",
    },
    {
      question: "What are the popular destinations from Monaco?",
      answer:
        "Popular destinations include the French Riviera (Saint-Tropez, Cannes, Nice), Italian Riviera (Portofino, Cinque Terre), Corsica, Sardinia, and the Balearic Islands (Ibiza, Mallorca).",
    },
    {
      question: "Can you accommodate special dietary requirements?",
      answer:
        "Absolutely. Our chefs are experienced in catering to all dietary requirements, from allergies and intolerances to preferences such as vegan, vegetarian, kosher, or halal meals.",
    },
    {
      question: "What is the typical charter duration?",
      answer:
        "Most of our charters run for 7 days, but we offer flexibility from 3-day weekend charters to extended voyages lasting several weeks or even months.",
    },
    {
      question: "What activities are available during the charter?",
      answer:
        "Our yachts are equipped with a variety of water toys and equipment, including jet skis, paddleboards, snorkeling gear, and more. We can also arrange onshore activities, from restaurant reservations to exclusive excursions.",
    },
  ];

  return (
    <>
      <Head>
        <title>Luxury Yacht Charters in Monaco | Riviera Yachts</title>
        <meta
          name="description"
          content="Experience the ultimate in luxury yacht charters with Riviera Yachts. Discover the Mediterranean's most exclusive destinations aboard our prestigious fleet."
        />
        <meta
          name="keywords"
          content="luxury yacht charter, Monaco yacht rental, Mediterranean yacht charter, private yacht hire, luxury boat rental"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Luxury Yacht Charters in Monaco | Riviera Yachts"
        />
        <meta
          property="og:description"
          content="Experience the ultimate in luxury yacht charters with Riviera Yachts. Discover the Mediterranean's most exclusive destinations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rivierayachts.com" />
        <meta
          property="og:image"
          content="https://rivierayachts.com/og-image.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Luxury Yacht Charters in Monaco | Riviera Yachts"
        />
        <meta
          name="twitter:description"
          content="Experience the ultimate in luxury yacht charters with Riviera Yachts."
        />
        <meta
          name="twitter:image"
          content="https://rivierayachts.com/twitter-image.jpg"
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
          {/* Background Video with overlay */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            >
              <source src="/photos/homepage/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-white leading-tight">
                Experience the Ultimate in Luxury Yacht Charters
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-10 font-light leading-relaxed">
                Discover the Mediterranean&apos;s most exclusive destinations
                aboard our prestigious fleet of luxury yachts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/fleet"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
                >
                  <span>Explore Our Fleet</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Compass className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  Exclusive Destinations
                </h3>
                <p className="text-gray-600 font-light">
                  Experience the finest ports and hidden gems of the
                  Mediterranean.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-medium mb-3">Professional Crew</h3>
                <p className="text-gray-600 font-light">
                  Expert captains and attentive staff at your service.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-medium mb-3">Luxury Experience</h3>
                <p className="text-gray-600 font-light">
                  Unparalleled comfort and service on every journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Excellence Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Experience Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Discover the epitome of luxury yachting with our meticulously
                curated experiences
              </p>
            </div>

            {/* Luxury Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/photos/CHRISTINAO/66919f11c6cc2a1306e76a7b_CHRISTINA-O-aerial-Aft-2022-p-1600.jpg"
                  alt="Luxury Suite"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-gray-500">
                  Step into a world of opulence
                </h3>
                <h4 className="text-3xl font-medium mb-6">Unmatched Luxury</h4>
                <p className="text-gray-600 mb-8 text-lg font-light">
                  Experience unparalleled luxury with master suites featuring
                  panoramic views, private balconies, and state-of-the-art
                  entertainment systems. Every detail is crafted for your
                  comfort.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-4xl font-light text-gray-900 mb-1">
                      50m+
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      Yacht Length
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-light text-gray-900 mb-1">
                      5
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      Master Suites
                    </span>
                  </div>
                </div>

                <Link
                  href="/fleet"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Dining Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-light mb-2 text-gray-500">
                  Culinary excellence at sea
                </h3>
                <h4 className="text-3xl font-medium mb-6">Exquisite Dining</h4>
                <p className="text-gray-600 mb-8 text-lg font-light">
                  Our world-class chefs create personalized menus featuring the
                  finest ingredients, paired with premium wines from our curated
                  cellar. From intimate dinners to grand celebrations.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-light text-gray-900 mb-1">
                      24/7
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      Private Chef
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-light text-gray-900 mb-1">
                      350+
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      Wine Selection
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/photos/CHRISTINAO/6691a5a37796c8b5d1049025_christina-o-bbq-2018.jpg"
                  alt="Fine Dining"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Destinations Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/photos/CHRISTINAO/6691a5df8ef063ef7180c36a_unnamed-4.jpg"
                  alt="Elite Destinations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-gray-500">
                  Discover hidden Mediterranean gems
                </h3>
                <h4 className="text-3xl font-medium mb-6">
                  Elite Destinations
                </h4>
                <p className="text-gray-600 mb-8 text-lg font-light">
                  Navigate the most prestigious ports and secluded coves of the
                  Mediterranean. From Monaco&apos;s glamour to Sardinia&apos;s
                  pristine beaches, every destination is extraordinary.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-light text-gray-900 mb-1">
                      15+
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      Destinations
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-light text-gray-900 mb-1">
                      100%
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      Exclusive Access
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Yachts Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                View Our Fleet
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-8 mb-12">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-light text-gray-900 mb-1">
                    15+
                  </span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    Luxury Yachts
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-light text-gray-900 mb-1">
                    100%
                  </span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    Satisfaction
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-light text-gray-900 mb-1">
                    24/7
                  </span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    Concierge
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-light text-gray-900 mb-1">
                    10+
                  </span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    Destinations
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredYachts.map((yacht, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <Link href="/fleet" className="block">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={yacht.image}
                        alt={yacht.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-light mb-2">{yacht.name}</h3>
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          <span>{yacht.guests} Guests</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4" />
                          <span>{yacht.cabins} Cabins</span>
                        </div>
                      </div>
                      <p className="text-gray-600 font-light text-sm mb-4">
                        {yacht.description}
                      </p>
                      <div className="flex items-center text-gray-900 font-medium text-sm">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
              >
                <span>View All Yachts</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Day Charter Boats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Day Charter Experiences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Explore the Mediterranean coast with our premium day charter
                vessels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {dayCharters.map((yacht, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <Link href="/fleet" className="block">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={yacht.image}
                        alt={yacht.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-light mb-3">{yacht.name}</h3>
                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{yacht.guests} Guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ship className="w-4 h-4" />
                          <span>Day Charter</span>
                        </div>
                      </div>
                      <p className="text-gray-600 font-light text-base mb-6">
                        {yacht.description}
                      </p>
                      <div className="flex items-center text-gray-900 font-medium">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
              >
                <span>Discover Our Day Charters</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Journey Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Your Journey Begins Here
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Experience a seamless process from initial consultation to your
                unforgettable voyage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-gray-900">
                  Planning
                </h3>
                <h4 className="text-xl font-medium mb-4 text-gray-800">
                  Initial Consultation
                </h4>
                <p className="text-gray-600 mb-6 font-light">
                  Begin your journey with a personalized consultation
                </p>
                <ul className="text-gray-600 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Define your perfect yacht experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Select ideal dates and destinations
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Discuss special requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Review preliminary budget
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-gray-900">
                  Selection
                </h3>
                <h4 className="text-xl font-medium mb-4 text-gray-800">
                  Choose Your Yacht
                </h4>
                <p className="text-gray-600 mb-6 font-light">
                  Find your perfect vessel from our elite fleet
                </p>
                <ul className="text-gray-600 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Virtual yacht tours available
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Review crew profiles
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Explore yacht amenities
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Confirm availability
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-gray-900">
                  Itinerary
                </h3>
                <h4 className="text-xl font-medium mb-4 text-gray-800">
                  Plan Your Route
                </h4>
                <p className="text-gray-600 mb-6 font-light">
                  Craft your Mediterranean adventure
                </p>
                <ul className="text-gray-600 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Select dream destinations
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Plan port visits
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Arrange special activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Consider seasonal highlights
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wider text-gray-900">
                  Preferences
                </h3>
                <h4 className="text-xl font-medium mb-4 text-gray-800">
                  Customize Experience
                </h4>
                <p className="text-gray-600 mb-6 font-light">
                  Tailor every aspect to your desires
                </p>
                <ul className="text-gray-600 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Design your menu
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Select fine wines
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Choose entertainment options
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-2">•</span>
                    Plan special occasions
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Discover why discerning clients trust Riviera Yachts for their
                luxury maritime experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 font-light">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <h4 className="text-lg font-medium">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Learn more about our luxury charter experience
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3 text-gray-900">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 font-light">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight">
                    Ready to Experience Luxury on the Water?
                  </h2>
                  <p className="text-xl text-white/90 mb-8 font-light">
                    Contact our yacht specialists today to plan your perfect
                    Mediterranean adventure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
                    >
                      <span>Request Information</span>
                    </Link>
                    <Link
                      href="https://wa.me/+377643917618"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-colors text-base font-medium"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </Link>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <Image
                    src="/photos/StDavid/6692969f15ca3040b3c6d3fd_Xanadu-Superyacht-Staircase.jpg"
                    alt="Luxury yacht charter"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
