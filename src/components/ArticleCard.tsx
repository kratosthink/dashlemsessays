import { Link } from "react-router-dom";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const ArticleCard = ({ slug, title, excerpt, date, readTime }: ArticleCardProps) => {
  return (
    <article className="group py-8 first:pt-0 border-b border-border-light last:border-b-0">
      <Link to={`/article/${slug}`} className="block">
        <time className="text-xs uppercase tracking-widest text-muted-foreground">
          {date} · {readTime}
        </time>
        
        <h2 className="mt-3 font-serif text-2xl md:text-3xl font-medium text-display leading-tight transition-colors group-hover:text-muted-foreground">
          {title}
        </h2>
        
        <p className="mt-4 text-body leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <span className="inline-block mt-4 text-sm font-medium text-display link-underline">
          Read more
        </span>
      </Link>
    </article>
  );
};

export default ArticleCard;
