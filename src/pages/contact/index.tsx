import React, { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import {
  MessageSquare,
  Home,
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
  Building,
  Bath,
  Maximize,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface PropertyFeature {
  id: string;
  name: string;
  images: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: Feature[];
  location: string;
  sqm?: number;
}

interface PropertyCategory {
  title: string;
  description: string;
  properties: PropertyFeature[];
}

const propertyCategories: PropertyCategory[] = [
  {
    title: "Featured Properties",
    description: "A glimpse of our exclusive property portfolio",
    properties: [
      {
        id: "monaco-harbour",
        name: "MONACO HARBOUR - LUXURY FLAT",
        images: [
          "/photos/homepage/apartment2/004-photopetit-140323-1679310750.jpg",
          "/photos/homepage/apartment2/101-photopetit-140323-1679310824.jpg",
          "/photos/homepage/apartment2/057-photopetit-140323-1679310813.jpg",
        ],
        guests: 10,
        bedrooms: 5,
        bathrooms: 5,
        location: "Monaco Port",
        sqm: 345,
        description:
          "Located on the port of Monaco in the 'Panorama' residence. This building benefits from a strategic location in the heart of the Principality. La Condamine is a dynamic and residential area. Close to all amenities (shops, schools, restaurants, transport). This unique one-storey flat has a panoramic view of the sea, the port and the Formula 1 Grand Prix.",
        features: [
          {
            title: "Panoramic Views",
            description:
              "Enjoy breathtaking panoramic views of the Monaco harbour, sea, and Formula 1 Grand Prix circuit.",
          },
          {
            title: "Spacious Terrace",
            description:
              "A 345 sqm terrace surrounds the flat, perfect for outdoor entertaining with stunning views.",
          },
          {
            title: "Designer Interior",
            description:
              "Renovated with high quality materials and fully furnished by renowned interior designers.",
          },
          {
            title: "Premium Amenities",
            description:
              "Features two master suites with bathrooms and dressing rooms, plus 4 additional bedrooms with bathrooms.",
          },
        ],
      },
      {
        id: "beverly-palace",
        name: "BEVERLY PALACE - RENOVATED FAMILY FLAT",
        images: [
          "/photos/homepage/apartment1/terrasse-1733152883.jpg",
          "/photos/homepage/apartment1/vue-mer-zoom-1733152893.jpg",
          "/photos/homepage/apartment1/vue-cap-martin-1733152890.jpg",
        ],
        guests: 6,
        bedrooms: 3,
        bathrooms: 3,
        location: "Moneghetti, Monaco",
        description:
          "Located in the Moneghetti residential area, in a high-quality, recently refurbished residence with concierge. Just a stone's throw from the dynamic Condamine district and its many amenities, as well as the port of Monaco. This 3-bedroom flat is ideal for a family and has recently been tastefully renovated to a very high standard.",
        features: [
          {
            title: "Sophisticated Design",
            description:
              "Recently renovated to a very high standard with tasteful, contemporary design elements.",
          },
          {
            title: "Private Gym",
            description:
              "Features a converted loggia that now serves as a private gym space.",
          },
          {
            title: "Summer Kitchen",
            description:
              "Enjoy a partially enclosed terrace with a summer kitchen on the south/west façade.",
          },
          {
            title: "Optimized Storage",
            description:
              "Perfectly optimized with plenty of storage space throughout the apartment.",
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
    message: "",
    propertyInterest: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyFeature | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        propertyInterest: "",
        checkIn: "",
        checkOut: "",
        guests: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePropertyClick = (property: PropertyFeature) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseGallery = () => {
    setSelectedProperty(null);
    document.body.style.overflow = "";
  };

  const handlePrevImage = () => {
    if (!selectedProperty) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProperty.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedProperty) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProperty.images.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation for the gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProperty) return;

      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "Escape") {
        handleCloseGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProperty, handleNextImage, handlePrevImage, handleCloseGallery]);

  return (
    <>
      <Head>
        <title>Contact Us | Riviera Stays</title>
        <meta
          name="description"
          content="Contact Riviera Stays at riviera-stays.com to book your luxury short-term rental in Monaco and the French Riviera. Our team is ready to assist you with personalized service."
        />
        <meta
          name="keywords"
          content="contact Riviera Stays, Monaco rental booking, luxury apartment rental, French Riviera accommodation"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="relative py-20 bg-gray-800 text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/photos/homepage/apartment1/vue-cap-martin-1733152890.jpg"
              alt="Contact Riviera Stays"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl font-light mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl">
              Get in touch with our team to inquire about our luxury properties
              or to request a custom proposal for your stay in Monaco or the
              French Riviera.
            </p>
          </div>
        </section>

        {/* Property Portfolio Notice */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-medium mb-4 text-gray-900">
                Our Extensive Property Portfolio
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We have tens of luxury properties available throughout Monaco
                and the French Riviera, many of which are not publicly listed
                for privacy and exclusivity reasons.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you&apos;re looking for a budget-friendly option or the
                most exclusive luxury experience, our diverse portfolio can
                accommodate your needs. Tell us your requirements below, and our
                team will prepare a tailored proposal with properties that match
                your needs perfectly.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                >
                  <span>Fill Out Our Form</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="https://wa.me/+377643917618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-base font-medium"
                >
                  <span>WhatsApp Us Now</span>
                  <MessageSquare size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                Featured Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                These are just a few examples from our extensive collection of
                luxury properties. Contact us to discover our full portfolio
                tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {propertyCategories[0].properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-80">
                    <Image
                      src={property.images[0]}
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm">
                        {property.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-medium mb-3">
                      {property.name}
                    </h3>

                    <div className="flex flex-wrap gap-6 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Users size={18} className="mr-2" />
                        <span>{property.guests} guests</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bed size={18} className="mr-2" />
                        <span>{property.bedrooms} bedrooms</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bath size={18} className="mr-2" />
                        <span>{property.bathrooms} bathrooms</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {property.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => handlePropertyClick(property)}
                        className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium"
                      >
                        View Details
                        <ChevronRight size={16} className="ml-1" />
                      </button>
                      <Link
                        href="#contact-form"
                        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        <span>Inquire</span>
                        <MessageSquare size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gray-50 rounded-lg max-w-3xl">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">
                  Discover Our Full Portfolio
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  These are just a small sample of our extensive property
                  collection. Contact us to receive information about our
                  complete portfolio of luxury properties in Monaco and the
                  French Riviera.
                </p>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                >
                  <span>Request Complete Property List</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-light mb-6 text-gray-900">
                  Contact Us
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Fill out the form and our team will get back to you with a
                  personalized property selection based on your needs and
                  budget.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Call Us Directly
                      </h3>
                      <a
                        href="tel:+377643917618"
                        className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        +377 643917618
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Email Us</h3>
                      <a
                        href="mailto:info@riviera-stays.com"
                        className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        info@riviera-stays.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">WhatsApp</h3>
                      <a
                        href="https://wa.me/+377643917618"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        +377 643917618
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Office Address
                      </h3>
                      <p className="text-lg text-gray-700">
                        7 avenue des Papalins
                        <br />
                        98000 Monaco
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {submitSuccess ? (
                  <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center h-full flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-medium mb-4 text-gray-900">
                      Thank You!
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Your inquiry has been received. Our team will contact you
                      shortly with a personalized property selection based on
                      your requirements.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium mx-auto"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="guests"
                          className="block text-gray-700 mb-2"
                        >
                          Number of Guests
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                          <option value="">Select number of guests</option>
                          <option value="1-2">1-2 guests</option>
                          <option value="3-4">3-4 guests</option>
                          <option value="5-6">5-6 guests</option>
                          <option value="7+">7+ guests</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="checkIn"
                          className="block text-gray-700 mb-2"
                        >
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkOut"
                          className="block text-gray-700 mb-2"
                        >
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="propertyInterest"
                        className="block text-gray-700 mb-2"
                      >
                        Property Interest
                      </label>
                      <select
                        id="propertyInterest"
                        name="propertyInterest"
                        value={formData.propertyInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        <option value="">Select property type</option>
                        <option value="Monaco">Monaco Properties</option>
                        <option value="French Riviera">
                          French Riviera Properties
                        </option>
                        <option value="Both">Both Locations</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Additional Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Tell us about your budget, preferred location, and any specific requirements you may have."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-6 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    {submitError && (
                      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                        There was an error submitting your form. Please try
                        again later.
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Property Detail Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
              <button
                onClick={handleCloseGallery}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Slider */}
                <div className="relative h-96 lg:h-full">
                  {selectedProperty.images.length > 0 && (
                    <>
                      <Image
                        src={selectedProperty.images[currentImageIndex]}
                        alt={`${selectedProperty.name} - Image ${
                          currentImageIndex + 1
                        }`}
                        fill
                        className="object-cover"
                      />
                      {selectedProperty.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrevImage();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextImage();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors"
                          >
                            <ChevronRight size={24} />
                          </button>
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            {selectedProperty.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full ${
                                  currentImageIndex === index
                                    ? "bg-white"
                                    : "bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{selectedProperty.location}</span>
                    </div>
                    <h3 className="text-3xl font-medium mb-4">
                      {selectedProperty.name}
                    </h3>

                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Users size={18} className="mr-2" />
                        <span>{selectedProperty.guests} guests</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bed size={18} className="mr-2" />
                        <span>{selectedProperty.bedrooms} bedrooms</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bath size={18} className="mr-2" />
                        <span>{selectedProperty.bathrooms} bathrooms</span>
                      </div>
                      {selectedProperty.sqm && (
                        <div className="flex items-center text-gray-700">
                          <Maximize size={18} className="mr-2" />
                          <span>{selectedProperty.sqm} sqm</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-medium mb-3">Description</h4>
                      <p className="text-gray-700">
                        {selectedProperty.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-medium mb-3">Features</h4>
                      <ul className="grid grid-cols-1 gap-4">
                        {selectedProperty.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex flex-col text-gray-700"
                          >
                            <div className="flex items-start">
                              <Check
                                size={18}
                                className="mr-2 text-green-600 flex-shrink-0 mt-1"
                              />
                              <span className="font-medium">
                                {feature.title}
                              </span>
                            </div>
                            <p className="ml-6 text-sm text-gray-600">
                              {feature.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="#contact-form"
                        onClick={handleCloseGallery}
                        className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                      >
                        <span>Inquire About This Property</span>
                        <ArrowRight size={18} />
                      </Link>
                      <Link
                        href="https://wa.me/+377643917618"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-base font-medium"
                      >
                        <span>WhatsApp Us</span>
                        <MessageSquare size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Contact;
