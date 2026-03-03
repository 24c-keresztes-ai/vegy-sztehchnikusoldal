import { useState, useRef } from "react";
import { Send, Paperclip, CheckCircle2 } from "lucide-react";

const services = [
  "Analitikai vizsgálatok",
  "Minőségellenőrzés",
  "Vegyipari folyamatok felügyelete",
  "Laboratóriumi dokumentáció",
  "Fejlesztési és beruházási támogatás",
  "Egyéb",
];

export function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "#FFFFFF",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Inter', sans-serif",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    color: "rgba(255,255,255,0.65)",
    fontSize: "0.8125rem",
    fontWeight: 500,
    marginBottom: "6px",
    fontFamily: "'Inter', sans-serif",
  } as React.CSSProperties;

  return (
    <section
      id="quote"
      style={{ background: "#0D0D0D", fontFamily: "'Inter', sans-serif" }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side */}
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
              Ajánlatkérés
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
              className="text-3xl md:text-4xl"
            >
              Kérjen{" "}
              <span style={{ color: "#BBFF63" }}>személyre szabott</span>{" "}
              ajánlatot
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                fontSize: "0.9375rem",
              }}
            >
              Töltse ki az alábbi űrlapot, és hamarosan felveszem Önnel a kapcsolatot!
              Minden megkeresésre 24 órán belül válaszolok.
            </p>

            {/* Process steps */}
            <div className="flex flex-col gap-5">
              {[
                { num: "01", title: "Töltse ki az űrlapot", desc: "Adja meg adatait és írja le igényét" },
                { num: "02", title: "Egyeztetés", desc: "Részletesen megbeszéljük az elvárásokat" },
                { num: "03", title: "Ajánlat", desc: "Személyre szabott árajánlatot küldök" },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(187,255,99,0.1)",
                      border: "1px solid rgba(187,255,99,0.2)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        color: "#BBFF63",
                        fontSize: "0.75rem",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        marginBottom: "2px",
                      }}
                    >
                      {step.title}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8125rem" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle2 size={56} style={{ color: "#BBFF63" }} />
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontSize: "1.25rem",
                  }}
                >
                  Üzenet elküldve!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  Köszönöm megkeresését! Hamarosan felveszem Önnel a kapcsolatot.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    setFileName(null);
                  }}
                  style={{
                    marginTop: "8px",
                    background: "#BBFF63",
                    color: "#0A0A0A",
                    fontWeight: 600,
                    borderRadius: "8px",
                    padding: "10px 24px",
                    fontSize: "0.875rem",
                  }}
                >
                  Új üzenet
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Név *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Kovács Péter"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(187,255,99,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="pelda@email.hu"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(187,255,99,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Telefonszám</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+36 20 123 4567"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(187,255,99,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Szolgáltatás</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(187,255,99,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                    >
                      <option value="" style={{ background: "#1a1a1a" }}>
                        Válasszon...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#1a1a1a" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Üzenet / Igény leírása *</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Írja le részletesen igényét..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(187,255,99,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>

                {/* File upload */}
                <div>
                  <label style={labelStyle}>Fájl csatolása (opcionális)</label>
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="w-full flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px dashed rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.875rem",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(187,255,99,0.4)";
                      e.currentTarget.style.color = "#BBFF63";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    <Paperclip size={16} />
                    {fileName ? fileName : "Kattintson a fájl kiválasztásához"}
                  </button>
                  <input
                    ref={fileRef}
                    type="file"
                    className="hidden"
                    onChange={handleFile}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl py-3.5"
                  style={{
                    background: "#BBFF63",
                    color: "#0A0A0A",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                    e.currentTarget.style.transform = "scale(1.01)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Send size={16} /> Ajánlatot kérek
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
