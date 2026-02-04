import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -120 && rect.top <= 200;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      {/* 🔥 BLUR LAYER (isolated) */}
      <div
        className="
          absolute inset-0
          bg-[#0f0720]/70
          backdrop-blur-xl
          supports-[backdrop-filter]:bg-[#0f0720]/50
        "
      />

      {/* ✅ CONTENT LAYER (NO BLUR) */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-2xl font-bold text-gradient tracking-tight"
        >
          Dharshan L
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-medium transition-colors
                ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }
              `}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-accent rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 w-full z-40 transition-all duration-300
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        {/* Blur background */}
        <div className="absolute inset-0 bg-[#0f0720]/70 backdrop-blur-xl" />

        {/* Menu content */}
        <div className="relative p-6 flex flex-col space-y-4">
          {NAV_ITEMS.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-lg font-medium transition-colors
                ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-400"
                    : "text-gray-300"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
