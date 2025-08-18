import { Download, MapPin, Briefcase, Check } from "lucide-react";
import headshot from "@assets/headshot.jpg";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rahul_Shukla_Resume.pdf';
    link.download = 'Rahul_Shukla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Senior QA Engineer with{" "}
              <span className="text-primary">10+ Years</span> Experience
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Specialized in UI/API automation using Cypress, Selenium, and Playwright. 
              Proven track record in telecom, insurance, and finance sectors with expertise 
              in test strategy, risk mitigation, and quality improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="flex items-center">
                <MapPin className="text-slate-400 dark:text-slate-500 mr-2 h-5 w-5" />
                <span className="text-slate-600 dark:text-slate-300">New Delhi, India</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-slate-400 dark:text-slate-500 mr-2 h-5 w-5" />
                <span className="text-slate-600 dark:text-slate-300">Available for new opportunities</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <img
                src={headshot}
                alt="Rahul Shukla headshot"
                className="w-full h-full rounded-full object-cover ring-4 ring-white dark:ring-slate-800"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center">
                <Check className="text-white w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
