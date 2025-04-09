import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Bed,
  Ship,
  MessageSquare,
  ArrowRight,
  Star,
} from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";

interface Feature {
  title: string;
  description: string;
}

interface YachtFeature {
  id: string;
  name: string;
  images: string[];
  guests: number;
  cabins: number;
  crew: number;
  description: string;
  features: string[];
}

interface YachtCategory {
  id: string;
  title: string;
  description?: string;
  yachts: YachtFeature[];
}

export default function Fleet() {
  const [selectedYacht, setSelectedYacht] = useState<YachtFeature | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [allYachtPhotos, setAllYachtPhotos] = useState<string[]>([]);

  // Yacht Data - Now wrapped in useMemo to avoid dependency array issues
  const yachtCategories = useMemo<YachtCategory[]>(
    () => [
      {
        id: "premium",
        title: "Premium Superyachts",
        description:
          "Experience unparalleled luxury and comfort with our premium selection of superyachts, perfect for exclusive voyages across stunning Mediterranean destinations.",
        yachts: [
          {
            id: "christina-o",
            name: "CHRISTINA O",
            images: [
              "/photos/CHRISTINAO/6691a5df8ef063ef7180c36a_unnamed-4.jpg",
              "/photos/CHRISTINAO/6691a6155c66ae7bc0f1dba9_CHRISTINA-O-swimming-pool_credits_Stef_Bravin-2048x1363-p-1600.jpg",
              "/photos/CHRISTINAO/6691a3c7d5168c08ee13180f_Christina-O_99_©_stef-bravin-2048x1363-p-1600.jpg",
              "/photos/CHRISTINAO/6691a41ed3242b4bbec21d69_Compass-deck-3-2048x1363-p-1600.jpg",
              "/photos/CHRISTINAO/6691a531f19b47a9646a7357_unnamed-15-2048x1363-p-1600.jpg",
              "/photos/CHRISTINAO/6691a56a7796c8b5d1046d20_Spa-massage-room-1-2048x1363-p-1600.jpg",
            ],
            guests: 34,
            cabins: 17,
            crew: 39,
            description:
              "CHRISTINA O is one of the most iconic superyachts in the world. Originally a Canadian frigate, she was purchased by Greek shipping magnate Aristotle Onassis in 1954 and converted into a luxurious private yacht. With her rich history of hosting celebrities and world leaders, CHRISTINA O offers an unparalleled charter experience combining timeless elegance with modern amenities.",
            features: [
              "Iconic Ari&apos;s Bar with whale teeth bar stools",
              "Swimming pool that converts to a dance floor",
              "Jacuzzi with mosaic tiles from Capri&apos;s Blue Grotto",
              "Helipad for easy access",
              "Original Minotaur-themed mosaic deck",
              "Grand piano in the main salon",
              "State-of-the-art entertainment systems",
              "Multiple dining areas including formal dining room",
            ],
          },
          {
            id: "st-david",
            name: "ST DAVID",
            images: [
              "/photos/StDavid/66929739be99ed26097803c9_DSC_8798.jpg.pagespeed.ce_.8zwqRklk0t-2-2048x1365-p-1600.jpg",
              "/photos/StDavid/669296f9fce9dccfe839c69f_St-David-Jacuzzi-and-sunbed-2048x1365-p-1600.jpg",
              "/photos/StDavid/6692969f15ca3040b3c6d3fd_Xanadu-Superyacht-Staircase.jpg",
              "/photos/StDavid/669296cce46349c6e731a286_gim-p-1600.jpg",
              "/photos/StDavid/669296671188de0b90aea4ae_St-David-Master-cabin-lounge-2048x1365-p-1600.jpg",
              "/photos/StDavid/669296242f10ee15ab68c6c2_St-David-web-images-order.jpg",
            ],
            guests: 12,
            cabins: 6,
            crew: 14,
            description:
              "ST DAVID is a masterpiece of Italian craftsmanship built by Benetti. Her elegant exterior lines are complemented by an opulent interior designed by the renowned Andrew Winch. The yacht features a split-level master suite with a private office and lounge, along with five additional luxurious staterooms to accommodate guests in absolute comfort.",
            features: [
              "Spectacular spiral staircase with glass elevator",
              "Spacious sun deck with Jacuzzi and bar",
              "Fully equipped gym with panoramic views",
              "Cinema room with state-of-the-art entertainment system",
              "Extensive water toy collection",
              "Multiple dining and lounging areas",
              "Stabilizers for enhanced comfort at sea",
              "Beautifully appointed formal dining room for 12 guests",
            ],
          },
          {
            id: "moonraker",
            name: "MOONRAKER",
            images: [
              "/photos/moon/1189c760-0394-11ef-86f6-1d78f30f3411-9081045_20231009135149856_1_XLARGE.webp",
              "/photos/moon/6692a635c3652e1b0876c711_ALN01451-2048x1365-p-1600.jpg",
              "/photos/moon/6692a5d79cd60f19f45f3c33_ALN02092.jpeg",
              "/photos/moon/6692a5aab281174d4c45e46b_ALN02560-2048x1365-p-1600.jpg",
              "/photos/moon/6692a6679cd60f19f45f8d93_unnamed-1-1.jpg",
            ],
            guests: 10,
            cabins: 5,
            crew: 9,
            description:
              "MOONRAKER is a sleek and sporty superyacht built by Mangusta. With her impressive speed and striking design, she offers the perfect blend of performance and luxury. Her contemporary interior features light wood finishes, neutral tones, and elegant furnishings, creating a sophisticated and comfortable environment for guests.",
            features: [
              "Top speed of 40 knots for thrilling cruising",
              "Spacious sun deck with Jacuzzi",
              "Multiple outdoor lounging and dining areas",
              "State-of-the-art entertainment system",
              "Generous selection of water toys",
              "Beach club with direct access to the sea",
              "Elegant master suite with panoramic views",
              "Contemporary open-plan salon and dining area",
            ],
          },
        ],
      },
      {
        id: "luxury-day",
        title: "Luxury Day Charters",
        description:
          "Perfect for day trips and coastal explorations, our luxury day charter yachts combine performance, style, and comfort for an unforgettable experience on the water.",
        yachts: [
          {
            id: "shadow-900",
            name: "SHADOW 900",
            images: [
              "/photos/Shadow900/000001.jpg",
              "/photos/Shadow900/000002.jpg",
              "/photos/Shadow900/000003.jpg",
              "/photos/Shadow900/000004.jpg",
              "/photos/Shadow900/000005.jpg",
              "/photos/Shadow900/000006.jpg",
            ],
            guests: 12,
            cabins: 1,
            crew: 2,
            description:
              "The SHADOW 900 by Fjord is a statement of modern luxury and performance. With its distinctive vertical bow, clean lines, and spacious deck layout, it&apos;s the perfect vessel for stylish day cruising along the Mediterranean coast. Combining impressive speed with exceptional comfort, this yacht offers an exhilarating experience on the water.",
            features: [
              "Powerful engines delivering speeds up to 45 knots",
              "Spacious open deck with multiple lounging areas",
              "State-of-the-art navigation and entertainment systems",
              "Luxurious cabin with en-suite facilities",
              "Large swim platform for easy water access",
              "Premium sound system",
              "Stylish alfresco dining area",
              "Generous sunbathing spaces",
            ],
          },
          {
            id: "van-dutch-40",
            name: "VanDutch 40",
            images: [
              "/photos/VanDutch40 /000001.jpeg",
              "/photos/VanDutch40 /000002.jpeg",
              "/photos/VanDutch40 /000003.jpeg",
              "/photos/VanDutch40 /000004.jpeg",
              "/photos/VanDutch40 /000005.jpeg",
              "/photos/VanDutch40 /000006.jpeg",
            ],
            guests: 10,
            cabins: 1,
            crew: 1,
            description:
              "The VanDutch 40 is a masterpiece of minimalist design and cutting-edge technology. Known for its sleek lines and exceptional performance, this luxury day boat offers the perfect balance of style, comfort, and capability. With its distinctive profile and superior craftsmanship, the VanDutch 40 is the ideal choice for sophisticated day cruising.",
            features: [
              "Iconic minimalist design with clean lines",
              "High-performance engines with impressive speed",
              "Spacious open deck layout",
              "Comfortable seating for up to 10 guests",
              "Elegant cabin with modern amenities",
              "Premium sound system for entertainment",
              "Hydraulic swim platform",
              "Advanced navigation technology",
            ],
          },
        ],
      },
    ],
    []
  );

  const handleYachtClick = useCallback((yacht: YachtFeature) => {
    setSelectedYacht(yacht);
    setCurrentImageIndex(0);
    setAllYachtPhotos(yacht.images);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseGallery = useCallback(() => {
    setSelectedYacht(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "";
  }, []);

  const handlePrevImage = useCallback(() => {
    if (!selectedYacht) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? allYachtPhotos.length - 1 : prev - 1
    );
  }, [selectedYacht, allYachtPhotos]);

  const handleNextImage = useCallback(() => {
    if (!selectedYacht) return;
    setCurrentImageIndex((prev) =>
      prev === allYachtPhotos.length - 1 ? 0 : prev + 1
    );
  }, [selectedYacht, allYachtPhotos]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedYacht) return;

      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        handleCloseGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedYacht, handlePrevImage, handleNextImage, handleCloseGallery]);

  return (
    <>
      <Head>
        <title>Luxury Yacht Collection | Riviera Yachts</title>
        <meta
          name="description"
          content="Explore our prestigious fleet of luxury yachts available for charter - from iconic superyachts to sleek day cruisers for unforgettable Mediterranean experiences."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden h-screen max-h-[800px] flex items-center">
          {/* Background Image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/photos/fleet-hero.jpg"
              alt="Luxury Yacht Fleet"
              fill
              className="object-cover"
              quality={95}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-white leading-tight">
                Exceptional Fleet
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-10 font-light leading-relaxed">
                Discover our meticulously curated collection of the world&apos;s
                finest yachts, each offering unparalleled luxury and
                unforgettable experiences on the Mediterranean.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#premium-yachts"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
                >
                  <span>Explore Superyachts</span>
                </a>
                <a
                  href="#day-charters"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-md hover:bg-white/30 transition-colors text-base font-medium"
                >
                  <span>Day Charters</span>
                </a>
              </div>

              <div className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="text-white font-medium">
                  Inquire About Availability:
                </span>
                <span>+377 6 43 91 76 18</span>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Superyachts Section */}
        <section id="premium-yachts" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                {yachtCategories[0].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                {yachtCategories[0].description}
              </p>
            </div>

            <div className="space-y-24">
              {/* Premium yachts */}
              {yachtCategories[0].yachts.map((yacht) => (
                <div key={yacht.id} className="mb-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div
                      className="relative h-[500px] overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => handleYachtClick(yacht)}
                    >
                      <Image
                        src={yacht.images[0]}
                        alt={yacht.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={95}
                        priority
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-light mb-6 tracking-tight">
                        {yacht.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-8 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span>{yacht.guests} Guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed className="w-5 h-5" />
                          <span>{yacht.cabins} Cabins</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ship className="w-5 h-5" />
                          <span>{yacht.crew} Crew</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-8 font-light leading-relaxed">
                        {yacht.description.length > 220
                          ? `${yacht.description.substring(0, 220)}...`
                          : yacht.description}
                      </p>

                      <div className="space-y-3">
                        <button
                          onClick={() => handleYachtClick(yacht)}
                          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors"
                        >
                          <span>View Gallery</span>
                        </button>

                        <div>
                          <Link
                            href={`https://wa.me/+377643917618?text=I&apos;m interested in chartering ${yacht.name}. Please provide more information.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-700 font-medium mt-4"
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            <span>Request via WhatsApp</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Note about sample fleet */}
              <div className="text-center py-8 px-4 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The superyachts displayed here represent just a sample of our
                  extensive fleet. Contact our yacht charter specialists to
                  discover our complete collection of luxury vessels tailored to
                  your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Day Charters Section */}
        <section id="day-charters" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                {yachtCategories[1].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                {yachtCategories[1].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {yachtCategories[1].yachts.map((yacht) => (
                <div
                  key={yacht.id}
                  className="bg-white overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md"
                >
                  <div
                    className="relative h-80 cursor-pointer"
                    onClick={() => handleYachtClick(yacht)}
                  >
                    <Image
                      src={yacht.images[0]}
                      alt={yacht.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-light mb-4 tracking-tight">
                      {yacht.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{yacht.guests} Guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4" />
                        <span>{yacht.cabins} Cabins</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-8 font-light">
                      {yacht.description.length > 150
                        ? `${yacht.description.substring(0, 150)}...`
                        : yacht.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <button
                        onClick={() => handleYachtClick(yacht)}
                        className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors text-sm"
                      >
                        View Details
                      </button>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-gray-700 text-sm"
                      >
                        <span>Request Information</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                Client Experiences
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Discover what our clients say about their unforgettable charter
                experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-1">
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
                <p className="text-gray-600 mb-6 font-light italic">
                  &ldquo;The service was impeccable from start to finish. The
                  crew was attentive, professional, and made sure our
                  Mediterranean experience was perfect in every way.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 font-medium flex-shrink-0">
                    JD
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      James D.
                    </h4>
                    <p className="text-xs text-gray-500">
                      St. Tropez Charter, July 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-1">
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
                <p className="text-gray-600 mb-6 font-light italic">
                  &ldquo;Our family vacation aboard the SHADOW 900 was
                  extraordinary. The yacht was immaculate, the itinerary
                  perfectly planned, and the attention to detail
                  remarkable.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 font-medium flex-shrink-0">
                    SM
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Sophie M.
                    </h4>
                    <p className="text-xs text-gray-500">
                      Monaco to Portofino, August 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-1">
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
                <p className="text-gray-600 mb-6 font-light italic">
                  &ldquo;Chartering CHRISTINA O was like stepping into a piece
                  of history with all the modern comforts. An unforgettable
                  experience that exceeded all expectations.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 font-medium flex-shrink-0">
                    AR
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Alexander R.
                    </h4>
                    <p className="text-xs text-gray-500">
                      Mediterranean Cruise, June 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
              Ready to Experience Luxury at Sea?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Contact our charter specialists to plan your perfect yacht journey
              across the Mediterranean
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
              >
                <span>Request a Quote</span>
              </Link>
              <Link
                href="https://wa.me/+377643917618"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-colors text-base font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Modal */}
        {selectedYacht && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 bg-black/90 overflow-hidden">
            <div className="w-full h-full max-w-full flex flex-col">
              <div className="relative flex-grow flex">
                {/* Large main image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={allYachtPhotos[currentImageIndex]}
                    alt={`${selectedYacht.name} - Image ${
                      currentImageIndex + 1
                    }`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    quality={95}
                    priority
                  />
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 z-10 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 z-10 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Close button */}
                <button
                  onClick={handleCloseGallery}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 z-10 transition-colors"
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full">
                  {currentImageIndex + 1} / {allYachtPhotos.length}
                </div>
              </div>

              {/* Info panel (slides up from bottom on mobile, fixed to side on desktop) */}
              <div className="bg-white h-auto lg:h-full lg:w-96 lg:absolute lg:right-0 lg:top-0 overflow-y-auto">
                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-light mb-4 tracking-tight">
                      {selectedYacht.name}
                    </h3>

                    <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{selectedYacht.guests} Guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4" />
                        <span>{selectedYacht.cabins} Cabins</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ship className="w-4 h-4" />
                        <span>{selectedYacht.crew} Crew</span>
                      </div>
                    </div>

                    <p className="text-gray-600 font-light leading-relaxed">
                      {selectedYacht.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4 tracking-tight">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedYacht.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2 flex-shrink-0">
                            •
                          </span>
                          <span className="text-gray-600 font-light">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-lg font-medium mb-4 tracking-tight">
                      Interested in {selectedYacht.name}?
                    </h4>
                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/+377643917618?text=I am interested in chartering ${selectedYacht.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors w-full"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Contact via WhatsApp</span>
                      </a>
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-md border border-gray-200 transition-colors w-full"
                      >
                        <span>Request Information</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
