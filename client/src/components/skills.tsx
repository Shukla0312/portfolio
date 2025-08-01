import { Bot, Code, Layers, Settings, BarChart, Database, FlaskConical } from "lucide-react";
import { SiSlack } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Automation Tools",
      icon: Bot,
      color: "primary",
      skills: [
        { name: "Playwright", level: 95, proficiency: "Expert" },
        { name: "Cypress", level: 95, proficiency: "Expert" },
        { name: "Selenium WebDriver", level: 90, proficiency: "Advanced" },
        { name: "Postman", level: 85, proficiency: "Advanced" }
      ]
    },
    {
      title: "Programming Languages", 
      icon: Code,
      color: "emerald-500",
      skills: [
        { name: "JavaScript", level: 90, proficiency: "Advanced" },
        { name: "Core Java", level: 85, proficiency: "Advanced" },
        { name: "SQL", level: 75, proficiency: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Methodologies",
      icon: Layers, 
      color: "accent",
      skills: [
        { name: "BDD with Cucumber", level: 90, proficiency: "Advanced" },
        { name: "Page Object Model", level: 95, proficiency: "Expert" },
        { name: "Agile/Scrum", level: 95, proficiency: "Expert" },
        { name: "TestNG", level: 85, proficiency: "Advanced" }
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: Settings,
      color: "orange-500", 
      skills: [
        { name: "Jenkins", level: 85, proficiency: "Advanced" },
        { name: "GitHub Actions", level: 75, proficiency: "Intermediate" },
        { name: "Git & GitHub", level: 90, proficiency: "Advanced" },
        { name: "AWS Services", level: 70, proficiency: "Intermediate" }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Allure Reporting", icon: BarChart, color: "primary" },
    { name: "DynamoDB", icon: Database, color: "emerald-500" },
    { name: "JMeter", icon: FlaskConical, color: "accent" },
    { name: "Slack Integration", icon: SiSlack, color: "orange-500" }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-primary";
    if (level >= 80) return "bg-accent";
    return "bg-yellow-500";
  };

  return (
    <section id="skills" className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive expertise across automation tools, frameworks, and methodologies built over a decade of hands-on experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <IconComponent className={`text-${category.color} mr-3 w-6 h-6`} />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.proficiency}</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <div 
                          className={`${getProgressColor(skill.level)} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className={`bg-${skill.color}/10 rounded-lg p-4 text-center`}>
                <IconComponent className={`text-${skill.color} w-8 h-8 mx-auto mb-2`} />
                <h4 className="font-semibold text-slate-900 dark:text-white">{skill.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
