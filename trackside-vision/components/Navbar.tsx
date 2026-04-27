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
      className="navbar"
      /*style={{
        padding: "20px 40px",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}*/
    >
      <div style={{ fontWeight: "bold" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/Images/logo-trackside.png"
            alt="Trackside Vision logo"
            width={113.1}
            height={90}
            priority
          />
        </Link>
      </div>

      <div className="nav-links">
        <a href="/">
          {content[lang].home}
        </a>

        <a href="/engineering">
          {content[lang].engineering}
        </a>

        <a href="/simracing">
          {content[lang].simracing}
        </a>

        <a href="/projects">
          {content[lang].projects}
        </a>

        <a href="/contact">
          {content[lang].contact}
        </a>
      </div>

      <LanguageSwitcher lang={lang} setLang={setLang} />
    </nav>

  );
}