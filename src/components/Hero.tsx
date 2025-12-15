import { ArrowDown, Github, Linkedin, Mail, Download, User } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 p-1 bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="w-full h-full rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  {/* Replace with actual photo by updating the src */}
                  <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-background animate-pulse" />
            </div>
          </div>

          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Hi, I'm{" "}
            <span className="text-gradient">Shreya Devagiri</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <span className="font-mono text-primary">DevOps Engineer</span> & 
            <span className="font-mono text-accent"> ML Enthusiast</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Building robust CI/CD pipelines, automating workflows, and exploring 
            the intersection of DevOps and Machine Learning. Currently pursuing 
            MS in Computer Science at UT Dallas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="/Shreya_Devagiri_Resume.pdf" download="Shreya_Devagiri_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com/Shreya Devagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ShreyaDevagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shreyabdevagiri@gmail.com"
              className="p-3 rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
