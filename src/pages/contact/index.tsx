import React, { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import {
  MessageSquare,
  Anchor,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Bed,
  Phone,
  Mail,
  ArrowRight,
  Star,
  MapPin,
  User,
  Calendar,
  Check,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";

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
  features: Feature[];
}

interface YachtCategory {
  title: string;
  description: string;
  yachts: YachtFeature[];
}

const yachtCategories: YachtCategory[] = [
  {
    title: "Premium Superyachts",
    description: "The pinnacle of luxury and prestigious yachting experience",
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
        cabins: 18,
        crew: 38,
        description:
          "When does a yacht become more than a yacht? Christina O is very special. She has a history intertwined with the unique story of Aristotle Onassis, Maria Callas, Jacqueline Bouvier Kennedy (Jackie O), Sir Winston Churchill, JFK, and many of the most important people of the 20th Century.",
        features: [
          {
            title: "Fabulous Outside Bar",
            description:
              "The outside bar on Christina O is still to this day better than any outside bar on any modern yacht of any size.",
          },
          {
            title: "Full Sized Swimming Pool Or Dancefloor",
            description:
              "The famous pool with a recreation of Minoan art on its mosaic floor is the same one that was specified by Onassis.",
          },
          {
            title: "Al Fresco Dining",
            description:
              "The Compass Deck forward of the famous yellow funnel has been renovated to create a new outside dining area, with shade and integrated lighting.",
          },
          {
            title: "Impressive Speed",
            description:
              "The speed of Christina O is impressive. She was built as a frigate for chasing down U-Boats in World War II, and can reach 19 knots.",
          },
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
        ],
        guests: 12,
        cabins: 6,
        crew: 15,
        description:
          "Launched by the world-renowned Benetti Shipyard, and designed internally by Andrew Winch, the magnificent custom-made 60 metre motor yacht St.David was recently refitted in 2019 to achieve one sole purpose: to create the absolute pinnacle of contemporary charter excellence.",
        features: [
          {
            title: "Magnificent Staterooms",
            description:
              "Her opulent interior sleeps up to 12 guests in six staterooms that incorporate a magnificent master suite, full-beam VIP stateroom and four spacious double rooms.",
          },
          {
            title: "Beautiful Interior Design",
            description:
              "Throughout, her interior living spaces are finished to the highest standards, evident in her beautiful mosaic floors, sculptured tables and detailed marquetry.",
          },
          {
            title: "Gym and Spa",
            description:
              "The interior features a well equipped gym, a spa room where a resident physiotherapist offers a full range of complimentary treatments throughout your stay.",
          },
          {
            title: "Impressive Deck Features",
            description:
              "Outside, perhaps her most impressive feature is the oversize jacuzzi pool refitted in 2019 with new pumps and jets.",
          },
        ],
      },
      {
        id: "moonraker",
        name: "MOONRAKER",
        images: [
          "/photos/moon/1189c760-0394-11ef-86f6-1d78f30f3411-9081045_20231009135149856_1_XLARGE.webp",
          "/photos/moon/6692a635c3652e1b0876c711_ALN01451-2048x1365-p-1600.jpg",
          "/photos/moon/6692a5d79cd60f19f45f3c33_ALN02092.jpg",
          "/photos/moon/6692a5aab281174d4c45e46b_ALN02560-2048x1365-p-1600.jpg",
          "/photos/moon/6692a6679cd60f19f45f8d93_unnamed-1-1.jpg",
        ],
        guests: 8,
        cabins: 4,
        crew: 6,
        description:
          "Luxury yacht Moonraker, built in 1992 and benefitting from a full refit in 2021 is a luxury charter yacht with beautifully proportioned decks and immaculate interior.",
        features: [
          {
            title: "Air Conditioned Dining Area",
            description:
              "The aft deck is a great focal point of the yacht. The dining table benefits from full shade and uniquely, air conditioning ducts send cool air into the exterior dining space.",
          },
          {
            title: "Large Main Salon And Full Cocktail Bar",
            description:
              "Her large main salon benefits from a full cocktail bar and a generous lounge in neutral contemporary colours. The entire space receives ample natural light which emphasises the sense of space.",
          },
          {
            title: "Large Master Suite",
            description:
              "She accommodates 8 guests in four cabins. The large master suite is particularly spacious for a yacht of this size, with the full beam of the yacht, ample walk-in closet space, and a study area.",
          },
          {
            title: "Spanish Charter License",
            description:
              "With her recent refit and maintenance period, and first class crew, this iconic yacht represents excellent value for money and will take you on an outstanding yachting adventure.",
          },
        ],
      },
    ],
  },
  {
    title: "Luxury Day Charters",
    description: "Perfect for day trips and coastal adventures",
    yachts: [
      {
        id: "shadow-900",
        name: "Shadow 900",
        images: [
          "/photos/Shadow900/000001.jpg",
          "/photos/Shadow900/000002.jpg",
          "/photos/Shadow900/000003.jpg",
        ],
        guests: 8,
        cabins: 2,
        crew: 2,
        description:
          "The perfect day yacht for exploring the French Riviera coastline in style and comfort.",
        features: [
          {
            title: "Spacious Sundeck",
            description:
              "Enjoy sunbathing and relaxation on the spacious front deck with comfortable loungers.",
          },
          {
            title: "Water Sports Equipment",
            description:
              "Paddleboards, snorkeling gear, and other water toys for your enjoyment.",
          },
          {
            title: "Premium Sound System",
            description:
              "High-quality audio system throughout for the perfect atmosphere.",
          },
          {
            title: "Gourmet Galley",
            description:
              "Well-equipped kitchen for preparing delicious meals and refreshments.",
          },
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
        cabins: 2,
        crew: 2,
        description:
          "Elegant and powerful, the VanDutch 40 is an icon of modern yacht design, offering a sleek profile and outstanding performance.",
        features: [
          {
            title: "Iconic Design",
            description:
              "Instantly recognizable vertical bow and clean lines make the VanDutch 40 a status symbol on the water.",
          },
          {
            title: "Spacious Deck",
            description:
              "Open layout with generous sunbathing areas and comfortable seating for ultimate relaxation.",
          },
          {
            title: "Premium Sound System",
            description:
              "High-end audio equipment to create the perfect atmosphere for cruising.",
          },
          {
            title: "Impressive Speed",
            description:
              "Powerful engines deliver thrilling performance and exceptional handling.",
          },
        ],
      },
    ],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
    yachtInterest: "",
  });

  const [selectedYacht, setSelectedYacht] = useState<YachtFeature | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [allYachtPhotos, setAllYachtPhotos] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    console.log("Form submitted:", formData);

    // In a real implementation, you would send this data to your backend
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setShowContactForm(false);
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          dates: "",
          guests: "",
          message: "",
          yachtInterest: selectedYacht ? selectedYacht.name : "",
        });
      }, 3000);
    }, 1500);
  };

  const handleYachtClick = (yacht: YachtFeature) => {
    setSelectedYacht(yacht);
    setCurrentImageIndex(0);
    setAllYachtPhotos(yacht.images);
    setFormData((prev) => ({ ...prev, yachtInterest: yacht.name }));
  };

  const handleCloseGallery = () => {
    setSelectedYacht(null);
    setCurrentImageIndex(0);
    setShowContactForm(false);
    setAllYachtPhotos([]);
  };

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

  const openContactForm = () => {
    setShowContactForm(true);
  };

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
  }, [selectedYacht, handlePrevImage, handleNextImage]);

  return (
    <>
      <Head>
        <title>Yacht Collection | Riviera Yachts</title>
        <meta
          name="description"
          content="Experience the pinnacle of luxury yachting with our curated collection of premium vessels, from iconic superyachts to sleek day cruisers."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden h-screen max-h-[800px] flex items-center">
          {/* Background Video or Image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/photos/CHRISTINAO/6691a6155c66ae7bc0f1dba9_CHRISTINA-O-swimming-pool_credits_Stef_Bravin-2048x1363-p-1600.jpg"
              alt="Luxury Yacht Charter"
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
                Exceptional Yacht Experiences
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-10 font-light leading-relaxed">
                From historic superyachts to performance day cruisers, we
                deliver impeccable service and unforgettable moments on the
                Mediterranean.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#request-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
                >
                  <span>Request Custom Quote</span>
                </a>
                <a
                  href="https://wa.me/+377643917618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-colors text-base font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </a>
              </div>

              <div className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="text-white font-medium">Available 24/7:</span>
                <span>+377 6 43 91 76 18</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Superyachts Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">
                Luxury Charter Fleet
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Discover our prestigious selection of luxury yachts available
                for charter
              </p>
            </div>

            <div className="space-y-24">
              {/* Premium yachts */}
              {yachtCategories[0].yachts.map((yacht) => (
                <div key={yacht.id} className="mb-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div
                      className="relative h-[500px] overflow-hidden rounded-lg"
                      onClick={() => handleYachtClick(yacht)}
                    >
                      <Image
                        src={yacht.images[0]}
                        alt={yacht.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={95}
                        priority
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-light mb-6 tracking-tight">
                        {yacht.name}
                      </h3>

                      <div className="flex items-center gap-8 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span>{yacht.guests} Guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed className="w-5 h-5" />
                          <span>{yacht.cabins} Cabins</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-8 font-light leading-relaxed">
                        {yacht.description.length > 200
                          ? `${yacht.description.substring(0, 200)}...`
                          : yacht.description}
                      </p>

                      <div>
                        <button
                          onClick={() => handleYachtClick(yacht)}
                          className="inline-flex items-center text-gray-900 font-medium"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Note about sample fleet */}
              <div className="text-center py-8 px-4 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The yachts displayed here represent just a sample of our
                  extensive fleet. Contact our yacht charter specialists to
                  discover our complete collection of luxury vessels tailored to
                  your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Yacht Categories */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {yachtCategories.slice(1).map((category, index) => (
              <div key={index} className="mb-20">
                <h2 className="text-3xl font-light mb-12 tracking-tight">
                  {category.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                  {category.yachts.map((yacht) => (
                    <div
                      key={yacht.id}
                      onClick={() => handleYachtClick(yacht)}
                      className="group cursor-pointer bg-white overflow-hidden rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={yacht.images[0]}
                          alt={yacht.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={90}
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-light mb-2">
                          {yacht.name}
                        </h3>

                        <div className="flex items-center gap-6 mb-4 text-gray-600 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{yacht.guests} Guests</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bed className="w-4 h-4" />
                            <span>{yacht.cabins} Cabins</span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 font-light">
                          {yacht.description.length > 120
                            ? `${yacht.description.substring(0, 120)}...`
                            : yacht.description}
                        </p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleYachtClick(yacht);
                          }}
                          className="inline-flex items-center text-gray-900 font-medium text-sm mt-2"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                    </div>

                    <p className="text-gray-600 font-light leading-relaxed">
                      {selectedYacht.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4 tracking-tight">
                      Key Features
                    </h4>
                    <div className="space-y-4">
                      {selectedYacht.features.map((feature, index) => (
                        <div key={index}>
                          <h5 className="font-medium text-gray-900 mb-1">
                            {feature.title}
                          </h5>
                          <p className="text-gray-600 text-sm font-light">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-lg font-medium mb-4 tracking-tight">
                      Interested in {selectedYacht.name}?
                    </h4>
                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/+377643917618?text=I am interested in chartering the yacht: ${selectedYacht.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors w-full"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Start a Conversation</span>
                      </a>
                      <button
                        onClick={openContactForm}
                        className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-md border border-gray-200 transition-colors w-full"
                      >
                        <span>Request Information</span>
                      </button>
                    </div>

                    {showContactForm && (
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <h4 className="text-lg font-medium mb-4 tracking-tight">
                          Quick Enquiry
                        </h4>

                        {!submitted ? (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <input
                                type="text"
                                id="modal-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                                placeholder="Your name"
                              />
                            </div>

                            <div>
                              <input
                                type="email"
                                id="modal-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                                placeholder="Your email"
                              />
                            </div>

                            <div>
                              <input
                                type="tel"
                                id="modal-phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                                placeholder="Phone number"
                              />
                            </div>

                            <div>
                              <textarea
                                id="modal-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-2.5 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                                placeholder="Tell us about your trip plans..."
                              ></textarea>
                            </div>

                            <button
                              type="submit"
                              className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-md transition-colors"
                            >
                              {submitting ? (
                                <span className="flex items-center justify-center">
                                  <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                  Sending...
                                </span>
                              ) : (
                                "Send Enquiry"
                              )}
                            </button>
                          </form>
                        ) : (
                          <div className="text-center py-6">
                            <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <h5 className="text-xl font-light mb-2">
                              Thank You
                            </h5>
                            <p className="text-gray-600 text-sm font-light">
                              Your enquiry has been received. We will contact
                              you shortly about {selectedYacht.name}.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                Customer Experiences
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Discover what our clients say about their unforgettable charter
                experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
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
                  &ldquo;The service was impeccable from initial inquiry to the
                  end of our charter. The crew was attentive, professional, and
                  made sure our Mediterranean experience was perfect.&rdquo;
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

              <div className="bg-white p-8 rounded-lg shadow-sm">
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
                  &ldquo;Our family vacation aboard the Shadow 900 was
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

              <div className="bg-white p-8 rounded-lg shadow-sm">
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
                  &ldquo;Chartering the VanDutch 40 for our anniversary was the
                  highlight of our year. Fast, stylish, and supremely
                  comfortable&mdash;we&apos;re already planning our next
                  charter.&rdquo;
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
                      Cannes Day Charter, June 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Why Choose Riviera Yachts
              </h2>
              <p className="text-lg text-slate-300">
                Experience unmatched luxury and service on the French Riviera
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Premium Fleet</h3>
                <p className="text-slate-300">
                  Meticulously maintained yachts from world-renowned
                  manufacturers
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Expert Crew</h3>
                <p className="text-slate-300">
                  Professional, multilingual crew dedicated to your comfort
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Prime Location</h3>
                <p className="text-slate-300">
                  Based in Monaco with access to the best Mediterranean
                  destinations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Standards Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                The Riviera Yachts Standard
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
                Technical excellence and meticulous attention to detail define
                every aspect of our service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Curated Fleet Selection
                </h3>
                <p className="text-gray-300 text-center font-light">
                  Our vessels are hand-selected based on engineering excellence,
                  design credentials, and onboard systems that ensure both
                  performance and comfort.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Certified Expert Crew
                </h3>
                <p className="text-gray-300 text-center font-light">
                  Every crew member is rigorously trained and certified, with
                  extensive knowledge of navigation, safety protocols, and the
                  highest standards of hospitality.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Impeccable Maintenance
                </h3>
                <p className="text-gray-300 text-center font-light">
                  Regular technical inspections and meticulous maintenance
                  ensure every system and component meets the highest
                  operational and safety standards.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 0 1.242 4.136m9.592-2.264a7.465 7.465 0 0 0 1.242 4.136 7.463 7.463 0 0 0 4.136 1.242 7.464 7.464 0 0 0 4.136-1.242 7.465 7.465 0 0 0-1.242-4.136 7.465 7.465 0 0 0-1.242-4.136 7.463 7.463 0 0 0-4.136-1.242 7.464 7.464 0 0 0-4.136 1.242 7.465 7.465 0 0 0-1.242 4.136Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Advanced Itinerary Planning
                </h3>
                <p className="text-gray-300 text-center font-light">
                  Sophisticated routing software combined with local knowledge
                  ensures optimized itineraries that maximize your experience
                  while considering weather, currents, and exclusive
                  destinations.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Quality Assurance
                </h3>
                <p className="text-gray-300 text-center font-light">
                  Rigorous quality control processes ensure that every element
                  of your charter meets our exacting standards, from galley
                  provisions to entertainment systems.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">
                  Personalized Technology
                </h3>
                <p className="text-gray-300 text-center font-light">
                  Custom technological solutions, from connectivity to
                  entertainment, are calibrated to your preferences before you
                  step aboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="request-quote" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                Request Information
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Our yacht specialists will create a tailored proposal for your
                perfect voyage
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="dates"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                      placeholder="MM/DD/YYYY - MM/DD/YYYY"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                      placeholder="Number of guests"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="yachtInterest"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Yacht of Interest
                  </label>
                  <select
                    id="yachtInterest"
                    name="yachtInterest"
                    value={formData.yachtInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                  >
                    <option value="">Select a yacht (optional)</option>
                    {yachtCategories.flatMap((category) =>
                      category.yachts.map((yacht) => (
                        <option key={yacht.id} value={yacht.name}>
                          {yacht.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:ring-1 focus:ring-gray-900 outline-none transition"
                    placeholder="Tell us about your preferences and special requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-md hover:bg-gray-800 transition-colors w-full"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>Request Sent</>
                  ) : (
                    <>Submit Request</>
                  )}
                </button>
              </form>

              <div className="bg-gray-50 rounded-lg p-8 lg:p-10">
                <h3 className="text-xl font-light mb-6 tracking-tight">
                  Contact Us Directly
                </h3>

                <div className="space-y-6">
                  <a
                    href="https://wa.me/+377643917618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <span>WhatsApp: +377 6 43 91 76 18</span>
                  </a>

                  <a
                    href="tel:+37793501234"
                    className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>Phone: +377 9350 1234</span>
                  </a>

                  <a
                    href="mailto:charter@rivierayachts.com"
                    className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>Email: charter@rivierayachts.com</span>
                  </a>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 font-light">
                    Our yacht charter specialists are available 24/7 to assist
                    with your inquiries. We pride ourselves on providing
                    personalized service tailored to your specific needs and
                    preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
