import { ArrowRight, Star, FlaskConical, ShieldCheck, Microscope } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3QlMjB3b3JraW5nfGVufDF8fHx8MTc3MjUzNDg4NHww&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  { icon: <FlaskConical size={16} />, label: "Analitikai vizsgálatok" },
  { icon: <ShieldCheck size={16} />, label: "Minőségellenőrzés" },
  { icon: <Microscope size={16} />, label: "Vegyipari folyamatok" },
];

const handleScroll = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section
      id="hero"
      style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(187,255,99,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187,255,99,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(187,255,99,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          
          <div
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full"
            style={{
              border: "1px solid rgba(187,255,99,0.3)",
              background: "rgba(187,255,99,0.06)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#BBFF63" }}
            />
            <span
              style={{
                color: "#BBFF63",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Vegyipari & Laboratóriumi Szakértő
            </span>
          </div>

          
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
            className="text-4xl md:text-6xl lg:text-7xl"
          >
            Precíz megoldások{" "}
            <span style={{ color: "#BBFF63" }}>a laborból</span>
          </h1>

          
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: "600px",
              marginBottom: "2.5rem",
              fontSize: "1.0625rem",
            }}
          >
            Vegyipari és laboratóriumi folyamatok fejlesztésével, ellenőrzésével és
            minőségbiztosításával foglalkozó szakember, aki élelmiszer-, gyógyszer- és
            vegyipari laborokban szerzett tapasztalattal támogatja a megbízható működést.
          </p>

          
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => handleScroll("#quote")}
              style={{
                background: "#BBFF63",
                color: "#0A0A0A",
                fontWeight: 700,
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "0.9375rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "transform 0.2s, opacity 0.2s",
              }}
              className="hover:opacity-90 hover:scale-[1.02]"
            >
              Ajánlatot kérek <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleScroll("#services")}
              style={{
                background: "transparent",
                color: "#FFFFFF",
                fontWeight: 600,
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "0.9375rem",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              className="hover:border-white/50"
            >
              Szolgáltatások
            </button>
          </div>

          
          <div className="flex flex-wrap gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#BBFF63" }}>{h.icon}</span>
                {h.label}
              </div>
            ))}
          </div>
        </div>

        
        <div className="hidden lg:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2 w-64">
          {[
            { text: "Gyors, precíz és megbízható munka.", name: "K. Péter", role: "Gyártásvezető" },
            { text: "Kiváló szakmai tudás, pontos eredmények.", name: "T. Anna", role: "Minőségügyi vezető" },
          ].map((t, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    fill="#BBFF63"
                    stroke="none"
                  />
                ))}
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                }}
              >
                „{t.text}"
              </p>
              <div>
                <p style={{ color: "#BBFF63", fontSize: "0.75rem", fontWeight: 600 }}>
                  {t.name}
                </p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0A0A)",
        }}
      />
    </section>
  );
}
