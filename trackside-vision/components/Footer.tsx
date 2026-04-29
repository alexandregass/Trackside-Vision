import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        color: "white",
        padding: "50px",
        marginTop: "60px",
        textAlign: "center",
        alignItems: "center",
        height: "75vh",
        backgroundImage: "url('/images/hero-footer2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >

      <h3>Trackside Vision</h3>

      <p>
        Race Engineering & Strategy
      </p>

      <p>
        France | International
      </p>

      <p>
        contact@tracksidevision.com
      </p>

      <p style={{ marginTop: "20px", fontSize: "14px", opacity: 0.7 }}>
        © {new Date().getFullYear()} Trackside Vision
      </p>

    </footer>
  );
}