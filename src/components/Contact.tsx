import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="font-mono text-primary text-sm mb-4 block">
            05. Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
          </p>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:shreyabdevagiri@gmail.com"
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-foreground font-medium text-sm">shreyabdevagiri@gmail.com</p>
            </a>

            <div className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="text-foreground font-medium">Dallas, Texas</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl" asChild className="mb-12">
            <a href="mailto:shreyabdevagiri@gmail.com">
              Say Hello
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/ShreyaBDevagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-devagiri-4b9a12216/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
