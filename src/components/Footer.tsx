import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Building,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { text: "Home", url: "/" },
        { text: "Properties", url: "/properties" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms of Service", url: "/terms" },
        { text: "Cookie Policy", url: "/cookies" },
      ],
    },
    {
      title: "Contact Us",
      items: [
        { icon: Phone, text: "+377 643917618", url: "tel:+377643917618" },
        {
          icon: Mail,
          text: "info@riviera-stays.com",
          url: "mailto:info@riviera-stays.com",
        },
        {
          icon: MessageSquare,
          text: "WhatsApp: +377 643917618",
          url: "https://wa.me/+377643917618",
        },
        { icon: MapPin, text: "7 avenue des Papalins, 98000 Monaco" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/rivierastays" },
    { icon: Instagram, url: "https://instagram.com/rivierastays" },
    { icon: Linkedin, url: "https://linkedin.com/company/rivierastays" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <div className="relative w-64 h-20">
                <div className="text-white text-6xl font-['Corinthia'] tracking-wide">
                  Riviera Stays
                </div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm max-w-xs font-light">
              Experience the epitome of luxury living in Monaco and the French
              Riviera with Riviera Stays. Specializing in premium short-term
              rentals for unforgettable stays.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-medium text-white">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
                {section.items?.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <li key={itemIndex}>
                      {item.url ? (
                        <a
                          href={item.url}
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-light text-sm"
                          target={
                            item.url.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.url.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          <Icon className="w-4 h-4 text-gray-400" />
                          <span>{item.text}</span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-gray-300 font-light text-sm">
                          <Icon className="w-4 h-4 text-gray-400" />
                          <span>{item.text}</span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-light">
              © {currentYear}{" "}
              <span className="font-['Corinthia'] text-2xl text-white">
                Riviera Stays
              </span>
              . All rights reserved.
            </p>
            <p className="text-gray-400 text-sm font-light">
              Luxury short-term rentals in Monaco and the French Riviera
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
