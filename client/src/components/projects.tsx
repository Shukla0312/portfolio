import { Monitor, TrendingUp, MessageSquare, Database, Smartphone, Settings, ArrowRight, ExternalLink, Calendar, Users, Target } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import React from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AKQA Hesta",
      description: "Playwright BDD framework with Allure reporting and AI-assisted development using Cursor AI.",
      detailedDescription: "Developed a comprehensive automation framework for AKQA's Hesta platform using Playwright with BDD methodology. Implemented AI-assisted test development using Cursor AI, reducing test creation time by 40%. Integrated Allure reporting for comprehensive test analytics and stakeholder visibility.",
      icon: Monitor,
      gradient: "from-primary to-accent",
      duration: "4 months",
      technologies: ["Playwright", "BDD", "Allure", "JavaScript", "Page Object Model", "GitHub Actions", "Agile/Scrum", "Postman", "AWS Services"],
      challenges: ["Complex UI interactions", "Dynamic content handling", "Cross-browser compatibility"],
      outcomes: ["40% reduction in test creation time", "95% test reliability", "Comprehensive reporting dashboard"],
      teamSize: "3-5 members",
      role: "Lead Automation Engineer"
    },
    {
      title: "Paya CP", 
      description: "Scaled automation from 10% to 55% coverage with 500+ test cases and CI/CD integration.",
      detailedDescription: "Led the transformation of Paya's payment processing platform testing from manual to automated. Built a scalable test suite covering critical payment flows, API integrations, and security validations. Achieved 55% automation coverage across the entire platform.",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500",
      duration: "30 months",
      technologies: ["Cypress", "API Testing", "CI/CD", "Jenkins", "Git & GitHub", "JavaScript", "SQL", "Postman", "Agile/Scrum", "TestNG"],
      challenges: ["Payment security compliance", "High transaction volumes", "Multi-currency support"],
      outcomes: ["55% automation coverage achieved", "500+ automated test cases", "Zero production defects in 6 months"],
      teamSize: "8-12 members",
      role: "Senior QA Engineer"
    },
    {
      title: "Voyage SMS Platform",
      description: "E2E automation with Mochawesome reporting and real-time Slack notifications.",
      detailedDescription: "Created end-to-end automation for Voyage's SMS platform ensuring reliable message delivery and user experience. Implemented real-time Slack notifications for test execution status and integrated Mochawesome reporting for detailed test analytics.",
      icon: MessageSquare,
      gradient: "from-accent to-blue-500", 
      duration: "6 months",
      technologies: ["Cypress", "Slack Integration", "E2E", "JavaScript", "GitHub Actions", "Postman", "Agile/Scrum", "Page Object Model", "AWS Services"],
      challenges: ["SMS delivery verification", "Real-time notifications", "Multi-carrier support"],
      outcomes: ["99.9% message delivery accuracy", "Real-time test monitoring", "Reduced manual testing by 70%"],
      teamSize: "4-6 members",
      role: "QA Automation Engineer"
    },
    {
      title: "Claim Colony Financials",
      description: "ReactJS automation framework with GraphQL API testing and performance optimization.",
      detailedDescription: "Developed a comprehensive testing framework for Claim Colony's financial platform using ReactJS. Implemented GraphQL API testing and performance optimization using JMeter. Ensured data integrity across complex financial calculations and reporting.",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      duration: "28 months",
      technologies: ["ReactJS", "GraphQL", "JMeter", "JavaScript", "Core Java", "SQL", "Postman", "Jenkins", "Agile/Scrum", "Page Object Model"],
      challenges: ["Financial data accuracy", "Complex business logic", "Performance under load"],
      outcomes: ["100% data accuracy in financial calculations", "50% improvement in API response times", "Comprehensive GraphQL schema validation"],
      teamSize: "6-10 members",
      role: "Senior QA Engineer"
    },
    {
      title: "AT&T Telecom Testing",
      description: "Cross-platform automation with Selenium WebDriver reducing regression time by 50%.",
      detailedDescription: "Built cross-platform automation framework for AT&T's telecom services using Selenium WebDriver. Implemented comprehensive regression testing that reduced testing cycles by 50%. Covered multiple platforms including web, mobile, and API testing.",
      icon: Smartphone,
      gradient: "from-orange-500 to-red-500",
      duration: "40 months",
      technologies: ["Selenium WebDriver", "TestNG", "Cross-Platform", "Core Java", "JavaScript", "SQL", "Jenkins", "Git & GitHub", "Agile/Scrum", "Page Object Model", "BDD with Cucumber"],
      challenges: ["Multi-platform compatibility", "Large-scale regression testing", "Telecom-specific requirements"],
      outcomes: ["50% reduction in regression time", "Cross-platform test coverage", "Improved test maintainability"],
      teamSize: "10-15 members",
      role: "QA Engineer"
    }
  ];

  const getTechColor = (tech: string) => {
    return "emerald-600";
  };

  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Showcase of automation frameworks and testing solutions developed across diverse industry domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Project screenshot placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <IconComponent className="text-white w-16 h-16" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-${getTechColor(tech)}/10 text-${getTechColor(tech)} text-sm rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300 text-sm rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{project.duration}</span>
                    <button 
                      onClick={() => setSelectedProject(index)}
                      className="text-primary hover:text-blue-700 font-medium flex items-center transition-colors duration-200"
                    >
                      View Details 
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Details Dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${projects[selectedProject].gradient} rounded-lg flex items-center justify-center`}>
                      {React.createElement(projects[selectedProject].icon, { className: "text-white w-8 h-8" })}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        {projects[selectedProject].title}
                      </DialogTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {projects[selectedProject].duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {projects[selectedProject].teamSize}
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {projects[selectedProject].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <DialogDescription className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Project Overview</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {projects[selectedProject].detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 bg-${getTechColor(tech)}/10 text-${getTechColor(tech)} text-sm rounded-full border border-${getTechColor(tech)}/20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Challenges</h4>
                      <ul className="space-y-1">
                        {projects[selectedProject].challenges.map((challenge, index) => (
                          <li key={index} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Outcomes</h4>
                      <ul className="space-y-1">
                        {projects[selectedProject].outcomes.map((outcome, index) => (
                          <li key={index} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogDescription>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* GitHub Integration */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <SiGithub className="w-16 h-16 text-slate-700 dark:text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Explore More Projects</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Visit my GitHub profile to see more automation frameworks, testing utilities, and open-source contributions.
            </p>
            <a 
              href="https://github.com/Shukla0312" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-slate-900/30 group cursor-pointer"
            >
              <SiGithub className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
