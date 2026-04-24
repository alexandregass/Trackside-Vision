"use client";
import { useLanguage } from "./LanguageContext";
type Language = "fr" | "en";

type Props = {
  lang: Language;
  setLang: (lang: Language) => void;
};

export default function LanguageSwitcher({ lang, setLang }: Props) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={() => setLang("fr")}
        style={{
          background: lang === "fr" ? "#fff" : "#333",
          color: lang === "fr" ? "#000" : "#fff",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
        }}
      >
        FR
      </button>

      <button
        onClick={() => setLang("en")}
        style={{
          background: lang === "en" ? "#fff" : "#333",
          color: lang === "en" ? "#000" : "#fff",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
        }}
      >
        EN
      </button>
    </div>
  );
}