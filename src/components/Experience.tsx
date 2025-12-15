import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Mercedes-Benz Research & Development India",
    location: "Bangalore, India",
    period: "Oct 2024 - Aug 2025",
    highlights: [
      "Automated ECU Testing on Embedded Hardware, reducing manual effort by 70% and validation time by 60%",
      "Implemented Automated Test Reporting with Real-Time Failure Notifications, reducing Defect Detection Time by 50%",
      "Designed and filed a Patent for a CI/CD Pipeline Recovery and Self-Healing Tool, reducing MTTR by 65%",
      "Led Build System Migration from CMake to Bazel, improving Build Throughput by 50%",
    ],
  },
  {
    title: "Student Intern",
    company: "Mercedes-Benz Research & Development India",
    location: "Bangalore, India",
    period: "Feb 2024 - Sep 2024",
    highlights: [
      "Built and optimized GitLab CI/CD pipelines for source control, test execution, and result reporting",
      "Developed Python and PowerShell automation scripts, reducing manual configuration time by 70%",
      "Designed SQL-based Grafana dashboards for Test Analytics and System Health Monitoring",
    ],
  },
];

const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "The University of Texas at Dallas",
    period: "Aug 2025 - May 2027",
    details: "Machine Learning, Computer Vision, Database Systems, Network Security",
  },
  {
    degree: "Bachelor of Engineering, Computer Science",
    school: "KLE Technological University, Hubli, India",
    period: "Dec 2020 - May 2024",
    details: "CGPA: 9.46/10 • Third Rank in Class",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              02. Experience & Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-gradient">Journey</span>
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <Building2 className="w-5 h-5 text-primary" />
              Work Experience
            </h3>
            
            <div className="relative pl-8 border-l-2 border-border space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-primary shadow-glow" />
                  
                  <div className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium mb-3">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
