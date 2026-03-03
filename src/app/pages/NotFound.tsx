import { Link } from "react-router";
import { ArrowLeft, FlaskConical } from "lucide-react";

export function NotFound() {
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
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <FlaskConical size={48} style={{ color: "#BBFF63", marginBottom: "1.5rem" }} />
      <h1
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          color: "#FFFFFF",
          fontSize: "5rem",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}
      >
        404
      </h1>
      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          marginBottom: "2rem",
          fontSize: "1rem",
        }}
      >
        Az oldal nem található.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 rounded-xl"
        style={{
          background: "#BBFF63",
          color: "#0A0A0A",
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "0.9375rem",
        }}
      >
        <ArrowLeft size={18} /> Vissza a főoldalra
      </Link>
    </div>
  );
}
