import { FlaskConical, ShieldCheck, Factory, FileText, Lightbulb, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const services = [
  {
    icon: <FlaskConical size={24} />,
    title: "Analitikai vizsgálatok",
    desc: "Alapvető és speciális laboratóriumi mérések elvégzése, modern műszeres analitikai módszerekkel, pontos és megbízható eredmények biztosítása.",
    tags: ["Kémiai analízis", "Műszeres mérés", "Mintalaboratórium"],
    slug: "analitikai-vizsgalatok",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Minőségellenőrzés",
    desc: "Termékek kémiai összetételének vizsgálata, minőségi szabványok betartásának ellenőrzése élelmiszer-, gyógyszer- és vegyipari területen.",
    tags: ["ISO szabványok", "Kémiai összetétel", "Megfelelőség"],
    slug: "minoseg-ellenorzes",
  },
  {
    icon: <Factory size={24} />,
    title: "Vegyipari folyamatok felügyelete",
    desc: "Gyártási lépések szakszerű ellenőrzése és optimalizálása, technológiai folyamatok felügyelete a hatékonyság és biztonság növelése érdekében.",
    tags: ["Folyamatirányítás", "Optimalizálás", "Biztonság"],
    slug: "vegyipari-folyamatok",
  },
  {
    icon: <FileText size={24} />,
    title: "Laboratóriumi dokumentáció",
    desc: "Szakszerű laboratóriumi jegyzőkönyvek, vizsgálati riportok, eljárásrendek és minőségügyi dokumentumok elkészítése.",
    tags: ["Jegyzőkönyvek", "Riportok", "Eljárásrendek"],
    slug: "laboratoriumi-dokumentacio",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Fejlesztési és beruházási támogatás",
    desc: "Új technológiák bevezetésének szakmai támogatása, fejlesztési projektek koordinálása, beruházási döntések szakértői alátámasztása.",
    tags: ["Innováció", "Beruházás", "Technológia"],
    slug: "fejlesztesi-tamogatas",
  },
];

export function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
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
            Szolgáltatások
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
            Átfogó megoldások{" "}
            <span style={{ color: "#BBFF63" }}>minden laborterületen</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Széles szakmai tudással és tapasztalattal állok rendelkezésre, hogy vállalkozása
            laboratóriumi és vegyipari kihívásait megoldja.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <Link
              key={svc.title}
              to={`/szolgaltatas/${svc.slug}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{
                background: hoveredIdx === i
                  ? "rgba(187,255,99,0.06)"
                  : "rgba(255,255,255,0.03)",
                border: hoveredIdx === i
                  ? "1px solid rgba(187,255,99,0.25)"
                  : "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.25s ease",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: hoveredIdx === i
                    ? "#BBFF63"
                    : "rgba(187,255,99,0.1)",
                  color: hoveredIdx === i ? "#0A0A0A" : "#BBFF63",
                  transition: "all 0.25s ease",
                }}
              >
                {svc.icon}
              </div>

              
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                }}
              >
                {svc.title}
              </h3>

              
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {svc.desc}
              </p>

              
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              
              <div className="flex items-center gap-1" style={{ color: "#BBFF63" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 600 }}>Részletek megtekintése</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}

          
          <div
            className="p-6 rounded-2xl flex flex-col gap-4 items-start justify-between"
            style={{
              background: "#BBFF63",
              border: "1px solid #BBFF63",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  fontSize: "1.125rem",
                  lineHeight: 1.3,
                  marginBottom: "0.75rem",
                }}
              >
                Egyedi igény?
              </h3>
              <p
                style={{
                  color: "rgba(0,0,0,0.65)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                Ha speciális igénye van, lépjen kapcsolatba velem, és személyre szabott megoldást kínálok.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector("#quote");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg"
              style={{
                background: "#0A0A0A",
                color: "#BBFF63",
                fontWeight: 600,
                fontSize: "0.875rem",
                transition: "opacity 0.2s",
                border: "none",
                cursor: "pointer",
              }}
            >
              Ajánlatot kérek <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
