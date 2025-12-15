const skillCategories = [
  {
    title: "Programming & Frameworks",
    skills: ["Python", "C", "C++", "SQL", "Shell/Bash"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Linux", "Docker", "Jenkins", "Git", "GitHub", "CI/CD", "Bazel", "Grafana", "MLOps"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "OpenCV", "YOLOv5", "XAI", "Computer Vision"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              04. Skills & Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-foreground border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">
              Awards & <span className="text-gradient">Recognition</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Implemented Patent Award 2025",
                "Hackathon Winner: MB Smart Cafe",
                "Best Debutant College Award",
                "Third Rank, B.E. Computer Science",
              ].map((award, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gradient-card border border-border text-center hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
