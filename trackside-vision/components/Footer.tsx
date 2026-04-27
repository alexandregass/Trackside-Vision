import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "white",
        padding: "40px",
        marginTop: "60px",
        textAlign: "center",
      }}
    >
      <h3>Trackside Vision</h3>

      <p>
        Race Engineering & Performance
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
      <div style={{ fontWeight: "bold" }}>
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src="/Images/logo-trackside.png"
                  alt="Trackside Vision logo"
                  width={1131/6}
                  height={766/6}
                  priority
                />
              </Link>
        </div>

    </footer>
  );
}