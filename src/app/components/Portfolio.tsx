import { ArrowUpRight } from "lucide-react";

const img1 = "https://images.unsplash.com/photo-1764149635098-17adac6c2e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcXVhbGl0eSUyMGNvbnRyb2wlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MjQ0NzE2M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const img2 = "https://images.unsplash.com/photo-1758685848561-3658f433e6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGFuYWx5dGljYWwlMjBjaGVtaXN0cnl8ZW58MXx8fHwxNzcyNTM0ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const img3 = "https://images.unsplash.com/photo-1745921204896-c2011440a4e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBwcm9jZXNzJTIwb3B0aW1pemF0aW9uJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI1MzQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const img4 = "https://images.unsplash.com/photo-1700314040142-3389dd76fd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWIlMjBkb2N1bWVudGF0aW9uJTIwcmVwb3J0JTIwd3JpdGluZ3xlbnwxfHx8fDE3NzI1MzQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const projects = [
  {
    img: img1,
    category: "Élelmiszeripar",
    title: "Élelmiszeripari minőségellenőrzési projektek",
    desc: "Komplex élelmiszeripari termékek kémiai és mikrobiológiai vizsgálata, minőségi szabványok auditálása.",
    tags: ["Minőségellenőrzés", "Élelmiszer", "Audit"],
  },
  {
    img: img2,
    category: "Gyógyszeripar",
    title: "Gyógyszeripari analitikai vizsgálatok",
    desc: "GMP megfelelőségi vizsgálatok, hatóanyag-tartalom meghatározás, stabilitásvizsgálatok koordinálása.",
    tags: ["Analitika", "GMP", "Gyógyszer"],
  },
  {
    img: img3,
    category: "Vegyipar",
    title: "Vegyipari folyamatoptimalizálás",
    desc: "Gyártási folyamatok elemzése, hatékonysági és biztonsági fejlesztések bevezetése, KPI monitoring.",
    tags: ["Optimalizálás", "Vegyipar", "KPI"],
  },
  {
    img: img4,
    category: "Dokumentáció",
    title: "Laboratóriumi dokumentációs rendszerek kialakítása",
    desc: "Szabványos eljárásrendek (SOP), mérési protokollok és minőségügyi dokumentumok kidolgozása.",
    tags: ["SOP", "Dokumentáció", "Minőségügy"],
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
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

        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(187,255,99,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
              }
            >
              
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
