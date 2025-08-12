import { Mail, ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Education", href: "education" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
  ];

  const expertise = [
    "Test Automation",
    "API Testing", 
    "CI/CD Integration",
    "Team Leadership",
    "Quality Strategy"
  ];

  const socialLinks = [
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/rahul-shukla-qa/",
      label: "LinkedIn"
    },
    {
      icon: SiGithub,
      href: "https://github.com/Shukla0312",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:rahulshukla0312@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rahul Shukla</h3>
            <p className="text-slate-300 dark:text-slate-400 mb-4">
              Senior QA Engineer specializing in automation testing with 10+ years of experience 
              in delivering quality software solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-slate-300 dark:text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-white/20 rounded-lg p-2 hover:bg-white/10 cursor-pointer"
                    aria-label={link.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 dark:text-slate-400 hover:text-white transition-all duration-200 hover:underline underline-offset-4 decoration-white/60 hover:decoration-white cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-slate-300 dark:text-slate-400">
              {expertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-600 mt-8 pt-8 text-center">
          <p className="text-slate-400 dark:text-slate-500">
            &copy; 2025 Rahul Shukla. All rights reserved. | Built with passion for quality.
          </p>
        </div>
      </div>
    </footer>
  );
}
