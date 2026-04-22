"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo / Name */}
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        Trackside Vision
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>

        <Link href="/engineering">
          Engineering
        </Link>

        <Link href="/simracing">
          Simracing
        </Link>

        <Link href="/projects">
          Projects
        </Link>

        <Link href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}