import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  const education = {
    degree: "B.Tech in Information Technology",
    university: "SRM University",
    graduationYear: "June 2015",
    location: "Delhi NCR, India",
    achievements: [
      "Strong foundation in computer science and programming fundamentals",
      "Specialized coursework in software testing and quality assurance",
      "Participated in technical projects and coding competitions",
      "Developed early expertise in programming languages and databases"
    ]
  };

  const certifications = [
    {
      name: "Test Automation Specialist",
      issuer: "Infosys Limited",
      year: "2016",
      icon: Award,
      color: "primary"
    },
    {
      name: "Agile Testing Certification",
      issuer: "Successive Technologies",
      year: "2023",
      icon: Award,
      color: "emerald-500"
    },
    {
      name: "Cypress Testing Framework",
      issuer: "Professional Development",
      year: "2022",
      icon: Award,
      color: "accent"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education & Certifications</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Strong academic foundation in Information Technology with continuous professional development in testing and automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="text-primary mr-3 w-7 h-7" />
              Academic Background
            </h3>
            
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{education.degree}</h4>
                <h5 className="text-lg font-semibold text-primary mb-3">{education.university}</h5>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{education.graduationYear}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="font-semibold text-slate-900 dark:text-white mb-3">Key Highlights</h6>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-slate-600 dark:text-slate-300">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <Award className="text-accent mr-3 w-7 h-7" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-12 h-12 bg-${cert.color}/10 rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className={`text-${cert.color} w-6 h-6`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{cert.name}</h4>
                        <p className="text-slate-600 dark:text-slate-300 mb-1">{cert.issuer}</p>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Continuous Learning */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Continuous Learning</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Actively pursuing advanced certifications in cloud testing, AI-assisted development tools, 
                and modern automation frameworks to stay current with industry trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}