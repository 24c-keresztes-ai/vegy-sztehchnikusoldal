import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Nagyon alapos és pontos munkavégzés. A laboratóriumi dokumentáció elkészítése profin, határidőre megtörtént.",
    name: "Kovács Péter",
    role: "Gyártásvezető",
    company: "ÉlelmiszerTech Kft.",
    rating: 5,
  },
  {
    text: "Megbízható szakember, gyors kommunikációval. A minőségellenőrzési projekt gördülékenyen zajlott.",
    name: "Takács Anna",
    role: "Minőségügyi vezető",
    company: "PharmaLab Zrt.",
    rating: 5,
  },
  {
    text: "Kiemelkedő szakmai hozzáértés. Az analitikai vizsgálatok eredményei pontosak és részletesek voltak.",
    name: "Nagy Gábor",
    role: "Fejlesztési igazgató",
    company: "VegyiPro Kft.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "#0D0D0D",
        fontFamily: "'Inter', sans-serif",
      }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            Ügyfélvélemények
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
            className="text-3xl md:text-4xl"
          >
            Mit mondanak{" "}
            <span style={{ color: "#BBFF63" }}>megbízóim?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            A megbízható és precíz munkavégzés mindennapi elkötelezettségem.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                style={{ color: "#BBFF63", opacity: 0.6 }}
              />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#BBFF63" stroke="none" />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  fontSize: "0.9375rem",
                  flexGrow: 1,
                }}
              >
                „{t.text}"
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "#BBFF63",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    fontSize: "0.875rem",
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    style={{
                      color: "#FFFFFF",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div
          className="mt-16 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            background: "rgba(187,255,99,0.04)",
            border: "1px solid rgba(187,255,99,0.12)",
          }}
        >
          {[
            { value: "10+", label: "Év tapasztalat" },
            { value: "50+", label: "Lezárt projekt" },
            { value: "3", label: "Iparág" },
            { value: "100%", label: "Pontosság" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  color: "#BBFF63",
                  fontSize: "2rem",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.875rem",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
