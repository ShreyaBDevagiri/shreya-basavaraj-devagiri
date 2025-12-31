import { MapPin, GraduationCap, Award, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "Mercedes-Benz R&D",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "MS @ University of Texas at Dallas",
  },
  {
    icon: Award,
    label: "Achievement",
    value: "Patent Filed",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dallas, Texas",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              01. About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building the Future of{" "}
              <span className="text-gradient">DevOps & AI</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing my <span className="text-foreground font-medium">Master's in Computer Science at University of Texas at Dallas</span>, 
                specializing in <span className="text-foreground font-medium">Data ScienceIntelligent Systems, and Software Engineering</span>. 
                I am passionate about combining DevOps practices with AI to build intelligent, self-healing systems that enhance reliability, 
                efficiency, and scalability in modern software environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-foreground font-medium">Mercedes-Benz R&D India</span>, 
                I've had the privilege of working on cutting-edge automotive software, automating ECU testing, 
                and designing CI/CD pipelines that significantly improved build reliability and deployment efficiency. 
                This experience allowed me to apply DevOps principles at scale, integrate automation into complex systems, 
                and contribute to innovative software solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              I also developed an in-house <span className="text-foreground font-medium">patented AI tool, AI Bug Buster</span>, 
              for Mercedes-Benz R&D India. The tool performs intelligent root cause analysis of CI/CD pipeline failures, 
              identifies error patterns, and suggests actionable solutions. Developers can either use the recommendations 
              to manually resolve issues or enable automated fixes directly, significantly reducing downtime and 
              improving development efficiency.
            </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
                My core interests lie at the intersection of <span className="text-foreground font-medium">automation, cloud technologies, software engineering, and machine learning</span>, 
                 and I am eager to leverage these skills to deliver impactful, intelligent solutions in real-world applications.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
