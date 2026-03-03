import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-xl mx-auto mb-16">
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
            Kapcsolat
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
            Vegye fel{" "}
            <span style={{ color: "#BBFF63" }}>a kapcsolatot</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Szívesen állok rendelkezésre kérdések és konzultáció esetén.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Phone size={20} />,
                label: "Telefon",
                value: "+36 30 123 4567",
                link: "tel:+36301234567",
              },
              {
                icon: <Mail size={20} />,
                label: "E-mail",
                value: "info@chemlab.hu",
                link: "mailto:info@chemlab.hu",
              },
              {
                icon: <MapPin size={20} />,
                label: "Telephely",
                value: "1234 Budapest, Vegyész utca 12.",
                link: "#",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="flex items-center gap-4 p-5 rounded-2xl group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
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
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(187,255,99,0.1)",
                    color: "#BBFF63",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      marginBottom: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ color: "#FFFFFF", fontSize: "0.9375rem", fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                }}
              >
                Közösségi média
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
                  { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
                  { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(187,255,99,0.1)",
                      color: "#BBFF63",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#BBFF63";
                      e.currentTarget.style.color = "#0A0A0A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(187,255,99,0.1)";
                      e.currentTarget.style.color = "#BBFF63";
                    }}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: "360px",
            }}
          >
            <iframe
              title="Térkép"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85838.00000000001!2d19.003776999999997!3d47.49801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1180!2sBudapest!5e0!3m2!1shu!2shu!4v1690000000000!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", filter: "invert(90%) hue-rotate(170deg) brightness(0.85) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
