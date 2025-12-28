import Layout from "@/components/Layout";
import { Twitter } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <section className="py-12 md:py-20 max-w-2xl animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-display">
            About
          </h1>
          
          <div className="mt-12 space-y-6 text-lg text-body leading-relaxed">
            <p>
              I'm dashlem—a writer, thinker, and perpetual student of life.
            </p>
            
            <p>
              This site is where I share my essays. They're explorations, not conclusions. 
              Attempts to make sense of design, technology, and what it means to live intentionally 
              in a world that often pushes us toward the opposite.
            </p>
            
            <p>
              I believe in simplicity over complexity, depth over breadth, and questions over answers. 
              The best ideas often come from sitting with uncertainty rather than rushing toward resolution.
            </p>
            
            <p>
              My writing is influenced by the belief that clear thinking leads to clear writing, 
              and that both require practice, patience, and a willingness to be wrong.
            </p>
            
            <p>
              When I'm not writing, you'll find me reading, walking, or staring out windows—
              all equally productive activities, in my view.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border-light">
            <h2 className="font-serif text-2xl font-medium text-display">
              Connect
            </h2>
            <p className="mt-4 text-body">
              The best way to reach me is on Twitter, where I share shorter thoughts and engage with ideas.
            </p>
            <a
              href="https://twitter.com/dashlem"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-display hover:text-muted-foreground transition-colors group"
            >
              <Twitter className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="link-underline">@dashlem</span>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
