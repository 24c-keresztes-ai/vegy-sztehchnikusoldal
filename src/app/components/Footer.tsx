import { FlaskConical, Linkedin, Facebook, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const quickLinks = [
  { label: "Főoldal", href: "#hero" },
  { label: "Bemutatkozás", href: "#about" },
  { label: "Szolgáltatások", href: "#services" },
  { label: "Referenciák", href: "#portfolio" },
  { label: "Kapcsolat", href: "#contact" },
];

const legalLinks = [
  { label: "Adatkezelési tájékoztató", href: "#" },
  { label: "Impresszum", href: "#" },
  { label: "Sütik kezelése", href: "#" },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionLink = (href: string) => {
    const isHome = location.pathname === "/";
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: href } });
    }
  };

  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical size={22} style={{ color: "#BBFF63" }} />
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontSize: "1.125rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Chem<span style={{ color: "#BBFF63" }}>Lab</span>
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                fontSize: "0.875rem",
                maxWidth: "320px",
                marginBottom: "1.5rem",
              }}
            >
              Vegyipari és laboratóriumi folyamatok fejlesztésével, ellenőrzésével és
              minőségbiztosításával foglalkozó szakember.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: <Linkedin size={16} />, href: "#" },
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.5)",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#BBFF63";
                    e.currentTarget.style.color = "#0A0A0A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <p
              style={{
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.875rem",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              Gyors linkek
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleSectionLink(link.href)}
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#BBFF63")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} ChemLab. Minden jog fenntartva.
          </p>
          <div
            className="px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(187,255,99,0.06)",
              border: "1px solid rgba(187,255,99,0.15)",
            }}
          >
          </div>
        </div>
      </div>
    </footer>
  );
}
