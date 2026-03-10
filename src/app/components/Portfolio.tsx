import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div
              className="inline-block px-3 py-1 rounded-full mb-6"
              style={{
                border: "1px solid rgba(187,255,99,0.3)",
                background: "rgba(187,255,99,0.06)",
                color: "#BBFF63",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Referenciák
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
              className="text-3xl md:text-4xl"
            >
              Kiemelt{" "}
              <span style={{ color: "#BBFF63" }}>referenciamunkáim</span>
            </h2>
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: "320px",
              fontSize: "0.9375rem",
            }}
          >
            Korábbi projektek három iparágban, amelyek bizonyítják a széles körű szakmai tapasztalatot.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.map((p) => (
            <Link
              key={p.slug}
              to={`/referencia/${p.slug}`}
              className="group rounded-2xl overflow-hidden block"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                transition: "border-color 0.25s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(187,255,99,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
              }
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)",
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: "#BBFF63",
                      color: "#0A0A0A",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.category}
                  </span>
                </div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "#BBFF63" }}
                >
                  <ArrowUpRight size={14} style={{ color: "#0A0A0A" }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontSize: "1rem",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {p.desc}
                </p>

                {/* Highlight stats row */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {p.highlights.map((h) => (
                    <div key={h.label} className="flex items-center gap-1.5">
                      <span
                        style={{
                          color: "rgba(255,255,255,0.35)",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {h.label}:
                      </span>
                      <span
                        style={{
                          color: "#BBFF63",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        {h.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md"
                        style={{
                          background: "rgba(187,255,99,0.08)",
                          color: "rgba(187,255,99,0.8)",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="flex items-center gap-1 shrink-0 ml-3"
                    style={{
                      color: "rgba(187,255,99,0.7)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Részletek
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
