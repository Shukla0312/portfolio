import { Briefcase, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Specialist Engineer",
      company: "Successive Technologies",
      location: "Noida, India",
      period: "08/2022 - Present",
      color: "primary",
      projects: [
        {
          name: "AKQA Hesta",
          achievements: [
            "Implemented UI automation using Playwright with BDD framework and Allure reporting",
            "Utilized Cursor AI to accelerate automation script development quality",
            "Performed content validation on AEM and Contentstack platforms"
          ]
        },
        {
          name: "Paya CP",
          achievements: [
            "Improved test coverage from 10% to 55% by clearing automation backlog",
            "Scaled automation suite to 500+ test cases with CI/CD integration", 
            "Designed REST API automation framework using Cypress from scratch"
          ]
        }
      ]
    },
    {
      title: "Senior QA Engineer",
      company: "Atidiv India Private Limited",
      location: "Remote",
      period: "01/2022 - 07/2022",
      color: "accent",
      projects: [
        {
          name: "Voyage SMS",
          achievements: [
            "Implemented Cypress Mochawesome reporting with Slack integration",
            "Increased test coverage from 35% to 75%, reducing regression testing time",
            "Delivered weekly test summaries and custom dashboards for quality metrics"
          ]
        }
      ]
    },
    {
      title: "Senior QA Engineer", 
      company: "Exzeo India Private Limited",
      location: "Noida, India",
      period: "04/2019 - 12/2021",
      color: "emerald-600",
      projects: [
        {
          name: "Claim Colony Books & Financials",
          achievements: [
            "Maintained Cypress automation framework for ReactJS application",
            "Performed end-to-end GraphQL API testing with dynamic test data",
            "Set up CI/CD pipelines in Jenkins for automated test execution"
          ]
        }
      ]
    },
    {
      title: "Test Engineer",
      company: "Infosys Limited", 
      location: "Pune, India",
      period: "07/2015 - 04/2019",
      color: "orange-600",
      projects: [
        {
          name: "AT&T and Cox Communication",
          achievements: [
            "Developed automated test scripts using Java, TestNG, and Selenium WebDriver",
            "Reduced regression testing time by over 50% through automation",
            "Conducted cross-platform testing on Android, iOS, and web browsers"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A decade of delivering quality solutions across leading technology companies and diverse industry verticals.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600"></div>

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-${experience.color} rounded-full border-4 border-white shadow-md flex items-center justify-center`}>
                  <Briefcase className="text-white w-4 h-4" />
                </div>
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.title}</h3>
                      <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">{experience.period}</span>
                    </div>
                    <h4 className={`text-lg font-semibold text-${experience.color} mb-2`}>{experience.company}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{experience.location}</p>
                    
                    {experience.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className={`${projectIndex > 0 ? 'mt-6' : ''} p-4 bg-slate-50 dark:bg-slate-700 rounded-lg`}>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-3">Project: {project.name}</h5>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <CheckCircle className="text-emerald-500 mr-2 mt-1 flex-shrink-0 w-4 h-4" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
