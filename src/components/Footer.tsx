export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shreya Devagiri. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Built with <span className="text-primary">♥</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
};
