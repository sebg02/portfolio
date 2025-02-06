export const Navbar = ({ t, switchLanguage }) => {
  const handleNavLinkClick = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar.classList.contains("show")) {
      new bootstrap.Collapse(navbar).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          {t.menus.home}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { href: "#about", label: t.menus.about },
              { href: "#skills", label: t.menus.skills },
              { href: "#studies", label: t.menus.studies },
              { href: "#experience", label: t.menus.experience },
              { href: "#projects", label: t.menus.projects },
              { href: "#contact", label: t.menus.contact },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={item.href}
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🌍 {t.menus.language}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="languageDropdown"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => switchLanguage("es")}
                  >
                    🇪🇸 Español
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => switchLanguage("en")}
                  >
                    🇬🇧 English
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
