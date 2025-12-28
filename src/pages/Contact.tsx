import Layout from "@/components/Layout";
import { Twitter, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <section className="py-12 md:py-20 max-w-2xl animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-display">
            Contact
          </h1>
          
          <div className="mt-12 space-y-6 text-lg text-body leading-relaxed">
            <p>
              I appreciate hearing from readers. Whether you have a question, a thought to share, 
              or just want to say hello—don't hesitate to reach out.
            </p>
            
            <p>
              The best way to contact me is through Twitter. I try to respond to every message, 
              though it might take a few days.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <a
              href="https://twitter.com/dashlem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-border-light rounded-lg hover:border-border-dark transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full">
                <Twitter className="w-5 h-5 text-display transition-transform group-hover:scale-110" />
              </div>
              <div>
                <p className="font-medium text-display">Twitter</p>
                <p className="text-sm text-muted-foreground">@dashlem</p>
              </div>
            </a>

            <a
              href="mailto:hello@dashlem.com"
              className="flex items-center gap-4 p-6 border border-border-light rounded-lg hover:border-border-dark transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full">
                <Mail className="w-5 h-5 text-display transition-transform group-hover:scale-110" />
              </div>
              <div>
                <p className="font-medium text-display">Email</p>
                <p className="text-sm text-muted-foreground">hello@dashlem.com</p>
              </div>
            </a>
          </div>

          <div className="mt-16 p-8 bg-secondary rounded-lg">
            <h2 className="font-serif text-xl font-medium text-display">
              A note on responses
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              I read every message I receive. Due to volume, I may not be able to respond to everything, 
              but I do my best. Thoughtful messages about my writing tend to get priority.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
