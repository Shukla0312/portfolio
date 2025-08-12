import { TrendingUp, Clock, Users } from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Increased Test Coverage by 450%",
      description: "Expanded automation coverage from 10% to 55% (a 4.5× increase) by developing 500+ automated test cases across multiple projects, enhancing release confidence and reducing manual effort.",
      color: "primary"
    },
    {
      icon: Clock,
      title: "Reduced Testing Time by 35%", 
      description: "Optimized automation frameworks and integrated CI/CD pipelines to cut execution time by over one-third, enabling faster feedback cycles and quicker releases.",
      color: "emerald-500"
    },
    {
      icon: Users,
      title: "Led & Mentored High-Performance QA Teams",
      description: "Guided cross-functional Agile teams and mentored junior QA engineers, improving test quality, coding standards, and collaboration across projects.",
      color: "accent"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate QA Engineer with a decade of experience delivering scalable automation 
            solutions and ensuring compliance with industry standards.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Professional Summary</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                With over 10 years of experience in Agile environments, I specialize in creating 
                robust automation frameworks using cutting-edge tools like Cypress, Selenium, and 
                Playwright. My expertise spans across diverse industries including telecom, insurance, 
                and finance.
              </p>
              <p>
                I have successfully led teams, mentored junior engineers, and delivered scalable 
                automation solutions that significantly reduced manual testing efforts while improving 
                overall product quality. My approach combines technical excellence with strategic 
                thinking to drive quality improvements across the entire development lifecycle.
              </p>
              <p>
                Currently serving as a Senior Specialist Engineer at Successive Technologies, I 
                continue to push the boundaries of test automation while fostering a culture of 
                quality and continuous improvement.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 bg-${achievement.color}/10 rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className={`text-${achievement.color} w-6 h-6`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{achievement.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
