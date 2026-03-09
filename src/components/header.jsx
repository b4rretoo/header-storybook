import "./Header.css";

function Header({ title = "Storybook", links = ["Início", "Sobre"] }) {
  return (
    <header className="header">
      <div className="header__brand">
        {title}
      </div>

      <nav className="header__nav">
        {links.map((link, index) => (
          <a key={index} href="#" className="header__link">
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;