import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy | Riviera Stays</title>
        <meta
          name="description"
          content="Cookie Policy for Riviera Stays - Learn how we use cookies and similar technologies on our luxury property rental website."
        />
      </Head>
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <section className="mb-8">
          <p className="mb-4">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="mb-4">
            This Cookie Policy explains how Riviera Stays (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
            technologies to recognize you when you visit our website at{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              riviera-stays.com
            </Link>
            . It explains what these technologies are and why we use them, as
            well as your rights to control our use of them.
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
            Cookies set by the website owner (in this case, Riviera Stays) are
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
              secure areas. Without these cookies, services you have asked for,
              like booking information, cannot be provided.
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
              website for you. We use analytics cookies such as Google Analytics
              to help us understand how visitors engage with our properties.
            </li>
            <li className="mb-2">
              <strong>Advertising cookies:</strong> These cookies are used to
              make advertising messages more relevant to you. They perform
              functions like preventing the same ad from continuously
              reappearing, ensuring that ads are properly displayed for
              advertisers, and in some cases selecting advertisements that are
              based on your interests.
            </li>
            <li className="mb-2">
              <strong>Social Media cookies:</strong> These cookies are used to
              enable you to share pages and content that you find interesting on
              our website through third-party social networking and other
              websites. These cookies may also be used for advertising purposes.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies we use</h2>
          <p className="mb-4">Our website uses the following cookies:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mb-6">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                    Cookie Name
                  </th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                    Purpose
                  </th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                    Duration
                  </th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-700 border-b">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 text-sm">_ga</td>
                  <td className="py-3 px-4 text-sm">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="py-3 px-4 text-sm">2 years</td>
                  <td className="py-3 px-4 text-sm">Analytics</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4 text-sm">_gid</td>
                  <td className="py-3 px-4 text-sm">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="py-3 px-4 text-sm">24 hours</td>
                  <td className="py-3 px-4 text-sm">Analytics</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 text-sm">_gat</td>
                  <td className="py-3 px-4 text-sm">
                    Used by Google Analytics to throttle request rate
                  </td>
                  <td className="py-3 px-4 text-sm">1 minute</td>
                  <td className="py-3 px-4 text-sm">Analytics</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4 text-sm">cookieconsent_status</td>
                  <td className="py-3 px-4 text-sm">
                    Used to store your cookie consent preferences
                  </td>
                  <td className="py-3 px-4 text-sm">1 year</td>
                  <td className="py-3 px-4 text-sm">Necessary</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 text-sm">session_id</td>
                  <td className="py-3 px-4 text-sm">
                    Used to maintain your session while browsing our site
                  </td>
                  <td className="py-3 px-4 text-sm">Session</td>
                  <td className="py-3 px-4 text-sm">Necessary</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            Please note that this list may be updated as we improve our website
            and use additional cookies. The exact cookies used may change over
            time, but we will always keep this Cookie Policy updated with the
            latest information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How can you control cookies?
          </h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie preferences in the following ways:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="mb-4">
              <strong>Browser settings:</strong> You can set or amend your web
              browser controls to accept or refuse cookies. If you choose to
              reject cookies, you may still use our website though your access
              to some functionality and areas of our website may be restricted.
              As the means by which you can refuse cookies through your web
              browser controls vary from browser-to-browser, you should visit
              your browser's help menu for more information.
            </li>
            <li className="mb-4">
              <strong>Cookie consent tool:</strong> We provide a cookie consent
              banner when you first visit our website, allowing you to accept or
              reject different categories of cookies. Essential cookies cannot
              be rejected as they are strictly necessary to provide you with the
              basic functionality of our website.
            </li>
            <li className="mb-4">
              <strong>Specific opt-out pages:</strong> For cookies set by third
              parties, you can also manage your consent by visiting the relevant
              opt-out pages:
              <ul className="list-disc ml-6 mt-2">
                <li className="mb-1">
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Analytics opt-out browser add-on
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.youronlinechoices.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Your Online Choices (for EU citizens)
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Network Advertising Initiative opt-out page
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Do Not Track</h2>
          <p className="mb-4">
            Some browsers have a &quot;Do Not Track&quot; feature that lets you
            tell websites that you do not want to have your online activities
            tracked. These features are not yet uniform, so we do not currently
            respond to such signals. However, you can use the range of other
            tools we provide to control data collection and use, including the
            ability to opt out of receiving targeted advertising from us as
            described above.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Children</h2>
          <p className="mb-4">
            Our website is not directed at children under 16, and we do not
            knowingly collect personal data from children through cookies. If
            you are a parent or guardian and believe that your child has
            provided personal information to us, please contact us so that we
            can delete the information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Updates to this Cookie Policy
          </h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal, or regulatory reasons. Please therefore revisit
            this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
          </p>
          <p className="mb-4">
            The date at the top of this Cookie Policy indicates when it was last
            updated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">More Information</h2>
          <p className="mb-4">
            For more detailed information about how we use personal data
            collected through cookies and similar technologies, please refer to
            our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or other
            technologies, please contact us:
          </p>
          <ul className="list-none ml-6">
            <li className="mb-2">
              <strong>Email:</strong> info@riviera-stays.com
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> +377 643917618
            </li>
            <li className="mb-2">
              <strong>Address:</strong> 7 avenue des Papalins, 98000 Monaco
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
