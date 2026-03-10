import { useState, useEffect } from "react";
import { Menu, X, FlaskConical } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router";

const navLinks = [
  { label: "Főoldal", href: "#hero" },
  { label: "Bemutatkozás", href: "#about" },
  { label: "Szolgáltatások", href: "#services" },
  { label: "Referenciák", href: "#portfolio" },
  { label: "Kapcsolat", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const isHome = location.pathname === "/";
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home, then scroll after load
      navigate("/", { state: { scrollTo: href } });
    }
  };

  // After navigating home, scroll to the target section
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo && location.pathname === "/") {
      setTimeout(() => {
        const el = document.querySelector(state.scrollTo!);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <header
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(187,255,99,0.12)" : "none",
        transition: "all 0.3s ease",
        fontFamily: "'Inter', sans-serif",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          style={{ textDecoration: "none" }}
        >
          <FlaskConical size={24} style={{ color: "#BBFF63" }} strokeWidth={2} />
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              fontSize: "1.125rem",
            }}
          >
            Chem<span style={{ color: "#BBFF63" }}>Lab</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#BBFF63")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#quote")}
            style={{
              background: "#BBFF63",
              color: "#0A0A0A",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              borderRadius: "6px",
              padding: "8px 20px",
              transition: "opacity 0.2s ease",
              border: "none",
              cursor: "pointer",
            }}
            className="hover:opacity-90"
          >
            Ajánlatot kérek
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          style={{ color: "#BBFF63", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          style={{
            background: "rgba(10,10,10,0.98)",
            borderTop: "1px solid rgba(187,255,99,0.12)",
          }}
          className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#quote")}
            style={{
              background: "#BBFF63",
              color: "#0A0A0A",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              borderRadius: "6px",
              padding: "10px 20px",
              textAlign: "center",
              border: "none",
              cursor: "pointer",
            }}
          >
            Ajánlatot kérek
          </button>
        </div>
      )}
    </header>
  );
}
