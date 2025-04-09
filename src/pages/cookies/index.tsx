import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy | Riviera Yachts</title>
        <meta
          name="description"
          content="Cookie Policy for Riviera Yachts - Learn how we use cookies on our website."
        />
      </Head>
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <section className="mb-8">
          <p className="mb-4">Last Updated: June 1, 2024</p>
          <p className="mb-4">
            This Cookie Policy explains how Riviera Yachts uses cookies and
            similar technologies to recognize you when you visit our website. It
            explains what these technologies are and why we use them, as well as
            your rights to control our use of them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information.
          </p>
          <p className="mb-4">
            Cookies set by the website owner (in this case, Riviera Yachts) are
            called &quot;first-party cookies&quot;. Cookies set by parties other
            than the website owner are called &quot;third-party cookies&quot;.
            Third-party cookies enable third-party features or functionality to
            be provided on or through the website (e.g., advertising,
            interactive content and analytics). The parties that set these
            third-party cookies can recognize your computer both when it visits
            the website in question and also when it visits certain other
            websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Why do we use cookies?
          </h2>
          <p className="mb-4">
            We use first-party and third-party cookies for several reasons. Some
            cookies are required for technical reasons in order for our website
            to operate, and we refer to these as &quot;essential&quot; or
            &quot;strictly necessary&quot; cookies. Other cookies also enable us
            to track and target the interests of our users to enhance the
            experience on our website. Third parties serve cookies through our
            website for advertising, analytics and other purposes.
          </p>
          <p className="mb-4">
            The specific types of first and third-party cookies served through
            our website and the purposes they perform are described below:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <strong>Essential website cookies:</strong> These cookies are
              strictly necessary to provide you with services available through
              our website and to use some of its features, such as access to
              secure areas.
            </li>
            <li className="mb-2">
              <strong>Performance and functionality cookies:</strong> These
              cookies are used to enhance the performance and functionality of
              our website but are non-essential to their use. However, without
              these cookies, certain functionality may become unavailable.
            </li>
            <li className="mb-2">
              <strong>Analytics and customization cookies:</strong> These
              cookies collect information that is used either in aggregate form
              to help us understand how our website is being used or how
              effective our marketing campaigns are, or to help us customize our
              website for you.
            </li>
            <li className="mb-2">
              <strong>Advertising cookies:</strong> These cookies are used to
              make advertising messages more relevant to you. They perform
              functions like preventing the same ad from continuously
              reappearing, ensuring that ads are properly displayed for
              advertisers, and in some cases selecting advertisements that are
              based on your interests.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How can you control cookies?
          </h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences in
            the Cookie Consent Manager. The Cookie Consent Manager allows you to
            select which categories of cookies you accept or reject. Essential
            cookies cannot be rejected as they are strictly necessary to provide
            you with services.
          </p>
          <p className="mb-4">
            The Cookie Consent Manager can be found in the notification banner
            and on our website. If you choose to reject cookies, you may still
            use our website though your access to some functionality and areas
            of our website may be restricted. You may also set or amend your web
            browser controls to accept or refuse cookies.
          </p>
          <p className="mb-4">
            The specific types of first and third-party cookies served through
            our website and the purposes they perform are described in the table
            below:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How often will we update this Cookie Policy?
          </h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal or regulatory reasons. Please therefore re-visit
            this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
          </p>
          <p className="mb-4">
            The date at the top of this Cookie Policy indicates when it was last
            updated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or other
            technologies, please contact us:
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">By email: info@rivierayachts.com</li>
            <li className="mb-2">By phone: +33 (0) 4 93 63 18 08</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
