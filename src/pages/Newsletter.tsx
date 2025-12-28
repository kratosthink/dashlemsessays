import Layout from "@/components/Layout";
import NewsletterForm from "@/components/NewsletterForm";

const Newsletter = () => {
  return (
    <Layout>
      <div className="container">
        <section className="py-20 md:py-32 animate-fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-display leading-tight">
              Join the Newsletter
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed">
              Every few weeks, I share an essay on design, technology, or the pursuit of a meaningful life. 
              No spam, no promotions—just thoughts worth reading.
            </p>
            
            <div className="mt-12">
              <NewsletterForm compact />
            </div>

            <div className="mt-16 pt-12 border-t border-border-light text-left">
              <h2 className="font-serif text-2xl font-medium text-display">
                What to expect
              </h2>
              <ul className="mt-6 space-y-4 text-body">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">—</span>
                  <span>Essays on simplicity, creativity, and intentional living</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">—</span>
                  <span>Thoughts on design and technology that matter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">—</span>
                  <span>Occasional book recommendations and curated links</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">—</span>
                  <span>No more than twice a month</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Newsletter;
