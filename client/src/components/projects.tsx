import { Monitor, TrendingUp, MessageSquare, Database, Smartphone, Settings, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "AKQA Hesta Automation",
      description: "Playwright BDD framework with Allure reporting and AI-assisted development using Cursor AI.",
      icon: Monitor,
      gradient: "from-primary to-accent",
      period: "2022 - Present",
      technologies: ["Playwright", "BDD", "Allure"]
    },
    {
      title: "Paya CP Test Suite", 
      description: "Scaled automation from 10% to 55% coverage with 500+ test cases and CI/CD integration.",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500",
      period: "2022 - Present",
      technologies: ["Cypress", "API Testing", "CI/CD"]
    },
    {
      title: "Voyage SMS Platform",
      description: "E2E automation with Mochawesome reporting and real-time Slack notifications.",
      icon: MessageSquare,
      gradient: "from-accent to-blue-500", 
      period: "2022",
      technologies: ["Cypress", "Slack", "E2E"]
    },
    {
      title: "Claim Colony Financials",
      description: "ReactJS automation framework with GraphQL API testing and performance optimization.",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      period: "2019 - 2021", 
      technologies: ["ReactJS", "GraphQL", "JMeter"]
    },
    {
      title: "AT&T Telecom Testing",
      description: "Cross-platform automation with Selenium WebDriver reducing regression time by 50%.",
      icon: Smartphone,
      gradient: "from-orange-500 to-red-500",
      period: "2015 - 2019",
      technologies: ["Selenium", "TestNG", "Cross-Platform"]
    },
    {
      title: "Custom Test Framework",
      description: "Reusable automation framework with POM architecture and dynamic test data management.",
      icon: Settings,
      gradient: "from-indigo-500 to-purple-500",
      period: "Ongoing",
      technologies: ["Framework", "POM", "Reusable"]
    }
  ];

  const getTechColor = (tech: string) => {
    switch(tech) {
      case "Playwright": case "Cypress": case "Selenium": case "Framework": return "primary";
      case "BDD": case "E2E": case "TestNG": case "POM": return "emerald-600";
      case "API Testing": case "Slack": case "CI/CD": case "Cross-Platform": return "orange-600";
      case "Allure": case "JMeter": case "Reusable": return "accent";
      case "ReactJS": case "GraphQL": return "purple-600";
      default: return "slate-600";
    }
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
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-${getTechColor(tech)}/10 text-${getTechColor(tech)} text-sm rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{project.period}</span>
                    <button className="text-primary hover:text-blue-700 font-medium flex items-center">
                      View Details 
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Integration */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <SiGithub className="w-16 h-16 text-slate-700 dark:text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Explore More Projects</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Visit my GitHub profile to see more automation frameworks, testing utilities, and open-source contributions.
            </p>
            <a 
              href="https://github.com/rahulshukla0312" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              <SiGithub className="mr-2 w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
