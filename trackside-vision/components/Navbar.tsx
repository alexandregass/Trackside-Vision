"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
type Language = "fr" | "en";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  const content = {
    fr: {
      home: "Accueil",
      engineering: "Ingénierie",
      simracing: "Simracing",
      projects: "Projets",
      contact: "Contact",
    },
    en: {
      home: "Home",
      engineering: "Engineering",
      simracing: "Simracing",
      projects: "Projects",
      contact: "Contact",
    },
  };

  const t = content[lang as "fr" | "en"];

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
      <div style={{ fontWeight: "bold" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/Images/logo-trackside.png"
            alt="Trackside Vision logo"
            width={180}
            height={180}
            priority
          />
        </Link>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">{t.home}</Link>
        <Link href="/engineering">{t.engineering}</Link>
        <Link href="/simracing">{t.simracing}</Link>
        <Link href="/projects">{t.projects}</Link>
        <Link href="/contact">{t.contact}</Link>
      </div>

      <LanguageSwitcher lang={lang} setLang={setLang} />
    </nav>
  );
}