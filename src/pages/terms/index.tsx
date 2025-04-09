import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Riviera Stays</title>
        <meta
          name="description"
          content="View the terms of service for Riviera Stays, detailing the conditions for using our luxury property rental services."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-12 font-light">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <div className="prose max-w-none prose-gray">
              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Introduction
                </h2>
                <p>
                  Welcome to Riviera Stays. These terms and conditions govern
                  your use of our website and services. By accessing our website
                  or using our services, you agree to these terms. Please read
                  them carefully.
                </p>
                <p>
                  These Terms of Service (&quot;Terms&quot;) constitute a
                  legally binding agreement between you and Riviera Stays
                  governing your access to and use of the website and services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Use of Services
                </h2>
                <p>
                  Riviera Stays provides a platform for users to browse, inquire
                  about, and book luxury property rentals. Our services include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                  <li>Luxury property booking and inquiry services</li>
                  <li>
                    Information about property specifications, availability, and
                    pricing
                  </li>
                  <li>
                    Communication channels between clients and our property
                    specialists
                  </li>
                  <li>
                    Informational content about Monaco and French Riviera
                    properties and experiences
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Eligibility
                </h2>
                <p>
                  You must be at least 18 years old and able to form legally
                  binding contracts to use our services. By using our services,
                  you represent and warrant that you meet these requirements.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Account Registration
                </h2>
                <p>
                  Some features of our services may require you to register an
                  account. When you register, you agree to provide accurate,
                  current, and complete information and to update such
                  information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your account password and
                  for all activities that occur under your account. You agree to
                  notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Booking and Payments
                </h2>
                <p>
                  All property rental bookings are subject to availability and
                  confirmation. Prices are as quoted on our website or as
                  otherwise communicated to you.
                </p>
                <p>
                  A deposit is required to confirm your booking, with the
                  balance due before the rental date as specified in your rental
                  agreement. Payment terms will be detailed in your booking
                  confirmation.
                </p>
                <p>
                  Cancellation policies vary depending on the property and
                  rental period. Specific cancellation terms will be provided in
                  your rental agreement.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Code of Conduct
                </h2>
                <p>When using our services, you agree not to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>
                    Use our services for any illegal or unauthorized purpose
                  </li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>
                    Attempt to gain unauthorized access to any part of our
                    services
                  </li>
                  <li>
                    Engage in any activity that could damage, disable, or impair
                    our services
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Intellectual Property
                </h2>
                <p>
                  All content on our website, including text, graphics, logos,
                  images, audio, video, and software, is the property of Riviera
                  Stays or its content suppliers and is protected by
                  international copyright laws.
                </p>
                <p>
                  You may not reproduce, modify, distribute, display, perform,
                  or otherwise use any of the content without our prior written
                  permission.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Disclaimer of Warranties
                </h2>
                <p>
                  Our services are provided on an &quot;as is&quot; and &quot;as
                  available&quot; basis. Riviera Stays makes no representations
                  or warranties of any kind, express or implied, regarding the
                  operation of our services or the information, content,
                  materials, or products included on our website.
                </p>
                <p>
                  To the full extent permissible by applicable law, Riviera
                  Stays disclaims all warranties, express or implied, including
                  but not limited to, implied warranties of merchantability and
                  fitness for a particular purpose.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Limitation of Liability
                </h2>
                <p>
                  Riviera Stays will not be liable for any damages of any kind
                  arising from the use of our services, including but not
                  limited to direct, indirect, incidental, punitive, and
                  consequential damages.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Riviera
                  Stays, its officers, directors, employees, agents, and
                  suppliers from and against all losses, expenses, damages, and
                  costs, including reasonable attorneys&apos; fees, resulting
                  from any violation of these Terms or any activity related to
                  your account.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Termination
                </h2>
                <p>
                  We may terminate or suspend your access to our services
                  immediately, without prior notice or liability, for any
                  reason, including without limitation if you breach these
                  Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of Monaco, without regard to its conflict of law
                  provisions.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days&apos; notice prior to any new terms taking effect.
                </p>
                <p>
                  Your continued use of our services after any changes to these
                  Terms constitutes your acceptance of such changes.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <div className="mt-4">
                  <p>
                    <strong>Riviera Stays</strong>
                  </p>
                  <p>Monte Carlo, Monaco</p>
                  <p>Email: legal@rivierastays.com</p>
                  <p>Phone: +377 97 97 97 97</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
