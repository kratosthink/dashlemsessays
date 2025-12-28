import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <Layout>
      <div className="container">
        <section className="py-12 md:py-20 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-display">
            Articles
          </h1>
          <p className="mt-4 text-lg text-body max-w-2xl leading-relaxed">
            A collection of essays on design, technology, and life. Each piece is an attempt to capture a thought worth sharing.
          </p>
        </section>

        <section className="pb-16 border-t border-border-light">
          <div className="pt-8 space-y-0">
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
      </div>
    </Layout>
  );
};

export default Articles;
