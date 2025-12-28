import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <Layout>
      <div className="container">
        {/* Hero Section */}
        <section className="py-12 md:py-20 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-display leading-tight max-w-3xl text-balance">
            Essays on design, technology, and the pursuit of meaning.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-body max-w-2xl leading-relaxed">
            I'm dashlem, and I write about the ideas that shape my thinking. 
            These are my attempts to make sense of the world.
          </p>
        </section>

        {/* Articles Section */}
        <section className="py-8 border-t border-border-light">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Latest Essays
          </h2>
          
          <div className="space-y-0">
            {articles.map((article, index) => (
              <div 
                key={article.slug} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="border-t border-border-light">
          <NewsletterForm />
        </section>
      </div>
    </Layout>
  );
};

export default Index;
