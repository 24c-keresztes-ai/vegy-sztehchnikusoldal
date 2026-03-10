import { CheckCircle2 } from "lucide-react";

const aboutImg = "https://images.unsplash.com/photo-1768498950637-88d073faa491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwYW5hbHlzaXMlMjB0ZXN0aW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MjUzNDg4NHww&ixlib=rb-4.1.0&q=80&w=1080";

const traits = [
  "Precizitás és megbízhatóság minden feladatban",
  "Élelmiszer-, gyógyszer- és vegyipari tapasztalat",
  "Naprakész szakmai ismeretek és módszerek",
  "Rugalmas és gyors reagálás igényekre",
];

const stats = [
  { value: "10+", label: "Év tapasztalat" },
  { value: "50+", label: "Lezárt projekt" },
  { value: "100%", label: "Ügyfél-elégedettség" },
];

export function About() {
  return (
    <section
      id="about"
      style={{ background: "#0D0D0D", fontFamily: "'Inter', sans-serif" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(187,255,99,0.12)" }}
            >
              <img
                src={aboutImg}
                alt="Laboratóriumi elemzés"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>

            {/* Stats overlay */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 p-5 rounded-2xl"
              style={{
                background: "#BBFF63",
                boxShadow: "0 20px 60px rgba(187,255,99,0.25)",
              }}
            >
              <div className="flex gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        color: "#0A0A0A",
                        fontSize: "1.5rem",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </p>
                    <p
                      style={{
                        color: "rgba(0,0,0,0.6)",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        marginTop: "4px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Green line accent */}
            <div
              className="absolute -left-4 top-8 bottom-8 w-1 rounded-full"
              style={{ background: "linear-gradient(to bottom, #BBFF63, transparent)" }}
            />
          </div>

          {/* Content side */}
          <div>
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
              Bemutatkozás
            </div>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
              className="text-3xl md:text-4xl"
            >
              Szakmai tudás a{" "}
              <span style={{ color: "#BBFF63" }}>laborból az iparba</span>
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontSize: "1rem",
              }}
            >
              A vegyipari és laboratóriumi területen szerzett tapasztalattal támogatja a
              vállalkozások működését, legyen szó analitikai vizsgálatokról,
              minőségellenőrzésről vagy vegyipari folyamatok irányításáról. Jól ismeri a
              laboratóriumi műveleteket, a vegyi anyagok előállítási folyamatait és a
              minőségbiztosítási követelményeket.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontSize: "1rem",
              }}
            >
              Munkáját precizitás, megbízhatóság és szakmai igényesség jellemzi.
            </p>

            <ul className="flex flex-col gap-3">
              {traits.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "#BBFF63", marginTop: "2px", flexShrink: 0 }}
                  />
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem" }}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
