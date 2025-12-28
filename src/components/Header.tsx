import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Newsletter", path: "/newsletter" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="py-8 md:py-12">
      <div className="container">
        <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link 
            to="/" 
            className="font-serif text-2xl font-medium tracking-tight text-display transition-colors hover:text-muted-foreground"
          >
            dashlem
          </Link>
          
          <ul className="flex flex-wrap items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors link-underline ${
                    location.pathname === item.path
                      ? "text-display"
                      : "text-muted-foreground hover:text-display"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
