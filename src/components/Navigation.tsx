import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Properties", url: "/properties" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <nav
      className={`${
        transparent
          ? "absolute top-0 left-0 right-0 z-50"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-64 h-20">
                {transparent ? (
                  <div className="text-white text-6xl font-['Corinthia'] tracking-wide">
                    Riviera Stays
                  </div>
                ) : (
                  <div className="text-gray-900 text-6xl font-['Corinthia'] tracking-wide">
                    Riviera Stays
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`text-sm font-medium transition-colors ${
                    transparent
                      ? "text-white hover:text-white/80"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
              <Link
                href="https://wa.me/+377643917618"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  transparent
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-green-600 text-white hover:bg-green-700"
                } transition-colors`}
              >
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                transparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors`}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.text}
                </Link>
              ))}
              <Link
                href="https://wa.me/+377643917618"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 mt-2 bg-green-600 text-white hover:bg-green-700 rounded-md transition-colors"
              >
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
