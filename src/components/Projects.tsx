import { ExternalLink, Github, Cpu, Eye, Leaf } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Plant Leaf Disease Detection using XAI",
    description:
      "An Explainable AI model achieving 92% classification accuracy for plant disease diagnosis, with visual heatmaps and feature-level explanations.",
    icon: Leaf,
    tags: ["Python", "XAI", "Flask", "Machine Learning"],
    highlights: [
      "Curated dataset of 10,000+ plant leaf images",
      "92% classification accuracy with visual explanations",
      "Real-time health assessments in under 2 seconds",
    ],
    period: "Aug 2023 – Dec 2023",
  },
  {
    title: "Vision-Based Quality Control of TubeShaft",
    description:
      "An industrial defect detection system using YOLOv5, achieving 90%+ mAP for real-time quality inspections.",
    icon: Eye,
    tags: ["YOLOv5", "OpenCV", "Flask", "Roboflow"],
    highlights: [
      "Annotated 5,000+ industrial images",
      "90%+ mAP for defect detection",
      "Reduced manual quality-check time by 60%",
    ],
    period: "Sep 2022 – Jan 2023",
  },
  {
    title: "CI/CD Pipeline Self-Healing Tool",
    description:
      "Patent-pending automated recovery system for CI/CD pipelines, enabling rapid root cause analysis and self-healing capabilities.",
    icon: Cpu,
    tags: ["Python", "Jenkins", "Bazel", "GitLab CI"],
    highlights: [
      "Filed patent at Mercedes-Benz R&D",
      "Reduced MTTR by 65%",
      "Automated root cause analysis",
    ],
    period: "2024 - 2025",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              03. Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Things I've <span className="text-gradient">Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in DevOps, 
              Machine Learning, and Computer Vision.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Period */}
                <p className="text-xs font-mono text-muted-foreground mb-2">
                  {project.period}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
