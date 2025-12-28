import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 mt-auto border-t border-border-light">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} dashlem. All rights reserved.
          </p>
          
          <a
            href="https://twitter.com/dashlem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-display group"
          >
            <Twitter className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>@dashlem</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
