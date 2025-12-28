import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import NewsletterForm from "@/components/NewsletterForm";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

const Article = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-serif text-3xl text-display">Article not found</h1>
          <Link to="/" className="mt-4 inline-block text-muted-foreground hover:text-display link-underline">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container animate-fade-in">
        <div className="py-8">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-display transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </Link>
        </div>

        <header className="pb-8 border-b border-border-light">
          <time className="text-xs uppercase tracking-widest text-muted-foreground">
            {article.date} · {article.readTime}
          </time>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-display leading-tight">
            {article.title}
          </h1>
        </header>

        <div className="py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-body leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <section className="border-t border-border-light">
          <NewsletterForm />
        </section>
      </article>
    </Layout>
  );
};

export default Article;
