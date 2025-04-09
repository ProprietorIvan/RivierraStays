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
  Building,
  MessageSquare,
  ArrowRight,
  Star,
  MapPin,
  Bath,
  Maximize,
  Coffee,
  Wifi,
  Car,
  UtensilsCrossed,
  Check,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";

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
  features: string[];
  location: string;
  sqm?: number;
  highlights?: string[];
}

interface PropertyCategory {
  id: string;
  title: string;
  description?: string;
  properties: PropertyFeature[];
}

export default function Properties() {
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyFeature | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Property Data
  const propertyCategories = useMemo<PropertyCategory[]>(
    () => [
      {
        id: "monaco",
        title: "Monaco Luxury Properties",
        description:
          "Experience unparalleled luxury and comfort with our premium selection of properties in Monaco, perfect for exclusive stays in the heart of the Principality.",
        properties: [
          {
            id: "monaco-harbour",
            name: "MONACO HARBOUR - LUXURY FLAT",
            images: [
              "/photos/homepage/apartment2/004-photopetit-140323-1679310750.jpg",
              "/photos/homepage/apartment2/101-photopetit-140323-1679310824.jpg",
              "/photos/homepage/apartment2/057-photopetit-140323-1679310813.jpg",
              "/photos/homepage/apartment2/050-photopetit-140323-1679310801.jpg",
              "/photos/homepage/apartment2/025-photopetit-140323-1679310776.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            location: "Monaco Port",
            sqm: 345,
            description:
              "Located on the port of Monaco in the 'Panorama' residence. This building benefits from a strategic location in the heart of the Principality. La Condamine is a dynamic and residential area. Close to all amenities (shops, schools, restaurants, transport). This unique one-storey flat has a panoramic view of the sea, the port and the Formula 1 Grand Prix. The property has been renovated with high quality materials and fully furnished by interior designers.",
            features: [
              "Panoramic views of the sea, port and Grand Prix circuit",
              "345 sqm terrace surrounding the flat",
              "Renovated with high quality materials",
              "Fully furnished by interior designers",
              "Two master suites with bathrooms and dressing rooms",
              "Four bedrooms with bathrooms",
              "Two offices",
              "Two living rooms",
              "Dining room",
              "Two kitchens",
              "Laundry room",
              "Exceptional cinema room",
              "4 parking spaces",
              "5 renovated cellars",
            ],
            highlights: [
              "Panoramic sea views",
              "345 sqm of living space",
              "Prime Monaco location",
              "5 luxury bedrooms",
            ],
          },
          {
            id: "beverly-palace",
            name: "BEVERLY PALACE - RENOVATED FAMILY FLAT",
            images: [
              "/photos/homepage/apartment1/terrasse-1733152883.jpg",
              "/photos/homepage/apartment1/vue-mer-zoom-1733152893.jpg",
              "/photos/homepage/apartment1/vue-cap-martin-1733152890.jpg",
              "/photos/homepage/apartment1/terrasse-1734108979.jpg",
              "/photos/homepage/apartment1/cuisine-1733152869.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3,
            location: "Moneghetti, Monaco",
            description:
              "Located in the Moneghetti residential area, in a high-quality, recently refurbished residence with concierge. Just a stone's throw from the dynamic Condamine district and its many amenities, as well as the port of Monaco. This 3-bedroom flat is ideal for a family and has recently been tastefully renovated to a very high standard. The flat comprises an entrance hall, a living room opening onto a terrace with unobstructed views over the town and the Rock and a glimpse of the sea, a separate fully-equipped kitchen, 3 bedrooms with their own bath/shower rooms, and a guest toilet.",
            features: [
              "High-quality, recently refurbished residence with concierge",
              "Tastefully renovated to a very high standard",
              "Terrace with unobstructed views over town and the Rock",
              "Separate fully-equipped kitchen",
              "3 bedrooms with their own bath/shower rooms",
              "Guest toilet",
              "Gym converted from a covered loggia in one bedroom",
              "Partially enclosed terrace with summer kitchen",
              "Perfectly optimized storage space",
              "Dual aspect - can be used as home and/or office",
              "All rooms except children's bedroom have access to terrace",
              "Cellar and large car park in the residence",
            ],
            highlights: [
              "Family-friendly layout",
              "Enclosed summer terrace",
              "Private gym area",
              "3 luxury bedrooms",
            ],
          },
          {
            id: "fontvieille-flat",
            name: "FONTVIEILLE - CONTEMPORARY FLAT, SEA VIEW",
            images: [
              "/photos/homepage/apartment3/chambre-2-1734108955.jpg",
              "/photos/homepage/apartment3/chambre-de-mai-tre-1734108961.jpg",
              "/photos/homepage/apartment3/hall-d-entre-e-1711029792.jpg",
              "/photos/homepage/apartment3/cuisine-1711029788.jpg",
              "/photos/homepage/apartment3/chambre-parentale-1711029780.jpg",
            ],
            guests: 2,
            bedrooms: 1,
            bathrooms: 1,
            location: "Fontvieille, Monaco",
            description:
              "Located in the Fontvieille district, in the 'EDEN STAR' residence, with 24/7 concierge and access to an outdoor swimming pool reserved for residents of a few neighbouring residences. The seafront residence benefits from a quiet environment and several access points, one of which is exclusively pedestrian. Close to all amenities (shops, transport, banks, schools, parks and beaches). This very attractive, contemporary, fully-renovated 2-room apartment boasts superb views of the sea and the Rock.",
            features: [
              "24/7 concierge service",
              "Access to outdoor swimming pool for residents",
              "Quiet seafront environment",
              "Contemporary, fully-renovated design",
              "Superb views of the sea and the Rock",
              "Entrance hall",
              "Living room with open-plan kitchen",
              "South-east-facing terrace",
              "Front-facing bedroom opening onto terrace",
              "Renovated shower room",
              "Guest toilet",
              "Sea-view terrace",
              "Cellar",
              "Parking space",
            ],
            highlights: [
              "Sea view terrace",
              "Access to swimming pool",
              "Contemporary design",
              "Perfect for couples",
            ],
          },
        ],
      },
    ],
    []
  );

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
        body: JSON.stringify({
          ...formData,
          propertyInterest: selectedProperty
            ? selectedProperty.name
            : "Not specified",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Luxury Properties | Riviera Stays</title>
        <meta
          name="description"
          content="Explore our exclusive collection of luxury properties in Monaco and the French Riviera at riviera-stays.com. Find the perfect short-term rental for your next visit."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation currentPage="Properties" />

        {/* Hero Section */}
        <section className="relative py-20 bg-gray-800 text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/photos/homepage/apartment2/004-photopetit-140323-1679310750.jpg"
              alt="Luxury Properties"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl font-light mb-6 tracking-tight">
              Our Luxury Properties
            </h1>
            <p className="text-xl max-w-3xl">
              Discover our exclusive collection of premium properties available
              for short-term rental in Monaco and the French Riviera.
            </p>
          </div>
        </section>

        {/* Available Properties Notice */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-medium mb-4 text-gray-900">
                Our Exclusive Property Portfolio
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We have tens of luxury properties available throughout Monaco
                and the French Riviera, many of which are not publicly listed
                for privacy and exclusivity reasons.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you&apos;re looking for a budget-friendly option or the
                most exclusive luxury experience, our diverse portfolio can
                accommodate your needs. Contact our team today with your
                specific requirements, and we&apos;ll prepare a tailored
                proposal with properties that match your needs perfectly.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                >
                  <span>Request a Custom Proposal</span>
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
            <div className="mb-16">
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                Monaco Luxury Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl">
                Experience unparalleled luxury and comfort with our premium
                selection of properties in Monaco, perfect for exclusive stays
                in the heart of the Principality.
              </p>
            </div>

            {/* Property Listings - Full Width Cards */}
            <div className="space-y-24">
              {propertyCategories[0].properties.map((property) => (
                <div key={property.id} className="bg-white overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Property Images */}
                    <div className="relative h-[600px] overflow-hidden rounded-lg">
                      <Image
                        src={property.images[0]}
                        alt={property.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-gray-900/80 text-white px-4 py-2 rounded-full text-sm">
                          {property.location}
                        </span>
                      </div>
                    </div>

                    {/* Property Info */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-medium mb-6 text-gray-900">
                        {property.name}
                      </h3>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {property.highlights?.map((highlight, index) => (
                          <div key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-gray-900 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-lg text-gray-700">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-8 mb-8">
                        <div className="flex flex-col items-center">
                          <span className="text-4xl font-light text-gray-900">
                            {property.guests}
                          </span>
                          <span className="text-gray-600 uppercase text-sm tracking-wider mt-2">
                            GUESTS
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-4xl font-light text-gray-900">
                            {property.bedrooms}
                          </span>
                          <span className="text-gray-600 uppercase text-sm tracking-wider mt-2">
                            BEDROOMS
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-4xl font-light text-gray-900">
                            {property.bathrooms}
                          </span>
                          <span className="text-gray-600 uppercase text-sm tracking-wider mt-2">
                            BATHROOMS
                          </span>
                        </div>
                        {property.sqm && (
                          <div className="flex flex-col items-center">
                            <span className="text-4xl font-light text-gray-900">
                              {property.sqm}
                            </span>
                            <span className="text-gray-600 uppercase text-sm tracking-wider mt-2">
                              SQM
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-700 mb-8 text-lg leading-relaxed line-clamp-4">
                        {property.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => setSelectedProperty(property)}
                          className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                        >
                          <span>View Details</span>
                          <ArrowRight size={18} />
                        </button>
                        <Link
                          href="#contact-form"
                          className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
                        >
                          <span>Inquire About This Property</span>
                          <MessageSquare size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Property List CTA */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-light mb-6">
                  Access Our Full Property Portfolio
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  What you see here is just a small sample of our extensive
                  property portfolio. We have tens of luxury properties
                  available throughout Monaco and the French Riviera, many of
                  which are not publicly listed for privacy and exclusivity
                  reasons.
                </p>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Whether you&apos;re looking for a budget-friendly option or
                  the most exclusive luxury experience, our diverse portfolio
                  can accommodate your needs. Contact our team today for a
                  tailored proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-base font-medium"
                  >
                    <span>Request Full Property List</span>
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
              <div className="lg:w-1/2 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/photos/homepage/apartment1/vue-cap-martin-1733152890.jpg"
                  alt="Luxury Monaco Property"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-2xl font-medium text-white mb-2 block">
                    Discover Your Dream Property
                  </span>
                  <p className="text-white/90 text-lg">
                    We have the perfect match for your requirements and budget
                  </p>
                </div>
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
                  Contact Us About Our Properties
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Fill out the form below and our team will contact you with a
                  tailored selection of properties based on your requirements
                  and budget.
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
                </div>
              </div>

              <div>
                {submitSuccess ? (
                  <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
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
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
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
                          <span>Request Property Information</span>
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
                onClick={() => setSelectedProperty(null)}
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
                              setCurrentImageIndex((prev) =>
                                prev === 0
                                  ? selectedProperty.images.length - 1
                                  : prev - 1
                              );
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) =>
                                prev === selectedProperty.images.length - 1
                                  ? 0
                                  : prev + 1
                              );
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
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {selectedProperty.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700"
                          >
                            <Check
                              size={18}
                              className="mr-2 text-green-600 flex-shrink-0 mt-1"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="#contact-form"
                        onClick={() => setSelectedProperty(null)}
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
}
