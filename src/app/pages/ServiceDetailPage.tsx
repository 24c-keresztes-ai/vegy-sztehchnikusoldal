import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, FlaskConical, ShieldCheck, Factory, FileText, Lightbulb } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { useState, type ReactNode } from "react";
import { QuoteForm } from "../components/QuoteForm";

const iconMap: Record<string, ReactNode> = {
  "analitikai-vizsgalatok": <FlaskConical size={32} />,
  "minoseg-ellenorzes": <ShieldCheck size={32} />,
  "vegyipari-folyamatok": <Factory size={32} />,
  "laboratoriumi-dokumentacio": <FileText size={32} />,
  "fejlesztesi-tamogatas": <Lightbulb size={32} />,
};

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = servicesData.find((s) => s.slug === slug);
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  if (!service) {
    return (
      <div
        style={{
          background: "#0A0A0A",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Inter', sans-serif",
          color: "#fff",
          gap: "1rem",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.5)" }}>A szolgáltatás nem található.</p>
        <Link to="/" style={{ color: "#BBFF63" }}>Vissza a főoldalra</Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(187,255,99,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(187,255,99,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(187,255,99,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              to="/"
              className="flex items-center gap-1.5"
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.8125rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#BBFF63")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <ArrowLeft size={14} /> Főoldal
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8125rem" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}>Szolgáltatások</span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8125rem" }}>/</span>
            <span style={{ color: "#BBFF63", fontSize: "0.8125rem" }}>{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "#BBFF63", color: "#0A0A0A" }}
              >
                {iconMap[service.slug]}
              </div>

              {/* Badge */}
              <div
                className="inline-block px-3 py-1 rounded-full mb-5"
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
                Szolgáltatás
              </div>

              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                }}
                className="text-4xl md:text-5xl"
              >
                {service.title}
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  fontSize: "1.0625rem",
                  marginBottom: "2rem",
                }}
              >
                {service.heroDesc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(187,255,99,0.08)",
                      border: "1px solid rgba(187,255,99,0.2)",
                      color: "#BBFF63",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  const el = document.querySelector("#quote");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2"
                style={{
                  background: "#BBFF63",
                  color: "#0A0A0A",
                  fontWeight: 700,
                  borderRadius: "8px",
                  padding: "14px 28px",
                  fontSize: "0.9375rem",
                  transition: "opacity 0.2s",
                }}
              >
                Ajánlatot kérek <ArrowRight size={18} />
              </button>
            </div>

            {/* Right: What is */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                }}
              >
                Mi ez a szolgáltatás?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.8,
                  fontSize: "0.9375rem",
                }}
              >
                {service.details.whatIs}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do + Benefits */}
      <section className="py-20" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* What we do */}
            <div>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
                className="text-2xl md:text-3xl"
              >
                Mit <span style={{ color: "#BBFF63" }}>végzek el?</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {service.details.whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      style={{ color: "#BBFF63", marginTop: "2px", flexShrink: 0 }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
                className="text-2xl md:text-3xl"
              >
                Miért éri meg <span style={{ color: "#BBFF63" }}>Önnek?</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {service.details.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      background: "rgba(187,255,99,0.04)",
                      border: "1px solid rgba(187,255,99,0.1)",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ background: "#BBFF63" }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
              className="text-2xl md:text-3xl"
            >
              A munkafolyamat <span style={{ color: "#BBFF63" }}>lépései</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "0.9375rem" }}>
              Átlátható és strukturált folyamat, amelyről minden lépésben tájékoztatom.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-6 left-[calc(10%-4px)] right-[calc(10%-4px)] h-px"
              style={{ background: "rgba(187,255,99,0.2)", zIndex: 0 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {service.details.process.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background: "#BBFF63",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      color: "#0A0A0A",
                      fontSize: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    {p.step}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        fontSize: "0.9375rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {p.title}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#0D0D0D" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
              className="text-2xl md:text-3xl"
            >
              Gyakori <span style={{ color: "#BBFF63" }}>kérdések</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {service.details.faq.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  border: openFaq === i
                    ? "1px solid rgba(187,255,99,0.25)"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: openFaq === i ? "rgba(187,255,99,0.04)" : "rgba(255,255,255,0.02)",
                  transition: "all 0.2s",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {item.q}
                  </span>
                  <span style={{ color: "#BBFF63", flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-5 pb-5"
                    style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.9375rem" }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <QuoteForm />

      {/* Other services navigation */}
      <section className="py-16" style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-center mb-8"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Egyéb szolgáltatások
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {servicesData
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/szolgaltatas/${s.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(187,255,99,0.25)";
                    e.currentTarget.style.background = "rgba(187,255,99,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <span style={{ color: "#BBFF63", flexShrink: 0 }}>
                    {iconMap[s.slug]}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8125rem", fontWeight: 500 }}>
                    {s.title}
                  </span>
                </Link>
              ))}
          </div>

          {/* Prev/Next navigation */}
          <div className="flex justify-between gap-4 mt-8">
            {prevService ? (
              <Link
                to={`/szolgaltatas/${prevService.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#BBFF63";
                  e.currentTarget.style.borderColor = "rgba(187,255,99,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <ArrowLeft size={16} /> {prevService.title}
              </Link>
            ) : <div />}

            {nextService ? (
              <Link
                to={`/szolgaltatas/${nextService.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#BBFF63";
                  e.currentTarget.style.borderColor = "rgba(187,255,99,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                {nextService.title} <ArrowRight size={16} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
}