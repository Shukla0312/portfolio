import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { href: "hero", label: "Home" },
    { href: "about", label: "About" },
    { href: "experience", label: "Experience" },
    { href: "education", label: "Education" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? "bg-white/98 dark:bg-slate-900/98 backdrop-blur-sm" : "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm"
    } border-b border-slate-200 dark:border-slate-700`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Rahul Shukla</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">QA Engineer</p>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all duration-300 relative overflow-hidden group px-2 py-1 rounded-md hover:bg-primary/5 dark:hover:bg-primary/10"
                >
                  {link.label}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10 rounded-lg hover:shadow-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
