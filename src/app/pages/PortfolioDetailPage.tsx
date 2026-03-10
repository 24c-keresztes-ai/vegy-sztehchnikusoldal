import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, User, Building2, Tag } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const item = portfolioData.find((p) => p.slug === slug);

  if (!item) {
    return (
      <div
        style={{ background: "#0A0A0A", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.125rem" }}>
          A referenciamunka nem található.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#BBFF63",
            color: "#0A0A0A",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.75rem 1.5rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Vissza a főoldalra
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, #0A0A0A 100%)",
          }}
        />
        {/* Back button */}
        <div className="absolute top-6 left-0 right-0 max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              fontSize: "0.875rem",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#BBFF63";
              e.currentTarget.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            <ArrowLeft size={15} />
            Vissza
          </button>
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-8">
          <span
            className="inline-block px-3 py-1 rounded-full mb-3"
            style={{
              background: "#BBFF63",
              color: "#0A0A0A",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
            className="text-2xl md:text-4xl"
          >
            {item.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Highlight stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {item.highlights.map((h, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.375rem",
                }}
              >
                {h.label}
              </p>
              <p
                style={{
                  color: "#BBFF63",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {h.value}
              </p>
            </div>
          ))}
        </div>

        {/* Meta info row */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            { icon: <Building2 size={14} />, text: item.client },
            { icon: <User size={14} />, text: item.role },
            { icon: <Clock size={14} />, text: item.duration },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: "#BBFF63" }}>{m.icon}</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem" }}>
                {m.text}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md"
              style={{
                background: "rgba(187,255,99,0.08)",
                color: "rgba(187,255,99,0.85)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "1px solid rgba(187,255,99,0.15)",
              }}
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {/* Full description */}
          <Section title="A projektről">
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
              {item.fullDesc}
            </p>
          </Section>

          {/* Challenge */}
          <Section title="A kihívás">
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
              {item.challenge}
            </p>
          </Section>

          {/* Solution */}
          <Section title="A megoldás">
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
              {item.solution}
            </p>
          </Section>

          {/* Results */}
          <Section title="Eredmények">
            <ul className="flex flex-col gap-3">
              {item.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    style={{ color: "#BBFF63", marginTop: "0.2rem", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.7,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            background: "rgba(187,255,99,0.05)",
            border: "1px solid rgba(187,255,99,0.15)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                fontSize: "1.125rem",
                marginBottom: "0.5rem",
              }}
            >
              Hasonló projektre van szüksége?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
              Vegye fel velem a kapcsolatot, és egyeztetünk az igényeiről.
            </p>
          </div>
          <Link
            to="/#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-xl whitespace-nowrap"
            style={{
              background: "#BBFF63",
              color: "#0A0A0A",
              fontWeight: 700,
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Kapcsolatfelvétel
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Other projects */}
        <div className="mt-16">
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: "#FFFFFF",
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
            }}
          >
            Egyéb referenciamunkák
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {portfolioData
              .filter((p) => p.slug !== item.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/referencia/${p.slug}`}
                  className="group flex gap-4 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(187,255,99,0.25)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
                  }
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <span
                      style={{
                        color: "#BBFF63",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {p.category}
                    </span>
                    <p
                      style={{
                        color: "#FFFFFF",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        lineHeight: 1.4,
                        marginTop: "0.25rem",
                      }}
                    >
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-1 h-5 rounded-full"
          style={{ background: "#BBFF63" }}
        />
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            fontSize: "1.0625rem",
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
