import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: t("language_selector.en"), flag: "🇬🇧" },
    { code: "fr", name: t("language_selector.fr"), flag: "🇫🇷" },
    { code: "it", name: t("language_selector.it"), flag: "🇮🇹" },
  ];

  const changeLanguage = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Stop propagation to prevent the dropdown from closing when clicking inside it
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="relative" onClick={handleDropdownClick}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center py-2 px-4 text-gray-800 hover:text-gray-600 focus:outline-none"
        aria-label={t("language_selector.language")}
      >
        <Globe className="w-5 h-5 mr-1" />
        <span className="hidden md:inline ml-1">
          {t("language_selector.language")}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                  router.locale === language.code
                    ? "font-semibold bg-gray-50"
                    : ""
                }`}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
